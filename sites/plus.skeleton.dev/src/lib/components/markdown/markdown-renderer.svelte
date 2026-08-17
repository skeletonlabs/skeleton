<script lang="ts" module>
	import { createMarkdownParser } from '@comark/svelte/parse';

	export interface Props {
		content: string;
	}

	const parse = createMarkdownParser({
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
	});
</script>

<script lang="ts">
	import * as components from './overrides/index';
	import { MarkdownDocument } from '@comark/svelte';
	import githubDark from '@shikijs/themes/github-dark';
	import githubLight from '@shikijs/themes/github-light';
	import alert from 'comark/plugins/alert';
	import emoji from 'comark/plugins/emoji';
	import highlight from 'comark/plugins/highlight';
	import taskList from 'comark/plugins/task-list';

	const { content }: Props = $props();

	const document = $derived(await parse(content));
</script>

<MarkdownDocument value={document} {components} class="space-y-8" />
