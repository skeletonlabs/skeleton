// Filter

// Export SVG Components
export { default as Apollo } from '$lib/actions/Filters/svg/Apollo.svelte';
export { default as BlueNight } from '$lib/actions/Filters/svg/BlueNight.svelte';
export { default as Emerald } from '$lib/actions/Filters/svg/Emerald.svelte';
export { default as GreenFall } from '$lib/actions/Filters/svg/GreenFall.svelte';
export { default as Noir } from '$lib/actions/Filters/svg/Noir.svelte';
export { default as NoirLight } from '$lib/actions/Filters/svg/NoirLight.svelte';
export { default as Rustic } from '$lib/actions/Filters/svg/Rustic.svelte';
export { default as Summer84 } from '$lib/actions/Filters/svg/Summer84.svelte';
export { default as XPro } from '$lib/actions/Filters/svg/XPro.svelte';

// Action
export function filter(node: HTMLElement, filter_name: string): void {
	const isFirefox: boolean = navigator.userAgent.indexOf('Firefox') > -1;
	if (!isFirefox) {
		node.setAttribute('style', `filter: url("#${filter_name}")`);
	}
}
