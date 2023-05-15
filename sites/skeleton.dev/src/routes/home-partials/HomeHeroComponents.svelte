<script lang="ts">
	import { Avatar, ProgressRadial, RadioGroup, RadioItem, SlideToggle, LightSwitch } from '@skeletonlabs/skeleton';

	// Local
	let value = 0;
	let demoSlideToggle = true;
</script>

<!-- variant-ringed-error -->
<div class="aspect-video relative">
	<!-- Avatar -->
	<div class="anim-float-avatar absolute z-[1] top-[32%] left-[40%]">
		<Avatar src="https://source.unsplash.com/YOErFW8AfkI/128x128" width="w-32" shadow="shadow-xl" />
	</div>
	<!-- Progress Radial -->
	<div class="anim-float-progress anim-delay-200 absolute z-[1] top-[0%] left-[10%]">
		<div class="card variant-glass p-4">
			<ProgressRadial width="w-20" stroke={150} meter="stroke-primary-500" track="stroke-primary-500/30" />
		</div>
	</div>
	<!-- Search Input -->
	<div class="anim-float-search anim-delay-200 absolute z-[1] top-[-12%] left-[35%]">
		<label for="demo-search">
			<span>Search</span>
			<input class="input" type="search" name="demo-search" placeholder="Search..." />
		</label>
	</div>
	<!-- Radio Group -->
	<div class="anim-float-radio absolute z-[1] top-[20%] left-[70%]">
		<RadioGroup active="variant-filled-secondary">
			<RadioItem bind:group={value} name="justify" value={0}>Friendly</RadioItem>
			<RadioItem bind:group={value} name="justify" value={1}>Adaptive</RadioItem>
			<RadioItem bind:group={value} name="justify" value={2}>Customizable</RadioItem>
		</RadioGroup>
	</div>
	<!-- Card -->
	<div class="anim-float-card absolute z-[1] top-[60%] left-[65%]">
		<a class="block card card-hover p-4 space-y-2" href="https://twitter.com/SkeletonUI" target="_blank" rel="noreferrer">
			<div class="flex items-center gap-4">
				<Avatar src="https://pbs.twimg.com/profile_images/1587479781544759297/TINbbJLC_400x400.png" width="w-16" />
				<div>
					<p class="font-bold">Skeleton</p>
					<small class="opacity-50">@SkeletonUI</small>
				</div>
			</div>
			<p class="whitespace-nowrap">UI toolkit for Svelte and Tailwind.</p>
			<div class="flex just gap-4">
				<small><strong>50</strong> <span class="opacity-50">Following</span></small>
				<small><strong>500</strong> <span class="opacity-50">Followers</span></small>
			</div>
		</a>
	</div>
	<!-- LightSwitch -->
	<div class="anim-float-light-switch anim-delay-200 absolute z-[1] top-[98%] left-[45%]">
		<LightSwitch />
	</div>
	<!-- Button -->
	<div class="anim-float-button absolute z-[1] top-[78%] left-[15%]">
		<button class="btn variant-glass-secondary">
			<span>Design</span>
			<i class="fa-solid fa-spa" />
		</button>
	</div>
	<!-- Slide Toggle -->
	<div class="anim-float-toggle anim-delay-200 absolute z-[1] top-[55%] left-[5%]">
		<SlideToggle name="demo-toggle" bind:checked={demoSlideToggle} active="bg-primary-500" />
	</div>
	<!-- Icon Badge -->
	<div class="anim-float-badge absolute z-[1] top-[45%] left-[25%]">
		<span class="badge-icon variant-filled">
			<i class="fa-solid fa-skull" />
		</span>
	</div>
	<!-- BG Circles -->
	<div class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0">
		<div class="w-96 aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center">
			<div class="w-[240px] aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center" />
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
