// Navigation Links & Sitemap

export type MenuNavLink = {
	href: string;
	label: string;
	badge?: string;
	keywords?: string;
};

export type MenuNavCategory = {
	id: string;
	title: string;
	list: MenuNavLink[];
};

export const menuNavLinks: MenuNavCategory[] = [
	// Docs ---

	{
		id: 'docs',
		title: 'Docs',
		list: [
			{ href: '/docs/why', label: 'Why Skeleton' },
			{ href: '/docs/faqs', label: 'FAQs', badge: 'New', keywords: 'typescript package manager monorepo roadmap' },
			{ href: '/docs/comparisons', label: 'Comparisons', keywords: 'mantine flowbite daisy material mui' },
			{ href: '/docs/features', label: 'Features', keywords: 'benefits' },
			{ href: '/docs/recommended', label: 'Recommended', keywords: '3rd party plugins' },
			{ href: '/docs/contributions', label: 'Contributions', keywords: 'contribute pull request pr' }
		]
	},

	// Guides ---

	{
		id: 'guides',
		title: 'Guides',
		list: [
			{ href: '/guides/install', label: 'Installation', keywords: 'tutorial create' },
			{ href: '/guides/tailwind', label: 'Tailwind CSS', keywords: 'tutorial plugin' },
			{ href: '/guides/themes', label: 'Themes', keywords: 'generator styling tutorial' },
			{ href: '/guides/styling', label: 'Styling', keywords: 'tutorial customize customise override' },
			{ href: '/guides/frameworks', label: 'Frameworks', keywords: 'tutorial sveltekit vite astro' }
		]
	},

	// Tailwind ---

	{
		id: 'tokens',
		title: 'Info',
		list: [{ href: '/elements/tokens', label: 'Design Tokens' }]
	},
	{
		id: 'base',
		title: 'Base',
		list: [
			{ href: '/elements/core', label: 'Core', keywords: 'scrollbar horizontal rule divider' },
			{ href: '/elements/typography', label: 'Typography', keywords: 'paragraph anchor blockquote pre code kbd ins del' },
			{ href: '/elements/forms', label: 'Forms', keywords: 'kitchen sink preview' }
		]
	},
	{
		id: 'elements',
		title: 'Elements',
		list: [
			{ href: '/elements/badges', label: 'Badges', keywords: 'chips heart icon' },
			{ href: '/elements/buttons', label: 'Buttons', keywords: 'cta chips' },
			{ href: '/elements/cards', label: 'Cards', keywords: 'info' },
			{ href: '/elements/lists', label: 'Lists', keywords: 'select input' },
			{ href: '/elements/logo-clouds', label: 'Logo Clouds', keywords: 'grid sponsors' },
			{ href: '/elements/placeholders', label: 'Placeholders', keywords: 'loading' },
			{ href: '/elements/tables', label: 'Tables' }
		]
	},

	// Svelte ---

	{
		id: 'actions',
		title: 'Actions',
		list: [
			{ href: '/actions/clipboard', label: 'Clipboard', keywords: 'copy paste' },
			{ href: '/actions/filters', label: 'Filters', keywords: 'image img' }, // badge: 'Experimental'
			{ href: '/actions/focus-trap', label: 'Focus Trap' }
		]
	},
	{
		id: 'components',
		title: 'Components',
		list: [
			{ href: '/components/accordions', label: 'Accordions', keywords: 'details summary collapsible' },
			{ href: '/components/alerts', label: 'Alerts', keywords: 'error warning info pop up' },
			{ href: '/components/app-bar', label: 'App Bar' },
			{ href: '/components/app-rail', label: 'App Rail', keywords: 'discord navigation vertical' },
			{ href: '/components/app-shell', label: 'App Shell' },
			{ href: '/components/avatars', label: 'Avatars', keywords: 'profile picture image img' },
			{ href: '/components/breadcrumbs', label: 'Breadcrumbs', keywords: 'navigation link seperator' },
			{ href: '/components/conic-gradients', label: 'Conic Gradients', keywords: 'charts circle loading pie spinner' },
			{ href: '/components/dividers', label: 'Dividers', keywords: 'spacer seperator vertical' },
			{ href: '/components/file-buttons', label: 'File Buttons', keywords: 'upload' },
			{ href: '/components/file-dropzone', label: 'File Dropzone', keywords: 'upload drag drop' },
			{ href: '/components/gradient-headings', label: 'Gradient Headings' },
			{ href: '/components/listboxes', label: 'Listboxes', keywords: 'select input' },
			{ href: '/components/paginators', label: 'Paginators' },
			{ href: '/components/progress-bars', label: 'Progress Bars', keywords: 'charts loading indeterminate' },
			{ href: '/components/progress-radials', label: 'Progress Radials', keywords: 'spinner charts loading indeterminate' },
			{ href: '/components/radio-groups', label: 'Radio Groups', keywords: 'select input' },
			{ href: '/components/range-sliders', label: 'Range Sliders', keywords: 'select input' },
			{ href: '/components/slide-toggles', label: 'Slide Toggles', keywords: 'select input switch on off' },
			{ href: '/components/steppers', label: 'Steppers', keywords: 'progress tutorial' },
			{ href: '/components/tabs', label: 'Tabs', keywords: 'navigation link' },
			{ href: '/components/tables', label: 'Tables' }
			// Work in Progress
			// { href: '/components/svg-icons', label: 'SVG Icons' }, // keep disabled until further notice
		]
	},

	// Utilities ---

	{
		id: 'utilities',
		title: 'Utilities',
		list: [
			{ href: '/utilities/codeblocks', label: 'Code Blocks', keywords: 'format coding js ts python html' },
			{ href: '/utilities/data-tables', label: 'Data Tables', keywords: 'sort' },
			{ href: '/utilities/modals', label: 'Modals', keywords: 'dialog pop up confirm alert prompt' },
			{ href: '/utilities/drawers', label: 'Drawers', keywords: 'overlay pop up tray' },
			{ href: '/utilities/lightswitches', label: 'Lightswitch', keywords: 'dark mode' },
			{ href: '/utilities/local-storage-stores', label: 'Local Storage Stores', keywords: 'persistent pub sub storage save' },
			{ href: '/utilities/menus', label: 'Menus', keywords: 'navigation link' },
			{ href: '/utilities/toasts', label: 'Toasts', keywords: 'pop up alert notification queue' },
			{ href: '/utilities/tooltips', label: 'Tooltips', keywords: 'info pop up hint helper' }
		]
	}
];
