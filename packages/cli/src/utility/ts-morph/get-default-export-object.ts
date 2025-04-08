import { SourceFile, SyntaxKind } from 'ts-morph';

function getDefaultExportObject(sourceFile: SourceFile) {
	const exportAssignment = sourceFile.getFirstDescendantByKind(SyntaxKind.ExportAssignment);
	if (!exportAssignment) {
		return null;
	}
	const exportExpression = exportAssignment.getExpression();
	const objectLiteralExpression = exportAssignment.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
	if (objectLiteralExpression) {
		return objectLiteralExpression;
	}
	if (exportExpression.isKind(SyntaxKind.Identifier)) {
		const definition = exportExpression.getDefinitionNodes()[0];
		if (definition.isKind(SyntaxKind.VariableDeclaration)) {
			const objectLiteralExpression = definition.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);
			if (objectLiteralExpression) {
				return objectLiteralExpression;
			}
		}
	}
	return null;
}

export { getDefaultExportObject };
