<script lang="ts">
	import { Steps } from '@/index.js';
</script>

<Steps data-testid="root">
	<Steps.List data-testid="list">
		<Steps.Item index={0} data-testid="item">
			<Steps.Trigger data-testid="trigger">
				<Steps.Indicator data-testid="indicator" />
			</Steps.Trigger>
			<Steps.Separator data-testid="separator" />
		</Steps.Item>
	</Steps.List>
	<Steps.Content index={0} data-testid="content" />
	<Steps.PrevTrigger data-testid="prev-trigger" />
	<Steps.NextTrigger data-testid="next-trigger" />
</Steps>
