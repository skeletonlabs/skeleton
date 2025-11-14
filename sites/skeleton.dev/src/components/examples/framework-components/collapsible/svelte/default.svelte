<script lang="ts">
	import { ArrowUpDownIcon } from '@lucide/svelte';
	import { Collapsible } from '@skeletonlabs/skeleton-svelte';
</script>

<Collapsible class="items-start card preset-filled-surface-100-900 p-4 w-56 mx-auto">
	<div class="w-full flex justify-between items-center">
		<p class="font-bold">Design System</p>
		<Collapsible.Trigger class="btn-icon hover:preset-tonal">
			<ArrowUpDownIcon class="size-4" />
		</Collapsible.Trigger>
	</div>
	<Collapsible.Content class="flex flex-col gap-2">
		<nav class="contents">
			<a class="anchor" href="/docs/design/themes">Themes</a>
			<a class="anchor" href="/docs/design/colors">Colors</a>
			<a class="anchor" href="/docs/design/presets">Presets</a>
			<a class="anchor" href="/docs/design/typography">Typography</a>
			<a class="anchor" href="/docs/design/spacing">Spacing</a>
			<a class="anchor" href="/docs/design/iconography">Iconography</a>
		</nav>
	</Collapsible.Content>
</Collapsible>
