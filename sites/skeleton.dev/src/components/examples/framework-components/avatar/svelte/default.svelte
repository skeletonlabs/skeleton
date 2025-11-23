<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex items-center gap-8">
	<!-- Small -->
	<Avatar class="size-10">
		<Avatar.Image src="https://i.pravatar.cc/40?img=48" alt="small" />
		<Avatar.Fallback>SK</Avatar.Fallback>
	</Avatar>
	<!-- Base -->
	<Avatar>
		<Avatar.Image src="https://i.pravatar.cc/60?img=48" alt="base" />
		<Avatar.Fallback>SK</Avatar.Fallback>
	</Avatar>
	<!-- Large -->
	<Avatar class="size-20">
		<Avatar.Image src="https://i.pravatar.cc/80?img=48" alt="large" />
		<Avatar.Fallback>SK</Avatar.Fallback>
	</Avatar>
</div>
