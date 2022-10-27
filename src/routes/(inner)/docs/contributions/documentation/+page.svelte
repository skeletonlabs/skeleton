<script lang="ts">
	import Alert from '$lib/components/Alert/Alert.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte';
	import Crumb from '$lib/components/Breadcrumb/Crumb.svelte';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
</script>

<div class="page-container">
	<!-- Breadcrumbs -->
	<Breadcrumb>
		<Crumb href="/docs/contributions">Contributions</Crumb>
		<Crumb>Documentation</Crumb>
	</Breadcrumb>

	<!-- Header -->
	<header class="space-y-4">
		<div class="grid grid-cols-[1fr_auto] gap-4">
			<div class="space-y-2">
				<h1>Documentation</h1>
			</div>
			<div class="place-self-end">
				<a class="btn btn-filled-primary" href="https://github.com/carbon-design-system/sveld" target="_blank" rel="noreferrer">Sveld</a>
			</div>
		</div>
		<p>Good documentation on both the website and via Intellisense makes for a better developer experience and also helps to reduce the support load for our community.</p>
		<p>
			Fortunately, through tools like <a href="https://github.com/carbon-design-system/sveld" target="_blank" rel="noreferrer">Sveld</a> and
			<a href="https://tsdoc.org" target="_blank" rel="noreferrer">TSDoc</a>
			an increasing amount of this is automated for you for things like documenting the props, events and slots of your component. So lets jump into getting your component documented!
		</p>
	</header>
	<hr />
	<!-- TSDocs comments -->
	<section class="space-y-4">
		<h2>Adding TSDoc Annotations</h2>
		<p>
			The simplest way to start documenting your component is to add TSDoc style comment blocks immediately prior to your exported props. Where the intializer value of your prop is computed or derived
			from a context, an additional <code>@type</code> tag is needed to help Sveld determine the type.
		</p>
		<Alert>Sveld doesn't support generics at this point, so please note the alternate way we have specified the type within the <code>@type</code> tag.</Alert>
		<CodeBlock
			language="js"
			code={`// Props (Listbox)
/** Provide a writable store to maintain list selection.
 * @type {writeable(any) | writable(any[])}
 */
export let selected: Writable<any> = writable(undefined);
/** Provide classes to set vertical item spacing. */
export let space: string = 'space-y-1';`}
		/>
		<p>
			Slot documentation is provided by placing a TSDoc comment block at the top (by convention) of your script block. The default slot is not able to have a description applied at this point, but if
			it would be helpful to end developers to describe it, consider adding it to the description of the component.
		</p>
		<Alert
			>The hyphen between the name of the named slot and the description as well as the preceding <code>//Slots</code> comment block, are both critical for the Sveld parser to successfully extract the
			information.</Alert
		>
		<CodeBlock
			language="js"
			code={`//Slots
/**
 * @slot lead - Provide a leading element, such as an icon.
 * @slot content - Provide the alert message text.
 */`}
		/>
	</section>
	<p>Event documentation is created by adding a TSDoc block immediately prior to the dispatch of your event. Sveld will automatically detect forwarded events.</p>
	<CodeBlock
		language="js"
		code={`/** @event {{ event: DragEvent }} dragover - When a file is dragged over the component. */
dispatch('dragover', event);`}
		<hr
	/>
	<section class="space-y-4">
		<h2>Creating the doc page</h2>
		<p>Now that we have added all the information to the component, it's time to create the doc page that displays all of the information derived by Sveld.</p>
		<p>
			Grab the boilerplate template for a new documentation page from here <code>/src/routes/(inner)/template/+page.svelte</code> and copy it to the appropriate place with lowercase names and dashes
			for the enclosing folder e.g. <code>/routes/components/your-new-component/+page.svelte</code>.
		</p>
		<p>
			The key to getting all the Sveld information is to adjust the import of your component at the top of the file, ensuring that you preserve the <code>?raw&sveld</code> url params. Now we can pass
			it into the
			<code>DocsShellSettings.components</code> array.
		</p>
		<Alert>Sveld silently drops props that don't meet it's spec. Double check that they are all coming through as expected</Alert>
		<p>
			Unfortunately not everything can be automated, so for the rest of the information, you need to fill out the props on the <code>DocsShellSettings</code> be replacing the template defaults. It's
			also a good idea to check other doc pages to see a concrete implementation. You can get info on the <code>DocsShellSettings</code> props from <kbd>Ctrl/⌘ + i</kbd> in the code, or from
			referencing the
			<a href="https://github.com/Brain-Bones/skeleton/blob/dev/src/docs/DocsShell/types.ts" target="_blank" rel="noreferrer">source</a>.
		</p>
	</section>
	<section class="space-y-4">
		<h2>Creating examples</h2>
		<p>
			Examples generally come in two forms: a basic show of a component being used in various configurations e.g. <a href="components/accordions" target="_blank" rel="noreferrer">Accordion</a> OR
			dynamic demos e.g.
			<a href="/components/range-sliders">Range Sliders</a>. Which you choose is somewhat dependant on the component you have made, but at a minimum, you should show the common use cases, but
			preferably look into maintaining the same level of examples as similar components.
		</p>
		<p>You should also have <code>CodeBlock</code> snippets showing actual code to pair with your examples to help end developers understand how to use your component.</p>
	</section>
</div>
