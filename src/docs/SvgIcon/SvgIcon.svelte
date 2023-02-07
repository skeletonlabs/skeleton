<script context="module">
	import { icons } from './icons';
</script>

<script lang="ts">
	// Props
	/** Pass canned svg name. Slot value overrides this.*/
	export let name = 'placeholder';
	/** Native X attribute for the svg element.*/
	export let x = '0px';
	/** Native Y attribute for the svg element.*/
	export let y = '0px';
	/** Native viewBox attribute for the svg element.*/
	export let viewBox: string = icons[name].viewBox || '0 0 512 512';

	// Props (Styles)
	/** Provide classes to set the SVG fill color.*/
	export let fill = 'fill-current';
	/** Provide classes to set the width color.*/
	export let width = 'w-5';
	/** Provide classes to set the height color.*/
	export let height = 'h-5';

	// A11y
	/** Set the title element value embedded within the SVG.*/
	export let title = '';

	// Base Classes
	const cBase = 'inline-block outline-none';

	// Reactive Classes
	$: classesBase = `${cBase} ${fill} ${width} ${height}`;
</script>

<!-- prettier-ignore -->
<svg
    xmlns="http://www.w3.org/2000/svg"
    {x} {y}
    {viewBox}
    class="svg-icon {classesBase} {$$props.class ?? ''}"
    focusable="false"
	data-testid="svg-icon"
>
    {#if title}<title>{title}</title>{/if}
    {#if $$slots.default}
        <slot />
    {:else}
        <path d={icons[name].path} />
    {/if}
</svg>
