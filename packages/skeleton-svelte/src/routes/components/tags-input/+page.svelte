<script lang="ts">
	import { TagsInput } from '$lib/index.js';

	let value = $state(['red', 'green', 'blue']);
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Tags Input</h1>
	</header>
	<section class="space-y-4">
		<pre class="pre">{JSON.stringify(value, null, 2)}</pre>
		<TagsInput bind:value></TagsInput>
	</section>
</div>
