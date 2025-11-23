<script lang="ts">
	import { Portal, type PortalRootProps } from '../../src/index.js';

	const props: Omit<PortalRootProps, 'children'> = $props();
</script>

<div data-testid="parent">
	<Portal {...props}>
		<div data-testid="child"></div>
	</Portal>
</div>
