<script lang="ts">
	import { Tabs } from '@/index.js';
</script>

<Tabs data-testid="root">
	<Tabs.List data-testid="list">
		<Tabs.Trigger value="tab" data-testid="trigger" />
		<Tabs.Indicator data-testid="indicator" />
	</Tabs.List>
	<Tabs.Content value="tab" data-testid="content" />
</Tabs>
