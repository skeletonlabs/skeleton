<script lang="ts">
	import Avatar from '$lib/components/Avatar/Avatar.svelte';
</script>

<h1 class="h1">Avatars</h1>

<!-- imageSrc -->
<h3 class="h3">imageSrc</h3>
<Avatar
	imageSrc="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
	imageAlt="skeleton"
/>

<!-- Initials -->
<h3 class="h3">Initials</h3>
<Avatar font="text-4xl" classes="flex justify-center items-center h-16">SK</Avatar>

<!-- Icon + href -->
<h3 class="h3">Icon + href</h3>
<Avatar href="#" classes="flex justify-center items-center h-16" border="border-4">💀</Avatar>

<!-- non-square aspect-ratio -->
<h3 class="h3">non-square aspect-ratio</h3>
<div class="flex space-x-4">
	<Avatar
		size="w-16 h-32"
		imageSrc="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=64&h=128&auto=format&fit=crop"
		imageAlt="skeleton"
		/>
	<Avatar
		size="w-64 h-32"
		rounded="rounded-md"
		imageSrc="https://images.unsplash.com/photo-1509557965875-b88c97052f0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		imageAlt="skeleton"
		/>
</div>
