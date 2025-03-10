<script lang="ts">
	import { Combobox } from '@skeletonlabs/skeleton-svelte';

	interface ComboboxData {
		label: string;
		value: string;
		emoji: string;
	}

	const comboboxData: ComboboxData[] = [
		{ label: 'United States', value: 'US', emoji: '🇺🇸' },
		{ label: 'Germany', value: 'DE', emoji: '🇩🇪' },
		{ label: 'Japan', value: 'JP', emoji: '🇯🇵' }
	];

	let selectedCountry = $state(['US']);
</script>

<Combobox
	data={comboboxData}
	value={selectedCountry}
	onValueChange={(e) => (selectedCountry = e.value)}
	label="Select Country"
	placeholder="Select..."
>
	<!-- This is optional. Combobox will render label by default -->
	{#snippet item(item)}
		<div class="flex w-full justify-between space-x-2">
			<span>{item.label}</span>
			<span>{(item as ComboboxData).emoji}</span>
		</div>
	{/snippet}
</Combobox>
