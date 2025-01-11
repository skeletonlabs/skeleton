import { builders, generateCode, parseModule, type Proxified, type ProxifiedModule, type ProxifiedValue } from 'magicast';
import { readFile, writeFile } from 'node:fs/promises';
import { getDefaultExportOptions } from 'magicast/helpers';
import { THEMES } from '../../../../internal/mappers/themes';

function transformContent(mod: ProxifiedModule) {
	if (mod.imports['skeleton']) {
		delete mod.imports['skeleton'];
		mod.imports.$append({
			from: '@skeletonlabs/skeleton/plugin',
			imported: 'skeleton'
		});
		mod.imports.$append({
			from: '@skeletonlabs/skeleton/plugin',
			imported: 'contentPath'
		});
	}
	const config = getDefaultExportOptions(mod);
	if (!config.content) {
		return;
	}
	const index = config.content.findIndex((item: ProxifiedValue) => {
		return item.$type === 'function-call' && item.$callee === 'join';
	});
	if (index === -1) {
		return;
	}
	config.content.splice(index, 1, builders.functionCall('contentPath', builders.raw('import.meta.url'), builders.raw(`\'svelte\'`)));
}

function transformSkeletonConfig(mod: ProxifiedModule) {
	const config = getDefaultExportOptions(mod);
	if (!config.plugins) {
		return;
	}
	const plugin = config.plugins.find((plugin: ProxifiedValue) => {
		return plugin.$type === 'function-call' && plugin.$callee === 'skeleton';
	});
	if (!plugin) {
		return;
	}
	const options = plugin.$args[0];
	if (!(options && options.themes && options.themes.$type === 'object')) {
		return;
	}
	if (options.themes.custom) {
		for (const custom of options.themes.custom) {
			if (custom.$type !== 'identifier') {
				continue;
			}
			options.themes.$ast.leadingComments ||= [];
			options.themes.$ast.leadingComments.push({
				type: 'CommentLine',
				value: custom.$name
			});
		}
	}
	if (options.themes.preset) {
		mod.imports.$append({
			from: '@skeletonlabs/skeleton/themes',
			imported: '*',
			local: 'themes'
		});
		const themes: Proxified[] = [];
		for (const preset of options.themes.preset) {
			const name = typeof preset === 'string' ? preset : preset.name;
			const theme = THEMES.find((t) => t.v2 === name);
			if (theme) {
				themes.push(builders.raw(`themes.${theme.v3}`));
			}
		}
		options.themes = themes;
	} else {
		options.themes = [];
	}
}

function transformTailwindConfigContent(code: string) {
	const mod = parseModule(code);
	transformContent(mod);
	transformSkeletonConfig(mod);
	return generateCode(mod).code;
}

async function transformTailwindConfig(path: string) {
	const code = await readFile(path, 'utf-8');
	const transformed = transformTailwindConfigContent(code);
	await writeFile(path, transformed);
}

export { transformTailwindConfigContent, transformTailwindConfig };
