import { type CompilerOptions, SymbolFlags, displayPartsToString, isInterfaceDeclaration } from 'typescript';
import type { Interface } from './types.js';
import { parse, walk } from './utility.js';

export interface Options {
	/**
	 * RegExp to filter out type names
	 */
	matcher?: RegExp;
	/**
	 * Provide compilerOptions that will be merged with our internal compilerOptions
	 */
	compilerOptions?: CompilerOptions;
}

/**
 * Get the TypeScript interfaces from a given file
 * @param path
 * @param options
 */
export function getInterfaces(path: string, options: Options = {}): Interface[] {
	const program = parse(path, options.compilerOptions);
	const interfaces: Interface[] = [];
	walk(program.root, (node) => {
		if (!isInterfaceDeclaration(node)) {
			return;
		}
		const name = node.name.text;
		if (options.matcher && !options.matcher.test(name)) {
			return;
		}
		const typeChecker = program.getTypeChecker();
		const nodeType = typeChecker.getTypeAtLocation(node);
		const properties = nodeType.getProperties().map((property) => {
			const name = property.name;
			const type = typeChecker.typeToString(typeChecker.getTypeOfSymbolAtLocation(property, node));
			const required = !(property.flags & SymbolFlags.Optional);
			const text = displayPartsToString(property.getDocumentationComment(typeChecker)) || null;
			const tags = property.getJsDocTags(typeChecker).map((tag) => {
				const name = tag.name;
				const value = displayPartsToString(tag.text);
				return {
					name: name,
					value: value
				};
			});
			return {
				name: name,
				type: type,
				required: required,
				documentation: {
					text: text,
					tags: tags
				}
			};
		});
		interfaces.push({
			name: name,
			properties: properties
		});
	});
	return interfaces;
}
