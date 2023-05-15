<script lang="ts">
	import LayoutPage from '$docs/layouts/LayoutPage/LayoutPage.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<LayoutPage>
	<!-- Breadcrumbs -->
	<ol class="breadcrumb">
		<li class="crumb"><a class="anchor" href="/docs/contributing">Contributing</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Documentation</li>
	</ol>

	<!-- Header -->
	<header class="space-y-4">
		<h1 class="h1">Documentation</h1>
		<!-- prettier-ignore -->
		<p>
			Below is an introduction to automated documentation using <a class="anchor" href="https://github.com/carbon-design-system/sveld" target="_blank" rel="noreferrer">Sveld</a> within Skeleton. This covers the process of documenting each type of feature, then utilizing this data within the documentation pages.
		</p>
		<a class="btn variant-filled" href="https://github.com/carbon-design-system/sveld" target="_blank" rel="noreferrer"
			>View the Sveld Documentation</a
		>
	</header>

	<hr />

	<!-- Intro -->
	<p class="!text-xl">
		Sveld makes use of <a class="anchor" href="https://tsdoc.org" target="_blank" rel="noreferrer">TSDoc tags</a> (a superset of JSDocs) to
		generate component documentation from the component code itself. This comes with the benefit of providing additional
		<a class="anchor" href="https://code.visualstudio.com/docs/editor/intellisense" target="_blank" rel="noreferrer">Intellisense</a>
		features to aid developers implementing Skeleton components in tools like VS Code. Tap <kbd class="kbd">Ctrl/⌘ + i</kbd> within a component
		declaration to view IntelliSense recommendations.
	</p>

	<!-- Generating Documentation -->
	<section class="space-y-4">
		<h2 class="h2">Generating Documentation</h2>
		<h3 class="h3">Props</h3>
		<a class="btn variant-soft" href="https://github.com/carbon-design-system/sveld#type" target="_blank" rel="noreferrer">
			View Sveld Documentation
		</a>
		<p>
			To document component properties, add TSDoc comments using the <code class="code">/** ... */</code> format. In most use cases Sveld will
			automatically parse relevant information - including the property name, type, value, and your description.
		</p>
		<CodeBlock
			language="js"
			code={`
/** Set the preferred search method. */
export let mode = 'fuzz';
			`}
		/>
		<p>
			The <code class="code">CssClasses</code> class denotes properties that use Tailwind utility classes. Set this to aid IntelliSense features.
		</p>
		<CodeBlock
			language="js"
			code={`
import type { CssClasses } from '$lib';\n
/** Provide classes to set vertical item spacing. */
export let spacing: CssClasses = 'space-y-1';
			`}
		/>

		<p>
			For advanced or custom types, you may need to specify this information. This can be accomplished using the <code class="code"
				>@type</code
			> tag with block-style comments. Specify the type in curly brackets immediately following the tag.
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
			Ensure you document Context API <code class="code">getContext</code> values to provide Intellisense for child components. However, we intentionally
			exclude these values from the Props table.
		</p>
		<CodeBlock
			language="js"
			code={`
/** Provide classes to set the hover background color. */
export let hover: string = getContext('hover');
`}
		/>
		<p>See the Accordion component for a reference using both parent and child components.</p>
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h3 class="h3">Slots</h3>
		<a class="btn variant-soft" href="https://github.com/carbon-design-system/sveld#slot" target="_blank" rel="noreferrer">
			View Sveld Documentation
		</a>
		<p>
			Slot documentation is handle via TSDoc block comments at the top of your script tag (by convention). Note that Sveld does not
			currently support descriptions for the <code class="code">default</code> slot. Instead, we recommend you opt for a Usage tab example and
			instructions to illustrate the use of this slot.
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
		<aside class="alert variant-ghost-warning">
			<i class="fa-solid fa-lightbulb text-2xl" />
			<div class="alert-message">
				The leading <code class="code">// ...</code> comment is required for Sveld to parse the slot descriptions. This is not optional.
			</div>
		</aside>
	</section>

	<!-- Events -->
	<section class="space-y-4">
		<h3 class="h3">Events</h3>
		<a class="btn variant-soft" href="https://github.com/carbon-design-system/sveld#event" target="_blank" rel="noreferrer">
			View Sveld Documentation
		</a>
		<p>
			Sveld will automatically document forwarded events. You should not attempt to document these! However, dispatched events may be
			documented similar to props - with a TSDocs comment applied directly above the <code class="code">dispatch()</code> method. Provide the
			event response in curly brackets, followed by the event name, a dash, and then the event description.
		</p>
		<CodeBlock
			language="js"
			code={`
/** @event {{ event: DragEvent }} dragover - When a file is dragged over. */
dispatch('dragover', event);`}
		/>
	</section>

	<hr />

	<!-- Using Documentation -->
	<section class="space-y-4">
		<h2 class="h2">Using Documentation</h2>
		<!-- prettier-ignore -->
		<p>
			Now that our components are ready, it's time to create the documentation page that displays all of the information derived by Sveld.
			We provide a boilerplate template in <code class="code">/src/routes/(inner)/template/+page.svelte</code>. Copy this to the appropriate file route location and use our recommend naming convention (e.g. <code class="code">/routes/components/your-new-component/+page.svelte</code>).
		</p>
		<!-- Documentation Tables -->
		<h3 class="h3">Documentation Tables</h3>
		<p>To populate each documentation table we'll need to import our Sveld documentation data. Follow the instructions below:</p>
		<ol class="list-decimal list-outside ml-8 space-y-1">
			<li>
				Create a duplicate of your component import statement, e.g. <code class="code"
					>import Avatar from '$lib/components/Avatar/Avatar.svelte';</code
				>
			</li>
			<li>Rename the import reference using the convention: <code class="code">Avatar</code> -> <code class="code">sveldAvatar</code>.</li>
			<li>
				Append the following URL parameters to the end of your import statement, e.g.: <code class="code"
					>.../Accordion.svelte?raw&sveld</code
				>.
			</li>
			<li>
				Finally, pass the import reference to the DocShell settings like so: <code class="code"
					>components: [&#123; sveld: sveldAvatar &#125;]</code
				>
			</li>
		</ol>
		<!-- DocShell Settings -->
		<h3 class="h3">DocShell Settings</h3>
		<p>
			We can provide settings to our DocShell component using <code class="code">const settings: DocsShellSettings</code>. This allows you
			to populate all relevant settings on the page.
		</p>
		<section class="card variant-glass p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
			<div class="space-y-2">
				<p>Reference all available settings from the Typescript interface definition.</p>
			</div>
			<a
				class="btn variant-filled"
				href="https://github.com/skeletonlabs/skeleton/blob/dev/src/docs/layouts/DocsShell/types.ts"
				target="_blank"
				rel="noreferrer">View Available Settings</a
			>
		</section>
		<p>Below are existing documentation pages we recommend you reference:</p>
		<ul class="list-disc list-outside ml-8 space-y-1">
			<li><a class="anchor" href="/elements/buttons">Buttons</a> showcases how to document Tailwind Element classes.</li>
			<li><a class="anchor" href="/components/accordions">Accordion</a> makes use of most Component settings utilizing Sveld.</li>
			<li><a class="anchor" href="/components/paginators">Paginator</a> uses Dispatched Event documentation.</li>
		</ul>
		<!-- Examples -->
		<h3 class="h3">Examples</h3>
		<p>When showcasing examples of new features we typically handle this by one of two methods:</p>
		<ul class="list-disc list-outside ml-8 space-y-1">
			<li>
				<strong>Sandbox</strong> (e.g. <a class="anchor" href="/components/app-shell">App Shell</a>) - which provide a dynamic and
				interactive example that can be adjusted live.
			</li>
			<li>
				<strong>Static</strong> (e.g. <a class="anchor" href="/components/app-bar">App Bar</a>) - with multiple static examples displaying
				various configurations.
			</li>
		</ul>
		<p>Dynamic examples are preferred, but remember the overall goal is to showcase how the feature operates.</p>
		<!-- Usage -->
		<h3 class="h3">Usage</h3>
		<p>
			In addition to examples, you should provide multiple use case demonstrations using the <code class="code">Preview</code> component to help
			end developers understand how to make use of your new components and features.
		</p>
		<!-- Keyboard Interactions -->
		<h3 class="h3">Keyboard Interactions</h3>
		<p>Finally, don't forget to document relevant keyboard interactions for accessibility. Provide these to the DocShell settings.</p>
	</section>
</LayoutPage>
