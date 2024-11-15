<script lang="ts">
	import { Segment } from '$lib/index.js';
	let { childProps = {} } = $props();
	let chilPropsSpread = childProps ?? {};
</script>

<Segment name="align" value="left">
	<Segment.Item value="left" {...chilPropsSpread}>left</Segment.Item>
	<Segment.Item value="center" {...chilPropsSpread}>center</Segment.Item>
	<Segment.Item value="right" {...chilPropsSpread}>right</Segment.Item>
	<Segment.Item value="justify" disabled {...chilPropsSpread}>justify</Segment.Item>
</Segment>
