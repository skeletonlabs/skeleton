<script lang="ts">
	import Popover from '$lib/components/Popover/Popover.svelte';
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Popovers</h1>
	</header>
	<section class="space-y-4">
		<Popover>
			{#snippet trigger()}
				<span class="btn preset-filled">Click Me</span>
			{/snippet}
			{#snippet content()}
				<div class="card bg-surface-200-800 p-4 space-y-4 max-w-[320px]">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima aut odio maxime placeat quia eligendi distinctio temporibus
						enim nesciunt voluptas repellat, error impedit nam architecto beatae labore facilis ipsam commodi.
					</p>
				</div>
			{/snippet}
		</Popover>
	</section>
</div>
