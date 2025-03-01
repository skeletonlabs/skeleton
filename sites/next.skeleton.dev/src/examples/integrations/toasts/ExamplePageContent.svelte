<script lang="ts">
import { type ToastContext } from "@skeletonlabs/skeleton-svelte";
import { getContext } from "svelte";

export const toast: ToastContext = getContext("toast");

function triggerInfo() {
	toast.create({ description: "Hello World! 👋" });
}

function triggerError() {
	toast.create({
		title: "Error",
		description: "Uh oh, something went wrong.",
		type: "error",
	});
}

function triggerSuccess() {
	toast.create({
		title: "Success",
		description: "The task was was completed successfully!",
		type: "success",
	});
}
</script>

<div class="flex gap-4">
  <button class="btn preset-tonal" onclick={triggerInfo}>Toast: Info</button>
  <button class="btn preset-tonal" onclick={triggerError}>Toast: Error</button>
  <button class="btn preset-tonal" onclick={triggerSuccess}
    >Toast: Success</button
  >
</div>
