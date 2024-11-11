import { ModuleDetectionKind, ModuleKind, ScriptTarget } from 'typescript';

export const defaultCompilerOptions = {
	strict: true,
	module: ModuleKind.NodeNext,
	target: ScriptTarget.ESNext,
	allowJs: true,
	skipDefaultLibCheck: true,
	skipLibCheck: true,
	moduleDetection: ModuleDetectionKind.Force
};
