<script lang="ts">
	import { Segment } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconLeft from 'lucide-svelte/icons/align-left';
	import IconCenter from 'lucide-svelte/icons/align-center';
	import IconRight from 'lucide-svelte/icons/align-right';
	import IconJustify from 'lucide-svelte/icons/align-justify';

	let align = $state('left');
</script>

<Segment>
	<Segment.Item bind:group={align} name="align" id="left" value="left">
		<IconLeft />
	</Segment.Item>
	<Segment.Item bind:group={align} name="align" id="center" value="center">
		<IconCenter />
	</Segment.Item>
	<Segment.Item bind:group={align} name="align" id="right" value="right">
		<IconRight />
	</Segment.Item>
	<Segment.Item bind:group={align} name="align" id="justify" value="justify">
		<IconJustify />
	</Segment.Item>
</Segment>
