<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import Alert from '$lib/components/Alert/Alert.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Core',
		description: 'Provides a variety of global scoped styles.',
		stylesheetIncludes: ['all', 'core'],
		source: 'styles/core.css'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Body -->
		<div class="space-y-4">
			<h2>Body Element</h2>
			<p>Affects the body background color for both theme and dark mode settings.</p>
			<Alert>
				<strong>TIP:</strong> Consider pairing this with a <strong>CSS Mesh Gradient</strong> background image.
				<svelte:fragment slot="trail">
					<!-- FIXME: hardcoded path -->
					<a class="btn btn-ghost" href="https://github.com/Brain-Bones/skeleton/blob/master/src/app.postcss" target="_blank">Reference</a>
					<a class="btn btn-filled" href="https://csshero.org/mesher/" target="_blank">Generate</a>
				</svelte:fragment>
			</Alert>
		</div>
		<!-- Scrollbars -->
		<div class="space-y-4">
			<h2>Scrollbars</h2>
			<p>Provides custom scrollbar styles in supported browsers.</p>
			<div class="card card-body max-h-[200px] overflow-auto space-y-4">
				<h3>Test Scrolling Here</h3>
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
			<h2>Horizontal Rules</h2>
			<p>Applies styling to the native horizontal rule element. See the <a href="/components/dividers">Dividers</a> component for more options.</p>
			<CodeBlock language="html" code={`<hr />`} />
			<div class="card card-body space-y-4 text-center">
				<p>Above the horizontal rule.</p>
				<hr />
				<p>Below the horizontal rule.</p>
			</div>
		</div>
	</svelte:fragment>
</DocsShell>
