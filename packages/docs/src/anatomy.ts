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
