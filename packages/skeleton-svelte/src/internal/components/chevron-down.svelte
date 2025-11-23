<script lang="ts" module>
	import type { HTMLAttributes } from '../html-attributes.js';
	import { mergeProps } from '@zag-js/svelte';

	export type ChevronDownProps = HTMLAttributes<'svg', 'children'>;
</script>

<script lang="ts">
	const props: ChevronDownProps = $props();

	const { ...rest } = $derived(props);

	const attributes = $derived(
		mergeProps(
			{
				xmlns: 'http://www.w3.org/2000/svg',
				width: '24',
				height: '24',
				viewBox: '0 0 24 24',
				fill: 'none',
				stroke: 'currentColor',
				'stroke-width': '2',
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
			},
			rest,
		),
	);
</script>

<svg {...attributes}>
	<path d="m6 9 6 6 6-6" />
</svg>
