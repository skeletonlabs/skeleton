<script lang="ts">
	import { Accordion } from '@/index';
</script>

<Accordion data-testid="root">
	<Accordion.Item value="item" data-testid="item">
		<Accordion.Heading data-testid="heading">
			<Accordion.Trigger data-testid="trigger"></Accordion.Trigger>
			<Accordion.Content data-testid="content"></Accordion.Content>
		</Accordion.Heading>
	</Accordion.Item>
</Accordion>
