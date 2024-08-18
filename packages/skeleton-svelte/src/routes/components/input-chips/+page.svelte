<script lang="ts">
	import { InputChips } from '$lib/index.js';

	let value = $state([]);
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Input Chips</h1>
	</header>
	<section class="space-y-4">
		<pre class="pre">Chip 1,Chip 2,Chip 3</pre>
		<InputChips addOnPaste bind:value></InputChips>
		<pre class="pre">{JSON.stringify(value, null, 2)}</pre>
	</section>
</div>
