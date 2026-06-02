<script lang="ts" module>
	export interface Props {
		content: string;
	}
</script>

<script lang="ts">
	import * as components from './overrides/index';
	import { ComarkRenderer } from '@comark/svelte';
	import { parse } from '@comark/svelte/parse';
	import githubDark from '@shikijs/themes/github-dark';
	import githubLight from '@shikijs/themes/github-light';
	import alert from 'comark/plugins/alert';
	import emoji from 'comark/plugins/emoji';
	import highlight from 'comark/plugins/highlight';
	import taskList from 'comark/plugins/task-list';

	const { content }: Props = $props();

	const tree = $derived(
		await parse(content, {
			plugins: [
				alert(),
				taskList(),
				emoji(),
				highlight({
					themes: { light: githubLight, dark: githubDark },
					registerDefaultThemes: false,
					preStyles: true,
				}),
			],
		}),
	);
</script>

<ComarkRenderer {tree} {components} class="space-y-4" />
