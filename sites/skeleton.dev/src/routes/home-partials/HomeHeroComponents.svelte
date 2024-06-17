<script lang="ts">
	import { getImageLink } from '$lib/images';
	import { Avatar, ProgressRadial, RadioGroup, RadioItem, SlideToggle, LightSwitch } from '@skeletonlabs/skeleton';

	// Local
	let value = 0;
	let demoSlideToggle = true;
</script>

<!-- variant-ringed-error -->
<div class="relative aspect-video">
	<!-- Avatar -->
	<div class="anim-float-avatar absolute left-[40%] top-[32%] z-[1]">
		<Avatar src={getImageLink({ id: 'YOErFW8AfkI', w: 128, h: 128 })} width="w-32" shadow="shadow-xl" />
	</div>
	<!-- Progress Radial -->
	<div class="anim-float-progress anim-delay-200 absolute left-[10%] top-[0%] z-[1]">
		<div class="card variant-glass p-4">
			<ProgressRadial width="w-20" stroke={150} meter="stroke-primary-500" track="stroke-primary-500/30" />
		</div>
	</div>
	<!-- Search Input -->
	<div class="anim-float-search anim-delay-200 absolute left-[35%] top-[-12%] z-[1]">
		<label for="demo-search">
			<span>Search</span>
			<input class="input" type="search" name="demo-search" placeholder="Search..." />
		</label>
	</div>
	<!-- Radio Group -->
	<div class="anim-float-radio absolute left-[70%] top-[20%] z-[1]">
		<RadioGroup active="variant-filled-secondary">
			<RadioItem bind:group={value} name="justify" value={0}>Friendly</RadioItem>
			<RadioItem bind:group={value} name="justify" value={1}>Adaptive</RadioItem>
			<RadioItem bind:group={value} name="justify" value={2}>Customizable</RadioItem>
		</RadioGroup>
	</div>
	<!-- Card -->
	<div class="anim-float-card absolute left-[65%] top-[60%] z-[1]">
		<a class="card card-hover block space-y-2 p-4" href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer">
			<div class="flex items-center gap-4">
				<Avatar src="https://pbs.twimg.com/profile_images/1587479781544759297/TINbbJLC_400x400.png" width="w-16" />
				<div>
					<p class="font-bold">Skeleton</p>
					<small class="opacity-50">@SkeletonUI</small>
				</div>
			</div>
			<p class="whitespace-nowrap">UI toolkit for Svelte and Tailwind.</p>
			<div class="just flex gap-4">
				<small><strong>50</strong> <span class="opacity-50">Following</span></small>
				<small><strong>500</strong> <span class="opacity-50">Followers</span></small>
			</div>
		</a>
	</div>
	<!-- LightSwitch -->
	<div class="anim-float-light-switch anim-delay-200 absolute left-[45%] top-[98%] z-[1]">
		<LightSwitch />
	</div>
	<!-- Button -->
	<div class="anim-float-button absolute left-[15%] top-[78%] z-[1]">
		<button class="btn variant-glass-secondary">
			<span>Design</span>
			<i class="fa-solid fa-spa" />
		</button>
	</div>
	<!-- Slide Toggle -->
	<div class="anim-float-toggle anim-delay-200 absolute left-[5%] top-[55%] z-[1]">
		<SlideToggle name="demo-toggle" bind:checked={demoSlideToggle} active="bg-primary-500" />
	</div>
	<!-- Icon Badge -->
	<div class="anim-float-badge absolute left-[25%] top-[45%] z-[1]">
		<span class="badge-icon variant-filled">
			<i class="fa-solid fa-skull" />
		</span>
	</div>
	<!-- BG Circles -->
	<div class="absolute left-[50%] top-[50%] z-0 -translate-x-[50%] -translate-y-[50%]">
		<div class="flex aspect-square w-96 items-center justify-center rounded-full border-2 border-black/5 dark:border-white/5">
			<div class="flex aspect-square w-[240px] items-center justify-center rounded-full border-2 border-black/5 dark:border-white/5" />
		</div>
	</div>
</div>

<style lang="postcss">
	.anim-float-avatar {
		animation: float-up 13s ease-in-out infinite;
	}
	.anim-float-progress {
		animation: float-down 15s ease-in-out infinite;
	}
	.anim-float-search {
		animation: float-up 14s ease-in-out infinite;
		animation-delay: 3s;
	}
	.anim-float-radio {
		animation: float-down 17s ease-in-out infinite;
	}
	.anim-float-card {
		animation: float-up 12s ease-in-out infinite;
	}
	.anim-float-light-switch {
		animation: float-down 18s ease-in-out infinite;
		animation-delay: 2s;
	}
	.anim-float-button {
		animation: float-up 15s ease-in-out infinite;
	}
	.anim-float-toggle {
		animation: float-down 13s ease-in-out infinite;
		animation-delay: 5s;
	}
	.anim-float-badge {
		animation: float-up 15s ease-in-out infinite;
	}
	/* prettier-ignore */
	@keyframes float-up {
		0% { transform: translateY(0px); }
		50% { transform: translateY(-20px); }
		100% { transform: translateY(0px); }
	}
	/* prettier-ignore */
	@keyframes float-down {
		0% { transform: translateY(0px); }
		50% { transform: translateY(20px); }
		100% { transform: translateY(0px); }
	}
</style>
