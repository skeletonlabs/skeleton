<script lang="ts">
	import { initializeModalStore, getModalStore } from '$lib/utilities/Modal/stores.js';
	import Modal from '$lib/utilities/Modal/Modal.svelte';
	import type { ModalSettings } from '$lib/utilities/Modal/types.js';

	export let modalSetting: ModalSettings;

	initializeModalStore();
	getModalStore().trigger(modalSetting);
</script>

<Modal />
