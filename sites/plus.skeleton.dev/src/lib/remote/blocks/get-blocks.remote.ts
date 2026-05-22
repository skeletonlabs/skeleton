import { getRequestEvent, query } from '$app/server';

export interface BlockItem {
	slug: string;
	label: string;
	count: number;
}

export interface BlockGroup {
	id: string;
	label: string;
	count: number;
	items: BlockItem[];
}

export interface BlockDetail {
	item: BlockItem;
	group: BlockGroup;
}

export interface Framework {
	key: string;
	label: string;
}

const frameworkList: Framework[] = [
	{ key: 'react', label: 'React' },
	{ key: 'svelte', label: 'Svelte' },
	{ key: 'vue', label: 'Vue' },
	{ key: 'solid', label: 'Solid.js' },
	{ key: 'astro', label: 'Astro' },
];

/** Get all supported frameworks */
export const getFrameworks = query(async (): Promise<Framework[]> => {
	return frameworkList;
});

const blockGroups: BlockGroup[] = [
	{
		id: 'marketing',
		label: 'Marketing',
		count: 179,
		items: [
			{ slug: 'hero-sections', label: 'Hero Sections', count: 12 },
			{ slug: 'feature-sections', label: 'Feature Sections', count: 15 },
			{ slug: 'cta-sections', label: 'CTA Sections', count: 11 },
			{ slug: 'bento-grids', label: 'Bento Grids', count: 3 },
			{ slug: 'pricing-sections', label: 'Pricing Sections', count: 12 },
			{ slug: 'header-sections', label: 'Header Sections', count: 8 },
			{ slug: 'newsletter-sections', label: 'Newsletter Sections', count: 6 },
			{ slug: 'stats', label: 'Stats', count: 8 },
			{ slug: 'testimonials', label: 'Testimonials', count: 8 },
			{ slug: 'blog-sections', label: 'Blog Sections', count: 7 },
			{ slug: 'contact-sections', label: 'Contact Sections', count: 7 },
			{ slug: 'team-sections', label: 'Team Sections', count: 9 },
			{ slug: 'content-sections', label: 'Content Sections', count: 7 },
			{ slug: 'logo-clouds', label: 'Logo Clouds', count: 6 },
			{ slug: 'faqs', label: 'FAQs', count: 7 },
			{ slug: 'footers', label: 'Footers', count: 7 },
			{ slug: 'headers', label: 'Headers', count: 11 },
			{ slug: 'flyout-menus', label: 'Flyout Menus', count: 7 },
			{ slug: 'banners', label: 'Banners', count: 13 },
			{ slug: '404-pages', label: '404 Pages', count: 5 },
			{ slug: 'landing-pages', label: 'Landing Pages', count: 4 },
			{ slug: 'pricing-pages', label: 'Pricing Pages', count: 3 },
			{ slug: 'about-pages', label: 'About Pages', count: 3 },
		],
	},
	{
		id: 'applications',
		label: 'Applications',
		count: 364,
		items: [
			{ slug: 'stacked-layouts', label: 'Stacked Layouts', count: 9 },
			{ slug: 'sidebar-layouts', label: 'Sidebar Layouts', count: 8 },
			{ slug: 'multi-column-layouts', label: 'Multi-Column Layouts', count: 6 },
			{ slug: 'page-headings', label: 'Page Headings', count: 9 },
			{ slug: 'card-headings', label: 'Card Headings', count: 6 },
			{ slug: 'section-headings', label: 'Section Headings', count: 10 },
			{ slug: 'description-lists', label: 'Description Lists', count: 6 },
			{ slug: 'stats', label: 'Stats', count: 5 },
			{ slug: 'calendars', label: 'Calendars', count: 8 },
			{ slug: 'stacked-lists', label: 'Stacked Lists', count: 15 },
			{ slug: 'tables', label: 'Tables', count: 19 },
			{ slug: 'grid-lists', label: 'Grid Lists', count: 7 },
			{ slug: 'feeds', label: 'Feeds', count: 3 },
			{ slug: 'form-layouts', label: 'Form Layouts', count: 4 },
			{ slug: 'input-groups', label: 'Input Groups', count: 21 },
			{ slug: 'select-menus', label: 'Select Menus', count: 7 },
			{ slug: 'sign-in-and-registration', label: 'Sign-in and Registration', count: 4 },
			{ slug: 'textareas', label: 'Textareas', count: 5 },
			{ slug: 'radio-groups', label: 'Radio Groups', count: 12 },
			{ slug: 'checkboxes', label: 'Checkboxes', count: 4 },
			{ slug: 'toggles', label: 'Toggles', count: 5 },
			{ slug: 'action-panels', label: 'Action Panels', count: 8 },
			{ slug: 'comboboxes', label: 'Comboboxes', count: 4 },
			{ slug: 'alerts', label: 'Alerts', count: 6 },
			{ slug: 'empty-states', label: 'Empty States', count: 6 },
			{ slug: 'navbars', label: 'Navbars', count: 11 },
			{ slug: 'pagination', label: 'Pagination', count: 3 },
			{ slug: 'tabs', label: 'Tabs', count: 9 },
			{ slug: 'vertical-navigation', label: 'Vertical Navigation', count: 6 },
			{ slug: 'sidebar-navigation', label: 'Sidebar Navigation', count: 5 },
			{ slug: 'breadcrumbs', label: 'Breadcrumbs', count: 4 },
			{ slug: 'progress-bars', label: 'Progress Bars', count: 8 },
			{ slug: 'command-palettes', label: 'Command Palettes', count: 8 },
			{ slug: 'modal-dialogs', label: 'Modal Dialogs', count: 6 },
			{ slug: 'drawers', label: 'Drawers', count: 12 },
			{ slug: 'notifications', label: 'Notifications', count: 6 },
			{ slug: 'avatars', label: 'Avatars', count: 11 },
			{ slug: 'badges', label: 'Badges', count: 16 },
			{ slug: 'dropdowns', label: 'Dropdowns', count: 5 },
			{ slug: 'buttons', label: 'Buttons', count: 8 },
			{ slug: 'button-groups', label: 'Button Groups', count: 5 },
			{ slug: 'containers', label: 'Containers', count: 5 },
			{ slug: 'cards', label: 'Cards', count: 10 },
			{ slug: 'list-containers', label: 'List Containers', count: 7 },
			{ slug: 'media-objects', label: 'Media Objects', count: 8 },
			{ slug: 'dividers', label: 'Dividers', count: 8 },
			{ slug: 'home-screens', label: 'Home Screens', count: 2 },
			{ slug: 'detail-screens', label: 'Detail Screens', count: 2 },
			{ slug: 'settings-screens', label: 'Settings Screens', count: 2 },
		],
	},
	{
		id: 'ecommerce',
		label: 'Ecommerce',
		count: 114,
		items: [
			{ slug: 'product-overviews', label: 'Product Overviews', count: 5 },
			{ slug: 'product-lists', label: 'Product Lists', count: 11 },
			{ slug: 'category-previews', label: 'Category Previews', count: 6 },
			{ slug: 'shopping-carts', label: 'Shopping Carts', count: 6 },
			{ slug: 'category-filters', label: 'Category Filters', count: 5 },
			{ slug: 'product-quickviews', label: 'Product Quickviews', count: 4 },
			{ slug: 'product-features', label: 'Product Features', count: 9 },
			{ slug: 'store-navigation', label: 'Store Navigation', count: 5 },
			{ slug: 'promo-sections', label: 'Promo Sections', count: 8 },
			{ slug: 'checkout-forms', label: 'Checkout Forms', count: 5 },
			{ slug: 'reviews', label: 'Reviews', count: 4 },
			{ slug: 'order-summaries', label: 'Order Summaries', count: 4 },
			{ slug: 'order-history', label: 'Order History', count: 4 },
			{ slug: 'incentives', label: 'Incentives', count: 8 },
			{ slug: 'storefront-pages', label: 'Storefront Pages', count: 4 },
			{ slug: 'product-pages', label: 'Product Pages', count: 5 },
			{ slug: 'category-pages', label: 'Category Pages', count: 5 },
			{ slug: 'shopping-cart-pages', label: 'Shopping Cart Pages', count: 3 },
			{ slug: 'checkout-pages', label: 'Checkout Pages', count: 5 },
			{ slug: 'order-detail-pages', label: 'Order Detail Pages', count: 3 },
			{ slug: 'order-history-pages', label: 'Order History Pages', count: 5 },
		],
	},
];

/** Get all block groups */
export const getBlocks = query(async (): Promise<BlockGroup[]> => {
	return blockGroups;
});

/** Get a single block group by category slug (matches route param `category`) */
export const getBlocksByCategory = query(async (): Promise<BlockGroup | undefined> => {
	const { params } = getRequestEvent();
	return blockGroups.find((g) => g.id === (params as Record<string, string>).category);
});

/** Get a single block item by slug (matches route param `slug`) */
export const getBlockBySlug = query(async (): Promise<BlockDetail | undefined> => {
	const { params } = getRequestEvent();
	const slug = (params as Record<string, string>).slug;
	for (const group of blockGroups) {
		const item = group.items.find((i) => i.slug === slug);
		if (item) return { item, group };
	}
	return undefined;
});
