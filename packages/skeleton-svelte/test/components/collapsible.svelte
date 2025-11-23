<script lang="ts">
	import { Collapsible } from '../../src/index.js';
</script>

<Collapsible data-testid="root">
	<Collapsible.Trigger data-testid="trigger">
		<Collapsible.Indicator data-testid="indicator" />
	</Collapsible.Trigger>
	<Collapsible.Content data-testid="content" />
</Collapsible>
