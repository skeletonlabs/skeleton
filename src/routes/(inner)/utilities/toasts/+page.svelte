<script lang="ts">
	import { DataTable, Divider, toastStore, type ToastMessage } from '@brainandbones/skeleton';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	// Trigger Examples
	function toastBasic(): void {
		const t: ToastMessage = { message: 'Hello and welcome to Skeleton.' };
		toastStore.trigger(t);
	}
	function toastLong(): void {
		const t: ToastMessage = {
			message:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequuntur, blanditiis ducimus perspiciatis minima odit repellat rem iste incidunt laborum amet culpa officia maiores eum qui asperiores.',
			autohide: false
		};
		toastStore.trigger(t);
	}
	function toastMultiple(): void {
		toastStore.trigger({ message: 'Message will auto-hide after 5 seconds.' });
		toastStore.trigger({ message: 'Message will remain until dismissed.', autohide: false });
		toastStore.trigger({ message: 'Message will last 2 second.', timeout: 2000 });
	}
	function toastAction(): void {
		const t: ToastMessage = {
			message: 'Message contains a unique action.',
			autohide: false,
			button: {
				label: 'Greeting',
				action: () => {
					alert('Hello, Skeleton');
				}
			}
		};
		toastStore.trigger(t);
	}

	// Props
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Values', 'Description'],
		source: [
			['background', 'string', 'bg-primary-500', 'class', 'Provide classes to set background color.'],
			['position', 'string', 'b', 't | b | tr | tl | bl | br', 'Set top/bottom/left/right positioning.'],
			['variant', 'string', 'ghost', 'variant reference', 'Provide a <a href="/components/buttons">button variant</a> reference.'],
			['duration', 'number', '100', 'integer', 'The duration of the fly in/out animation.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Toasts</h1>
		<p>Simple notifications utilizing a dynamic queue system.</p>
	</header>

	<!-- Examples -->
	<div class="card card-body">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full md:max-w-[320px] lg:max-w-[640px] mx-auto">
			<button class="btn btn-ghost" on:click={toastBasic}>Short</button>
			<button class="btn btn-ghost" on:click={toastLong}>Long</button>
			<button class="btn btn-ghost" on:click={toastMultiple}>Multiple</button>
			<button class="btn btn-ghost" on:click={toastAction}>Action</button>
		</div>
	</div>

	<Divider />

	<!-- Import Component -->
	<section class="space-y-4">
		<h2>Toast Component</h2>
		<p>Add the following to your app's root layout so that the component stays in scope for whenever you might trigger it:</p>
		<CodeBlock language="javascript" code={`import { Toast } from '@brainandbones/skeleton';`} />
		<CodeBlock language="html" code={`<Toast background="bg-accent-500" position="tr" variant="filled" duration={250} />`} />
	</section>

	<!-- Properties -->
	<section class="space-y-4">
		<h3>Properties</h3>
		<DataTable headings={tableProps.headings} source={tableProps.source} />
	</section>

	<Divider />

	<!-- Methods -->
	<section class="space-y-4">
		<h2>Methods</h2>
		<p>To begin using toasts, import the toast store. This allows you to manipulate the toast queue using the following methods.</p>
		<CodeBlock language="javascript" code={`import { toastStore } from '@brainandbones/skeleton';`} />
		<h3>Trigger</h3>
		<p>The following method allows you to insert a new toast into the toast queue.</p>
		<CodeBlock language="javascript" code={`toastStore.trigger(t); // see Toast Settings below`} />
		<h3>Close</h3>
		<p>Allows you to close the current toast by pruning the visible toast from the top of the queue.</p>
		<CodeBlock language="javascript" code={`toastStore.close();`} />
		<h3>Clear</h3>
		<p>Allows you to flush the entire toast queue, returning it to an empty state.</p>
		<CodeBlock language="javascript" code={`toastStore.clear();`} />
	</section>

	<Divider />

	<!-- Toast Settings -->
	<section class="space-y-4">
		<h2>Toast Settings</h2>
		<CodeBlock language="typescript" code={`import type { ToastMessage } from '@brainandbones/skeleton';`} />
		<p>Several settings are available to a toast. These allow you to set the message, enabled/disabled auto-hide, set the autohide timeout. As well as provide an extra action button.</p>
		<CodeBlock
			language="typescript"
			code={`
const t: ToastMessage = {
    message: 'Your Message Here',
    // Optional:
    autohide: true, 
    timeout: 5000,
    button: { label: 'Greeting', action: () => { alert('Hello, Skeleton'); }}
};
        `}
		/>
	</section>

	<Divider />

	<!-- Queue -->
	<section class="space-y-4">
		<h2>Debugging</h2>
		<h3>Log the Queue</h3>
		<p>Use the following to monitor the queue in your console as it updates. Note that Svelte store contents are only visible for the current logged line.</p>
		<CodeBlock language="js" code={`toastStore.subscribe(() => { console.log($toastStore); });`} />
		<h3>Visualize the Queue</h3>
		<p>Use the following to display the queue in your UI.</p>
		<CodeBlock language="html" code={`<pre>queue: {JSON.stringify($toastStore, null, 2)}</pre>`} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<p>
			Meets all alert requirements for the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/alert/" target="_blank">ARIA Guidelines</a>.
		</p>
	</section>
</div>
