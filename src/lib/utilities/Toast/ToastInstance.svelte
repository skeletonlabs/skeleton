<script lang="ts">
	import { onMount } from 'svelte';

	import type { Toast } from './types';
	import { toastStore } from './stores';

	// Props
	export let toast: Toast;
	export let index: number;
	export let buttonAction = 'btn variant-filled';
	export let buttonDismiss = 'btn-icon btn-icon-sm variant-filled';
	export let buttonDismissLabel = '✕';

	// Classes
	const cToastActions = 'flex items-center space-x-2';

	console.log(`toast ${toast.message} OPEN`);
	if (toast.autohide === true) {
		setTimeout(() => {
			console.log(`toast ${toast.message} CLOSE`);
			toastStore.close(toast.id);
		}, toast.timeout);
	}

	function onAction(): void {
		$toastStore[index]?.action?.response();
		toastStore.close($toastStore[index].id);
	}
</script>

<pre>{JSON.stringify(toast, null, 2)}</pre>

<!-- Toast -->
<div class="toast {$$props.class ?? ''} {toast.classes}" role="alert" aria-live="polite" data-testid="toast">
	<div class="text-base">{@html toast.message}</div>
	<!-- prettier-ignore -->
	<div class="toast-actions {cToastActions}">
        {#if toast.action}<button class="{buttonAction}" on:click={() => onAction()}>{@html toast.action.label}</button>{/if}
        <button class="{buttonDismiss}" on:click={() => { toastStore.close(toast.id) }}>{buttonDismissLabel}</button>
    </div>
</div>
