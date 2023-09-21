#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import fs from 'fs';
import ts from 'typescript';

// Adding JSDoc comments to emitted .d.ts files from the package process
// First read in JSDocced props from the svelte components at src/lib/components/ and src/lib/utilities/ into a mapping object
// There is some brittleness in the assumption of how many spaces are at the beginning of a line on the emitted files
// Also the definition files from svelte-package aren't exactly always clean either

let filesToProps = {};

function extractScriptsFromComponents(dir) {
	const leadingCharsToStrip = 8; //strip the src/lib/ from the filenames when adding it to the filesToProps mapping
	const list = fs.readdirSync(dir);
	list.forEach((file) => {
		file = join(dir, file);
		const stat = fs.statSync(file);
		if (stat && stat.isDirectory()) {
			extractScriptsFromComponents(file);
		} else {
			if (file.endsWith('svelte')) {
				const src = readFileSync(file).toString();
				const scripts = extractScriptBlocks(src);
				// the first param is the filename, it is not for reading from the file, but rather for when ts reports issues
				// it is also not creating an actual source file, but rather an AST.
				const name = file.slice(leadingCharsToStrip);
				filesToProps[name] = { scriptNodes: [], props: {} };
				for (const script of scripts) {
					const node = ts.createSourceFile(name, script, ts.ScriptTarget.Latest);
					filesToProps[name].scriptNodes.push(node);
				}

			}
		}
	});
}
function extractScriptBlocks(content) {
	let scriptBlocks = [];
	let startString = "<script";
	let endString = "</script>";
	let curPos = 0;
	while (curPos != -1) {
		curPos = content.indexOf(startString, curPos);
		if (curPos == -1) {
			break;
		}
		// ignore attributes in script tag
		curPos = content.indexOf(">", curPos) + 1;
		let endPos = content.indexOf(endString, curPos);
		if (endPos == -1) {
			console.log("Error: missing closing tag for script block");
		}
		scriptBlocks.push(content.substring(curPos, endPos));
		curPos = endPos;
	}
	return scriptBlocks;
}

function extractJSDocBlocks() {
	for (const file in filesToProps) {
		for (const node of filesToProps[file].scriptNodes) {
			_extractJSDocBlocks(file, node);
		}
	}
}

// Recursive function for traversing node hierarchy to get JSDocs blocks, different node types have the information we want in different places
function _extractJSDocBlocks(file, tsNode) {
	ts.forEachChild(tsNode, (node) => {
		if (node?.jsDoc) {
			// console.log(srcFile);
			const jsDoc = node.jsDoc[node.jsDoc.length - 1];
			const declaration = node.declarationList?.declarations[0];
			switch (node.kind) {
				case ts.SyntaxKind.FirstStatement:
					if (declaration.type?.typeName?.escapedText == 'CssClasses') {
						filesToProps[file].props[declaration.name.escapedText] = { comment: jsDoc.comment, type: 'css' };
					} else {
						filesToProps[file].props[declaration.name.escapedText] = { comment: jsDoc.comment, type: 'prop' };
					}
					break;
				case ts.SyntaxKind.ExpressionStatement:
					filesToProps[file].props[node.expression.arguments[0].text] = { comment: jsDoc.tags[jsDoc.tags.length - 1].comment ?? '', type: 'event' };
					break;
			}
		}
		_extractJSDocBlocks(file, node);
	});
}

function writeJSDocsToDefinitionFiles() {
	// these two will probably bite us in the ass later on..  but the maximum damage will be no descriptions in intellisense, can live with that.
	const propsBegin = '[x: string]: any;';
	const eventsBegin = 'events: {';
	const blockEnd = '}';
	// we only insert JSDocs for properties that had a JSDoc block declared for them in the component file. Some props that might be defined
	// in the definition file should not get a description as they are stores/context info derived from a parent component.

	for (let file in filesToProps) {
		let annotatedDts = [];
		const src = readFileSync('dist/' + file + '.d.ts')
			.toString()
			.split('\n');
		let inPropsSection = false;
		for (let line of src) {
			if (line.indexOf(blockEnd) != -1) {
				annotatedDts.push(line);
				inPropsSection = false;
				continue;
			}
			if (inPropsSection) {
				//there are a few that are not declared as optional, so we test for ? or :
				let endPos = line.indexOf('?');
				if (endPos == -1) {
					endPos = line.indexOf(':');
				}
				//Lookup the prop found in the definition file on our props mapping object
				//the 8 comes from the amount of spaces before the property begins, this is static and more efficient this way.
				const jsdoc = filesToProps[file].props[line.slice(8, endPos)]?.comment;
				if (jsdoc != undefined) {
					annotatedDts.push('        /** ' + jsdoc + '*/');
				}
			}
			if (line.indexOf(propsBegin) != -1) {
				inPropsSection = true;
			}
			if (line.indexOf(eventsBegin) != -1) {
				inPropsSection = true;
			}
			annotatedDts.push(line);
		}
		writeFileSync('dist/' + file + '.d.ts', annotatedDts.join('\n'));
	}
}

function generateKeyWordsFromProps() {
	let propSet = new Set();
	for (let file in filesToProps) {
		for (let prop in filesToProps[file].props) {
			if (filesToProps[file].props[prop].type == 'css') {
				propSet.add(prop);
			}
		}
	}
	let finalProps = Array.from(propSet).sort();
	finalProps.unshift('class');
	writeFileSync(
		'scripts/tw-settings.json',
		JSON.stringify({ 'prettier.documentSelectors': ['**/*.svelte'], 'tailwindCSS.classAttributes': [...finalProps] }, null, '\t')
	);
}

extractScriptsFromComponents('src/lib/components');
extractScriptsFromComponents('src/lib/utilities');
extractJSDocBlocks();
writeJSDocsToDefinitionFiles();
generateKeyWordsFromProps();
