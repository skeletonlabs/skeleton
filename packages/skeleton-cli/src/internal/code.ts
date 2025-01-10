import { Project, SourceFile } from 'ts-morph';

function parseCode(code: string) {
	const project = new Project({
		useInMemoryFileSystem: true
	});
	return project.createSourceFile('module.ts', code);
}

function generateCode(module: SourceFile) {
	return module.getText();
}

export { parseCode, generateCode };
