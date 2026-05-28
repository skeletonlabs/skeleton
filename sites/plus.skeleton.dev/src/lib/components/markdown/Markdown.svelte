<script lang="ts">
	import { markdownComponents } from './index';
	import { ComarkRenderer } from '@comark/svelte';
	import { parse } from '@comark/svelte/parse';
	import githubDark from '@shikijs/themes/github-dark';
	import githubLight from '@shikijs/themes/github-light';
	import alert from 'comark/plugins/alert';
import emoji from 'comark/plugins/emoji';
	import highlight from 'comark/plugins/highlight';
	import taskList from 'comark/plugins/task-list';

	let { content }: { content: string } = $props();

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

<ComarkRenderer {tree} components={markdownComponents} class="space-y-4" />

<style>
	:global(.shiki) {
		background-color: var(--color-neutral-50);
		border-radius: var(--radius-container);
		padding: 1rem;
		font-size: var(--text-xs);
	}
	@media (prefers-color-scheme: dark) {
		:global(.shiki) {
			background-color: var(--color-neutral-950) !important;
			color: var(--shiki-dark) !important;
		}
		:global(.shiki span) {
			color: var(--shiki-dark) !important;
		}
	}
</style>
