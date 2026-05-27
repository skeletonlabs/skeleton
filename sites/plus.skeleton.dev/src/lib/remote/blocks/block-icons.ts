import type { LucideProps } from '@lucide/svelte';
import type { Component } from 'svelte';
import CircleAlertIcon from '@lucide/svelte/icons/circle-alert';
import CloudIcon from '@lucide/svelte/icons/cloud';
import LayoutGridIcon from '@lucide/svelte/icons/layout-grid';
import ListIcon from '@lucide/svelte/icons/list';
import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
import GalleryHorizontal from '@lucide/svelte/icons/gallery-horizontal';
import Blend from '@lucide/svelte/icons/blend';
import Grid2x2Icon from '@lucide/svelte/icons/grid-2x2';

export const iconMap: Record<string, Component<LucideProps>> = {
	CircleAlertIcon, // Alerts
	CloudIcon, // Logo Cloud
	LayoutGridIcon, // Image Layouts
	ListIcon, // Table of Contents
	ChevronRightIcon, // Breadcrumbs
	GalleryHorizontal, // Scroll Containers
	Blend, // SVG Filters
	Grid2x2Icon, // Product Lists
};
