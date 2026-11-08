<script lang="ts">
	import SkullIcon from "@lucide/svelte/icons/skull";
	import { Toast, createToaster } from "@skeletonlabs/skeleton-svelte";

	const toaster = createToaster();
</script>

{#snippet skull()}
	<SkullIcon class="size-8" />
{/snippet}

<button
	class="btn preset-filled"
	onclick={() =>
		toaster.info({
			title: "Title",
			description: "This is a description.",
			meta: {
				icon: skull,
			},
		})}
>
	Toast
</button>

<Toast.Group {toaster}>
	{#snippet children(toast)}
		<Toast {toast}>
			{@render toast.meta!.icon()}
			<Toast.Message>
				<Toast.Title class="flex items-center gap-2">{toast.title}</Toast.Title>
				<Toast.Description>{toast.description} {toast.meta?.foo}</Toast.Description>
			</Toast.Message>
			<Toast.CloseTrigger />
		</Toast>
	{/snippet}
</Toast.Group>
