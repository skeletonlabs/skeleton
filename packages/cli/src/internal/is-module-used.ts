import { SourceFile, SyntaxKind } from 'ts-morph';

function isModuleUsed(sourceFile: SourceFile, moduleName: string): boolean {
	return sourceFile
		.getDescendants()
		.some(
			(node) =>
				node.isKind(SyntaxKind.Identifier) &&
				node.getText() === moduleName &&
				(node.getParent()?.getKind() === SyntaxKind.PropertyAccessExpression || node.getParent()?.getKind() === SyntaxKind.CallExpression)
		);
}

export { isModuleUsed };
