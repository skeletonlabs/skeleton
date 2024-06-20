<script lang="ts">
	import { Tabs } from '$lib/index.js';
	import Plane from 'lucide-svelte/icons/plane';
	import Hotel from 'lucide-svelte/icons/hotel';
	import Box from 'lucide-svelte/icons/box';

	let group = $state('flight');
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Tabs</h1>
	</header>
	<section class="space-y-4">
		<h2 class="h2">Preview</h2>
		<Tabs>
			{#snippet list()}
				<Tabs.Control
					bind:group
					name="flight"
					onclick={() => console.log('onclick')}
					onkeypress={() => console.log('onkeypress')}
					onchange={(group) => console.log('onchange, group:', group)}>Flight</Tabs.Control
				>
				<Tabs.Control bind:group name="hotel">Hotel</Tabs.Control>
				<Tabs.Control bind:group name="explore">Explore</Tabs.Control>
			{/snippet}
			{#snippet panels()}
				<Tabs.Panel bind:group value="flight">Flight Panel</Tabs.Panel>
				<Tabs.Panel bind:group value="hotel">Hotel Panel</Tabs.Panel>
				<Tabs.Panel bind:group value="explore">Explore Panel</Tabs.Panel>
			{/snippet}
		</Tabs>
	</section>
	<section class="space-y-4">
		<h2 class="h2">With Icon</h2>
		<Tabs>
			{#snippet list()}
				<Tabs.Control bind:group name="flight" title="flight">
					<Plane size={20} />
					<span>Flight</span>
				</Tabs.Control>
				<Tabs.Control bind:group name="hotel" title="hotel">
					<Hotel size={20} />
					<span>Hotel</span>
				</Tabs.Control>
				<Tabs.Control bind:group name="explore" title="explore">
					<Box size={20} />
					<span>Explore</span>
				</Tabs.Control>
			{/snippet}
			{#snippet panels()}
				<Tabs.Panel bind:group value="flight">Flight Panel</Tabs.Panel>
				<Tabs.Panel bind:group value="hotel">Hotel Panel</Tabs.Panel>
				<Tabs.Panel bind:group value="explore">Explore Panel</Tabs.Panel>
				<Tabs.Panel bind:group value="skeleton">Skeleton Panel</Tabs.Panel>
			{/snippet}
		</Tabs>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Icon Only</h2>
		<Tabs>
			{#snippet list()}
				<Tabs.Control bind:group name="flight" title="flight">
					<Plane size={20} />
				</Tabs.Control>
				<Tabs.Control bind:group name="hotel" title="hotel">
					<Hotel size={20} />
				</Tabs.Control>
				<Tabs.Control bind:group name="explore" title="explore">
					<Box size={20} />
				</Tabs.Control>
			{/snippet}
			{#snippet panels()}
				<Tabs.Panel bind:group value="flight">Flight Panel</Tabs.Panel>
				<Tabs.Panel bind:group value="hotel">Hotel Panel</Tabs.Panel>
				<Tabs.Panel bind:group value="explore">Explore Panel</Tabs.Panel>
			{/snippet}
		</Tabs>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Stretched</h2>
		<Tabs base="w-full">
			{#snippet list()}
				<Tabs.Control bind:group name="flight" width="w-full">Flight</Tabs.Control>
				<Tabs.Control bind:group name="hotel" width="w-full">Hotel</Tabs.Control>
				<Tabs.Control bind:group name="explore" width="w-full">Explore</Tabs.Control>
			{/snippet}
			{#snippet panels()}
				<Tabs.Panel bind:group value="flight">Flight Panel</Tabs.Panel>
				<Tabs.Panel bind:group value="hotel">Hotel Panel</Tabs.Panel>
				<Tabs.Panel bind:group value="explore">Explore Panel</Tabs.Panel>
			{/snippet}
		</Tabs>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Justify Center</h2>
		<Tabs base="w-full" listJustify="justify-center">
			{#snippet list()}
				<Tabs.Control bind:group name="flight">Flight</Tabs.Control>
				<Tabs.Control bind:group name="hotel">Hotel</Tabs.Control>
				<Tabs.Control bind:group name="explore">Explore</Tabs.Control>
			{/snippet}
			{#snippet panels()}
				<Tabs.Panel bind:group value="flight">Flight Panel</Tabs.Panel>
				<Tabs.Panel bind:group value="hotel">Hotel Panel</Tabs.Panel>
				<Tabs.Panel bind:group value="explore">Explore Panel</Tabs.Panel>
			{/snippet}
		</Tabs>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Justify End</h2>
		<Tabs base="w-full" listJustify="justify-end">
			{#snippet list()}
				<Tabs.Control bind:group name="flight">Flight</Tabs.Control>
				<Tabs.Control bind:group name="hotel">Hotel</Tabs.Control>
				<Tabs.Control bind:group name="explore">Explore</Tabs.Control>
			{/snippet}
			{#snippet panels()}
				<Tabs.Panel bind:group value="flight">Flight Panel</Tabs.Panel>
				<Tabs.Panel bind:group value="hotel">Hotel Panel</Tabs.Panel>
				<Tabs.Panel bind:group value="explore">Explore Panel</Tabs.Panel>
			{/snippet}
		</Tabs>
	</section>
	<section class="space-y-4">
		<h2 class="h2">Focusable Content</h2>
		<Tabs>
			{#snippet list()}
				<Tabs.Control bind:group name="flight">Flight</Tabs.Control>
				<Tabs.Control bind:group name="hotel">Hotel</Tabs.Control>
				<Tabs.Control bind:group name="explore">Explore</Tabs.Control>
			{/snippet}
			{#snippet panels()}
				<Tabs.Panel bind:group value="flight">
					<button type="button" class="btn preset-filled">Book a Flight</button>
				</Tabs.Panel>
				<Tabs.Panel bind:group value="hotel">
					<button type="button" class="btn preset-filled">See Hotels near you</button>
				</Tabs.Panel>
				<Tabs.Panel bind:group value="explore">
					<button type="button" class="btn preset-filled">Explore</button>
				</Tabs.Panel>
			{/snippet}
		</Tabs>
	</section>
	<section class="space-y-4">
		<h2 class="h2">RTL</h2>
		<div dir="rtl">
			<Tabs>
				{#snippet list()}
					<Tabs.Control bind:group name="flight">Flight</Tabs.Control>
					<Tabs.Control bind:group name="hotel">Hotel</Tabs.Control>
					<Tabs.Control bind:group name="explore">Explore</Tabs.Control>
				{/snippet}
				{#snippet panels()}
					<Tabs.Panel bind:group value="flight">Flight Panel</Tabs.Panel>
					<Tabs.Panel bind:group value="hotel">Hotel Panel</Tabs.Panel>
					<Tabs.Panel bind:group value="explore">Explore Panel</Tabs.Panel>
				{/snippet}
			</Tabs>
		</div>
	</section>
</div>
