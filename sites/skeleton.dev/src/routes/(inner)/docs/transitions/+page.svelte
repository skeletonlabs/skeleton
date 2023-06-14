<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<LayoutPage>
	<header class="space-y-4">
		<h1 class="h1">Transitions</h1>
		<!-- prettier-ignore -->
		<p>
			Skeleton provides a simple interface for modifying Svelte component transitions. This supports all <a class="anchor" href="https://svelte.dev/docs#run-time-svelte-transition" target="_blank" rel="noreferrer">Svelte-provided transitions</a>, such as: <code class="code">fade</code>, <code class="code">blur</code>, <code class="code">fly</code>, <code class="code">slide</code>, <code class="code">scale</code>, <code class="code">draw</code>, and <code class="code">crossfade</code>. As well as custom <a class="anchor" href="https://svelte.dev/tutorial/custom-css-transitions" target="_blank" rel="noreferrer">CSS</a> and <a class="anchor" href="https://svelte.dev/tutorial/custom-js-transitions" target="_blank" rel="noreferrer">Javascript</a> transitions.
		</p>
	</header>

	<hr />

	<section class="space-y-4">
		<div class="card variant-glass p-4 text-center space-y-4">
			<span class="chip variant-soft">
				<i class="fa-solid fa-right-left text-[16px]" />
				<span>Transitions</span>
			</span>
			<p class="text-sm">Look for this indicator on each component page. If present, custom transitions are supported.</p>
		</div>
	</section>

	<section class="space-y-4">
		<h2 class="h2">Properties</h2>
		<p>Provide the transition and transition parameters as follows.</p>
		<h3 class="h3">Transition In</h3>
		<CodeBlock language="html" code={`<ExampleComponent transitionIn={fade} transitionInParams={{ duration: 200 }} />`} />
		<h3 class="h3">Transition Out</h3>
		<CodeBlock language="html" code={`<ExampleComponent transitionOut={fade} transitionOutParams={{ duration: 200 }} />`} />
	</section>

	<section class="space-y-4">
		<h2 class="h2">Parameters</h2>
		<p>You can modify parameters for both the default <em>in</em> and <em>out</em> transitions.</p>
		<CodeBlock language="html" code={`<ExampleComponent transitionInParams={{ duration: 400 }} />`} />
	</section>

	<section class="space-y-4">
		<h2 class="h2">Disable Transitions</h2>
		<p>
			To disable all transitions for a single component, set <code class="code">transitions</code> to <em>false</em>. This will affect both
			the
			<em>in</em>
			and <em>out</em> transitions.
		</p>
		<CodeBlock
			language="html"
			code={`
            <ExampleComponent transitions={false}/>
            `}
		/>
	</section>

	<!-- <section class="space-y-4">
		<h2 class="h2">Reduced Motion</h2>
		<p>We'll need to cover more about <code class="code">prefers-reduced-motion</code> here...</p>
	</section> -->
</LayoutPage>
