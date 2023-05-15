<script lang="ts">
	import { Avatar, popup, type PopupSettings } from '@skeletonlabs/skeleton';

	let popupBrainBones: PopupSettings = { event: 'hover', target: 'popupBrainBones', placement: 'top' };
	let popupLukeHagar: PopupSettings = { event: 'hover', target: 'popupLukeHagar', placement: 'top' };
</script>

<div class="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-10 place-items-center">
	<!-- Premium Sponsors -->
	<div class="grid grid-cols-2 gap-4 md:gap-10">
		<!-- Brain & Bones -->
		<a href="https://www.brainandbonesllc.com/" target="_blank" rel="noreferrer" use:popup={popupBrainBones} class="max-h-[180px]">
			<Avatar
				src="https://pbs.twimg.com/profile_images/1504272980687441922/pkVimygY_200x200.png"
				width="w-full max-w-[180px]"
				background="bg-neutral-900"
				shadow="shadow-xl"
			/>
		</a>
		<div class="text-xs text-center card variant-filled-primary p-2 whitespace-nowrap shadow-xl" data-popup="popupBrainBones">
			<p class="font-bold">Premium Sponsor</p>
			<p>Brain & Bones</p>
			<!-- Arrow -->
			<div class="arrow variant-filled-primary" />
		</div>
		<!-- Luke -->
		<a href="https://lukehagar.com/" target="_blank" rel="noreferrer" use:popup={popupLukeHagar} class="max-h-[180px]">
			<Avatar src="https://i.imgur.com/u8sOah2.png" width="w-full max-w-[180px]" shadow="shadow-xl" />
		</a>
		<div class="text-xs text-center card variant-filled-primary p-2 whitespace-nowrap shadow-xl" data-popup="popupLukeHagar">
			<p class="font-bold">Premium Sponsor</p>
			<p>Luke Hagar</p>
			<!-- Arrow -->
			<div class="arrow variant-filled-primary" />
		</div>
	</div>
	<!-- Info -->
	<div class="space-y-4 text-center lg:text-left">
		<h2 class="h2">Help Support Skeleton.</h2>
		<p class="max-w-[480px]">
			Skeleton is an open source project that survives in part through your support. Consider becoming a sponsor through the following
			services. For larger contributions please <a class="anchor" href="mailto:admin@skeleton.dev">contact us</a>.
		</p>
		<div class="flex justify-center lg:justify-start gap-3">
			<a class="btn variant-filled" href="https://ko-fi.com/skeletonlabs" target="_blank" rel="noreferrer">Ko-Fi</a>
			<a class="btn variant-filled" href="https://github.com/sponsors/skeletonlabs" target="_blank" rel="noreferrer"> GitHub </a>
			<a class="btn variant-filled" href="https://patreon.com/user?u=83786276" target="_blank" rel="noreferrer"> Patreon </a>
		</div>
	</div>
</div>
