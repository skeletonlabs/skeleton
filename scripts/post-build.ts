#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import fs from 'fs';
import ts from 'typescript';

// Adding JSDoc comments to emitted .d.ts files from the package process
// First read in JSDocced props from the svelte components at src/lib/components/ and src/lib/utilities/ into a mapping object
// There is some brittleness in the assumption of how many spaces are at the beginning of a line on the emitted files
// Using the typescript api information https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API

interface FileToProps {
	[key: string]: {
		node: ts.SourceFile;
		props?: {
			[key: string]: {
				comment: string;
				type: string;
			};
		};
	};
}

const filesToProps: FileToProps = {};

function extractScriptsFromComponents(dir: string): void {
	const leadingCharsToStrip = 8;
	const list = fs.readdirSync(dir);
	list.forEach((file) => {
		file = dir + '/' + file;
		const stat = fs.statSync(file);
		if (stat && stat.isDirectory()) {
			extractScriptsFromComponents(file);
		} else {
			if (file.endsWith('svelte')) {
				const src = readFileSync(file).toString();
				const begin = src.indexOf('"ts">\n') + 1;
				const script = src.substring(begin, src.indexOf('</script>', begin));
				const node = ts.createSourceFile(file.slice(leadingCharsToStrip), script, ts.ScriptTarget.ESNext);
				filesToProps[file.slice(leadingCharsToStrip)] = { node: node };
			}
		}
	});
}

function extractJSDocBlocks(): void {
	for (const file in filesToProps) {
		const propsObj = {};
		_extractJSDocBlocks(filesToProps[file].node, propsObj);
		filesToProps[file].props = propsObj;
	}
}

//Rescursive function for traversing node hierarchy to get JSDocs blocks, different node types have the information we want in different places
function _extractJSDocBlocks(srcFile: ts.Node, propsObj: { [key: string]: { comment: string; type: string } }): void {
	ts.forEachChild(srcFile, (node) => {
		if (node?.jsDoc) {
			const jsDoc = node.jsDoc[node.jsDoc.length - 1];
			const declaration = node.declarationList?.declarations[0];
			switch (node.kind) {
				case ts.SyntaxKind.FirstStatement:
					if (declaration.type?.typeName?.escapedText == 'CssClasses') {
						propsObj[declaration.name.escapedText] = { comment: jsDoc.comment, type: 'css' };
					} else {
						propsObj[declaration.name.escapedText] = { comment: jsDoc.comment, type: 'prop' };
					}
					break;
				case ts.SyntaxKind.ExpressionStatement:
					propsObj[node.expression.arguments[0].text] = { comment: jsDoc.tags[jsDoc.tags.length - 1].comment ?? '', type: 'event' };
					break;
			}
		}
		_extractJSDocBlocks(node, propsObj);
	});
}

function writeJSDocsToDefinitionFiles(): void {
	const propsBegin = 'props: {';
	const eventsBegin = 'events: {';
	const blockEnd = '}';

	for (const file in filesToProps) {
		const annotatedDts: string[] = [];
		const src = readFileSync('dist/' + file + '.d.ts')
			.toString()
			.split('\n');
		let inPropsSection = false;
		for (const line of src) {
			if (line.indexOf(blockEnd) != -1) {
				annotatedDts.push(line);
				inPropsSection = false;
				continue;
			}
			if (inPropsSection) {
				let endPos = line.indexOf('?');
				if (endPos == -1) {
					endPos = line.indexOf(':');
				}
				const jsdoc = filesToProps[file].props[line.slice(8, endPos)]?.comment;
				if (jsdoc != undefined) {
					annotatedDts.push('        /** ' + jsdoc + ' */');
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
	const propSet = new Set();
	for (const file in filesToProps) {
		for (const prop in filesToProps[file].props) {
			if (filesToProps[file].props[prop].type == 'css') {
				propSet.add(prop);
			}
		}
	}
	const finalProps = Array.from(propSet).sort();
	finalProps.unshift('class');
	writeFileSync('scripts/tw-settings.json', JSON.stringify({ "prettier.documentSelectors": ["**/*.svelte"], 'tailwindCSS.classAttributes': [...finalProps] }, null, '\t'));
}

extractScriptsFromComponents('src/lib/components');
extractScriptsFromComponents('src/lib/utilities');
extractJSDocBlocks();
writeJSDocsToDefinitionFiles();
generateKeyWordsFromProps();
