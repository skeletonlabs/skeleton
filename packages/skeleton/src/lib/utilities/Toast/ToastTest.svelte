<script lang="ts">
	import { initializeToastStore, getToastStore } from './stores.js';
	import type { ToastSettings } from './types.js';
	import Toast from './Toast.svelte';

	interface TestToastSettings extends ToastSettings {
		triggerDelay?: number;
	}

	export let toastSettings: Array<TestToastSettings> = [];
	export let max: number | undefined = undefined;

	initializeToastStore();
	const toastStore = getToastStore();

	toastSettings.forEach(({ triggerDelay, ...settings }) => {
		if (triggerDelay) {
			setTimeout(() => toastStore.trigger(settings), triggerDelay);
		} else {
			toastStore.trigger(settings);
		}
	});
</script>

<Toast {max} />
