<script lang="ts">
	// State
	import { globals, settingsCore } from '$lib/state/generator.svelte';
	// Constants
	import * as constants from '$lib/constants/generator';
	// Components (Skeleton)
	import { AppBar, Avatar, Segment, Switch, Tabs } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconSkull from 'lucide-svelte/icons/skull';
	import IconLeft from 'lucide-svelte/icons/align-left';
	import IconCenter from 'lucide-svelte/icons/align-center';
	import IconRight from 'lucide-svelte/icons/align-right';
	import IconJustify from 'lucide-svelte/icons/align-justify';

	// State
	const currentPresets = $derived(constants.previewPresets[globals.activeColor]);
</script>

<div class="space-y-10">
	<!-- Masonary -->
	<div class="grid grid-cols-1 2xl:grid-cols-3 gap-10">
		<!-- Column 1 -->
		<div class="space-y-10">
			<!-- Tabs -->
			<Tabs value="planes" fluid>
				{#snippet list()}
					<Tabs.Control value="planes" labelBase="btn {currentPresets.hover}">Planes</Tabs.Control>
					<Tabs.Control value="trains" labelBase="btn {currentPresets.hover}">Trains</Tabs.Control>
					<Tabs.Control value="automobiles" labelBase="btn {currentPresets.hover}">Automobiles</Tabs.Control>
				{/snippet}
			</Tabs>
			<!-- Avatars -->
			<div class="grid grid-cols-6 gap-4">
				<!-- Source: https://avatar.iran.liara.run/ -->
				<Avatar src="/images/male.png" name="" size="size-full" imageClasses="grayscale" />
				<Avatar src="/images/female.png" name="" size="size-full" imageClasses="grayscale" />
				<Avatar name="Skeleton" size="size-full" background={currentPresets.filled} />
				<Avatar name="Kevin" size="size-full" background={currentPresets.tonal} />
				<Avatar name="Kevin" size="size-full" background={currentPresets.outlined}><IconSkull size={24} /></Avatar>
				<Avatar name="Kevin" size="size-full" background="preset-outlined-surface-200-800"><IconSkull size={24} /></Avatar>
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
		<form class="card bg-surface-500/5 border border-surface-200-800 p-5 space-y-5">
			<fieldset class="space-y-2">
				<h2 class="h2">Signup</h2>
				<p class="opacity-60">Get started for free.</p>
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
				<button type="button" class="btn {currentPresets.filled} w-full">Create Account</button>
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
				<Switch name="example" checked={true} controlActive={currentPresets.filled} />
				<div class="grid grid-cols-4 gap-4">
					<button type="button" class="btn preset-filled"><IconSkull /></button>
					<button type="button" class="btn {currentPresets.filled}"><IconSkull /></button>
					<button type="button" class="btn {currentPresets.tonal}"><IconSkull /></button>
					<button type="button" class="btn {currentPresets.outlined}"><IconSkull /></button>
				</div>
			</div>
			<!-- Segment Control -->
			<Segment name="display" value="left" classes="w-full">
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
			</Segment>
			<!-- Cards -->
			<div class="space-y-4">
				<div class="card bg-surface-500/5 border border-surface-200-800 grid grid-cols-[auto_1fr] items-center gap-4 p-4">
					<Avatar src="/images/male.png" name="" size="size-14" imageClasses="grayscale" />
					<div>
						<p class="font-bold">Gregory Smith</p>
						<p class="opacity-60 type-scale-1">gregory.smith@example.com</p>
					</div>
				</div>
				<div class="card bg-surface-500/5 border border-surface-200-800 grid grid-cols-[auto_1fr] items-center gap-4 p-4">
					<Avatar src="/images/female.png" name="" size="size-14" imageClasses="grayscale" />
					<div>
						<p class="font-bold">Stephanie Collins</p>
						<p class="opacity-60 type-scale-1">stephanie.collins@example.com</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- App Bar -->
	<AppBar toolbarClasses="items-center" classes="shadow">
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
	</AppBar>
	<!-- Masonary -->
	<div class="relative w-full bg-surface-100-900 rounded-container overflow-hidden">
		<div class="absolute bottom-0 left-0 right-0 z-[2] flex justify-center items-center">
			<div class="text-center">
				<h1 class="type-scale-11 font-bold inline-block {currentPresets.filled} px-5">
					{settingsCore.name ? settingsCore.name : 'Skeleton'}
				</h1>
			</div>
		</div>
		<div class="absolute top-0 left-0 z-[1] w-full h-full bg-gradient-to-br from-black/0 {currentPresets.gradient}"></div>
		<img class="grayscale" src="https://picsum.photos/1200/320" width="1200px" height="320px" alt="preview" />
	</div>
</div>
