<script lang="ts">
	import { initializeToastStore, getToastStore } from '$lib/utilities/Toast/stores.js';
	import type { ToastSettings } from '$lib/utilities/Toast/types.js';
	import Toast from '$lib/utilities/Toast/Toast.svelte';

	export let toastSettings: Array<ToastSettings> = [];
	export let max: number | undefined = undefined;

	initializeToastStore();
	const toastStore = getToastStore();

	toastSettings.forEach((element) => {
		toastStore.trigger(element);
	});
</script>

<Toast {max} />
