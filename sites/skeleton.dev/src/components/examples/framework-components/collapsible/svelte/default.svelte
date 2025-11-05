<script lang="ts">
	import { ArrowUpDownIcon } from '@lucide/svelte';
	import { Collapsible } from '@skeletonlabs/skeleton-svelte';
</script>

<Collapsible class="card preset-filled-surface-100-900 p-4 w-56 mx-auto">
	<div class="w-full flex justify-between items-center">
		<p class="font-bold">Design System</p>
		<Collapsible.Trigger class="btn-icon hover:preset-tonal">
			<ArrowUpDownIcon class="size-4" />
		</Collapsible.Trigger>
	</div>
	<Collapsible.Content class="flex justify-start items-stretch">
		<nav class="space-y-2">
			<ul class="space-y-2">
				<li><a class="anchor" href="/docs/design/themes">Themes</a></li>
				<li><a class="anchor" href="/docs/design/colors">Colors</a></li>
				<li><a class="anchor" href="/docs/design/presets">Presets</a></li>
				<li><a class="anchor" href="/docs/design/typography">Typography</a></li>
				<li><a class="anchor" href="/docs/design/spacing">Spacing</a></li>
				<li><a class="anchor" href="/docs/design/iconography">Iconography</a></li>
			</ul>
		</nav>
	</Collapsible.Content>
</Collapsible>
