<script lang="ts">
	import LayoutPage from '$lib/layouts/LayoutPage/LayoutPage.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<LayoutPage>
	<!-- Breadcrumbs -->
	<ol class="breadcrumb">
		<li class="crumb"><a class="anchor" href="/docs/contributing">Contributing</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		<li>Sveld for Components</li>
	</ol>

	<!-- Header -->
	<header class="space-y-4">
		<h1 class="h1">Sveld for Components</h1>
		<!-- prettier-ignore -->
		<p>Skeleton implements <a class="anchor" href="https://github.com/carbon-design-system/sveld" target="_blank" rel="noreferrer">Sveld</a> to automatically document props, events, and slots from within each component. This is handled by appending <a class="anchor" href="https://tsdoc.org" target="_blank" rel="noreferrer">TSDoc</a> comments - a superset of JSDoc. This also enables <a class="anchor" href="https://code.visualstudio.com/docs/editor/intellisense" target="_blank" rel="noreferrer">IntelliSense</a> for end users.</p>
		<a class="btn variant-filled" href="https://github.com/carbon-design-system/sveld" target="_blank" rel="noreferrer">
			Sveld Documentation
		</a>
	</header>

	<hr />

	<!-- Components -->
	<section class="space-y-4">
		<h2 class="h2">Sveld for Props</h2>
		<a class="anchor" href="https://github.com/carbon-design-system/sveld#type" target="_blank" rel="noreferrer">View Documentation</a>
		<p>
			To document component properties, add TSDoc comments using the <code class="code">/** ... */</code> format. In most use cases Sveld will
			automatically parse relevant information - including the property name, type, value, and your description.
		</p>
		<CodeBlock
			language="js"
			code={`
/** Set the preferred search method. */
export let mode = 'fizzbuzz';
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
export let hover = getContext('hover');
`}
		/>
		<p>See the Accordion component for a reference using both parent and child components.</p>
	</section>

	<!-- Slots -->
	<section class="space-y-4">
		<h2 class="h2">Sveld for Slots</h2>
		<a class="anchor" href="https://github.com/carbon-design-system/sveld#slot" target="_blank" rel="noreferrer">View Documentation</a>
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
		<h2 class="h2">Sveld for Events</h2>
		<a class="anchor" href="https://github.com/carbon-design-system/sveld#event" target="_blank" rel="noreferrer">View Documentation</a>
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

	<!-- More -->
	<section class="space-y-4">
		<h2 class="h2">Implementing Sveld</h2>
		<!-- prettier-ignore -->
		<p>
            We cover how to implement the Sveld data in the <a href="/docs/contributing/documentation" class="anchor">Documentation Pages</a> section.
        </p>
	</section>
</LayoutPage>
