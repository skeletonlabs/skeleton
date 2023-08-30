<script lang="ts">
	import { initializeToastStore, getToastStore } from './stores.js';
	import type { ToastSettings } from './types.js';
	import Toast from './Toast.svelte';

	export let toastSettings: Array<ToastSettings> = [];
	export let max: number | undefined = undefined;

	initializeToastStore();
	const toastStore = getToastStore();

	toastSettings.forEach((element) => {
		toastStore.trigger(element);
	});
</script>

<Toast {max} />
