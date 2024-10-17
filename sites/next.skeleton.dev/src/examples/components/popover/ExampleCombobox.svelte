<script lang="ts">
	import { Combobox } from '@skeletonlabs/skeleton-svelte';

	interface ComboxData {
		label: string;
		value: string;
	}

	const comboboxData: ComboxData[] = [
		{ label: 'United States', value: 'US' },
		{ label: 'Germany', value: 'DE' },
		{ label: 'Japan', value: 'JP' }
	];

	let selectedCountry = $state(['US']);
</script>

<Combobox data={comboboxData} bind:value={selectedCountry} label="Select Country" placeholder="Select..." />
