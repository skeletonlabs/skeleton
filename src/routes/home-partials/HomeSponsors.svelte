<script>
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
</script>

<div class="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-10 place-items-center">
	<!-- Premium Sponsors -->
	<div class="grid grid-cols-2 gap-4 md:gap-10">
		<Avatar
			src="https://pbs.twimg.com/profile_images/1504272980687441922/pkVimygY_400x400.png"
			width="w-full max-w-[180px]"
			background="bg-neutral-900"
			shadow="shadow-xl"
		/>
		<Avatar src="https://i.imgur.com/ySBlLmQ.png" width="w-full max-w-[180px]" shadow="shadow-xl" />
	</div>
	<!-- Info -->
	<div class="space-y-4 text-center lg:text-left">
		<h2>Help Support Skeleton.</h2>
		<p class="max-w-[480px]">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolorem provident quasi illo, nostrum autem. Culpa eius error
			modi odit veritatis? Quaerat exercitationem.
		</p>
		<div class="flex justify-center lg:justify-start gap-4">
			<a class="btn variant-filled" href="https://ko-fi.com/skeletonlabs" target="_blank" rel="noreferrer">Ko-Fi</a>
			<a class="btn variant-filled" href="https://github.com/sponsors/skeletonlabs" target="_blank" rel="noreferrer"> GitHub </a>
			<a class="btn variant-filled" href="https://patreon.com/user?u=83786276" target="_blank" rel="noreferrer"> Patreon </a>
		</div>
	</div>
</div>
