<script lang="ts" module>
	import type { HTMLAttributes } from '../html-attributes.js';
	import { mergeProps } from '@zag-js/svelte';

	export type CheckProps = HTMLAttributes<'svg', 'children'>;
</script>

<script lang="ts">
	const props: CheckProps = $props();

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
	<path d="M20 6 9 17l-5-5" />
</svg>
