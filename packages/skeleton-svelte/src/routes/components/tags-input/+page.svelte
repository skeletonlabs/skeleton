<script lang="ts">
	import { TagsInput } from '$lib/index.js';
	import IconDelete from 'lucide-svelte/icons/x-circle';

	let flavors = $state(['Vanilla', 'Chocolate', 'Stawberry']);
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Tags Input</h1>
	</header>
	<pre class="pre">{JSON.stringify(flavors, null, 2)}</pre>
	<section class="space-y-4">
		<TagsInput name="example" bind:value={flavors} placeholder="Add Tag..." />
	</section>
	<section class="space-y-4">
		<h2 class="h2">Icons</h2>
		<TagsInput bind:value={flavors} placeholder="Add Tag...">
			{#snippet buttonDelete()}<IconDelete class="size-4" />{/snippet}
		</TagsInput>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Colors</h2>
		<TagsInput bind:value={flavors} placeholder="Add Tag..." tagBackground="preset-filled-primary-500" />
		<TagsInput bind:value={flavors} placeholder="Add Tag..." tagBackground="preset-filled-secondary-500" />
		<TagsInput bind:value={flavors} placeholder="Add Tag..." tagBackground="preset-filled-tertiary-500" />
	</section>
	<section class="space-y-4">
		<h2 class="h2">Disabled</h2>
		<TagsInput bind:value={flavors} placeholder="Add Tag..." disabled />
	</section>
	<section class="space-y-4">
		<h2 class="h2">Misc</h2>
		<h3 class="h3">Not Editable</h3>
		<TagsInput bind:value={flavors} placeholder="Add Tag..." editable={false} />
		<h3 class="h3">Add on Paste</h3>
		<TagsInput bind:value={flavors} placeholder="Add Tag..." addOnPaste />
	</section>
</div>
