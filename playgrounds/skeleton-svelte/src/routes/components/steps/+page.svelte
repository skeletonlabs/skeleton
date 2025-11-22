<script lang="ts">
	import { Steps } from '@skeletonlabs/skeleton-svelte';
</script>

<Steps defaultStep={0} count={3} orientation="vertical" class="w-ful h-48">
	<Steps.List>
		<Steps.Item index={0}>
			<Steps.Trigger>
				<Steps.Indicator>1</Steps.Indicator> First
			</Steps.Trigger>
			<Steps.Separator />
		</Steps.Item>
		<Steps.Item index={1}>
			<Steps.Trigger>
				<Steps.Indicator>2</Steps.Indicator> Then
			</Steps.Trigger>
			<Steps.Separator />
		</Steps.Item>
		<Steps.Item index={2}>
			<Steps.Trigger>
				<Steps.Indicator>3</Steps.Indicator> Finally
			</Steps.Trigger>
		</Steps.Item>
	</Steps.List>

	<div class="flex flex-col grow">
		<Steps.Content class="grow" index={0}>First do this.</Steps.Content>
		<Steps.Content class="grow" index={1}>Then do that.</Steps.Content>
		<Steps.Content class="grow" index={2}>Almost there...</Steps.Content>
		<Steps.Content class="grow" index={3}>All done!</Steps.Content>
		<div class="flex justify-between items-center gap-2">
			<Steps.PrevTrigger class="btn preset-filled">Previous</Steps.PrevTrigger>
			<Steps.NextTrigger class="btn preset-filled">Next</Steps.NextTrigger>
		</div>
	</div>
</Steps>
