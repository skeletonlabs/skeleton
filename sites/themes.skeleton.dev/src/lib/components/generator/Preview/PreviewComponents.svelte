<script lang="ts">
	import * as constants from '$lib/constants/generator';
	import { globals } from '$lib/state/generator.svelte';
	import ExampleChart from '../ExampleChart/ExampleChart.svelte';
	import CenterIcon from '@lucide/svelte/icons/align-center';
	import JustifyIcon from '@lucide/svelte/icons/align-justify';
	import LeftIcon from '@lucide/svelte/icons/align-left';
	import RightIcon from '@lucide/svelte/icons/align-right';
	import ArrowUpRightIcon from '@lucide/svelte/icons/arrow-up-right';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import CircleUserIcon from '@lucide/svelte/icons/circle-user';
	import MenuIcon from '@lucide/svelte/icons/menu';
	import SearchIcon from '@lucide/svelte/icons/search';
	import SkullIcon from '@lucide/svelte/icons/skull';
	import { AppBar, Avatar, SegmentedControl, Switch, Tabs } from '@skeletonlabs/skeleton-svelte';

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
			<Tabs value="planes">
				<Tabs.List>
					<Tabs.Trigger value="planes" class={currentPresets.hover}>Planes</Tabs.Trigger>
					<Tabs.Trigger value="trains" class={currentPresets.hover}>Trains</Tabs.Trigger>
					<Tabs.Trigger value="automobiles" class={currentPresets.hover}>Automobiles</Tabs.Trigger>
				</Tabs.List>
			</Tabs>
			<!-- Avatars -->
			<div class="grid grid-cols-6 gap-4">
				<!-- Source: https://avatar.iran.liara.run/ -->
				<Avatar>
					<Avatar.Image src="/images/male.png" class="grayscale" />
				</Avatar>
				<Avatar>
					<Avatar.Image src="/images/female.png" class="grayscale" />
				</Avatar>
				<Avatar>
					<Avatar.Fallback class={currentPresets.filled}>SS</Avatar.Fallback>
				</Avatar>
				<Avatar>
					<Avatar.Fallback class={currentPresets.tonal}>KK</Avatar.Fallback>
				</Avatar>
				<Avatar class="bg-transparent {currentPresets.outlined}">
					<Avatar.Fallback>
						<SkullIcon />
					</Avatar.Fallback>
				</Avatar>
				<Avatar class="bg-transparent preset-outlined-surface-200-800">
					<Avatar.Fallback>
						<SkullIcon />
					</Avatar.Fallback>
				</Avatar>
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
				<Switch name="example" defaultChecked={true}>
					<Switch.Control>
						<Switch.Thumb />
					</Switch.Control>
					<Switch.HiddenInput />
				</Switch>
				<div class="grid grid-cols-4 gap-4">
					<button type="button" class="btn preset-filled"><SkullIcon size={20} /></button>
					<button type="button" class="btn {currentPresets.filled}"><SkullIcon size={20} /></button>
					<button type="button" class="btn {currentPresets.tonal}"><SkullIcon size={20} /></button>
					<button type="button" class="btn {currentPresets.outlined}"><SkullIcon size={20} /></button>
				</div>
			</div>
			<!-- Segment Control -->
			<SegmentedControl defaultValue="left" class="w-full">
				<SegmentedControl.Indicator />
				<SegmentedControl.Item value="left" class="flex-1">
					<SegmentedControl.ItemText>
						<LeftIcon />
					</SegmentedControl.ItemText>

					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
				<SegmentedControl.Item value="center" class="flex-1">
					<SegmentedControl.ItemText>
						<CenterIcon />
					</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
				<SegmentedControl.Item value="right" class="flex-1">
					<SegmentedControl.ItemText>
						<RightIcon />
					</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
				<SegmentedControl.Item value="justify" class="flex-1">
					<SegmentedControl.ItemText>
						<JustifyIcon />
					</SegmentedControl.ItemText>
					<SegmentedControl.ItemHiddenInput />
				</SegmentedControl.Item>
			</SegmentedControl>
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
	<AppBar>
		<AppBar.Toolbar class="grid-cols-[auto_1fr_auto]">
			<AppBar.Lead>
				<button type="button" class="btn-icon btn-icon-lg hover:preset-tonal"><MenuIcon /></button>
			</AppBar.Lead>
			<AppBar.Headline>
				<p class="text-2xl">Headline</p>
			</AppBar.Headline>
			<AppBar.Trail>
				<button type="button" class="btn-icon hover:preset-tonal"><SearchIcon class="size-6" /></button>
				<button type="button" class="btn-icon hover:preset-tonal"><CalendarIcon class="size-6" /></button>
				<button type="button" class="btn-icon hover:preset-tonal"><CircleUserIcon class="size-6" /></button>
			</AppBar.Trail>
		</AppBar.Toolbar>
	</AppBar>
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
					<h2 class="h2 font-normal">1,337 <sup><ArrowUpRightIcon size={30} class="inline-block" /></sup></h2>
					<p>New users in 30 days.</p>
				</div>
			</div>
		</div>
	</div>
</div>
