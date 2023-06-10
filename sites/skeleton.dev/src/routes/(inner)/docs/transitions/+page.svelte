<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<LayoutPage>
	<header class="space-y-4">
		<h1 class="h1">Transitions</h1>
		<p>
			Skeleton provides an easy way to change all transitions used by our components to assure maximum <code class="code">flexibility</code>
			and <code class="code">customizability</code>.
		</p>
	</header>

	<hr />

	<!-- Default Transition -->
	<section class="space-y-4">
		<h2 class="h2">Default Transition</h2>
		<p>
			Each component That uses a transition is supplied with a default <code class="code">TransitionIn</code> and
			<code class="code">TransitionOut</code>
			props with <code class="code">TransitionInParams</code> and <code class="code">TransitionOutParams</code> presenting the parameters for
			the transitions respectively.
		</p>
	</section>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">Change Transition</h2>
		<p>
			To change the default transition you can use one of Svelte default transitions or provide your own custom <code class="code">Css</code
			>
			or <code class="code">Js</code> transition.
		</p>
		<CodeBlock
			language="html"
			code={`
<ExampleComponent transitionIn={slide} transitionOut={yourCustomTransition} />
`}
		/>
	</section>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">Change Parameters</h2>
		<p>To update the parameters of the default transition or supply parameters for your custom transition</p>
		<CodeBlock
			language="html"
			code={`
<ExampleComponent transitionInParams={{ duration: 300 }} 
                  transitionOut={yourCustomTransition} transitionOutParams={{ customParam: value }}/>
`}
		/>
	</section>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">Disable Transitions</h2>
		<p>Disable all transitions for a component is applied using the prop <code class="code">transitions</code></p>
		<CodeBlock
			language="html"
			code={`
            <ExampleComponent transitions={false}/>
            `}
		/>
	</section>

	<hr />

	<section class="space-y-4">
		<h2 class="h2">prefers-reduced-motion</h2>
		<p>more info to follow...</p>
	</section>
</LayoutPage>
