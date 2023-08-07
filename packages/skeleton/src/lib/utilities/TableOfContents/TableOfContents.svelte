<script lang="ts">
	import { tocStore } from './stores.js';

	/** Provide text for the title. Accepts HTML. */
	export let title: string = 'On This Page';

	// Local
	const indentMargins = {
		h2: '',
		h3: 'ml-4',
		h4: 'ml-8',
		h5: 'ml-12',
		h6: 'ml-16'
	};
</script>

{#if $tocStore.length}
	<nav class="list-nav">
		{#if title}<p class="font-bold mb-4 ml-3">{@html title}</p>{/if}
		<ul>
			{#each $tocStore as tocHeading}
				<!-- <pre class="pre">{JSON.stringify(tocHeading, null, 2)}</pre> -->
				<li class={indentMargins[tocHeading.element]}>
					<a href="#{tocHeading.id}">{tocHeading.text}</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
