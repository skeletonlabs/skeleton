// Navigation Links & Sitemap

export const menuNavLinks: any = [
	// Docs ---

	{
		id: 'docs',
		title: 'Docs',
		list: [
			{ href: '/docs/why', label: 'Why Skeleton' },
			{ href: '/docs/features', label: 'Features' },
			{ href: '/docs/comparisons', label: 'Comparisons' },
			{ href: '/docs/faqs', label: 'FAQs' }, // , badge: 'New'
			// { href: '/docs/recommended', label: 'Recommended' }, // DISABLED until more complete
			{ href: '/docs/contributions', label: 'Contributions' }
		]
	},

	// Guides ---

	{
		id: 'guides',
		title: 'Guides',
		list: [
			{ href: '/guides/install', label: 'Installation' },
			{ href: '/guides/tailwind', label: 'Tailwind CSS' },
			{ href: '/guides/themes', label: 'Themes' },
			{ href: '/guides/styling', label: 'Styling' },
			// { href: '/guides/frameworks', label: 'Frameworks' }
			{ href: '/guides/frameworks/sveltekit', label: 'Quickstart Guide' }
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
			{ href: '/elements/core', label: 'Core' },
			{ href: '/elements/typography', label: 'Typography' },
			{ href: '/elements/forms', label: 'Forms' }
		]
	},
	{
		id: 'elements',
		title: 'Elements',
		list: [
			{ href: '/elements/badges', label: 'Badges' },
			{ href: '/elements/buttons', label: 'Buttons' },
			{ href: '/elements/cards', label: 'Cards' },
			{ href: '/elements/lists', label: 'Lists' },
			{ href: '/elements/logo-clouds', label: 'Logo Clouds' },
			{ href: '/elements/placeholders', label: 'Placeholders' },
			{ href: '/elements/tables', label: 'Tables' }
		]
	},

	// Svelte ---

	{
		id: 'actions',
		title: 'Actions',
		list: [
			{ href: '/actions/clipboard', label: 'Clipboard' },
			{ href: '/actions/filters', label: 'Filters' },
			{ href: '/actions/focus-trap', label: 'Focus Trap' }
		]
	},
	{
		id: 'components',
		title: 'Components',
		list: [
			{ href: '/components/accordions', label: 'Accordions' },
			{ href: '/components/alerts', label: 'Alerts' },
			{ href: '/components/app-bar', label: 'App Bar' },
			{ href: '/components/app-rail', label: 'App Rail' },
			{ href: '/components/app-shell', label: 'App Shell' },
			{ href: '/components/avatars', label: 'Avatars' },
			{ href: '/components/breadcrumbs', label: 'Breadcrumbs' },
			{ href: '/components/conic-gradients', label: 'Conic Gradients' },
			{ href: '/components/dividers', label: 'Dividers' },
			{ href: '/components/file-buttons', label: 'File Buttons' },
			{ href: '/components/file-dropzone', label: 'File Dropzone' },
			{ href: '/components/gradient-headings', label: 'Gradient Headings' },
			{ href: '/components/listboxes', label: 'Listboxes' },
			{ href: '/components/paginators', label: 'Paginators' },
			{ href: '/components/progress-bars', label: 'Progress Bars' },
			{ href: '/components/progress-radials', label: 'Progress Radials' },
			{ href: '/components/radio-groups', label: 'Radio Groups' },
			{ href: '/components/range-sliders', label: 'Range Sliders' },
			{ href: '/components/slide-toggles', label: 'Slide Toggles' },
			{ href: '/components/steppers', label: 'Steppers' },
			{ href: '/components/tabs', label: 'Tabs' },
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
			{ href: '/utilities/codeblocks', label: 'Code Blocks' },
			{ href: '/utilities/data-tables', label: 'Data Tables', badge: 'Experimental' },
			{ href: '/utilities/drawers', label: 'Drawers' },
			{ href: '/utilities/lightswitches', label: 'Lightswitch' },
			{ href: '/utilities/local-storage-stores', label: 'Local Storage Stores' },
			{ href: '/utilities/menus', label: 'Menus' },
			{ href: '/utilities/modals', label: 'Modals', keywords: 'dialog' },
			{ href: '/utilities/toasts', label: 'Toasts' },
			{ href: '/utilities/tooltips', label: 'Tooltips' }
		]
	}
];
