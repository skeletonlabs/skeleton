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

	function onValueChange(details: { items: ComboxData[]; value: string[] }) {
		console.log(details);
	}
</script>

<Combobox data={comboboxData} label="Select Country" placeholder="Select..." {onValueChange} />
