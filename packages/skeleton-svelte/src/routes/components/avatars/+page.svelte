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
