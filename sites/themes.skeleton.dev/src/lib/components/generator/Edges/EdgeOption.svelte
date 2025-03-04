<script lang="ts">
	interface EdgeItemProps {
		thickness?: boolean;
		value: string;
		active: string;
		onselect: (value: string) => void;
	}

	// prettier-ignore
	let {
		thickness = false,
		value,
		active,
		onselect
	}: EdgeItemProps = $props();

	function handleOnClick() {
		onselect(value);
	}

	// Reactive
	let rxActive = $derived(value === active ? `preset-tonal border-surface-950-50` : `border-surface-500/10 hover:border-surface-500`);
	let rxStyles = thickness ? `border-top-width: ${value}px; border-left-width: ${value}px` : `border-top-left-radius: ${value}px`;
</script>

<div class="space-y-1">
	<button
		aria-label="edge-option-{value}px"
		type="button"
		class="border-2 {rxActive} flex aspect-[4/3] w-full items-end justify-end overflow-hidden rounded-sm"
		onclick={handleOnClick}
	>
		<div class="bg-primary-500/30 border-primary-500 aspect-[4/3] w-[70%] border-l-4 border-t-4" style={rxStyles}></div>
	</button>
	<div class="text-center text-[10px]">{value.replace('0.', '.')}</div>
</div>
