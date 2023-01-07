<script lang="ts">
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<ol class="breadcrumb">
		<li class="crumb"><a href="/docs/contributions">Contributions</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Documentation</li>
	</ol>

	<!-- Header -->
	<header class="space-y-4">
		<div class="grid grid-cols-[1fr_auto] gap-4">
			<div class="space-y-4">
				<h1>Documentation</h1>
				<p>
					Below is an introduction to automated documentation features, using tools like <a
						href="https://github.com/carbon-design-system/sveld"
						target="_blank"
						rel="noreferrer">Sveld</a
					>. First we'll learn how to document component props, slots, and events. Then we'll cover how to provide this information to the
					documentation pages themselves.
				</p>
			</div>
			<div class="place-self-end grid grid-cols-1 gap-2">
				<a class="btn btn-filled-primary" href="https://github.com/carbon-design-system/sveld" target="_blank" rel="noreferrer"
					>Sveld Documentation</a
				>
			</div>
		</div>
	</header>

	<hr />

	<!-- Intro -->
	<section class="space-y-4">
		<h2>Components</h2>
		<p>
			Sveld makes use of <a href="https://tsdoc.org" target="_blank" rel="noreferrer">TSDoc tags</a> (a superset of JSDocs) to generate
			component documentation from the component code itself. This comes with the benefit of providing additional
			<a href="https://code.visualstudio.com/docs/editor/intellisense" target="_blank" rel="noreferrer">Intellisense</a>
			features to aid developers implementing Skeleton components in tools like VS Code. Tap <kbd>Ctrl/⌘ + i</kbd> in a component declaration
			to see the extended docs come through.
		</p>
	</section>

	<!-- TSDocs -->
	<section class="space-y-4">
		<h3>Props</h3>
		<p><a href="https://github.com/carbon-design-system/sveld#type" target="_blank" rel="noreferrer">Sveld Reference</a></p>
		<p>
			To document component props, simply add TSDoc description comments using the <code>/** ... */</code> format. In most use cases Sveld will
			automatically parse all relevant information - including the prop name, type, value, and your provided description.
		</p>
		<CodeBlock
			language="js"
			code={`
/** Provide classes to set vertical item spacing. */
export let space: string = 'space-y-1';
			`}
		/>
		<p>
			For non-primitive or custom types, you may need to specify this information. This can be accomplished using the <code>@type</code> tag
			with block-style comments. Specify the type in curly brackets immediately following the tag.
		</p>
		<CodeBlock
			language="js"
			code={`
/**
 * Bind this to your form data, represents the "files" data from the input.
 * @type {FileList}
 */
export let files: FileList;
`}
		/>
		<p>
			Ensure you document Context API <code>getContext</code> values to provide Intellisense. However, we intentionally exclude these values
			from the Props table.
		</p>
		<CodeBlock
			language="js"
			code={`
/** Provide classes to set the hover background color. */
export let hover: string = getContext('hover');
`}
		/>
		<p>For additonal examples, look at existing components in the project.</p>
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h3>Slots</h3>
		<p><a href="https://github.com/carbon-design-system/sveld#slot" target="_blank" rel="noreferrer">Sveld Reference</a></p>
		<p>
			Slot documentation is provided by placing a TSDoc comment block at the top (by convention) of your script block. Note that Sveld does
			not currently support descriptions for the
			<code>default</code> slot at this time. Instead, we recommend you opt for a Usage tab example and instructions to illustrate the use of
			this slot.
		</p>
		<CodeBlock
			language="js"
			code={`
// Slots
/**
 * @slot lead - Provide a leading element, such as an icon.
 * @slot content - Provide the alert message text.
 */`}
		/>
		<aside class="alert">
			<i class="fa-solid fa-lightbulb text-2xl" />
			<div class="alert-message">
				<strong>NOTE:</strong> The leading <code>// ...</code> comment is required for Sveld to successfully parse the slot descriptions. This
				is not optional.
			</div>
		</aside>
	</section>

	<!-- Events -->
	<section class="space-y-4">
		<h3>Events</h3>
		<p><a href="https://github.com/carbon-design-system/sveld#event" target="_blank" rel="noreferrer">Sveld Reference</a></p>
		<p>
			Sveld will automatically document forwarded events. You should not attempt to document these. However, dispatched events may be
			documented similar to props - with a TSDocs comment applied directly above the <code>dispatch()</code> method. Provide the event response
			in curly brackets, followed by the event name, a dash, and then the event description.
		</p>
		<CodeBlock
			language="js"
			code={`
/** @event {{ event: DragEvent }} dragover - When a file is dragged over the component. */
dispatch('dragover', event);`}
		/>
	</section>

	<hr />

	<!-- Documentation Pages -->
	<section class="space-y-4">
		<h2>Documentation Pages</h2>
		<p>
			Now that our components are ready, it's time to create the documentation page that displays all of the information derived by Sveld.
		</p>
		<p>
			We provide a boilerplate template here:<br /><code>/src/routes/(inner)/template/+page.svelte</code>.
		</p>
		<p>
			Copy this to the appropriate file route location and use our recommend naming convention:<br />e.g.
			<code>/routes/components/your-new-component/+page.svelte</code>.
		</p>
		<!-- Documentation Tables -->
		<h3>Documentation Tables</h3>
		<p>To populate each documentation table we'll need to import our Sveld documentation data. Follow the instructions below:</p>
		<ol class="list-decimal list-inside space-y-1">
			<li>
				Create a duplicate of your component import statement, e.g. <code>import Avatar from '$lib/components/Avatar/Avatar.svelte';</code>
			</li>
			<li>Implement a <code>// @ts-expect-error sveld import</code> comment above the new import to silence any warnings.</li>
			<li>Rename the import reference using the convention: <code>Avatar</code> -> <code>sveldAvatar</code>.</li>
			<li>Append the following URL parameters to the end of your import statement, e.g.: <code>.../Accordion.svelte?raw&sveld</code>.</li>
			<li>
				Finally, pass the import reference to the DocShell settings like so: <code>components: [&#123; sveld: sveldAvatar &#125;]</code>
			</li>
		</ol>
		<!-- DocShell Settings -->
		<h3>DocShell Settings</h3>
		<p>
			We can provide settings to our DocShell component using <code>const settings: DocsShellSettings</code>. This allows you to populate
			all relevant settings on the page.
		</p>
		<section class="card p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<div class="space-y-2">
				<p>Reference all available settings from the Typescript interface defintion.</p>
			</div>
			<a
				class="btn btn-filled-secondary"
				href="https://github.com/skeletonlabs/skeleton/blob/dev/src/docs/DocsShell/types.ts#L42"
				target="_blank"
				rel="noreferrer">View Available Settings</a
			>
		</section>
		<p>Below are existing documentation pages we recommend you reference:</p>
		<ul class="list-disc list-inside space-y-1">
			<li><a href="/elements/buttons">Buttons</a> showcases how to document Tailwind Element classes.</li>
			<li><a href="/components/accordions">Accordion</a> makes use of most Component settings utilizing Sveld.</li>
			<li><a href="/components/paginators">Accordion</a> uses Dipatched Event documentation.</li>
			<li><a href="/utilities/tooltips">Tooltips</a> provides an excellent reference for Action params.</li>
		</ul>
		<!-- Examples -->
		<h3>Examples</h3>
		<p>When showcasing examples of new features we typically handle this by one of two methods:</p>
		<ul class="list-disc list-inside space-y-1">
			<li>
				<strong>Sandbox</strong> (e.g. <a href="/components/range-sliders">Range Sliders</a>) - which provide a dynamic and interactive
				example that can be adjusted live.
			</li>
			<li>
				<strong>Static</strong> (e.g. <a href="/components/accordions">Accordion</a>) - with multiple static examples displaying various
				configurations.
			</li>
		</ul>
		<p>Dynamic examples are preferred, but remember the overall goal is to showcase how the feature operates.</p>
		<!-- Usage -->
		<h3>Usage</h3>
		<p>
			In addition to examples, you should provide multiple use case demonstrations using <code>CodeBlock</code> snippets to help end developers
			understand how to make use of your new components and features.
		</p>
		<!-- Keyboard Interactions -->
		<h3>Keyboard Interactions</h3>
		<p>
			Finally, don't forget to document any relevant keyboard interactions for accessibility. These can easily be provided via the DocShell
			settings.
		</p>
	</section>
</div>
