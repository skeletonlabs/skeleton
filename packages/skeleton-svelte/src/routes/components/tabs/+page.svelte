<script lang="ts">
	import { Tabs } from '$lib/index.js';

	let group = $state('flight');
</script>

<h1 class="h1">Tabs</h1>
<Tabs
	onclick={() => console.log('onclick for all tabs.')}
	onkeypress={() => console.log('onkeypress for all tabs.')}
	onchange={(group) => console.log('onchange for all tabs, group:', group)}
>
	{#snippet list()}
		<Tabs.Control
			bind:group
			name="flight"
			onclick={() => console.log('onclick only flight tab.')}
			onkeypress={() => console.log('onkeypress only flight tab.')}
			onchange={(group) => console.log('onchange only flight tab, group:', group)}>Flight</Tabs.Control
		>
		<Tabs.Control bind:group name="hotel">Hotel</Tabs.Control>
		<Tabs.Control bind:group name="explore">Explore</Tabs.Control>
	{/snippet}
	{#snippet panel()}
		<Tabs.Panel bind:group value="flight">Flight Panel</Tabs.Panel>
		<Tabs.Panel bind:group value="hotel">Hotel Panel</Tabs.Panel>
		<Tabs.Panel bind:group value="explore">Explore Panel</Tabs.Panel>
	{/snippet}
</Tabs>

<h3 class="h3">With Icon</h3>
<Tabs>
	{#snippet list()}
		<Tabs.Control bind:group name="flight" title="flight">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-plane"
				><path
					d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
				/></svg
			>
			<span>Flight</span>
		</Tabs.Control>
		<Tabs.Control bind:group name="hotel" title="hotel">
			<span>Hotel</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-hotel"
				><path d="M10 22v-6.57" /><path d="M12 11h.01" /><path d="M12 7h.01" /><path d="M14 15.43V22" /><path
					d="M15 16a5 5 0 0 0-6 0"
				/><path d="M16 11h.01" /><path d="M16 7h.01" /><path d="M8 11h.01" /><path d="M8 7h.01" /><rect
					x="4"
					y="2"
					width="16"
					height="20"
					rx="2"
				/></svg
			>
		</Tabs.Control>
		<Tabs.Control bind:group name="explore" title="explore">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-box"
				><path
					d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
				/><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg
			>
			<span>Explore</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-box"
				><path
					d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
				/><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg
			>
		</Tabs.Control>
		<Tabs.Control bind:group name="skeleton" title="Skeleton">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-skull"
				><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /><path d="M8 20v2h8v-2" /><path d="m12.5 17-.5-1-.5 1h1z" /><path
					d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20"
				/></svg
			>
		</Tabs.Control>
	{/snippet}
	{#snippet panel()}
		<Tabs.Panel bind:group value="flight">Flight Panel</Tabs.Panel>
		<Tabs.Panel bind:group value="hotel">Hotel Panel</Tabs.Panel>
		<Tabs.Panel bind:group value="explore">Explore Panel</Tabs.Panel>
		<Tabs.Panel bind:group value="skeleton">Skeleton Panel</Tabs.Panel>
	{/snippet}
</Tabs>

<h3 class="h3">Stretched</h3>
<Tabs controlsClasses="w-full">
	{#snippet list()}
		<Tabs.Control bind:group name="flight">Flight</Tabs.Control>
		<Tabs.Control bind:group name="hotel">Hotel</Tabs.Control>
		<Tabs.Control bind:group name="explore">Explore</Tabs.Control>
	{/snippet}
	{#snippet panel()}
		<Tabs.Panel bind:group value="flight">Flight Panel</Tabs.Panel>
		<Tabs.Panel bind:group value="hotel">Hotel Panel</Tabs.Panel>
		<Tabs.Panel bind:group value="explore">Explore Panel</Tabs.Panel>
	{/snippet}
</Tabs>

<h3 class="h3">Justify center</h3>
<Tabs listJustify="justify-center">
	{#snippet list()}
		<Tabs.Control bind:group name="flight">Flight</Tabs.Control>
		<Tabs.Control bind:group name="hotel">Hotel</Tabs.Control>
		<Tabs.Control bind:group name="explore">Explore</Tabs.Control>
	{/snippet}
	{#snippet panel()}
		<Tabs.Panel bind:group value="flight">Flight Panel</Tabs.Panel>
		<Tabs.Panel bind:group value="hotel">Hotel Panel</Tabs.Panel>
		<Tabs.Panel bind:group value="explore">Explore Panel</Tabs.Panel>
	{/snippet}
</Tabs>

<h3 class="h3">Justify End</h3>
<Tabs listJustify="justify-end">
	{#snippet list()}
		<Tabs.Control bind:group name="flight">Flight</Tabs.Control>
		<Tabs.Control bind:group name="hotel">Hotel</Tabs.Control>
		<Tabs.Control bind:group name="explore">Explore</Tabs.Control>
	{/snippet}
	{#snippet panel()}
		<Tabs.Panel bind:group value="flight">Flight Panel</Tabs.Panel>
		<Tabs.Panel bind:group value="hotel">Hotel Panel</Tabs.Panel>
		<Tabs.Panel bind:group value="explore">Explore Panel</Tabs.Panel>
	{/snippet}
</Tabs>

<h3 class="h3">With focusable content</h3>
<Tabs>
	{#snippet list()}
		<Tabs.Control bind:group name="flight">Flight</Tabs.Control>
		<Tabs.Control bind:group name="hotel">Hotel</Tabs.Control>
		<Tabs.Control bind:group name="explore">Explore</Tabs.Control>
	{/snippet}
	{#snippet panel()}
		<Tabs.Panel bind:group value="flight">
			<button type="button" class="btn preset-filled-primary-500">Book a Flight</button>
		</Tabs.Panel>
		<Tabs.Panel bind:group value="hotel">
			<button type="button" class="btn preset-filled-primary-500">See Hotels near you</button>
		</Tabs.Panel>
		<Tabs.Panel bind:group value="explore">
			<button type="button" class="btn preset-filled-primary-500">Explore</button>
		</Tabs.Panel>
	{/snippet}
</Tabs>

<h3 class="h3">RTL</h3>
<div dir="rtl">
	<Tabs>
		{#snippet list()}
			<Tabs.Control bind:group name="flight">Flight</Tabs.Control>
			<Tabs.Control bind:group name="hotel">Hotel</Tabs.Control>
			<Tabs.Control bind:group name="explore">Explore</Tabs.Control>
		{/snippet}
		{#snippet panel()}
			<Tabs.Panel bind:group value="flight">Flight Panel</Tabs.Panel>
			<Tabs.Panel bind:group value="hotel">Hotel Panel</Tabs.Panel>
			<Tabs.Panel bind:group value="explore">Explore Panel</Tabs.Panel>
		{/snippet}
	</Tabs>
</div>
