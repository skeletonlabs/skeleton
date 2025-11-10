<script lang="ts">
	import { Collapsible } from '@skeletonlabs/skeleton-svelte';

	let open = $state(false);
</script>

<Collapsible {open} onOpenChange={(details) => (open = details.open)}>
	<Collapsible.Trigger class="btn preset-filled">{open ? 'Close' : 'Open'}</Collapsible.Trigger>
	<Collapsible.Content>
		The world dies over and over again, but the skeleton always gets up and walks. Every heart has its own skeletons. The bones of the
		skeleton which support the body can become the bars of the cage which imprison the spirit.
	</Collapsible.Content>
</Collapsible>
