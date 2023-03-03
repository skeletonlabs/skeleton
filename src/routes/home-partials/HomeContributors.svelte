<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let contributors: any[];
</script>

<div class="space-y-4 md:space-y-10">
	<!-- Info -->
	<div class="space-y-4 text-center">
		<h2>Built by Awesome People.</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</div>
	<div class="flex gap-4 md:gap-10 items-start">
		<!-- Skeleton Labs -->
		<div class="flex-[2]">
			<div class="card variant-glass-secondary p-4 space-y-4">
				<h2>Skeleton Labs</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta perspiciatis quisquam impedit cupiditate rerum error. Eaque
					voluptate reprehenderit non, odio officia, rerum commodi saepe vero odit omnis facere, porro cumque.
				</p>
				<a href={'#'} class="btn variant-filled">Learn More</a>
			</div>
		</div>
		<!-- Contributors -->
		<div class="flex-1 grid grid-cols-6 gap-2">
			{#each contributors as c}
				<a href={c.html_url} target="_blank" rel="noreferrer" title={c.login}>
					<Avatar src={c.avatar_url} width="w-full" />
				</a>
			{/each}
		</div>
	</div>
</div>
