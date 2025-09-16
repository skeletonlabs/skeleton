import type { SourceFile } from 'ts-morph';

function addNamedImport(file: SourceFile, specifier: string, name: string) {
	const existingImportDeclaration = file.getImportDeclaration((importDeclaration) => {
		const moduleSpecifier = importDeclaration.getModuleSpecifier().getLiteralText();
		return moduleSpecifier === specifier;
	});
	if (existingImportDeclaration) {
		if (!existingImportDeclaration.getNamedImports().some((namedImport) => namedImport.getName() === name)) {
			existingImportDeclaration.addNamedImport(name);
		}
	} else {
		file.addImportDeclaration({
			moduleSpecifier: specifier,
			namedImports: [name],
		});
	}
}

export { addNamedImport };
