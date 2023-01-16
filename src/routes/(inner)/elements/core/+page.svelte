<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';

	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Element,
		name: 'Core',
		description: 'Provides a variety of globally scoped styles.',
		stylesheetIncludes: ['all', 'core'],
		source: 'styles/core.css'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Body -->
		<div class="space-y-4">
			<h2>Body Background</h2>
			<p>
				Your app background is automatically set for both light and dark mode via a design token class. Overwrite this to adjust as desired.
			</p>
			<CodeBlock language="css" code={`body { @apply bg-surface-50-900-token; }`} />
			<aside class="alert">
				<i class="fa-solid fa-lightbulb text-2xl" />
				<div class="alert-message">Consider pairing this with a <strong>CSS Mesh Gradient</strong> or other background image.</div>
				<div class="alert-actions">
					<!-- prettier-ignore -->
					<a class="btn btn-ghost" href="https://github.com/skeletonlabs/skeleton/blob/master/src/lib/themes/theme-skeleton.css#L115" target="_blank" rel="noreferrer">Reference</a>
					<a class="btn btn-filled" href="https://csshero.org/mesher/" target="_blank" rel="noreferrer">Mesh Generator</a>
				</div>
			</aside>
		</div>
		<!-- Selection -->
		<div class="space-y-4">
			<h2>Selection</h2>
			<p>Selection color is also set via a token class. Try selecting the text in the card element below to preview this.</p>
			<CodeBlock language="css" code={`::selection { @apply bg-primary-500/30; }`} />
			<div class="card p-4 max-h-[200px] overflow-auto space-y-4 text-center">
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
			</div>
		</div>
		<!-- Mobile Focus -->
		<div class="space-y-4">
			<h2>Mobile Focus</h2>
			<p>Interactive elements on mobile will briefly show a focus style when touched. The coloring for this has been adjusted.</p>
			<CodeBlock language="css" code={`html { -webkit-tap-highlight-color: rgba(128, 128, 128, 0.5); }`} />
			<div class="card p-4 max-h-[200px] overflow-auto space-y-4 text-center">
				<button class="btn">Tap Me</button>
			</div>
		</div>
		<!-- Scrollbars -->
		<div class="space-y-4">
			<h2>Scrollbars</h2>
			<p>
				Provides custom scrollbar styles in supported browsers. Use the <code>.hide-scrollbar</code> class to disable scrollbar styles for an
				element.
			</p>
			<div class="card p-4 max-h-[200px] overflow-auto space-y-4">
				<h3 data-toc-ignore>Test Scrolling Here</h3>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti
					architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit
					amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus,
					quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus!
					Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis
					totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto
					dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam
					necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique
					quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus,
					magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet
					quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem
					ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti
					architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit
					amet consectetur adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus,
					quos ducimus! Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus!
					Repudiandae reiciendis totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Culpa corrupti iusto dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis
					totam sequi veniam necessitatibus, magni harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa corrupti iusto
					dolor. Similique quibusdam eveniet quae deleniti architecto modi natus, quos ducimus! Repudiandae reiciendis totam sequi veniam
					necessitatibus, magni harum.
				</p>
			</div>
		</div>
		<!--Dividers -->
		<div class="space-y-4">
			<h2>Dividers</h2>
			<p>Native horizontal rule elements will adapt to your theme settings automatically.</p>
			<CodeBlock language="html" code={`<hr />`} />
			<!-- prettier-ignore -->
			<p>Use Tailwind's <a href="https://tailwindcss.com/docs/border-width" target="_blank" rel="noreferrer">Border Width Top</a> and <a href="https://tailwindcss.com/docs/divide-style" target="_blank" rel="noreferrer">Border Styles</a> to customize each divider.</p>
			<CodeBlock language="html" code={`<hr class="!border-t-8 !border-double" />`} />
			<div class="card card-glass p-4 space-y-4 text-center">
				<p>Sizes</p>
				<hr />
				<hr class="!border-t-2" />
				<hr class="!border-t-4" />
				<hr class="!border-t-8" />
				<p>Dashed / Dotted / Double</p>
				<hr class="!border-dashed" />
				<hr class="!border-dotted" />
				<hr class="!border-t-8 !border-double" />
			</div>
			<p>
				For vertical dividers, use a <code>span</code> tag with the class of <code>.divider-vertical</code>. Adjust the height as desired.
			</p>
			<CodeBlock language="html" code={`<span class="divider-vertical h-20" />`} />
			<div class="card card-glass p-4 grid grid-cols-3 gap-4 place-items-center">
				<p>Left</p>
				<span class="divider-vertical h-20" />
				<p>Right</p>
			</div>
		</div>
	</svelte:fragment>
</DocsShell>
