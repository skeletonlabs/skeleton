import type { ManualStep } from '../utility/manual-steps.js';
import { transformClasses } from './transform-classes.js';
import { log } from '@clack/prompts';
import { nanoid } from 'nanoid';
import { Node, Project } from 'ts-morph';

// An in-memory `.tsx` project so JSX is parsed (plain `.ts` treats `<div>` as a type cast)
const project = new Project({
	useInMemoryFileSystem: true,
	skipAddingFilesFromTsConfig: true,
	skipFileDependencyResolution: true,
	skipLoadingLibFiles: true,
});

function transformLiteral(node: Node, manual: ManualStep[]) {
	if (!Node.isStringLiteral(node) && !Node.isNoSubstitutionTemplateLiteral(node)) {
		return;
	}
	const value = node.getLiteralValue();
	const result = transformClasses(value);
	manual.push(...result.meta.manual);
	if (result.code !== value) {
		node.setLiteralValue(result.code);
	}
}

function transformJsx(code: string) {
	const manual: ManualStep[] = [];
	try {
		const file = project.createSourceFile(`${nanoid()}.tsx`, code);
		file.forEachDescendant((node) => {
			// Only transform `className`/`class` attributes, never arbitrary string literals
			if (!Node.isJsxAttribute(node) || !['className', 'class'].includes(node.getNameNode().getText())) {
				return;
			}
			const initializer = node.getInitializer();
			if (!initializer) {
				return;
			}
			if (Node.isStringLiteral(initializer)) {
				// className="..."
				transformLiteral(initializer, manual);
			} else if (Node.isJsxExpression(initializer)) {
				// className={...} — cover clsx('...'), ternaries, template literals, etc.
				initializer.forEachDescendant((node) => transformLiteral(node, manual));
			}
		});
		return {
			code: file.getFullText(),
			meta: { manual },
		};
	} catch (error) {
		log.warn(`Failed to parse JSX, skipping transformation: ${error instanceof Error ? error.message : 'Unknown error'}`);
		return {
			code: code,
			meta: { manual },
		};
	}
}

export { transformJsx };
