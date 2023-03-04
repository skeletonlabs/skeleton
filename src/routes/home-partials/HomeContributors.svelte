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
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
		<!-- Skeleton Labs -->
		<div class="col-span-2">
			<div class="card variant-glass-secondary p-4 grid grid-cols-2 gap-4 md:gap-10 items-center">
				<!-- Info -->
				<div class="space-y-4 text-right">
					<h2>Skeleton Labs</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta perspiciatis quisquam impedit cupiditate rerum error. Eaque
						voluptate reprehenderit non, odio officia, rerum commodi saepe vero odit omnis facere.
					</p>
					<a href={'#'} class="btn variant-filled">Learn More</a>
				</div>
				<!-- Members -->
				<div class="space-y-4">
					<div class="card variant-soft p-4 md:py-16 text-center">
						<p>Chris Simmons</p>
					</div>
					<div class="card variant-soft p-4 md:py-16 text-center">
						<p>Trey Weir</p>
					</div>
				</div>
			</div>
		</div>
		<!-- Contributors -->
		<div class="grid grid-cols-6 gap-2 max-w-[480px] mx-auto">
			{#each contributors as c}
				<a href={c.html_url} target="_blank" rel="noreferrer" title={c.login}>
					<Avatar src={c.avatar_url} width="w-full" />
				</a>
			{/each}
		</div>
	</div>
</div>
