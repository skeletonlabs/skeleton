<script lang="ts">
	// Components
	import Card from '$lib/components/Card/Card.svelte';
	import Badge from '$lib/components/Badge/Badge.svelte';
	// Utilities
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';
	// Actions
	import { clipboard } from '$lib/actions/Clipboard/clipboard';

	let divCopyTarget: HTMLElement;
</script>

<div class="!mt-0 space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<div class="flex justify-start items-center space-x-4">
			<h1>Copy To Clipboard</h1>
		</div>
		<p>
			A Svelte action to copy data to the clipboard
		</p>
	</header>
	<CodeBlock language="ts" code={"import { clipboard } from '$lib/actions/copyToClipboard';"}/>
	<!-- Examples -->
	<Card slotBody="flex flex-row items-center justify-between px-10">
		<button use:clipboard={{target:'divCopyTarget'}} class="btn bg-primary-500">Copy</button>
		<div data-copy-target="divCopyTarget">Text to be copied using data-copy-target="id"</div>
		<button use:clipboard={{target:'divCopyTarget'}} class="btn bg-primary-500">Copy</button>
		<CodeBlock language="ts" code={`let someVar:string = 'this will be copied`} />
	</Card>

	<!-- Usage -->
	<section class="space-y-4">
		<h2>Usage</h2>
		<h4>Import Filter Components</h4>
		<p>Add within scope of your filtered element. For global scope, add the following to your app's root component. Only import the filters you plan to use.</p>
		<CodeBlock language="javascript" code={`import { Emerald, BlueNight, /* ... */  } from '@brainandbones/skeleton';`} />
		<CodeBlock language="html" code={`<Emerald />\n<BlueNight />`} />
		<p>You'll then need to apply the filter using one of the two techuniques listed below.</p>
		<h3>Option 1: Use the Svelte Action</h3>
		<p>
			Use the following <a href="https://svelte.dev/tutorial/actions" target="_blank">Svelte action</a> to to filter any element.
		</p>
		<CodeBlock language="javascript" code={`import { filter } from '@brainandbones/skeleton';`} />
		<CodeBlock language="html" code={`<img src={myImageSrc} use:filter={'BlueNight'}>`} />
		<h3>Option 2: Using Only CSS</h3>
		<p>Alternatively you may apply filters using CSS. This is what the action does for you. Note the hash mark is required.</p>
		<CodeBlock language="html" code={`<img src={myImageSrc} style="filter: url({'#Emerald'})">`} />
	</section>
</div>
