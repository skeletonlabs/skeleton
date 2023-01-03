<script lang="ts">
	import DocsShell from '$docs/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/DocsShell/types';
	import CodeBlock from '$lib/utilities/CodeBlock/CodeBlock.svelte';

	import type { ToastSettings } from '$lib/utilities/Toast/types';
	import { toastStore } from '$lib/utilities/Toast/stores';

	// @ts-expect-error sveld import
	import sveldToast from '$lib/utilities/Toast/Toast.svelte?raw&sveld';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Toasts',
		description: 'Simple notifications utilizing a dynamic queue system.',
		imports: ['Toast', 'toastStore'],
		types: ['ToastSettings'],
		source: 'utilities/Toast',
		components: [{ sveld: sveldToast }]
	};

	// Triggers Toasts ---

	function toastBasic(): void {
		const t: ToastSettings = { message: '👋 Hello and welcome to Skeleton.' };
		toastStore.trigger(t);
	}

	function toastParagraph(): void {
		const t: ToastSettings = {
			message:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequuntur, blanditiis ducimus perspiciatis minima odit repellat rem iste incidunt laborum amet culpa officia maiores eum qui asperiores.',
			autohide: false
		};
		toastStore.trigger(t);
	}

	function toastAction(): void {
		const t: ToastSettings = {
			message: 'Message contains a unique action.',
			autohide: false,
			action: {
				label: 'Greeting',
				response: () => alert('Hello, Skeleton')
			}
		};
		toastStore.trigger(t);
	}

	function toastMultiple(): void {
		toastStore.trigger({ message: 'Message will auto-hide after 2 seconds.', timeout: 2000 });
		toastStore.trigger({ message: 'Message will remain until dismissed.', autohide: false });
		toastStore.trigger({ message: 'Message will auto-hide after 5 seconds.' });
	}

	function toastPreset(preset: ToastSettings['preset']): void {
		const t: ToastSettings = {
			message: `This message uses the <u>${preset}</u> preset.`,
			preset
		};
		toastStore.trigger(t);
	}
	function toastStyled(): void {
		const t: ToastSettings = {
			message: 'This message has custom styles.',
			classes: 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white'
		};
		toastStore.trigger(t);
	}
</script>

<DocsShell {settings}>
	<!-- Slot: Sandbox -->
	<svelte:fragment slot="sandbox">
		<div class="space-y-4">
			<section class="card p-4">
				<div class="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-[700px] mx-auto">
					<button class="btn btn-ghost-surface" on:click={toastBasic}>Basic</button>
					<button class="btn btn-ghost-surface" on:click={toastParagraph}>Paragraph</button>
					<button class="btn btn-ghost-surface" on:click={toastAction}>Action</button>
					<button class="btn btn-ghost-surface" on:click={toastMultiple}>Multiple</button>
					<button class="btn btn-ghost-surface" on:click={toastStyled}>Styled</button>
				</div>
			</section>
			<section class="card p-4">
				<!-- prettier-ignore -->
				<div class="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-[700px] mx-auto">
					<button class="btn btn-ghost-surface" on:click={() => {toastPreset('primary')}}>Primary</button>
					<button class="btn btn-ghost-surface" on:click={() => {toastPreset('secondary')}}>Secondary</button>
					<button class="btn btn-ghost-surface" on:click={() => {toastPreset('tertiary')}}>Tertiary</button>
					<button class="btn btn-ghost-surface" on:click={() => {toastPreset('success')}}>Success</button>
					<button class="btn btn-ghost-surface" on:click={() => {toastPreset('warning')}}>Warning</button>
					<button class="btn btn-ghost-surface" on:click={() => {toastPreset('error')}}>Error</button>
				</div>
			</section>
		</div>
	</svelte:fragment>

	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				Import and add a single instance of the Toast component in your app's root layout. Since this is in global scope it will be possible
				to reuse this feature throughout your entire application.
			</p>
			<CodeBlock language="html" code={`<Toast />`} />
		</section>
		<!-- Toast Store -->
		<section class="space-y-4">
			<h2>Toast Store</h2>
			<p>The Modal Store acts as a queue for your toast messages.</p>
			<CodeBlock
				language="ts"
				code={`import { toastStore } from '@skeletonlabs/skeleton';
			`}
			/>
			<!-- Trigger -->
			<h3>Trigger</h3>
			<p>To add a message to the queue, use the <code>toastStore.trigger()</code> method and pass a toast settings object.</p>
			<CodeBlock
				language="ts"
				code={`
function triggerToast(): void {
	const t: ToastSettings = {
		message: '👋 Hello and welcome to Skeleton.'
		// Optional: Presets for primary | secondary | tertiary | warning
		preset: 'primary',
		// Optional: The auto-hide settings
		autohide: true,
		timeout: 5000,
		// Optional: Adds a custom action button
		action: {
			label: 'Greeting',
			response: () => alert('Hello, Skeleton')
		}
	};
	toastStore.trigger(t);
}
			`}
			/>
			<!-- Clear -->
			<h3>Clear</h3>
			<p>Use <code>toastStore.clear()</code> to clear the entire toast store queue.</p>
			<CodeBlock language="ts" code={`toastStore.clear();`} />
			<!-- Debug -->
			<h3>Debug</h3>
			<p>Use the following technique to visualize the contents of the store for debugging.</p>
			<CodeBlock language="html" code={`<pre>queue: {JSON.stringify($toastStore, null, 2)}</pre>`} />
		</section>
		<!-- Styling -->
		<section class="space-y-4">
			<h2>Styling</h2>
			<h3>Presets</h3>
			<p>
				We provide a quick set of preset styles for any theme colors. The <code>success</code> preset is always green, while
				<code>error</code> is always red.
			</p>
			<CodeBlock
				language="ts"
				code={`
const t: ToastSettings = {
	message: 'This message will have a colorful background.',
	// Available presets include:
	// primary | secondary | tertiary | warning | success | error
	preset: 'warning',
};
			`}
			/>
			<h3>Custom Styles</h3>
			<p>
				To customize an individual toast, append <code>classes</code> to your settings and add CSS classes you wish to be applied to the toast.
			</p>
			<CodeBlock
				language="ts"
				code={`
const t: ToastSettings = {
	message: 'This message will have a colorful background.',
	// Add your custom classes here:
	classes: 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white'
};
			`}
			/>
		</section>
		<section class="space-y-4">
			<h2>SvelteKit SSR Warning</h2>
			<p>
				Be aware that there are <a
					href="https://github.com/sveltejs/kit/discussions/4339#discussioncomment-2384978"
					target="_blank"
					rel="noreferrer">known issues when using Svelte stores with SSR</a
				>, such as our toast store. To prevent these issues please avoid the use of the toast store within any SvelteKit Load function.
				Likewise, if you need a toast to open on route initilization we advise triggering the <code>open()</code> method after the
				<a href="https://kit.svelte.dev/docs/modules#$app-environment" target="_blank" rel="noreferrer"
					>SvelteKit Browser environment context</a
				> is available.
			</p>
			<CodeBlock
				language="typescript"
				code={`
import { browser } from '$app/environment';\n
if (browser) toastStore.trigger({...});
				`}
			/>
			<p>
				For additional context please see this <a href="https://github.com/skeletonlabs/skeleton/pull/580" target="_blank" rel="noreferrer"
					>thread</a
				>.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
