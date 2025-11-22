<script lang="ts" module>
	import type { HTMLAttributes } from '../html-attributes.js';

	export interface CalendarProps extends HTMLAttributes<'svg', 'children'> {}
</script>

<script lang="ts">
	import { mergeProps } from '@zag-js/svelte';

	const props: CalendarProps = $props();

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
	<path d="M8 2v4" />
	<path d="M16 2v4" />
	<rect width="18" height="18" x="3" y="4" rx="2" />
	<path d="M3 10h18" />
</svg>
