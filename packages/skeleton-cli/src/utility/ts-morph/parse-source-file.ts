import { Project } from 'ts-morph';

function parseSourceFile(code: string) {
	const project = new Project({
		useInMemoryFileSystem: true
	});
	return project.createSourceFile('virtual.ts', code);
}

export { parseSourceFile };
