<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import Autocomplete from '$lib/components/Autocomplete/Autocomplete.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Component,
		name: 'Autocomplete',
		description: 'Autocomplete / Select / Typeahead component',
		imports: ['Autocomplete'],
		source: 'components/Autocomplete',
		aria: 'https://www.w3.org/WAI/ARIA/apg/example-index/',
		components: [],
		keyboard: []
	};

	let items = [
		{
			id: 1,
			name: 'Red',
			value: 'RED'
		},
		{
			id: 2,
			name: 'Green',
			value: 'GREEN'
		},
		{
			id: 3,
			name: 'Blue',
			value: 'BLUE'
		},
		{
			id: 4,
			name: 'Yellow',
			value: 'YELLOW'
		},
		{
			id: 5,
			name: 'Gold',
			value: 'GOLD'
		}
	];
	let simpleArr = ['Donkey', 'Cow', 'Llama', 'Pig', 'Horse', 'Chicken'];

	let selectedMoviesItems: any[] = [];
	let selectedMoviesValues: any[] = [];
	let selectedMoviesLabels: any[] = [];
	let selectedFarmAnimal: any[] = [];
	let selectedColorsItems: any[] = [];
	let selectedColorsNames: any[] = [];
	let selectedColorsValues: any[] = [];
	let selectedColorsItemsTwo: any[] = [];
	let selectedColorsNamesTwo: any[] = [];
	let selectedColorsValuesTwo: any[] = [];

	async function searchMovies(keyword: string) {
		const response = await fetch(`https://search.imdbot.workers.dev/?q=${keyword}`);
		const data = await response.json();
		return data.description;
	}

	$: selectedMoviesLabels = selectedMoviesItems.map((item) => item['#TITLE']);
	$: selectedColorsNames = selectedColorsItems.map((item) => item.name);
	$: selectedColorsNamesTwo = selectedColorsItemsTwo.map((item) => item.name);
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<section class="space-y-4">
			<div class="card p-4 space-y-4">
				<p>Single select autocomplete:</p>
				<Autocomplete items={simpleArr} labelField={'name'} valueField={'value'} bind:selectedValues={selectedFarmAnimal} />
				<code class="block">Selected Farm Animal: {selectedFarmAnimal.length ? selectedFarmAnimal : 'No items selected.'}</code>
			</div>

			<div class="card p-4 space-y-4">
				<p>Multiple select autocomplete that doesn't allow duplicates:</p>
				<Autocomplete
					{items}
					labelField={'name'}
					valueField={'value'}
					multiple={true}
					allowDuplicates={false}
					bind:selectedItems={selectedColorsItems}
					bind:selectedValues={selectedColorsValues}
				/>
				<code class="block">Selected Color Items: {selectedColorsItems.length ? selectedColorsItems : 'No items selected.'}</code>
				<code class="block">Selected Color Names: {selectedColorsNames.length ? selectedColorsNames : 'No titles selected.'}</code>
				<code class="block">Selected Color Values: {selectedColorsValues.length ? selectedColorsValues : 'No values selected.'}</code>
			</div>
			<div class="card p-4 space-y-4">
				<p>Multiple select autocomplete that allows duplicates:</p>
				<Autocomplete
					{items}
					labelField={'name'}
					valueField={'value'}
					multiple={true}
					allowDuplicates={true}
					bind:selectedItems={selectedColorsItemsTwo}
					bind:selectedValues={selectedColorsValuesTwo}
				/>
				<code class="block">Selected Color Items: {selectedColorsItemsTwo.length ? selectedColorsItemsTwo : 'No items selected.'}</code>
				<code class="block">Selected Color Names: {selectedColorsNamesTwo.length ? selectedColorsNamesTwo : 'No titles selected.'}</code>
				<code class="block">Selected Color Values: {selectedColorsValuesTwo.length ? selectedColorsValuesTwo : 'No values selected.'}</code>
			</div>
			<div class="card p-4 space-y-4">
				<p>Custom Asynchronous Search Function Provided</p>
				<Autocomplete
					labelField={'#TITLE'}
					valueField={'#IMDB_ID'}
					multiple={true}
					allowDuplicates={true}
					searchFunction={searchMovies}
					delay={200}
					minCharactersToSearch={3}
					maxItemsToShowInList={10}
					bind:selectedValues={selectedMoviesValues}
					bind:selectedItems={selectedMoviesItems}
				/>
				<code class="block">Selected Movie Items: {selectedMoviesItems.length ? selectedMoviesItems : 'No items selected.'}</code>
				<code class="block">Selected Movie Titles: {selectedMoviesLabels.length ? selectedMoviesLabels : 'No titles selected.'}</code>
				<code class="block">Selected Values: {selectedMoviesValues.length ? selectedMoviesValues : 'No values selected.'}</code>
			</div>
		</section>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<p>Autocomplete (work-in-progress)</p>
	</svelte:fragment>
</DocsShell>
