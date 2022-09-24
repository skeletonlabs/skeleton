<script lang="ts">
	import { FileButton } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Alerts</h1>
		<p>Display customizable alerts to garner attention and provide critical actions.</p>
		<CodeBlock language="javascript" code={`import { FileButton } from '@brainandbones/skeleton';`} />
	</header>

	<section>
		<FileButton accept="image/*" name="file" on:change={(e) => console.log(e)}>Upload file</FileButton>
	</section>
</div>
