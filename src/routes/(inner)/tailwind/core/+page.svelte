<script lang="ts">
	import Alert from '$lib/components/Alert/Alert.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Core</h1>
		<p>Automatically included in <code>all.css</code>. This <a href="/guides/styling">stylesheet</a> provides a variety of global styles.</p>
		<CodeBlock language="ts" code={`import '@brainandbones/skeleton/styles/core.css';`} />
	</header>

	<!-- Usage -->
	<section class="space-y-8">
		<h2>Usage</h2>
		<!-- Body -->
		<div class="space-y-4">
			<h4>Body Element</h4>
			<p>Affects the body background color for both theme and dark mode settings.</p>
			<Alert>
				<strong>TIP:</strong> Consider pairing this with a <strong>CSS Mesh Gradient</strong> background image.
				<svelte:fragment slot="trail">
					<a class="btn btn-ghost" href="https://github.com/Brain-Bones/skeleton/blob/dev/src/app.postcss" target="_blank">Reference</a>
					<a class="btn btn-filled" href="https://csshero.org/mesher/" target="_blank">Generate</a>
				</svelte:fragment>
			</Alert>
		</div>
		<!-- Scrollbars -->
		<div class="space-y-4">
			<h4>Scrollbars</h4>
			<p>Provides custom scrollbar styles in supported browsers.</p>
			<div class="card card-body max-h-[200px] overflow-auto space-y-4">
				<h4>Test Scrolling Here</h4>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis
					totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto
					modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor.
					Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni
					harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae
					reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti
					architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto
					dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam
					necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos
					ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam
					eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum,
					dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi
					veniam necessitatibus, magni harum.
				</p>
			</div>
		</div>
		<!-- Horizontal Rules -->
		<div class="space-y-4">
			<h4>Horizontal Rules</h4>
			<p>Applies styling to the native horizontal rule element. See the <a href="/components/dividers">Dividers</a> component for more options.</p>
			<CodeBlock language="html" code={`<hr />`} />
			<div class="card card-body space-y-4 text-center">
				<p>Above the horizontal rule.</p>
				<hr />
				<p>Below the horizontal rule.</p>
			</div>
		</div>
	</section>
</div>
