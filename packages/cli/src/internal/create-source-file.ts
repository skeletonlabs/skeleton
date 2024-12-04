import { Project, ts } from 'ts-morph';

function createSourceFile(code: string) {
	const project = new Project({
		useInMemoryFileSystem: true
	});
	return project.createSourceFile('virtual.ts', code, { scriptKind: ts.ScriptKind.TS });
}

export { createSourceFile };
