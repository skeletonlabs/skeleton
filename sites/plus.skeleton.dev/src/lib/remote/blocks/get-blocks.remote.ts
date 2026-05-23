import { getRequestEvent, query } from '$app/server';

export interface Framework {
	key: string;
	label: string;
}

export type BlockCategory = 'marketing' | 'applications' | 'ecommerce';

export interface BlockCategoryItem {
	id: BlockCategory;
	label: string;
}

export interface Block {
	slug: string;
	label: string;
	description: string;
	iconName: string;
	category: BlockCategory;
	count: number;
}

const categoryList: BlockCategoryItem[] = [
	{ id: 'marketing', label: 'Marketing' },
	{ id: 'applications', label: 'Applications' },
	{ id: 'ecommerce', label: 'Ecommerce' },
];

const frameworkList: Framework[] = [
	{ key: 'react', label: 'React' },
	{ key: 'svelte', label: 'Svelte' },
	{ key: 'vue', label: 'Vue' },
	{ key: 'solid', label: 'Solid.js' },
	{ key: 'astro', label: 'Astro' },
];

const placeholderDesc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

const blocks: Block[] = [
	// Marketing
	{
		slug: 'hero-sections',
		label: 'Hero Sections',
		description: placeholderDesc,
		iconName: 'SparklesIcon',
		category: 'marketing',
		count: 12,
	},
	{
		slug: 'feature-sections',
		label: 'Feature Sections',
		description: placeholderDesc,
		iconName: 'StarIcon',
		category: 'marketing',
		count: 15,
	},
	{
		slug: 'cta-sections',
		label: 'CTA Sections',
		description: placeholderDesc,
		iconName: 'MegaphoneIcon',
		category: 'marketing',
		count: 11,
	},
	{ slug: 'bento-grids', label: 'Bento Grids', description: placeholderDesc, iconName: 'LayoutGridIcon', category: 'marketing', count: 3 },
	{
		slug: 'pricing-sections',
		label: 'Pricing Sections',
		description: placeholderDesc,
		iconName: 'DollarSignIcon',
		category: 'marketing',
		count: 12,
	},
	{
		slug: 'header-sections',
		label: 'Header Sections',
		description: placeholderDesc,
		iconName: 'PanelTopIcon',
		category: 'marketing',
		count: 8,
	},
	{
		slug: 'newsletter-sections',
		label: 'Newsletter Sections',
		description: placeholderDesc,
		iconName: 'MailIcon',
		category: 'marketing',
		count: 6,
	},
	{ slug: 'stats', label: 'Stats', description: placeholderDesc, iconName: 'BarChart3Icon', category: 'marketing', count: 8 },
	{ slug: 'testimonials', label: 'Testimonials', description: placeholderDesc, iconName: 'QuoteIcon', category: 'marketing', count: 8 },
	{
		slug: 'blog-sections',
		label: 'Blog Sections',
		description: placeholderDesc,
		iconName: 'NewspaperIcon',
		category: 'marketing',
		count: 7,
	},
	{
		slug: 'contact-sections',
		label: 'Contact Sections',
		description: placeholderDesc,
		iconName: 'PhoneIcon',
		category: 'marketing',
		count: 7,
	},
	{ slug: 'team-sections', label: 'Team Sections', description: placeholderDesc, iconName: 'UsersIcon', category: 'marketing', count: 9 },
	{
		slug: 'content-sections',
		label: 'Content Sections',
		description: placeholderDesc,
		iconName: 'FileTextIcon',
		category: 'marketing',
		count: 7,
	},
	{ slug: 'logo-clouds', label: 'Logo Clouds', description: placeholderDesc, iconName: 'CloudIcon', category: 'marketing', count: 6 },
	{ slug: 'faqs', label: 'FAQs', description: placeholderDesc, iconName: 'CircleHelpIcon', category: 'marketing', count: 7 },
	{ slug: 'footers', label: 'Footers', description: placeholderDesc, iconName: 'PanelBottomIcon', category: 'marketing', count: 7 },
	{ slug: 'headers', label: 'Headers', description: placeholderDesc, iconName: 'NavigationIcon', category: 'marketing', count: 11 },
	{
		slug: 'flyout-menus',
		label: 'Flyout Menus',
		description: placeholderDesc,
		iconName: 'ChevronDownIcon',
		category: 'marketing',
		count: 7,
	},
	{ slug: 'banners', label: 'Banners', description: placeholderDesc, iconName: 'FlagIcon', category: 'marketing', count: 13 },
	{ slug: '404-pages', label: '404 Pages', description: placeholderDesc, iconName: 'FileXIcon', category: 'marketing', count: 5 },
	{ slug: 'landing-pages', label: 'Landing Pages', description: placeholderDesc, iconName: 'GlobeIcon', category: 'marketing', count: 4 },
	{ slug: 'pricing-pages', label: 'Pricing Pages', description: placeholderDesc, iconName: 'TagIcon', category: 'marketing', count: 3 },
	{ slug: 'about-pages', label: 'About Pages', description: placeholderDesc, iconName: 'InfoIcon', category: 'marketing', count: 3 },
	// Applications
	{
		slug: 'stacked-layouts',
		label: 'Stacked Layouts',
		description: placeholderDesc,
		iconName: 'LayersIcon',
		category: 'applications',
		count: 9,
	},
	{
		slug: 'sidebar-layouts',
		label: 'Sidebar Layouts',
		description: placeholderDesc,
		iconName: 'PanelLeftIcon',
		category: 'applications',
		count: 8,
	},
	{
		slug: 'multi-column-layouts',
		label: 'Multi-Column Layouts',
		description: placeholderDesc,
		iconName: 'Columns3Icon',
		category: 'applications',
		count: 6,
	},
	{
		slug: 'page-headings',
		label: 'Page Headings',
		description: placeholderDesc,
		iconName: 'HeadingIcon',
		category: 'applications',
		count: 9,
	},
	{
		slug: 'card-headings',
		label: 'Card Headings',
		description: placeholderDesc,
		iconName: 'BookmarkIcon',
		category: 'applications',
		count: 6,
	},
	{
		slug: 'section-headings',
		label: 'Section Headings',
		description: placeholderDesc,
		iconName: 'AlignLeftIcon',
		category: 'applications',
		count: 10,
	},
	{
		slug: 'description-lists',
		label: 'Description Lists',
		description: placeholderDesc,
		iconName: 'ListIcon',
		category: 'applications',
		count: 6,
	},
	{ slug: 'stats', label: 'Stats', description: placeholderDesc, iconName: 'BarChart2Icon', category: 'applications', count: 5 },
	{ slug: 'calendars', label: 'Calendars', description: placeholderDesc, iconName: 'CalendarIcon', category: 'applications', count: 8 },
	{
		slug: 'stacked-lists',
		label: 'Stacked Lists',
		description: placeholderDesc,
		iconName: 'ListOrderedIcon',
		category: 'applications',
		count: 15,
	},
	{ slug: 'tables', label: 'Tables', description: placeholderDesc, iconName: 'TableIcon', category: 'applications', count: 19 },
	{ slug: 'grid-lists', label: 'Grid Lists', description: placeholderDesc, iconName: 'Grid3x3Icon', category: 'applications', count: 7 },
	{ slug: 'feeds', label: 'Feeds', description: placeholderDesc, iconName: 'RssIcon', category: 'applications', count: 3 },
	{
		slug: 'form-layouts',
		label: 'Form Layouts',
		description: placeholderDesc,
		iconName: 'ClipboardListIcon',
		category: 'applications',
		count: 4,
	},
	{
		slug: 'input-groups',
		label: 'Input Groups',
		description: placeholderDesc,
		iconName: 'TextCursorInputIcon',
		category: 'applications',
		count: 21,
	},
	{
		slug: 'select-menus',
		label: 'Select Menus',
		description: placeholderDesc,
		iconName: 'ChevronsUpDownIcon',
		category: 'applications',
		count: 7,
	},
	{
		slug: 'sign-in-and-registration',
		label: 'Sign-in and Registration',
		description: placeholderDesc,
		iconName: 'LogInIcon',
		category: 'applications',
		count: 4,
	},
	{ slug: 'textareas', label: 'Textareas', description: placeholderDesc, iconName: 'AlignJustifyIcon', category: 'applications', count: 5 },
	{
		slug: 'radio-groups',
		label: 'Radio Groups',
		description: placeholderDesc,
		iconName: 'CircleDotIcon',
		category: 'applications',
		count: 12,
	},
	{
		slug: 'checkboxes',
		label: 'Checkboxes',
		description: placeholderDesc,
		iconName: 'SquareCheckIcon',
		category: 'applications',
		count: 4,
	},
	{ slug: 'toggles', label: 'Toggles', description: placeholderDesc, iconName: 'ToggleLeftIcon', category: 'applications', count: 5 },
	{
		slug: 'action-panels',
		label: 'Action Panels',
		description: placeholderDesc,
		iconName: 'LayoutListIcon',
		category: 'applications',
		count: 8,
	},
	{ slug: 'comboboxes', label: 'Comboboxes', description: placeholderDesc, iconName: 'ListFilterIcon', category: 'applications', count: 4 },
	{ slug: 'alerts', label: 'Alerts', description: placeholderDesc, iconName: 'CircleAlertIcon', category: 'applications', count: 6 },
	{ slug: 'empty-states', label: 'Empty States', description: placeholderDesc, iconName: 'InboxIcon', category: 'applications', count: 6 },
	{ slug: 'navbars', label: 'Navbars', description: placeholderDesc, iconName: 'MenuIcon', category: 'applications', count: 11 },
	{ slug: 'pagination', label: 'Pagination', description: placeholderDesc, iconName: 'EllipsisIcon', category: 'applications', count: 3 },
	{ slug: 'tabs', label: 'Tabs', description: placeholderDesc, iconName: 'LayoutTemplateIcon', category: 'applications', count: 9 },
	{
		slug: 'vertical-navigation',
		label: 'Vertical Navigation',
		description: placeholderDesc,
		iconName: 'ListTreeIcon',
		category: 'applications',
		count: 6,
	},
	{
		slug: 'sidebar-navigation',
		label: 'Sidebar Navigation',
		description: placeholderDesc,
		iconName: 'PanelLeftOpenIcon',
		category: 'applications',
		count: 5,
	},
	{
		slug: 'breadcrumbs',
		label: 'Breadcrumbs',
		description: placeholderDesc,
		iconName: 'ChevronRightIcon',
		category: 'applications',
		count: 4,
	},
	{
		slug: 'progress-bars',
		label: 'Progress Bars',
		description: placeholderDesc,
		iconName: 'GaugeIcon',
		category: 'applications',
		count: 8,
	},
	{
		slug: 'command-palettes',
		label: 'Command Palettes',
		description: placeholderDesc,
		iconName: 'CommandIcon',
		category: 'applications',
		count: 8,
	},
	{
		slug: 'modal-dialogs',
		label: 'Modal Dialogs',
		description: placeholderDesc,
		iconName: 'AppWindowIcon',
		category: 'applications',
		count: 6,
	},
	{ slug: 'drawers', label: 'Drawers', description: placeholderDesc, iconName: 'PanelRightIcon', category: 'applications', count: 12 },
	{ slug: 'notifications', label: 'Notifications', description: placeholderDesc, iconName: 'BellIcon', category: 'applications', count: 6 },
	{ slug: 'avatars', label: 'Avatars', description: placeholderDesc, iconName: 'CircleUserIcon', category: 'applications', count: 11 },
	{ slug: 'badges', label: 'Badges', description: placeholderDesc, iconName: 'BadgeIcon', category: 'applications', count: 16 },
	{ slug: 'dropdowns', label: 'Dropdowns', description: placeholderDesc, iconName: 'ChevronDownIcon', category: 'applications', count: 5 },
	{
		slug: 'buttons',
		label: 'Buttons',
		description: placeholderDesc,
		iconName: 'MousePointerClickIcon',
		category: 'applications',
		count: 8,
	},
	{ slug: 'button-groups', label: 'Button Groups', description: placeholderDesc, iconName: 'GripIcon', category: 'applications', count: 5 },
	{ slug: 'containers', label: 'Containers', description: placeholderDesc, iconName: 'BoxIcon', category: 'applications', count: 5 },
	{ slug: 'cards', label: 'Cards', description: placeholderDesc, iconName: 'CreditCardIcon', category: 'applications', count: 10 },
	{
		slug: 'list-containers',
		label: 'List Containers',
		description: placeholderDesc,
		iconName: 'DatabaseIcon',
		category: 'applications',
		count: 7,
	},
	{
		slug: 'media-objects',
		label: 'Media Objects',
		description: placeholderDesc,
		iconName: 'ImageIcon',
		category: 'applications',
		count: 8,
	},
	{
		slug: 'dividers',
		label: 'Dividers',
		description: placeholderDesc,
		iconName: 'SeparatorHorizontalIcon',
		category: 'applications',
		count: 8,
	},
	{ slug: 'home-screens', label: 'Home Screens', description: placeholderDesc, iconName: 'HomeIcon', category: 'applications', count: 2 },
	{
		slug: 'detail-screens',
		label: 'Detail Screens',
		description: placeholderDesc,
		iconName: 'FileSearchIcon',
		category: 'applications',
		count: 2,
	},
	{
		slug: 'settings-screens',
		label: 'Settings Screens',
		description: placeholderDesc,
		iconName: 'SettingsIcon',
		category: 'applications',
		count: 2,
	},
	// Ecommerce
	{
		slug: 'product-overviews',
		label: 'Product Overviews',
		description: placeholderDesc,
		iconName: 'PackageIcon',
		category: 'ecommerce',
		count: 5,
	},
	{
		slug: 'product-lists',
		label: 'Product Lists',
		description: placeholderDesc,
		iconName: 'PackageOpenIcon',
		category: 'ecommerce',
		count: 11,
	},
	{
		slug: 'category-previews',
		label: 'Category Previews',
		description: placeholderDesc,
		iconName: 'FolderOpenIcon',
		category: 'ecommerce',
		count: 6,
	},
	{
		slug: 'shopping-carts',
		label: 'Shopping Carts',
		description: placeholderDesc,
		iconName: 'ShoppingCartIcon',
		category: 'ecommerce',
		count: 6,
	},
	{
		slug: 'category-filters',
		label: 'Category Filters',
		description: placeholderDesc,
		iconName: 'SlidersHorizontalIcon',
		category: 'ecommerce',
		count: 5,
	},
	{
		slug: 'product-quickviews',
		label: 'Product Quickviews',
		description: placeholderDesc,
		iconName: 'ZoomInIcon',
		category: 'ecommerce',
		count: 4,
	},
	{
		slug: 'product-features',
		label: 'Product Features',
		description: placeholderDesc,
		iconName: 'SparkleIcon',
		category: 'ecommerce',
		count: 9,
	},
	{
		slug: 'store-navigation',
		label: 'Store Navigation',
		description: placeholderDesc,
		iconName: 'StoreIcon',
		category: 'ecommerce',
		count: 5,
	},
	{
		slug: 'promo-sections',
		label: 'Promo Sections',
		description: placeholderDesc,
		iconName: 'PercentIcon',
		category: 'ecommerce',
		count: 8,
	},
	{
		slug: 'checkout-forms',
		label: 'Checkout Forms',
		description: placeholderDesc,
		iconName: 'WalletIcon',
		category: 'ecommerce',
		count: 5,
	},
	{ slug: 'reviews', label: 'Reviews', description: placeholderDesc, iconName: 'ThumbsUpIcon', category: 'ecommerce', count: 4 },
	{
		slug: 'order-summaries',
		label: 'Order Summaries',
		description: placeholderDesc,
		iconName: 'ReceiptIcon',
		category: 'ecommerce',
		count: 4,
	},
	{ slug: 'order-history', label: 'Order History', description: placeholderDesc, iconName: 'HistoryIcon', category: 'ecommerce', count: 4 },
	{ slug: 'incentives', label: 'Incentives', description: placeholderDesc, iconName: 'GiftIcon', category: 'ecommerce', count: 8 },
	{
		slug: 'storefront-pages',
		label: 'Storefront Pages',
		description: placeholderDesc,
		iconName: 'ShoppingBagIcon',
		category: 'ecommerce',
		count: 4,
	},
	{
		slug: 'product-pages',
		label: 'Product Pages',
		description: placeholderDesc,
		iconName: 'PackageSearchIcon',
		category: 'ecommerce',
		count: 5,
	},
	{
		slug: 'category-pages',
		label: 'Category Pages',
		description: placeholderDesc,
		iconName: 'FolderIcon',
		category: 'ecommerce',
		count: 5,
	},
	{
		slug: 'shopping-cart-pages',
		label: 'Shopping Cart Pages',
		description: placeholderDesc,
		iconName: 'ShoppingBasketIcon',
		category: 'ecommerce',
		count: 3,
	},
	{
		slug: 'checkout-pages',
		label: 'Checkout Pages',
		description: placeholderDesc,
		iconName: 'CreditCardIcon',
		category: 'ecommerce',
		count: 5,
	},
	{
		slug: 'order-detail-pages',
		label: 'Order Detail Pages',
		description: placeholderDesc,
		iconName: 'ClipboardCheckIcon',
		category: 'ecommerce',
		count: 3,
	},
	{
		slug: 'order-history-pages',
		label: 'Order History Pages',
		description: placeholderDesc,
		iconName: 'ClockIcon',
		category: 'ecommerce',
		count: 5,
	},
];

/** Get all supported categories */
export const getCategories = query(async (): Promise<BlockCategoryItem[]> => {
	return categoryList;
});

/** Get all supported frameworks */
export const getFrameworks = query(async (): Promise<Framework[]> => {
	return frameworkList;
});

/** Get all blocks */
export const getBlocks = query(async (): Promise<Block[]> => {
	return blocks;
});

/** Get all blocks for a category (matches route param `category`) */
export const getBlocksByCategory = query(async (): Promise<Block[]> => {
	const { params } = getRequestEvent();
	return blocks.filter((b) => b.category === (params as Record<string, string>).category);
});

/** Get a single block by slug (matches route param `slug`) */
export const getBlockBySlug = query(async (): Promise<Block | undefined> => {
	const { params } = getRequestEvent();
	return blocks.find((b) => b.slug === (params as Record<string, string>).slug);
});
