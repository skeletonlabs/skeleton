<script lang="ts">
	import { Listbox } from '$lib/index.js';

	let single = $state('');
	let multiple = $state([]);
	let form: ReturnType<FormData['getAll']> = $state([]);
	let selected = $state('');
	let scrollable = $state('');

	const fruits = $state(['Apple', 'Banana', 'Orange', 'Pineapple']);
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Listbox</h1>
	</header>

	<section class="space-y-4">
		<h2 class="h2">Single</h2>
		<Listbox bind:value={single} name="value">
			{#each fruits as fruit}
				<Listbox.Item value={fruit}>{fruit}</Listbox.Item>
			{/each}
		</Listbox>
		<pre class="pre">Value: {JSON.stringify(single)}</pre>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Multiple</h2>
		<Listbox multiple bind:value={multiple} name="value">
			{#each fruits as fruit}
				<Listbox.Item value={fruit}>{fruit}</Listbox.Item>
			{/each}
		</Listbox>
		<pre class="pre">Value: {JSON.stringify(multiple)}</pre>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Form</h2>
		<form
			class="grid gap-2"
			onsubmit={(e) => {
				e.preventDefault();
				form = new FormData(e.currentTarget).getAll('value');
			}}
		>
			<Listbox multiple name="value">
				{#each fruits as fruit}
					<Listbox.Item value={fruit}>{fruit}</Listbox.Item>
				{/each}
			</Listbox>
			<button class="btn preset-filled">Submit</button>
		</form>
		<pre class="pre">Value: {JSON.stringify(form)}</pre>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Selected</h2>
		<Listbox bind:value={selected} name="value">
			{#each fruits as fruit}
				<Listbox.Item active="preset-tonal-tertiary" value={fruit}>{fruit}</Listbox.Item>
			{/each}
		</Listbox>
		<pre class="pre">Value: {JSON.stringify(selected)}</pre>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Scrollable</h2>
		<Listbox classes="h-32" bind:value={scrollable} name="value">
			{#each fruits as fruit}
				<Listbox.Item value={fruit}>{fruit}</Listbox.Item>
			{/each}
		</Listbox>
		<pre class="pre">Value: {JSON.stringify(scrollable)}</pre>
	</section>
</div>
