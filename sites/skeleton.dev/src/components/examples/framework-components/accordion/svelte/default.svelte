<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import { slide } from 'svelte/transition';

	/**
	 * Attribution
	 * @see https://www.healthline.com/health/fun-facts-about-the-skeletal-system#8-More-than-half-your-bones-are-in-your-hands-and-feet
	 */
	const items = [
		{
			id: '1',
			title: 'Your skeleton is made of more than 200 bones',
			description:
				'Inside your body are 206 bones. Each bone plays a very important role in making all the mechanics of your body function properly. If a bone is broken, all the bones around it can’t perform their duty properly.',
		},
		{
			id: '2',
			title: 'The smallest bone in the body is in your ear',
			description:
				'The stapes, a bone in your inner ear, is the smallest of all your bones. This bone is also sometimes called the stirrup because of its Y shape. Together with the anvil and hammer bones, the stapes helps translate sounds you hear into waves your brain can understand.',
		},
		{
			id: '3',
			title: 'One bone isn’t connected to any other bones',
			description:
				'The hyoid bone, which is in your throat, is the only bone that doesn’t connect to a joint. The hyoid is responsible for holding your tongue in place.',
		},
	];
</script>

<Accordion>
	{#each items as item, i (item)}
		{#if i !== 0}
			<hr class="hr" />
		{/if}
		<Accordion.Item value={item.id}>
			<h3>
				<Accordion.ItemTrigger class="font-bold">{item.title}</Accordion.ItemTrigger>
			</h3>
			<Accordion.ItemContent>
				{#snippet element(attributes)}
					{#if !attributes.hidden}
						<div {...attributes} transition:slide>
							{item.description}
						</div>
					{/if}
				{/snippet}
			</Accordion.ItemContent>
		</Accordion.Item>
	{/each}
</Accordion>
