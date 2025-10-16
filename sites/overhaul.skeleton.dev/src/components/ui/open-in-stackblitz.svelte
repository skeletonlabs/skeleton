<script lang="ts">
	import { openStackblitzProject } from '@/modules/stackblitz/stackblitz';
	import type { CollectionEntry } from 'astro:content';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		framework: CollectionEntry<'frameworks'>['id'];
		code: string;
		files?: Record<string, string>;
	}

	const props: Props = $props();
	const { framework, code, files, ...rest } = $derived(props);

	function openInStackblitz() {
		openStackblitzProject(framework, code, files);
	}
</script>

<button {...rest} onclick={openInStackblitz} class="btn aspect-square p-2 preset-filled {rest.class}">
	<span class="sr-only">Open in Stackblitz</span>
	<svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 16 16">
		<path fill="#2196f3" d="m5 15l8-8H9l2-6l-8 8h4z" />
	</svg>
</button>
