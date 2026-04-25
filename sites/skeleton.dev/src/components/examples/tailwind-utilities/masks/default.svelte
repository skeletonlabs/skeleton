<script lang="ts">
	import { onDestroy, tick } from 'svelte';

	const shapes = [
		'circle',
		'squircle',
		'triangle-up',
		'triangle-down',
		'triangle-right',
		'triangle-left',
		'diamond',
		'pentagon',
		'hexagon',
		'cube',
		'octagon',
		'decagon',
		'star',
		'heart',
		'cross',
	];

	let index = $state(0);

	const intervalId = setInterval(() => {
		const update = async () => {
			index = (index + 1) % shapes.length;
			await tick();
		};
		if (typeof document !== 'undefined' && 'startViewTransition' in document) {
			document.startViewTransition(update);
		} else {
			update();
		}
	}, 2000);

	onDestroy(() => clearInterval(intervalId));
</script>

<img class="mask mask-{shapes[index]} w-32" style:view-transition-name="mask-default" src="https://i.pravatar.cc/150?img=48" alt="Avatar" />
