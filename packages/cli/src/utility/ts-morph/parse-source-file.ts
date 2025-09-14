import { nanoid } from 'nanoid';
import { Project } from 'ts-morph';

const project = new Project({
	useInMemoryFileSystem: true,
	skipAddingFilesFromTsConfig: true,
	skipFileDependencyResolution: true,
	skipLoadingLibFiles: true,
});

function parseSourceFile(code: string) {
	return project.createSourceFile(`${nanoid()}.ts`, code);
}

export { parseSourceFile };
