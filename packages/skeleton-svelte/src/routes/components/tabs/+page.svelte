<script lang="ts">
	import { Tabs } from '$lib/index.js';

	let group = $state('flight');

	let icons = {
		flight:
			'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane size-4" ><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /></svg>',
		hotel:
			'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hotel size-4" ><path d="M10 22v-6.57" /><path d="M12 11h.01" /><path d="M12 7h.01" /><path d="M14 15.43V22" /><path d="M15 16a5 5 0 0 0-6 0" /><path d="M16 11h.01" /><path d="M16 7h.01" /><path d="M8 11h.01" /><path d="M8 7h.01" /><rect x="4" y="2" width="16" height="20" rx="2" /></svg>',
		cube: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box size-4" ><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>'
	};
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
					{@html icons.flight}
					<span>Flight</span>
				</Tabs.Control>
				<Tabs.Control bind:group name="hotel" title="hotel">
					{@html icons.hotel}
					<span>Hotel</span>
				</Tabs.Control>
				<Tabs.Control bind:group name="explore" title="explore">
					{@html icons.cube}
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
					{@html icons.flight}
				</Tabs.Control>
				<Tabs.Control bind:group name="hotel" title="hotel">
					{@html icons.hotel}
				</Tabs.Control>
				<Tabs.Control bind:group name="explore" title="explore">
					{@html icons.cube}
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
				<Tabs.Control bind:group name="flight" classes="w-full">Flight</Tabs.Control>
				<Tabs.Control bind:group name="hotel" classes="w-full">Hotel</Tabs.Control>
				<Tabs.Control bind:group name="explore" classes="w-full">Explore</Tabs.Control>
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
