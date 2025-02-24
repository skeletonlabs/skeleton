<script lang="ts">
	import { Pagination } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconArrowLeft from 'lucide-svelte/icons/arrow-left';
	import IconArrowRight from 'lucide-svelte/icons/arrow-right';
	import IconEllipsis from 'lucide-svelte/icons/ellipsis';
	import IconFirst from 'lucide-svelte/icons/chevrons-left';
	import IconLast from 'lucide-svelte/icons/chevron-right';

	interface SourceData {
		position: number;
		name: string;
		weight: number;
		symbol: string;
	}

	let sourceData: SourceData[] = $state([
		{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
		{ position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
		{ position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
		{ position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
		{ position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
		{ position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
		{ position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
		{ position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
		{ position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
		{ position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
	]);

	// State
	let page = $state(1);
	let size = $state(3);
	const slicedSource = $derived((s: SourceData[]) => s.slice((page - 1) * size, page * size));
</script>

Page: {page}
Size: {size}

<div class="space-y-10">
	<header>
		<h1 class="h1">Pagination</h1>
	</header>
	<section class="space-y-4">
		<!-- Table -->
		<div class="table-wrap">
			<table class="table table-fixed caption-bottom">
				<thead>
					<tr>
						<th>Position</th>
						<th>Symbol</th>
						<th>Name</th>
						<th class="!text-right">Weight</th>
					</tr>
				</thead>
				<tbody class="hover:[&>tr]:preset-tonal-primary">
					{#each slicedSource(sourceData) as row}
						<tr>
							<td>{row.position}</td>
							<td>{row.name}</td>
							<td>{row.weight}</td>
							<td class="text-right">{row.symbol}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<!-- Footer -->
		<footer class="flex justify-between">
			<select name="size" id="size" class="select max-w-[150px]" bind:value={size}>
				{#each [1, 2, 3, 5] as v}
					<option value={v}>Items {v}</option>
				{/each}
				<option value={sourceData.length}>Show All</option>
			</select>
			<!-- Pagination (Alternative) -->
			<Pagination bind:data={sourceData} bind:page bind:pageSize={size} alternative onPageSizeChange={console.log}>
				{#snippet labelEllipsis()}<IconEllipsis class="size-4" />{/snippet}
				{#snippet labelNext()}<IconArrowRight class="size-4" />{/snippet}
				{#snippet labelPrevious()}<IconArrowLeft class="size-4" />{/snippet}
				{#snippet labelFirst()}<IconFirst class="size-4" />{/snippet}
				{#snippet labelLast()}<IconLast class="size-4" />{/snippet}
			</Pagination>
		</footer>
	</section>
</div>
