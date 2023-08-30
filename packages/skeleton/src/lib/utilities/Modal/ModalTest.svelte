<script lang="ts">
	import { initializeModalStore, getModalStore } from './stores.js';
	import Modal from './Modal.svelte';
	import type { ModalSettings } from './types.js';

	export let modalSetting: ModalSettings;

	initializeModalStore();
	getModalStore().trigger(modalSetting);
</script>

<Modal />
