<script lang="ts">
	// State
	// Constants
	import * as constants from '$lib/constants/generator';
	import { globals } from '$lib/state/generator.svelte';
	// Components (generator)
	import ExampleChart from '../ExampleChart/ExampleChart.svelte';
	import IconArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
	// Icons
	import IconSkull from '@lucide/svelte/icons/skull';

	// State
	const currentPresets = $derived(constants.previewPresets[globals.activeColor]);
</script>

<div class="space-y-10">
	<!-- Swatches -->
	<div class="h-2 grid grid-cols-6 gap-1">
		<div class="bg-primary-500 h-full"></div>
		<div class="bg-secondary-500 h-full"></div>
		<div class="bg-tertiary-500 h-full"></div>
		<div class="bg-success-500 h-full"></div>
		<div class="bg-warning-500 h-full"></div>
		<div class="bg-error-500 h-full"></div>
	</div>
	<!-- Masonry -->
	<div class="grid grid-cols-1 2xl:grid-cols-3 gap-10">
		<!-- Column 1 -->
		<div class="space-y-10">
			<!-- Tabs -->
			<!-- <Tabs value="planes" fluid>
				{#snippet list()}
					<Tabs.Control value="planes" labelBase="btn {currentPresets.hover}">Planes</Tabs.Control>
					<Tabs.Control value="trains" labelBase="btn {currentPresets.hover}">Trains</Tabs.Control>
					<Tabs.Control value="automobiles" labelBase="btn {currentPresets.hover}">Automobiles</Tabs.Control>
				{/snippet}
			</Tabs> -->
			<!-- Avatars -->
			<div class="grid grid-cols-6 gap-4">
				<!-- Source: https://avatar.iran.liara.run/ -->
				<!-- <Avatar src="/images/male.png" name="" size="size-full" imageClasses="grayscale" />
				<Avatar src="/images/female.png" name="" size="size-full" imageClasses="grayscale" />
				<Avatar name="Skeleton" size="size-full" background={currentPresets.filled} />
				<Avatar name="Kevin" size="size-full" background={currentPresets.tonal} />
				<Avatar name="Kevin" size="size-full" background={currentPresets.outlined}><IconSkull size={20} /></Avatar>
				<Avatar name="Kevin" size="size-full" background="preset-outlined-surface-200-800"><IconSkull size={20} /></Avatar> -->
			</div>
			<!-- Alert -->
			<div class="card {currentPresets.tonal} grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[1fr_auto]">
				<div>
					<p class="font-bold">Success</p>
					<p>Task has been completed.</p>
				</div>
				<div class="flex gap-1">
					<button type="button" class="btn hover:preset-tonal">Dismiss</button>
				</div>
			</div>
			<!-- Blockquote -->
			<blockquote class="blockquote">
				First, have a definite, clear, practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends: wisdom,
				money, materials, and methods. Third, adjust all your means to that end.
			</blockquote>
		</div>
		<!-- Column 2 -->
		<form class="card shadow bg-surface-100-900 border border-surface-200-800 p-5 space-y-5">
			<fieldset class="space-y-2">
				<h2 class="h2">Login</h2>
				<p class="opacity-60">Select a login method below.</p>
			</fieldset>
			<fieldset class="space-y-2">
				<label class="label">
					<span class="label-text">Email</span>
					<input class="input {currentPresets.input}" type="text" placeholder="email@example.com" autocomplete="off" />
				</label>
				<label class="label">
					<span class="label-text">Password</span>
					<input class="input {currentPresets.input}" type="password" value="skeleton" autocomplete="off" />
				</label>
			</fieldset>
			<fieldset>
				<button type="button" class="btn {currentPresets.filled} w-full">Sign In Now</button>
			</fieldset>
			<hr class="hr" />
			<fieldset class="space-y-5">
				<button type="button" class="btn preset-outlined-surface-200-800 hover:preset-tonal w-full">Continue with Github</button>
			</fieldset>
		</form>
		<!-- Column 3 -->
		<div class="space-y-10">
			<!-- Badges -->
			<div class="grid grid-cols-4 gap-4">
				<span class="badge preset-filled">Badge</span>
				<span class="badge {currentPresets.filled}">Badge</span>
				<span class="badge {currentPresets.tonal}">Badge</span>
				<span class="badge {currentPresets.outlined}">Badge</span>
			</div>
			<!-- Buttons -->
			<div class="grid grid-cols-[auto_1fr] item-center gap-4">
				<!-- <Switch name="example" checked={true} controlActive={currentPresets.filled} /> -->
				<div class="grid grid-cols-4 gap-4">
					<button type="button" class="btn preset-filled"><IconSkull size={20} /></button>
					<button type="button" class="btn {currentPresets.filled}"><IconSkull size={20} /></button>
					<button type="button" class="btn {currentPresets.tonal}"><IconSkull size={20} /></button>
					<button type="button" class="btn {currentPresets.outlined}"><IconSkull size={20} /></button>
				</div>
			</div>
			<!-- Segment Control -->
			<!-- <Segment name="display" value="left" classes="w-full">
				<Segment.Item value="left" classes="w-full">
					<IconLeft />
				</Segment.Item>
				<Segment.Item value="center" classes="w-full">
					<IconCenter />
				</Segment.Item>
				<Segment.Item value="right" classes="w-full">
					<IconRight />
				</Segment.Item>
				<Segment.Item value="justify" classes="w-full">
					<IconJustify />
				</Segment.Item>
			</Segment> -->
			<!-- Cards -->
			<div class="space-y-4">
				<div class="card shadow bg-surface-100-900 border border-surface-200-800 grid grid-cols-[auto_1fr] items-center gap-4 p-4">
					<!-- <Avatar src="/images/male.png" name="" size="size-14" imageClasses="grayscale" /> -->
					<div>
						<p class="font-bold">Gregory Smith</p>
						<p class="opacity-60 text-xs">gregory.smith@example.com</p>
					</div>
				</div>
				<div class="card shadow bg-surface-100-900 border border-surface-200-800 grid grid-cols-[auto_1fr] items-center gap-4 p-4">
					<!-- <Avatar src="/images/female.png" name="" size="size-14" imageClasses="grayscale" /> -->
					<div>
						<p class="font-bold">Stephanie Collins</p>
						<p class="opacity-60 text-xs">stephanie.collins@example.com</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- App Bar -->
	<!-- <AppBar background="bg-surface-100-900" toolbarClasses="items-center" classes="shadow">
		{#snippet lead()}
			<IconSkull size={32} />
		{/snippet}
		{#snippet trail()}
			<nav class="flex items-center">
				<button type="button" class="btn hover:preset-tonal">Services</button>
				<button type="button" class="btn hover:preset-tonal">Prices</button>
				<button type="button" class="btn hover:preset-tonal">Blog</button>
				<button type="button" class="btn hover:preset-tonal">About</button>
			</nav>
			<button type="button" class="btn {currentPresets.filled}">Login</button>
		{/snippet}
	</AppBar> -->
	<!-- Masonry -->
	<div class="grid grid-cols-1 2xl:grid-cols-3 gap-10">
		<!-- Column 1: Image -->
		<div
			class="relative w-full shadow bg-surface-100-900 rounded-container overflow-hidden"
			style="background: url(https://picsum.photos/640/640) center center; backround-size: cover;"
		>
			<div class="absolute bottom-4 left-4 z-[2] flex justify-center items-center">
				<p class="text-4xl text-balance max-w-[250px] font-bold inline-block {currentPresets.contrast}">
					Example text over a static image.
				</p>
			</div>
			<div class="absolute top-0 left-0 z-[1] w-full h-full bg-gradient-to-b from-transparent {currentPresets.gradient}"></div>
		</div>
		<!-- Column 2: Chart -->
		<div class="card shadow bg-surface-100-900 border border-surface-200-800 p-5 space-y-2">
			<header>
				<small class="text-base">Earnings</small>
				<h2 class="h2 font-normal">$14,546</h2>
			</header>
			<ExampleChart preset={currentPresets.prop} />
		</div>
		<!-- Column 2: xxx -->
		<div class="card {currentPresets.tonal} p-5 grid grid-rows-[auto_1fr]">
			<header>
				<small class="text-base">Users</small>
			</header>
			<div class="spce-y-2 flex justify-center items-center scale-125">
				<div>
					<h2 class="h2 font-normal">1,337 <sup><IconArrowUpRight size={30} class="inline-block" /></sup></h2>
					<p>New users in 30 days.</p>
				</div>
			</div>
		</div>
	</div>
</div>
