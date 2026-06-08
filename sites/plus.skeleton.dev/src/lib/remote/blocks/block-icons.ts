import type { LucideProps } from '@lucide/svelte';
import type { Component } from 'svelte';
import Blend from '@lucide/svelte/icons/blend';
import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
import CircleAlertIcon from '@lucide/svelte/icons/circle-alert';
import CloudIcon from '@lucide/svelte/icons/cloud';
import GalleryHorizontal from '@lucide/svelte/icons/gallery-horizontal';
import Grid2x2Icon from '@lucide/svelte/icons/grid-2x2';
import LayoutGridIcon from '@lucide/svelte/icons/layout-grid';
import StarIcon from '@lucide/svelte/icons/star';

export const iconMap: Record<string, Component<LucideProps>> = {
	Blend, // svg-filters
	ChevronRightIcon, // breadcrumbs
	CircleAlertIcon, // alerts
	CloudIcon, // logo-cloud
	GalleryHorizontal, // scroll-containers
	Grid2x2Icon, // product-lists
	LayoutGridIcon, // image-layouts
	StarIcon,
};
