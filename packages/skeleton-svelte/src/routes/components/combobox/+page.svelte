<script lang="ts">
	import Combobox from '$lib/components/Combobox/Combobox.svelte';

	interface ComboxData {
		label: string;
		value: string;
	}

	const comboboxData: ComboxData[] = [
		{ label: 'Zambia', value: 'ZA' },
		{ label: 'Benin', value: 'BN' }
	];

	function onValueChange(details: { items: ComboxData[]; value: string[] }) {
		console.log(details);
	}
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Combobox</h1>
	</header>
	<aside class="card preset-tonal-warning p-4 text-center">
		<!-- prettier-ignore -->
		<p>This component is available only for Svelte. It will remain until <a href="https://floating-ui-svelte.vercel.app/" target="_blank" class="underline">Floating UI Svelte</a> ready for production.</p>
	</aside>
	<section class="border border-surface-200-800 space-y-4 p-20 flex justify-center items-center">
		<Combobox data={comboboxData} placeholder="Select..." {onValueChange}>
			{#snippet label()}Select Country{/snippet}
		</Combobox>
	</section>
</div>
