<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let contributors: any[];
</script>

<div class="space-y-10">
	<!-- Info -->
	<div class="space-y-4 text-center">
		<h2>Built by Awesome People.</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
		<!-- Premium Sponsors -->
		<div class="card variant-soft p-10 space-y-10">
			<div class="grid grid-cols-[1fr_auto] gap-4 items-center">
				<h2>Skeleton Labs</h2>
				<a class="btn variant-filled" href="https://skeletonlabs.co/" target="_blank" rel="noreferrer">
					<span>Learn More</span>
					<i class="fa-solid fa-arrow-up-right-from-square" />
				</a>
			</div>
			<hr />
			<div class="grid grid-cols-2 gap-4">
				<div class="flex flex-col items-center gap-2">
					<Avatar src="https://avatars.githubusercontent.com/u/1509726?v=4" width="w-32" />
					<h4>Chris Simmons</h4>
					<p class="opacity-75">Co-founder and core maintainer.</p>
				</div>
				<div class="flex flex-col items-center gap-2">
					<Avatar src="https://avatars.githubusercontent.com/u/10255430?v=4" width="w-32" />
					<h4>Trey Weir</h4>
					<p class="opacity-75">Co-founder and business relations.</p>
				</div>
			</div>
		</div>
		<!-- Info -->
		<div class="space-y-4 text-center lg:text-left">
			<div class="grid grid-cols-6 gap-2 max-w-[480px] mx-auto">
				{#each contributors as c}
					<a href={c.html_url} target="_blank" rel="noreferrer" title={c.login}>
						<Avatar src={c.avatar_url} width="w-full" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
