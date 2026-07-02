<script lang="ts">
	// A fixed radius used to demonstrate corner-shape options, independent of the actual radius setting.
	const DEMO_CORNER_RADIUS = '1rem';

	interface EdgeItemProps {
		mode?: 'radius' | 'thickness' | 'corner';
		value: string;
		active: string;
		onselect: (value: string) => void;
	}

	let { mode = 'radius', value, active, onselect }: EdgeItemProps = $props();

	function handleOnClick() {
		onselect(value);
	}

	// Reactive
	let rxActive = $derived(
		value === active ? `preset-tonal-primary border-surface-950-50` : `border-surface-300-700 hover:border-surface-500`,
	);
	let rxStyles = $derived(
		mode === 'thickness'
			? `border-top-width: ${value}; border-left-width: ${value}`
			: mode === 'corner'
				? `border-top-left-radius: ${DEMO_CORNER_RADIUS}; corner-shape: ${value}`
				: `border-top-left-radius: ${value}`,
	);
</script>

<div class="space-y-1">
	<button
		aria-label="edge-option-{value}"
		type="button"
		class="border-1! {rxActive} aspect-4/3 w-full flex justify-end items-end rounded-sm overflow-hidden"
		onclick={handleOnClick}
	>
		<div class="aspect-4/3 w-[70%] bg-primary-500/30 border-t-4 border-l-4 border-primary-500" style={rxStyles}></div>
	</button>
	<div class="text-[10px] text-center">{value.replace('0.', '.')}</div>
</div>
