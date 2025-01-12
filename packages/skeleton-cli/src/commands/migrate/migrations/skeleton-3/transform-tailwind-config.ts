import { builders, generateCode, parseModule, type ProxifiedModule, type ProxifiedValue } from 'magicast';
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
	const presetThemes = [];
	if (options.themes.preset) {
		mod.imports.$append({
			from: '@skeletonlabs/skeleton/themes',
			imported: '*',
			local: 'themes'
		});
		for (const preset of options.themes.preset) {
			const name = typeof preset === 'string' ? preset : preset.name;
			const theme = THEMES.find((t) => t.v2 === name);
			if (theme) {
				presetThemes.push(builders.raw(`themes.${theme.v3}`));
			}
		}
	}
	const customThemes = [];
	if (options.themes.custom) {
		for (const custom of options.themes.custom) {
			if (custom.$type !== 'identifier') {
				continue;
			}
			// customThemes.push(builders.raw(`/** ${custom.$name} */`));
		}
	}
	options.themes = [...presetThemes, ...customThemes];
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
