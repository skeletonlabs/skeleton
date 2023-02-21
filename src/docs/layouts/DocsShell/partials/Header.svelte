<script lang="ts">
	import type { DocsShellSettings } from '$docs/layouts/DocsShell/types';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Props
	export let pageData: DocsShellSettings;

	// Classes
	const cHeader = 'space-y-10';
	const cChip = 'chip variant-soft hover:variant-filled';

	function formatImports(): string {
		return `import { ${pageData.imports?.join(', ')} } from '${pageData.package?.name}';`;
	}

	// Reactive
	$: classesHeader = `${cHeader}`;
</script>

<header class="doc-shell-header {classesHeader}">
	<div class="space-y-2">
		<span class="badge variant-soft translate-y-1">{@html pageData.feature}</span>
		<h1>{@html pageData.name}</h1>
		<p>{@html pageData.description}</p>
	</div>
	<!-- Import -->
	{#if pageData.imports?.length}
		<CodeBlock language="ts" code={formatImports()} />
	{/if}
	<div class="flex gap-2">
		<!-- Package -->
		<button class={cChip}><i class="fa-brands fa-npm text-[16px]" /><span>@skeleton/skeleton</span></button>
		<!-- Source -->
		<button class={cChip}><i class="fa-brands fa-github text-[16px]" /><span>GitHub</span></button>
		<!-- Doc Source -->
		<button class={cChip}><i class="fa-solid fa-code" /><span>Doc Source</span></button>
		<!-- Dependencies -->
		<button class={cChip}><i class="fa-solid fa-down-left-and-up-right-to-center" /><span>Dependencies</span></button>
		<!-- WAI-ARIA -->
		<button class={cChip}><i class="fa-solid fa-universal-access text-[16px]" /><span>WAI-ARIA</span></button>
	</div>
</header>
