import { parseSourceFile } from '../../../../../utility/ts-morph/parse-source-file';

function transformModule(code: string) {
	const file = parseSourceFile(code);

	return {
		code: file.getFullText(),
	};
}

export { transformModule };
