<script lang="ts">
	import { getContext } from 'svelte';

	interface Toast {
		id?: string;
		title?: string;
		description?: string;
		type?: string;
		duration?: number;
	}
	interface ToastContext {
		create: (toast: Toast) => void;
	}

	const toast: ToastContext = getContext('toast');

	function triggerInfo() {
		toast.create({
			description: 'This is a basic toast message.',
			type: 'info',
			duration: 5000
		});
	}

	function triggerError() {
		toast.create({
			title: 'Error',
			description: 'Error: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, pariatur distinctio beatae.',
			type: 'error',
			duration: 5000
		});
	}

	function triggerSuccess() {
		toast.create({
			title: 'Success',
			description: 'The task was successful!',
			type: 'success',
			duration: 2000
		});
	}
</script>

<div class="space-y-10">
	<header>
		<h1 class="h1">Toasts</h1>
	</header>
	<section class="space-y-4">
		<div class="flex gap-4">
			<button class="btn preset-tonal" onclick={triggerInfo}>Toast: Info</button>
			<button class="btn preset-tonal" onclick={triggerError}>Toast: Error</button>
			<button class="btn preset-tonal" onclick={triggerSuccess}>Toast: Success</button>
		</div>
	</section>
</div>
