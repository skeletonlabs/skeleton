import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { SyntaxKind, Node } from 'ts-morph';
import { parseInMemory } from './parser.ts';
import { kebabToPascal } from './casing.ts';

const ROOT_PARTS = ['Context', 'Provider'];

export function getPartOrder(packageDir: string, componentName: string): string[] {
	const content = readFileSync(join(packageDir, 'src', 'components', componentName, 'modules', 'anatomy.ts'), 'utf-8');
	const sourceFile = parseInMemory('anatomy.ts', content);
	const order = [`${kebabToPascal(componentName)}Root`];
	const anatomy = sourceFile.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

	if (anatomy) {
		order.push(
			...anatomy
				.getProperties()
				.filter(Node.isPropertyAssignment)
				.map((p) => {
					const name = p.getName();
					return ROOT_PARTS.includes(name) ? `${kebabToPascal(componentName)}Root${name}` : `${kebabToPascal(componentName)}${name}`;
				}),
		);
	}

	return order;
}

export function loadClassValues(commonPackageDir: string, componentName: string): Map<string, string> {
	const result = new Map<string, string>();
	const filePath = join(commonPackageDir, 'src', 'classes', `${componentName}.ts`);

	let content: string;
	try {
		content = readFileSync(filePath, 'utf-8');
	} catch {
		return result;
	}

	const sourceFile = parseInMemory(`classes-${componentName}.ts`, content);
	const variableDeclaration = sourceFile.getVariableDeclarations().find((d) => d.getName().startsWith('classes'));
	if (!variableDeclaration) return result;

	const initializerCallExpression = variableDeclaration.getInitializerIfKind(SyntaxKind.CallExpression);
	if (!initializerCallExpression) return result;

	const argument = initializerCallExpression.getArguments()[0];
	if (!argument || !argument.isKind(SyntaxKind.ObjectLiteralExpression)) return result;

	for (const prop of argument.getProperties()) {
		const assignment = prop.asKind(SyntaxKind.PropertyAssignment);
		if (!assignment) continue;

		const initializer = assignment.getInitializerOrThrow();
		let value: string | undefined;

		if (initializer.isKind(SyntaxKind.StringLiteral)) {
			value = initializer.getLiteralText();
		} else if (initializer.isKind(SyntaxKind.ArrayLiteralExpression)) {
			value = initializer
				.getElements()
				.map((el) => el.getText().replace(/['"`]/g, ''))
				.join(' ');
		}

		if (value !== undefined) {
			result.set(assignment.getName(), value);
		}
	}

	return result;
}
