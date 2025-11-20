<script lang="ts">
	import { Toast, createToaster } from '@/index.js';

	const toaster = createToaster();

	$effect(() => {
		toaster.create({});
	});
</script>

<Toast.Group {toaster} data-testid="group">
	{#snippet children(toast)}
		<Toast {toast} data-testid="root">
			<Toast.Title data-testid="title" />
			<Toast.Description data-testid="description" />
			<Toast.ActionTrigger data-testid="action-trigger" />
			<Toast.CloseTrigger data-testid="close-trigger" />
		</Toast>
	{/snippet}
</Toast.Group>
