<script lang="ts">
	import DocsShell from '$lib/layouts/DocsShell/DocsShell.svelte';
	import { DocsFeature, type DocsShellSettings } from '$lib/layouts/DocsShell/types';

	import { CodeBlock } from '@skeletonlabs/skeleton';

	// Docs Shell
	const settings: DocsShellSettings = {
		feature: DocsFeature.Utility,
		name: 'Persisted Store',
		description: 'An extended version of the Svelte writable store that automatically persists to local storage',
		imports: ['localStorageStore'],
		source: 'packages/skeleton/src/lib/utilities/LocalStorageStore'
	};
</script>

<DocsShell {settings}>
	<!-- Slot: Usage -->
	<svelte:fragment slot="usage">
		<!-- Alert -->
		<aside class="alert variant-ghost-error">
			<i class="fa-solid fa-triangle-exclamation text-4xl" />
			<div class="alert-message" data-toc-ignore>
				<h3 class="h3" data-toc-ignore>Deprecated</h3>
				<!-- prettier-ignore -->
				<p>
					This feature is being phased out as we transition to <a class="underline" href="https://github.com/skeletonlabs/skeleton/discussions/2375" target="_blank">Skeleton v3</a>. This will remain functional for all 2.x releases, but recommend migrating to <a class="underline" href="https://github.com/joshnuss/svelte-persisted-store" target="_blank">svelte-persisted-store</a> as soon as possible.
				</p>
			</div>
			<div class="alert-actions">
				<a class="btn variant-filled" href="https://github.com/skeletonlabs/skeleton/issues/2383" target="_blank"> Learn More </a>
			</div>
		</aside>
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
