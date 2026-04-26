<script lang="ts">
	import { QrCode } from '@skeletonlabs/skeleton-svelte';

	let value = $state('https://github.com/skeletonlabs/skeleton');
</script>

<div class="mx-auto flex max-w-5xl flex-col gap-8 lg:flex-row lg:items-start">
	<div class="flex-1 space-y-4">
		<div class="space-y-2">
			<p class="text-sm uppercase tracking-[0.3em] text-surface-500-400">Playground entry</p>
			<h1 class="h3">QR Code</h1>
			<p class="max-w-prose text-surface-600-300">Edit the encoded value and inspect the frame, pattern, and overlay parts.</p>
		</div>
		<label class="block space-y-2">
			<span class="text-sm font-medium">Value</span>
			<input class="input w-full" bind:value />
		</label>
		<div class="flex flex-wrap gap-2">
			<button class="btn preset-soft" type="button" onclick={() => (value = 'https://github.com/skeletonlabs/skeleton')}> Skeleton </button>
			<button class="btn preset-soft" type="button" onclick={() => (value = 'https://zagjs.com/components/react/qr-code')}>
				Zag QR Code
			</button>
			<button class="btn preset-soft" type="button" onclick={() => (value = 'hello world')}> Plain text </button>
		</div>
	</div>

	<div class="rounded-large border border-surface-300/60 bg-surface-50-950 p-6 shadow-sm">
		<QrCode {value} pixelSize={7} class="relative w-fit">
			<QrCode.Frame class="h-64 w-64 rounded-xl bg-surface-100-900 p-4">
				<QrCode.Pattern class="fill-current text-surface-900 dark:text-white" />
			</QrCode.Frame>
			<QrCode.Overlay class="absolute inset-0 flex items-center justify-center">
				<div
					class="rounded-full border border-white/30 bg-surface-900/90 px-3 py-2 text-xs font-bold uppercase tracking-[0.3em] text-white shadow-lg"
				>
					QR
				</div>
			</QrCode.Overlay>
		</QrCode>
	</div>
</div>
