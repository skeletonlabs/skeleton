<script lang="ts">
	import TabGroup from '$lib/components/Tab/TabGroup.svelte';
	import Tab from '$lib/components/Tab/Tab.svelte';
	import ProgressBar from '$lib/components/ProgressBar/ProgressBar.svelte';

	// Local
	let theme = 'simple';
	const themeStyles: any = {
		simple: {
			base: 'variant-soft-primary font-sans rounded-container-token',
			header: 'bg-primary-500 p-4 grid grid-cols-3 gap-8 items-center rounded-tl-container-token rounded-tr-container-token',
			src: 'https://source.unsplash.com/3vj6GJ_lTa8/200x200',
			img: 'bg-black w-full aspect-square rounded-full',
			text1: 'text-on-primary-token text-lg opacity-75',
			text2: 'text-on-primary-token font-bold text-xl sm:text-3xl',
			text3: 'text-on-primary-token text-lg sm:text-2xl',
			progressTrack: 'bg-primary-400',
			progressMeter: 'bg-white',
			footer: 'p-10 grid grid-cols-5 gap-10 place-items-center rounded-tl-3xl rounded-tr-3xl',
			button: 'btn-icon'
		},
		elegant: {
			base: 'bg-white text-black font-serif shadow',
			header: 'bg-neutral-100 p-4 grid grid-cols-3 gap-8 items-center',
			src: 'https://source.unsplash.com/C5NOq1BKlAk/200x200',
			img: 'bg-black bg-black/50 w-full aspect-square scale-110 transition-transform',
			text1: 'text-lg opacity-50',
			text2: 'text-xl sm:text-3xl',
			text3: 'text-lg sm:text-2xl',
			progressTrack: 'bg-black/5',
			progressMeter: 'bg-black',
			footer: 'p-10 grid grid-cols-5 gap-10 place-items-center',
			button: 'btn-icon rounded-none text-black ring-[1px] ring-black/5'
		},
		playful: {
			base: 'bg-blue-700 text-white font-sans rounded-3xl shadow-xl',
			header: 'bg-blue-800 p-4 grid grid-cols-3 gap-8 items-center rounded-tl-3xl rounded-tr-3xl',
			src: 'https://source.unsplash.com/wzj86-5JVcM/200x200',
			img: 'bg-black w-full aspect-square rounded-3xl scale-110 -translate-x-4 -translate-y-4 transition-transform',
			text1: 'text-lg text-amber-300',
			text2: 'font-bold text-xl sm:text-3xl',
			text3: 'text-lg sm:text-2xl',
			progressTrack: 'bg-black/5',
			progressMeter: 'bg-white',
			footer: 'p-10 grid grid-cols-5 gap-10 place-items-center rounded-tl-3xl rounded-tr-3xl',
			button: 'btn-icon bg-amber-300 text-blue-900'
		},
		brutalist: {
			base: 'bg-black text-white font-mono overflow-hidden',
			header: 'bg-white text-black p-4 grid grid-cols-3 gap-8 items-center',
			src: 'https://source.unsplash.com/hTv8aaPziOQ/200x200',
			img: 'bg-black w-full aspect-square transition-transform border-r-4 border-b-4 border-teal-300',
			text1: 'text-lg text-teal-300',
			text2: 'font-bold text-xl sm:text-3xl',
			text3: 'italic text-lg sm:text-2xl',
			progressTrack: 'bg-teal-300/75',
			progressMeter: 'bg-teal-300',
			footer: 'p-10 grid grid-cols-5 gap-10 place-items-center',
			button: 'btn-icon rounded-none bg-teal-300 text-black ring ring-white'
		}
	};
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10 items-center">
	<!-- Info -->
	<div class="space-y-4 md:space-y-10">
		<div class="max-w-[640px] mx-auto space-y-4">
			<h2 class="h2">Adaptive Theming.</h2>
			<!-- prettier-ignore -->
			<p>
				Use Skeleton's <a class="anchor" href="/docs/tokens">design token system</a>, <a class="anchor" href="/docs/variants">variant styles</a>, and Tailwind utility classes to create custom components that match your overall theme and aesthetic.
			</p>
		</div>
		<!-- Tabs -->
		<TabGroup
			active="variant-filled"
			hover="hover:variant-soft"
			flex="flex-1 lg:flex-none"
			rounded="rounded-container-token"
			border=""
			regionList="space-x-1"
			padding="p-2 sm:p-4"
			class="max-w-[640px] mx-auto"
		>
			<Tab bind:group={theme} name="theme" value="simple" class="space-y-4 w-24">
				<svelte:fragment slot="lead"><i class="fa-solid fa-square text-2xl" /></svelte:fragment>
				Simple
			</Tab>
			<Tab bind:group={theme} name="theme" value="elegant" class="space-y-4 w-24">
				<svelte:fragment slot="lead"><i class="fa-solid fa-certificate text-2xl" /></svelte:fragment>
				Elegant
			</Tab>
			<Tab bind:group={theme} name="theme" value="playful" class="space-y-4 w-24">
				<svelte:fragment slot="lead"><i class="fa-solid fa-shapes text-2xl" /></svelte:fragment>
				Playful
			</Tab>
			<Tab bind:group={theme} name="theme" value="brutalist" class="space-y-4 w-24">
				<svelte:fragment slot="lead"><i class="fa-solid fa-diamond text-2xl" /></svelte:fragment>
				Brutalist
			</Tab>
		</TabGroup>
	</div>
	<!-- Card -->
	<div>
		<div class="max-w-[640px] mx-auto transition ease-in-out duration-200 {themeStyles[theme].base}">
			<header class={themeStyles[theme].header}>
				<img src={themeStyles[theme].src} class={themeStyles[theme].img} alt="Cover" />
				<div class="col-span-2 space-y-2">
					<div class={themeStyles[theme].text1}>Mood Booster</div>
					<div class={themeStyles[theme].text2}>Have It Your Way</div>
					<div class={themeStyles[theme].text3}>The Skeleton Crew</div>
				</div>
			</header>
			<ProgressBar
				value={75}
				max={100}
				track={themeStyles[theme].progressTrack}
				meter={themeStyles[theme].progressMeter}
				rounded="rounded-none"
			/>
			<footer class={themeStyles[theme].footer}>
				<button class={themeStyles[theme].button}><i class="fa-solid fa-shuffle text-2xl" /></button>
				<button class={themeStyles[theme].button}><i class="fa-solid fa-backward-fast text-2xl" /></button>
				<button class={themeStyles[theme].button}><i class="fa-solid fa-pause text-2xl" /></button>
				<button class={themeStyles[theme].button}><i class="fa-solid fa-forward-fast text-2xl" /></button>
				<button class={themeStyles[theme].button}><i class="fa-solid fa-heart text-2xl" /></button>
			</footer>
		</div>
	</div>
</div>
