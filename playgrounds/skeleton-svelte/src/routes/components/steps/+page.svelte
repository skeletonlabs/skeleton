<script lang="ts">
	import { Steps } from '@skeletonlabs/skeleton-svelte';
</script>

<Steps defaultStep={0} count={3}>
	<Steps.List>
		<Steps.Item index={0}>
			<Steps.Trigger>
				<Steps.Indicator>1</Steps.Indicator>
				<Steps.ItemText>First</Steps.ItemText>
			</Steps.Trigger>
			<Steps.Separator />
		</Steps.Item>
		<Steps.Item index={1}>
			<Steps.Trigger>
				<Steps.Indicator>2</Steps.Indicator>
				<Steps.ItemText>Then</Steps.ItemText>
			</Steps.Trigger>
			<Steps.Separator />
		</Steps.Item>
		<Steps.Item index={2}>
			<Steps.Trigger>
				<Steps.Indicator>3</Steps.Indicator>
				<Steps.ItemText>Finally</Steps.ItemText>
			</Steps.Trigger>
		</Steps.Item>
	</Steps.List>

	<Steps.Content index={0}>First do this.</Steps.Content>
	<Steps.Content index={1}>Then do that.</Steps.Content>
	<Steps.Content index={2}>Almost there...</Steps.Content>
	<Steps.Content index={3}>All done!</Steps.Content>

	<Steps.Control>
		<Steps.PrevTrigger>Previous</Steps.PrevTrigger>
		<Steps.NextTrigger>Next</Steps.NextTrigger>
	</Steps.Control>
</Steps>
