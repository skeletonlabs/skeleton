<script lang="ts">
	import SegmentControl from '$lib/components/Segment/SegmentControl.svelte';
	import Segment from '$lib/components/Segment/Segment.svelte';
	// Icons
	import IconLeft from 'lucide-svelte/icons/align-left';
	import IconCenter from 'lucide-svelte/icons/align-center';
	import IconRight from 'lucide-svelte/icons/align-right';
	import IconJustify from 'lucide-svelte/icons/align-justify';

	// State
	let align = $state('left');
	let size = $state('sm');
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Segment Control</h1>
	</header>
	<section class="space-y-4">
		<pre class="pre">{align}</pre>
		<SegmentControl>
			<Segment bind:group={align} name="align" id="left" value="left">
				<IconLeft />
			</Segment>
			<Segment bind:group={align} name="align" id="center" value="center">
				<IconCenter />
			</Segment>
			<Segment bind:group={align} name="align" id="right" value="right">
				<IconRight />
			</Segment>
			<Segment bind:group={align} name="align" id="justify" value="justify">
				<IconJustify />
			</Segment>
		</SegmentControl>
	</section>
	<section class="space-y-4">
		<pre class="pre">{size}</pre>
		<SegmentControl>
			<Segment bind:group={size} name="size" id="sm" value="sm">sm</Segment>
			<Segment bind:group={size} name="size" id="md" value="md">md</Segment>
			<Segment bind:group={size} name="size" id="lg" value="lg">lg</Segment>
			<Segment bind:group={size} name="size" id="disabled" value="disabled" disabled>xl (disabled)</Segment>
		</SegmentControl>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Vertical</h2>
		<pre class="pre">{size}</pre>
		<SegmentControl flexDirection="flex-col">
			<Segment bind:group={size} name="size" id="sm" value="sm">sm</Segment>
			<Segment bind:group={size} name="size" id="md" value="md">md</Segment>
			<Segment bind:group={size} name="size" id="lg" value="lg">lg</Segment>
			<Segment bind:group={size} name="size" id="disabled" value="disabled" disabled>xl (disabled)</Segment>
		</SegmentControl>
	</section>
</div>
