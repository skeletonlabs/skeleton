<script lang="ts">
	import { designModes } from '$lib/constants';
	import { stateDisplay } from '$lib/state.svelte';

	const imgSrc =
		'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	const tableData = [
		{ position: '0', name: 'Iron', symbol: 'Fe', atomic_no: '26' },
		{ position: '1', name: 'Rhodium', symbol: 'Rh', atomic_no: '45' },
		{ position: '2', name: 'Iodine', symbol: 'I', atomic_no: '53' },
		{ position: '3', name: 'Radon', symbol: 'Rn', atomic_no: '86' },
		{ position: '4', name: 'Technetium', symbol: 'Tc', atomic_no: '43' }
	];
</script>

<div class="grid grid-cols-2 gap-4">
	<!-- Buttons -->
	<section class="flex items-center justify-center rounded-container border p-8 border-surface-200-800">
		<div class="flex justify-center gap-4">
			<div class="grid grid-cols-1 gap-4">
				<button class="btn preset-filled">Button</button>
				<button class="btn preset-filled-primary-500">Button</button>
				<button class="btn preset-filled-secondary-500">Button</button>
				<button class="btn preset-filled-tertiary-500">Button</button>
				<button class="btn preset-filled-success-500">Button</button>
				<button class="btn preset-filled-warning-500">Button</button>
				<button class="btn preset-filled-error-500">Button</button>
			</div>
			<div class="grid grid-cols-1 gap-4">
				<button class="btn preset-tonal">Button</button>
				<button class="btn preset-tonal-primary">Button</button>
				<button class="btn preset-tonal-secondary">Button</button>
				<button class="btn preset-tonal-tertiary">Button</button>
				<button class="btn preset-tonal-success">Button</button>
				<button class="btn preset-tonal-warning">Button</button>
				<button class="btn preset-tonal-error">Button</button>
			</div>
			<div class="grid grid-cols-1 gap-4">
				<button class="btn preset-outlined">Button</button>
				<button class="btn preset-outlined-primary-500">Button</button>
				<button class="btn preset-outlined-secondary-500">Button</button>
				<button class="btn preset-outlined-tertiary-500">Button</button>
				<button class="btn preset-outlined-success-500">Button</button>
				<button class="btn preset-outlined-warning-500">Button</button>
				<button class="btn preset-outlined-error-500">Button</button>
			</div>
			<div class="grid grid-cols-1 gap-4">
				<button class="btn text-primary-500">Button</button>
				<button class="btn text-secondary-500">Button</button>
				<button class="btn text-tertiary-500">Button</button>
				<button class="btn text-success-500">Button</button>
				<button class="btn text-warning-500">Button</button>
				<button class="btn text-error-500">Button</button>
			</div>
		</div>
	</section>
	<!-- Card -->
	<section class="flex items-center justify-center rounded-container border p-8 border-surface-200-800">
		<div class="card {designModes[stateDisplay.mode]} mx-auto max-w-md divide-y overflow-hidden divide-surface-200-800">
			<header>
				<img src={imgSrc} class="aspect-[21/9] w-full grayscale hue-rotate-90" alt="banner" />
			</header>
			<article class="space-y-4 p-4">
				<div>
					<h2 class="h6">Announcements</h2>
					<h3 class="h3">Skeleton is Awesome</h3>
				</div>
				<p class="opacity-60">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque
					consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque
					quae rem.
				</p>
			</article>
			<footer class="flex items-center justify-between gap-4 p-4">
				<small class="opacity-40">By Alex</small>
				<small class="opacity-40">On {new Date().toLocaleDateString()}</small>
			</footer>
		</div>
	</section>
	<!-- Forms -->
	<section class="flex items-center justify-center rounded-container border p-8 border-surface-200-800">
		<form class="card {designModes[stateDisplay.mode]} p-4 mx-auto w-full max-w-md space-y-4">
			<fieldset class="space-y-4">
				<label class="label">
					<span class="label-text">Input</span>
					<input class="input" type="text" placeholder="Input" />
				</label>
				<label class="label">
					<span class="label-text">Select</span>
					<select class="select">
						<option value="1">Option 1</option>
						<option value="2">Option 2</option>
						<option value="3">Option 3</option>
						<option value="4">Option 4</option>
						<option value="5">Option 5</option>
					</select>
				</label>
				<label class="label">
					<span class="label-text">Textarea</span>
					<textarea
						class="textarea rounded-container"
						rows="4"
						placeholder="Lorem ipsum dolor sit amet adipisicing elit."
					></textarea>
				</label>
			</fieldset>
			<fieldset class="flex justify-end">
				<button type="button" class="btn preset-filled">Submit</button>
			</fieldset>
		</form>
	</section>
	<!-- Table -->
	<section class="flex items-center justify-center rounded-container border p-8 border-surface-200-800">
		<div class="table-wrap">
			<table class="table caption-bottom">
				<caption class="pt-4">A list of elements from the periodic table.</caption>
				<thead>
					<tr>
						<th>Position</th>
						<th>Symbol</th>
						<th>Name</th>
						<th class="!text-right">Weight</th>
					</tr>
				</thead>
				<tbody class="hover:[&>tr]:preset-tonal-primary">
					{#each tableData as row}
						<tr>
							<td>{row.position}</td>
							<td>{row.symbol}</td>
							<td>{row.name}</td>
							<td class="text-right">{row.atomic_no}</td>
						</tr>
					{/each}
				</tbody>
				<tfoot>
					<tr>
						<td colspan="3">Total</td>
						<td class="text-right">{tableData.length} Elements</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</section>
	<!-- Placeholders -->
	<section class="flex items-center justify-center rounded-container border p-8 border-surface-200-800">
		<div class="w-full space-y-4">
			<div class="flex items-center justify-between">
				<div class="flex items-center justify-center space-x-4">
					<div class="placeholder-circle size-16 animate-pulse"></div>
					<div class="placeholder-circle size-14 animate-pulse"></div>
					<div class="placeholder-circle size-10 animate-pulse"></div>
				</div>
			</div>
			<div class="space-y-4">
				<div class="placeholder animate-pulse"></div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder animate-pulse"></div>
					<div class="placeholder animate-pulse"></div>
					<div class="placeholder animate-pulse"></div>
					<div class="placeholder animate-pulse"></div>
				</div>
				<div class="placeholder animate-pulse"></div>
				<div class="placeholder animate-pulse"></div>
			</div>
		</div>
	</section>
	<!-- HRs -->
	<section class="flex items-center justify-center rounded-container border p-8 border-surface-200-800">
		<div class="w-full space-y-4">
			<p class="opacity-60 type-scale-1">Default</p>
			<hr class="hr" />
			<p class="opacity-60 type-scale-1">border-t-2</p>
			<hr class="hr border-t-2" />
			<p class="opacity-60 type-scale-1">border-t-4</p>
			<hr class="hr border-t-4" />
			<p class="opacity-60 type-scale-1">border-t-8</p>
			<hr class="hr border-t-8" />
		</div>
	</section>
</div>
