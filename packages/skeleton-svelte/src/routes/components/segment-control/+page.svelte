<script lang="ts">
	import { Segment } from '$lib/index.js';
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
	</section>
	<section class="space-y-4">
		<pre class="pre">{size}</pre>
		<Segment>
			<Segment.Item bind:group={size} name="size" id="sm" value="sm">sm</Segment.Item>
			<Segment.Item bind:group={size} name="size" id="md" value="md">md</Segment.Item>
			<Segment.Item bind:group={size} name="size" id="lg" value="lg" disabled>lg</Segment.Item>
		</Segment>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Vertical</h2>
		<pre class="pre">{size}</pre>
		<Segment flexDirection="flex-col">
			<Segment.Item bind:group={size} name="size" id="sm" value="sm">sm</Segment.Item>
			<Segment.Item bind:group={size} name="size" id="md" value="md">md</Segment.Item>
			<Segment.Item bind:group={size} name="size" id="lg" value="lg" disabled>lg</Segment.Item>
		</Segment>
	</section>
</div>
