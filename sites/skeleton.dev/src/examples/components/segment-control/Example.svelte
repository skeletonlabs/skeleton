<script lang="ts">
	import { Segment } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconLeft from '@lucide/svelte/icons/align-left';
	import IconCenter from '@lucide/svelte/icons/align-center';
	import IconRight from '@lucide/svelte/icons/align-right';
	import IconJustify from '@lucide/svelte/icons/align-justify';

	let align = $state('left');
</script>

<Segment name="align" value={align} onValueChange={(e) => (align = e.value)}>
	<Segment.Item value="left">
		<IconLeft />
	</Segment.Item>
	<Segment.Item value="center">
		<IconCenter />
	</Segment.Item>
	<Segment.Item value="right">
		<IconRight />
	</Segment.Item>
	<Segment.Item value="justify">
		<IconJustify />
	</Segment.Item>
</Segment>
