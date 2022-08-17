<script lang="ts">
	import CodeBlock from '$lib/CodeBlock/CodeBlock.svelte';
	import Card from '$lib/Card/Card.svelte';
	import Button from '$lib/Button/Button.svelte';
	import Divider from '$lib/Divider/Divider.svelte';
	import DataTable from '$lib/Table/DataTable.svelte';
	import {
		dialogStore,
		type DialogAlert,
		type DialogConfirm,
		type DialogPrompt
	} from '$lib/Notifications/Stores';

	let valueConfirm: boolean = false;
	let valuePrompt: string = 'Skeleton';
	const loremText: string =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempora, aliquam dolore amet laudantium sed numquam cum dignissimos. Illum deleniti expedita nam architecto voluptatem quo.';

	// Example Dialogs
	function dialogAlertBasic(): void {
		const d: DialogAlert = {
			title: 'Welcome to Skeleton.',
			body: loremText
		};
		dialogStore.trigger(d);
	}
	function dialogAlertIcon(): void {
		const d: DialogAlert = {
			icon: '<svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 400V464C416 490.5 394.5 512 368 512H320V464C320 455.2 312.8 448 304 448C295.2 448 288 455.2 288 464V512H224V464C224 455.2 216.8 448 208 448C199.2 448 192 455.2 192 464V512H144C117.5 512 96 490.5 96 464V400C96 399.6 96 399.3 96.01 398.9C37.48 357.8 0 294.7 0 224C0 100.3 114.6 0 256 0C397.4 0 512 100.3 512 224C512 294.7 474.5 357.8 415.1 398.9C415.1 399.3 416 399.6 416 400V400zM160 192C124.7 192 96 220.7 96 256C96 291.3 124.7 320 160 320C195.3 320 224 291.3 224 256C224 220.7 195.3 192 160 192zM352 320C387.3 320 416 291.3 416 256C416 220.7 387.3 192 352 192C316.7 192 288 220.7 288 256C288 291.3 316.7 320 352 320z"/></svg>',
			title: 'Welcome to Skeleton.',
			body: loremText
		};
		dialogStore.trigger(d);
	}
	function dialogAlertMultiple(): void {
		dialogStore.trigger({ title: 'Dialog One.', body: loremText });
		dialogStore.trigger({ title: 'Dialog Two.', body: loremText });
		dialogStore.trigger({ title: 'Dialog Three.', body: loremText });
	}
	function dialogConfirm(): void {
		const d: DialogConfirm = {
			type: 'confirm',
			title: 'Please Confirm',
			body: 'Are you sure you wish to proceed?',
			result: (r: boolean) => {
				valueConfirm = r;
			}
		};
		dialogStore.trigger(d);
	}
	function dialogPrompt(): void {
		const d: DialogPrompt = {
			type: 'prompt',
			title: 'Enter Name',
			body: 'Provide your first name in the field below.',
			value: valuePrompt,
			result: (r: string) => {
				if (r) {
					valuePrompt = r;
				}
			}
		};
		dialogStore.trigger(d);
	}
	function dialogImage(): void {
		const d: DialogAlert = {
			title: 'Image Example',
			body: 'See the embedded image below.',
			image: 'https://i.imgur.com/5KWywzz.gif'
		};
		dialogStore.trigger(d);
	}
	function dialogHtml(): void {
		const d: DialogAlert = {
			title: 'HTML Example',
			body: 'See the embedded HTML content below.',
			html: `<div class="bg-green-500 p-4">Hello, Skeleton</div>`
		};
		dialogStore.trigger(d);
	}
	function dialogComponent(): void {
		const d: DialogAlert = {
			title: 'Component Example',
			body: 'See the embedded Svelte component below.',
			component: {
				element: Card,
				props: { background: 'bg-orange-500' },
				slot: '<p class="text-center">Hello, Skeleton!</p>'
			}
		};
		dialogStore.trigger(d);
	}

	// Props
	const tableProps: any = {
		headings: ['Prop', 'Type', 'Default', 'Description'],
		source: [
			[
				'backdrop',
				'string',
				'bg-surface-400/70 dark:bg-surface-900/70',
				'Provide classes to set the backdrop background color.'
			],
			['blur', 'string', 'backdrop-blur-none', 'Provide a class to add a backdrop blur.'],
			[
				'card',
				'string',
				'bg-surface-50 dark:bg-surface-700',
				'Provide classes to set the modal card element.'
			],
			['width', 'string', 'max-w-[640px]', 'Provide classes to set max modal width.'],
			['duration', 'number', '100', 'The animation in/out durations. Set to zero (0) for none.']
		]
	};
</script>

<div class="space-y-8">
	<!-- Header -->
	<header class="space-y-4">
		<h1>Dialogs</h1>
		<p>High priority overlay notification utilizing a dynamic queue system.</p>
	</header>

	<!-- Examples -->
	<section class="space-y-4">
		<nav class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			<Card class="grid grid-cols-1 gap-4">
				<h3>Alerts</h3>
				<div class="flex justify-between items-center space-x-4">
					<div>
						<h6>Basic</h6>
						<p>The simplest form of a dialog.</p>
					</div>
					<Button variant="ghost-primary" on:click={dialogAlertBasic}>Trigger</Button>
				</div>
				<div class="flex justify-between items-center space-x-4">
					<div>
						<h6>Icon</h6>
						<p>Shown with an optional icon.</p>
					</div>
					<Button variant="ghost-primary" on:click={dialogAlertIcon}>Trigger</Button>
				</div>
				<div class="flex justify-between items-center space-x-4">
					<div>
						<h6>Multiple</h6>
						<p>Queues a set of three dialogs.</p>
					</div>
					<Button variant="ghost-primary" on:click={dialogAlertMultiple}>Trigger</Button>
				</div>
			</Card>
			<Card class="grid grid-cols-1 gap-4">
				<h3>Embeds</h3>
				<div class="flex justify-between items-center space-x-4">
					<div>
						<h6>Image</h6>
						<p>Includes an embedded image.</p>
					</div>
					<Button variant="ghost-primary" on:click={dialogImage}>Trigger</Button>
				</div>
				<div class="flex justify-between items-center space-x-4">
					<div>
						<h6>HTML</h6>
						<p>Displays embedded an styled HTML markup.</p>
					</div>
					<Button variant="ghost-primary" on:click={dialogHtml}>Trigger</Button>
				</div>
				<div class="flex justify-between items-center space-x-4">
					<div>
						<h6>Component</h6>
						<p>Embeds and entire component.</p>
					</div>
					<Button variant="ghost-primary" on:click={dialogComponent}>Trigger</Button>
				</div>
			</Card>
			<Card>
				<div class="flex justify-between items-center space-x-4">
					<div class="space-y-2">
						<h3>Confirm</h3>
						<p>Dialog with confirm options. Response shown below.</p>
					</div>
					<Button variant="ghost-primary" on:click={dialogConfirm}>Trigger</Button>
				</div>
				<pre>Response: {JSON.stringify(valueConfirm, null, 2)}</pre>
			</Card>
			<Card class="space-y-4">
				<div class="flex justify-between items-center space-x-4">
					<div class="space-y-2">
						<h3>Prompt</h3>
						<p>Prompts the user to input a value. Response shown below.</p>
					</div>
					<Button variant="ghost-primary" on:click={dialogPrompt}>Trigger</Button>
				</div>
				<pre>Response: {JSON.stringify(valuePrompt, null, 2)}</pre>
			</Card>
		</nav>
	</section>

	<!-- Queue -->
	<!-- <pre>queue: {JSON.stringify($dialogStore, null, 2)}</pre> -->

	<Divider />

	<!-- Import Component -->
	<section class="space-y-4">
		<h2>Dialog Component</h2>
		<p>Add the following to your app's root component:</p>
		<CodeBlock language="js" code={`import { Dialog } from '@brainandbones/skeleton';`} />
		<CodeBlock
			language="html"
			code={`<Dialog backdrop="bg-primary-500/50" blur="backdrop-blur-sm" card="bg-primary-500" duration={250} />
        `.trim()}
		/>
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
		<p>
			To begin using dialogs, import the dialog store. This allows you to manipulate the dialog
			queue using the following methods.
		</p>
		<CodeBlock language="js" code={`import { dialogStore } from '@brainandbones/skeleton';`} />
		<h3>Trigger</h3>
		<p>The following method allows you to insert a new dialog into the dialog queue.</p>
		<CodeBlock language="js" code={`dialogStore.trigger(d); // see Dialog Variants below`} />
		<h3>Close</h3>
		<p>
			Allows you to close the current dialog by pruning the visible dialog from the top of the
			queue.
		</p>
		<CodeBlock language="js" code={`dialogStore.close();`} />
		<h3>Clear</h3>
		<p>Allows you to flush the entire dialog queue, returning it to an empty state.</p>
		<CodeBlock language="js" code={`dialogStore.clear();`} />
	</section>

	<Divider />

	<!-- Dialog Variants -->
	<section class="space-y-4">
		<h2>Dialog Variants</h2>
		<CodeBlock
			language="typescript"
			code={`import type { DialogAlert, DialogConfirm, DialogPrompt } from '@brainandbones/skeleton';`}
		/>
		<!-- Alert -->
		<div class="space-y-2">
			<h3>Alert</h3>
			<p>The simplest dialog option. Note the title and body can accept HTML.</p>
			<CodeBlock
				language="typescript"
				code={`
const d: DialogAlert = {
    title: 'Welcome to <strong>Skeleton</strong>.',
    body: 'This is a standard alert dialog.',
};
            `.trim()}
			/>
		</div>
		<!-- Confirm -->
		<div class="space-y-2">
			<h3>Confirm</h3>
			<p>
				Displays an additional "confirm" button and returns a boolean response of <code>false</code>
				for <em>cancel</em> and <code>true</code> for <em>confirm</em>.
			</p>
			<CodeBlock
				language="typescript"
				code={`
const d: DialogConfirm = {
    type: 'confirm',
    title: 'Please Confirm',
    body: 'Are you sure you wish to proceed?',
    result: (r: boolean) => { console.log(r); }
};
            `.trim()}
			/>
		</div>
		<!-- Prompt -->
		<div class="space-y-2">
			<h3>Prompt</h3>
			<p>
				Provides and additional input to prompt a value from the user. Returns a string value when
				the user taps <em>submit</em>.
			</p>
			<CodeBlock
				language="typescript"
				code={`
const d: DialogPrompt = {
    type: 'prompt',
    title: 'Enter Name',
    body: 'Provide your first name in the field below.',
    value: valuePrompt,
    result: (r: string) => { if (r) { console.log(r); }; }
};
            `.trim()}
			/>
		</div>
	</section>

	<Divider />

	<!-- Embeds -->
	<section class="space-y-4">
		<h2>Embeds</h2>
		<p>You may optionally extend any dialog with the following features.</p>
		<!-- Image -->
		<div class="space-y-2">
			<h3>Image</h3>
			<p>Allows you to insert an image within content of the dialog.</p>
			<CodeBlock
				language="typescript"
				code={`
const d: DialogAlert = {
    title: 'Image Example',
    body: 'See the embedded image below.',
    image: 'https://source.unsplash.com/random/480x320?skeleton'
};
            `.trim()}
			/>
		</div>
		<!-- HTML -->
		<div class="space-y-2">
			<h3>HTML</h3>
			<p>Allows you to insert HTML markup within the content of the dialog.</p>
			<CodeBlock
				language="typescript"
				code={`
const d: DialogAlert = {
    title: 'HTML Example',
    body: 'See the embedded HTML content below.',
    html: \`<div class="bg-green-500 p-4">Hello, Skeleton</div>\`
};
            `.trim()}
			/>
		</div>
		<!-- Component -->
		<div class="space-y-2">
			<h3>Component</h3>
			<p>
				Allows you to insert a dynamically-generated Svelte component within the content of the
				dialog. Note that only default slot content is supported at this time.
			</p>
			<CodeBlock language="js" code={`import { Card } from '@brainandbones/skeleton';`} />
			<CodeBlock
				language="typescript"
				code={`
const d: DialogAlert = {
    title: 'Component Example',
    body: 'See the embedded Svelte component below.',
    component: {
        element: Card,
        props: {background: 'bg-orange-500'},
        slot: '<p class="text-center">Hello, Skeleton!</p>'
    }
};
            `.trim()}
			/>
		</div>
	</section>

	<Divider />

	<!-- Debugging -->
	<section class="space-y-4">
		<h2>Debugging</h2>
		<h3>Log the Queue</h3>
		<p>
			Use the following to monitor the queue in your console as it updates. Note that Svelte store
			contents are only visible for the current logged line.
		</p>
		<CodeBlock
			language="js"
			code={`dialogStore.subscribe(() => { console.log($dialogStore); });`}
		/>
		<h3>Visualize the Queue</h3>
		<p>
			Use the following to display the queue in your UI. Note some properties may not display, such
			as response.
		</p>
		<CodeBlock language="html" code={`<pre>queue: {JSON.stringify($dialogStore, null, 2)}</pre>`} />
	</section>

	<!-- Accessibility -->
	<section class="space-y-4">
		<h2>Accessibility</h2>
		<p>
			Meets all dialog requirements for the <a
				href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/"
				target="_blank">ARIA Guidelines</a
			>.
		</p>
	</section>
</div>
