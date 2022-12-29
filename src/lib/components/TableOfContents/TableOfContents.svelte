<script lang="ts">
	import { onMount } from 'svelte';
	import { element } from 'svelte/internal';

	export let container: string = '#page';
	export let offset: number = -90;

	// Local
	let headings: any = [];

	function scrollToHeading(id: string): void {
		const elemContainer: any = document.querySelector(container);
		const elemTarget: any = document.querySelector(`#${id}`);

		console.log(`#${id}`, elemTarget);

		var topPos = elemTarget?.offsetTop;
		// console.log(topPos);

		if (topPos && elemContainer) elemContainer.scrollTop = topPos + offset;
	}

	// Lifecycle
	onMount(() => {
		const elemContainer = document.querySelector(container);
		const elemHeadersList: any = elemContainer?.querySelectorAll('h2, h3');
		// Select only relevant headings
		elemHeadersList?.forEach((elem: HTMLElement, i: number) => {
			if (elem.classList.contains('sr-only')) return;
			// Generate Unique ID
			let id = elem.innerText
				.replaceAll(/[^a-zA-Z0-9 ]/g, '')
				.replaceAll(' ', '-')
				.toLowerCase();
			id += `-${i}`;
			// Apply ID to Heading Element
			elem.id = id;
			// Push heading object
			headings.push({ tag: elem.tagName, text: elem.innerText, id });
		});
		// Update Headings Array
		headings = [...headings];
	});
</script>

<!-- @component Allows you to quickly navigate the hierarchy of headings for the current page. -->

<div class="toc p-4 space-y-4">
	<nav class="list-none">
		<div class="font-bold">On This Page</div>
		{#each headings as heading}
			<!-- prettier-ignore -->
			<li
				class="cursor-pointer py-2 opacity-75 hover:opacity-100"
                class:ml-4={heading.tag === 'H3'}
				on:click={() => { scrollToHeading(heading.id); }}
                on:keypress
			>
				{heading.text}
			</li>
		{/each}
	</nav>
	<!-- <pre>{JSON.stringify(headings, null, 2)}</pre> -->
</div>
