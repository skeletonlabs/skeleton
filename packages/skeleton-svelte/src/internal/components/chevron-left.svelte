<script lang="ts" module>
	import type { HTMLAttributes } from '../html-attributes.js';

	export interface ChevronLeftProps extends HTMLAttributes<'svg', 'children'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';

	const props: ChevronLeftProps = $props();

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
	<path d="m15 18-6-6 6-6" />
</svg>
