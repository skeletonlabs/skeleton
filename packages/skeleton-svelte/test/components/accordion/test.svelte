<script lang="ts">
	import { Accordion } from '@/index.js';
</script>

<Accordion data-testid="root">
	<Accordion.Item value="item" data-testid="item">
		<Accordion.ItemTrigger data-testid="item-trigger">
			<Accordion.ItemIndicator data-testid="item-indicator" />
		</Accordion.ItemTrigger>
		<Accordion.ItemContent data-testid="item-content" />
	</Accordion.Item>
</Accordion>
