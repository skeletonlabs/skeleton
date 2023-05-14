<script lang="ts">
	import DocsShell from '$docs/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$docs/layouts/DocsShell/types';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Local Storage Store',
		description:
			'An extended version of the <a class="anchor" href="https://svelte.dev/tutorial/writable-stores" target="_blank" rel="noreferrer">Svelte writable store</a> that includes pub/sub to local storage.',
		imports: ['localStorageStore'],
		source: 'utilities/LocalStorageStore'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<section class="space-y-4">
			<p>
				The first parameter <code class="code">storeExample</code> is the local storage key name. The second parameter is the initial value of
				the store.
			</p>
			<CodeBlock language="ts" code={`import type { Writable } from 'svelte/store';`} />
			<CodeBlock language="ts" code={`const storeExample: Writable<string> = localStorageStore('storeExample', 'initialValueHere');`} />
			<p>
				Operates as a standard Svelte writable store but with the added benefit of automatic persistence via <a
					class="anchor"
					href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
					target="_blank"
					rel="noreferrer">Local Storage</a
				>.
			</p>
			<CodeBlock
				language="ts"
				code={`
import { get } from 'svelte/store';

// Subscribe to the store
storeExample.subscribe(() => {});

// Update the value
storeExample.update(() => {});

// Set the value
storeExample.set(() => {});

// Read the value
get(storeExample);

// Read value with automatic subscription
$storeExample
`}
			/>
		</section>
		<!-- Attribution -->
		<section class="space-y-4">
			<h2 class="h2">Attribution</h2>
			<p>
				<a class="anchor" href="https://github.com/joshnuss/svelte-local-storage-store" target="_blank" rel="noreferrer">Source code</a>
				provided courtesy of
				<a class="anchor" href="https://github.com/joshnuss" target="_blank" rel="noreferrer">Joshua Nussbaum</a>. Please consider
				<a class="anchor" href="https://github.com/sponsors/joshnuss" target="_blank" rel="noreferrer">sponsoring his work</a>.
			</p>
		</section>
	</svelte:fragment>
</DocsShell>
