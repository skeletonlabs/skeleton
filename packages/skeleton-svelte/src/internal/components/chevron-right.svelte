<script lang="ts" module>
	import type { HTMLAttributes } from '../html-attributes.js';

	export interface ChevronRightProps extends HTMLAttributes<'svg', 'children'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';

	const props: ChevronRightProps = $props();

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
	<path d="m9 18 6-6-6-6" />
</svg>
