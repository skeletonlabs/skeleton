<script lang="ts">
	import CodeBlock from './code-block.svelte';
</script>

<div class="p-10 space-y-4">
	<CodeBlock code="npx sv create my-skeleton-app" lang="bash" />
	<CodeBlock code="<div class=&quot;bg-green-500&quot;" lang="html" />
	<CodeBlock code=".foobar &#123; background: green; &#125;" lang="css" />
	<CodeBlock code="const foot = 'bar';" lang="js" />
</div>
