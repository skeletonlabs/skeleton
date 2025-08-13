<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
</script>

<div class="flex gap-4">
	<Avatar name="Jane Michelle Doe"></Avatar>
	<Avatar name="Jane Michelle Doe" initials={[0]}></Avatar>
	<Avatar name="Jane Michelle Doe" initials={[0, 1, 2]}></Avatar>
</div>
