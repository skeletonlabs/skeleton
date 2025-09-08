<script lang="ts">
	import { Toast, createToaster } from '../../../src/index';
	const toaster = createToaster({});
	toaster.create({});
</script>

<Toast.Group {toaster} data-testid="group">
	{#snippet children(toast)}
		<Toast key={toast.id} {toast} data-testid="root">
			<Toast.Title data-testid="title" />
			<Toast.Description data-testid="description" />
			<Toast.CloseTrigger data-testid="close-trigger" />
		</Toast>
	{/snippet}
</Toast.Group>
