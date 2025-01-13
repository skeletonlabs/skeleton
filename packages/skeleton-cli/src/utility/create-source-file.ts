import { Project } from 'ts-morph';

function createSourceFile(code: string) {
	const project = new Project({
		useInMemoryFileSystem: true
	});
	return project.createSourceFile('virtual.ts', code);
}

export { createSourceFile };
