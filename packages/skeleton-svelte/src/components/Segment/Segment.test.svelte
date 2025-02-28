<script lang="ts">
	import { Segment } from '../../index.js';
	interface Props {
		childProps?: Record<string, unknown>;
	}
	let { childProps }: Props = $props();
</script>

<Segment name="align" value="left">
	<Segment.Item value="left" {...childProps}>left</Segment.Item>
	<Segment.Item value="center" {...childProps}>center</Segment.Item>
	<Segment.Item value="right" {...childProps}>right</Segment.Item>
	<Segment.Item value="justify" disabled {...childProps}>justify</Segment.Item>
</Segment>
