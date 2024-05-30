<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	// Icons
	import IconFrown from 'lucide-svelte/icons/frown';
	import IconSmile from 'lucide-svelte/icons/smile';
</script>

<Switch id="compact" name="compact" compact>
    {#snippet inactiveChild()}<IconFrown size="20" />{/snippet}
    {#snippet activeChild()}<IconSmile size="20" />{/snippet}
</Switch>