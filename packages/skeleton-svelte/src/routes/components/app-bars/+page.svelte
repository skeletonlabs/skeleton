<script lang="ts">
	import AppBar from '$lib/components/AppBar/AppBar.svelte';
</script>

<h1 class="h1">App Bar</h1>

<AppBar>
	{#snippet lead()}
		<span>💀</span>
		<span>Skeleton</span>
	{/snippet}
	Skeleton
	{#snippet trail()}
		<span>Skeleton</span>
		<span>💀</span>
	{/snippet}
</AppBar>

<h3 class="h3">Headline</h3>
<AppBar headlineBase="text-center">
	{#snippet lead()}
		<span>💀</span>
		<span>Skeleton</span>
	{/snippet}
	{#snippet trail()}
		<span>Skeleton</span>
		<span>💀</span>
	{/snippet}
	{#snippet headline()}
		<h1 class="h1">Headline</h1>
	{/snippet}
</AppBar>

<h3 class="h3">Sticky</h3>
<div class="flex flex-col space-y-4 max-h-64 overflow-y-auto">
	<AppBar classes="sticky top-0">
		{#snippet lead()}
			<span>💀</span>
			<span>Skeleton</span>
		{/snippet}
		Skeleton
		{#snippet trail()}
			<span>Skeleton</span>
			<span>💀</span>
		{/snippet}
	</AppBar>
	<div>First line of the sticky AppBar</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
	<div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus animi nam porro cum dignissimos! Quibusdam asperiores aliquam reiciendis eligendi!</div>
</div>