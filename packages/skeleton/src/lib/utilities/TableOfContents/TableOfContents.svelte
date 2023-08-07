<script lang="ts">
	import { tocStore } from './stores.js';

	/** Provide text for the title. Accepts HTML. */
	export let title = 'On This Page';
	/** Provide classes to set the active link styles. */
	export let active = '!variant-filled-primary';

	// Local
	const indentMargins = {
		h2: '',
		h3: 'ml-4',
		h4: 'ml-8',
		h5: 'ml-12',
		h6: 'ml-16'
	};
	let activeId = '';

	function setActiveId(id: string): void {
		activeId = id;
	}
</script>

{#if $tocStore.length}
	<nav class="list-nav">
		{#if title}<p class="font-bold mb-4 ml-3">{@html title}</p>{/if}
		<ul>
			{#each $tocStore as tocHeading}
				<li class={indentMargins[tocHeading.element]}>
					<!-- prettier-ignore -->
					<a
						href="#{tocHeading.id}"
						class={tocHeading.id === activeId ? active : ''}
						on:click={() => { setActiveId(tocHeading.id) }}
					>
						{tocHeading.text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
