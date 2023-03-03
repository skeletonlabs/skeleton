<script>
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
</script>

<div class="flex justify-center items-center gap-4 md:gap-10 place-items-center">
	<!-- Premium Sponsors -->
	<Avatar
		src="https://pbs.twimg.com/profile_images/1504272980687441922/pkVimygY_400x400.png"
		width="w-full max-w-[200px]"
		background="bg-neutral-900"
	/>
	<Avatar src="https://i.imgur.com/ySBlLmQ.png" width="w-full max-w-[200px]" />
	<!-- Info -->
	<div class="col-span-2 space-y-4">
		<h2>Help Support Skeleton.</h2>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque dolorem provident quasi illo, nostrum autem. Culpa eius error
			modi odit veritatis? Quaerat exercitationem repellat.
		</p>
		<div class="flex gap-4">
			<a class="btn variant-filled" href="https://ko-fi.com/skeletonlabs" target="_blank" rel="noreferrer">Ko-Fi</a>
			<a class="btn variant-filled" href="https://github.com/sponsors/skeletonlabs" target="_blank" rel="noreferrer">GitHub</a>
			<a class="btn variant-filled" href="https://patreon.com/user?u=83786276" target="_blank" rel="noreferrer">Patreon</a>
		</div>
	</div>
</div>
