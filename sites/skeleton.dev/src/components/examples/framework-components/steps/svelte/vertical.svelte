<script lang="ts">
	import { Steps } from '@skeletonlabs/skeleton-svelte';

	const steps = [
		{ title: 'First', content: 'First do this.' },
		{ title: 'Then', content: 'Then do that.' },
		{ title: 'Finally', content: 'Almost done...' },
	];
</script>

<Steps orientation="vertical" count={steps.length} class="w-full h-48">
	<Steps.List>
		{#each steps as item, index}
			<Steps.Item {index}>
				<Steps.Trigger>
					<Steps.Indicator>{index + 1}</Steps.Indicator>
					{item.title}
				</Steps.Trigger>
				{#if index < steps.length - 1}
					<Steps.Separator />
				{/if}
			</Steps.Item>
		{/each}
	</Steps.List>
	<div class="flex flex-col grow">
		{#each steps as item, index}
			<Steps.Content {index} class="grow">
				{item.content}
			</Steps.Content>
		{/each}
		<Steps.Content index={steps.length} class="grow">All done!</Steps.Content>
		<div class="flex justify-between items-center gap-2">
			<Steps.PrevTrigger class="btn preset-filled">Back</Steps.PrevTrigger>
			<Steps.NextTrigger class="btn preset-filled">Next</Steps.NextTrigger>
		</div>
	</div>
</Steps>
