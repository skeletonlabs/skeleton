<script lang="ts">
	import Code from '../code/code.svelte';
	import DecorStripes from '../layout/decor-stripes.svelte';
	import CopyIcon from '@lucide/svelte/icons/copy';
	import LockIcon from '@lucide/svelte/icons/lock';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import SunIcon from '@lucide/svelte/icons/sun';
	import ThumbsUpIcon from '@lucide/svelte/icons/thumbs-up';
	import { SegmentedControl } from '@skeletonlabs/skeleton-svelte';

	interface Props {
		title?: string;
		code?: string;
		lang?: string;
		class?: string;
	}

	let { title = '(Title Missing)', code = '(Code Missing)', lang = 'plaintext', class: className }: Props = $props();

	// ******* If Plus Unlocked ******
	// TRUE = unlocked, FALSE = locked
	let plusAvailable = $state(true);
	// *******************************

	let view = $state<'preview' | 'code'>('preview');
	let mode = $state<'light' | 'dark'>(
		// Match OS preference on load
		typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
	);
	let copied = $state(false);

	$effect(() => {
		// Live update when OS mode changes
		const mq = window.matchMedia('(prefers-color-scheme: dark)');
		const handler = (e: MediaQueryListEvent) => (mode = e.matches ? 'dark' : 'light');
		mq.addEventListener('change', handler);
		return () => mq.removeEventListener('change', handler);
	});

	function copyCode() {
		if (code) navigator.clipboard.writeText(code);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<div class="space-y-4">
	<!-- Header -->
	<header class="flex justify-between items-center gap-4">
		<!-- Title -->
		<div class="flex items-center gap-2">
			<h2 class="text-xl font-medium">{title}</h2>
			{#if !plusAvailable}<span class="badge preset-tonal">Preview</span>{/if}
		</div>

		<!-- Actions -->
		<div class="flex items-center gap-2">
			<!-- Toggle: Light / Dark -->
			<SegmentedControl
				value={mode}
				onValueChange={(details) => (mode = (details.value as typeof mode) ?? 'light')}
				class="hidden md:block"
			>
				<SegmentedControl.Control class="p-1">
					<SegmentedControl.Indicator />
					<SegmentedControl.Item value="light" class="btn-xs">
						<SegmentedControl.ItemText><SunIcon class="size-elem-xs" /></SegmentedControl.ItemText>
						<SegmentedControl.ItemHiddenInput />
					</SegmentedControl.Item>
					<SegmentedControl.Item value="dark" class="btn-xs">
						<SegmentedControl.ItemText><MoonIcon class="size-elem-xs" /></SegmentedControl.ItemText>
						<SegmentedControl.ItemHiddenInput />
					</SegmentedControl.Item>
				</SegmentedControl.Control>
			</SegmentedControl>

			<span class="vr hidden md:inline-block"></span>

			{#if plusAvailable}
				<!-- View: Preview / Code -->
				<SegmentedControl value={view} onValueChange={(details) => (view = (details.value as typeof view) ?? 'preview')}>
					<SegmentedControl.Control class="p-1">
						<SegmentedControl.Indicator />
						<SegmentedControl.Item value="preview" class="btn-xs">
							<SegmentedControl.ItemText>Preview</SegmentedControl.ItemText>
							<SegmentedControl.ItemHiddenInput />
						</SegmentedControl.Item>
						<SegmentedControl.Item value="code" class="btn-xs">
							<SegmentedControl.ItemText>Code</SegmentedControl.ItemText>
							<SegmentedControl.ItemHiddenInput />
						</SegmentedControl.Item>
					</SegmentedControl.Control>
				</SegmentedControl>

				<span class="vr"></span>

				<!-- Copy -->
				<button
					type="button"
					onclick={copyCode}
					class="btn-icon preset-outlined-surface-200-800 hover:preset-tonal"
					title="Copy Code"
					aria-label="Copy Code"
				>
					{#if copied}<ThumbsUpIcon />{:else}<CopyIcon />{/if}
				</button>
			{:else}
				<a href="/overview/pricing" class="btn preset-tonal">
					<LockIcon />
					<span>Unlock Block</span>
				</a>
			{/if}
		</div>
	</header>

	<!-- Preview / Code -->
	{#if view === 'preview'}
		<!-- Preview -->
		<DecorStripes
			class="card border border-surface-200-800 preset-filled-surface-50-950 flex justify-center items-center p-4 md:p-8 {mode === 'light'
				? 'scheme-light'
				: 'scheme-dark'} {className}"
		>
			{@html code}
		</DecorStripes>
	{:else}
		<!-- Code -->
		<Code {code} {lang} />
	{/if}
</div>
