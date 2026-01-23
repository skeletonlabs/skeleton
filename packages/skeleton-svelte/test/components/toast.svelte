<script lang="ts">
	import { Toast, createToaster } from '../../src/index.js';

	const { toaster }: { toaster: ReturnType<typeof createToaster> } = $props();
</script>

<Toast.Group {toaster} data-testid="group">
	{#snippet children(toast, index)}
		<Toast {toast} {index} data-testid="root">
			<Toast.Title data-testid="title" />
			<Toast.Description data-testid="description" />
			<Toast.ActionTrigger data-testid="action-trigger" />
			<Toast.CloseTrigger data-testid="close-trigger" />
		</Toast>
	{/snippet}
</Toast.Group>
