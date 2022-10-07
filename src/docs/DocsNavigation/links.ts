// Documentation AppBar Navigation

export const menuNavLinks: any = [
	{
		id: 'nav-guides',
		title: 'Get Started',
		list: [
			{ href: '/guides/install', label: 'Install', icon: 'circle-check' },
			{ href: '/guides/tailwind', label: 'Tailwind CSS', icon: 'tailwind' },
			{ href: '/guides/themes', label: 'Themes', icon: 'swatchbook' },
			{ href: '/guides/styling', label: 'Styling', icon: 'pen-ruler' }
		]
	},
	{
		id: 'nav-docs',
		title: 'Docs',
		list: [
			{ href: '/docs/why', label: 'Why Skeleton' },
			{ href: '/docs/comparisons', label: 'Comparisons' },
			{ href: '/docs/features', label: 'Features' },
			{ href: '/docs/scaffold', label: 'Scaffold a Project' },
			{ href: '/docs/contributions', label: 'Contributions' }
		]
	},
	{
		id: 'nav-elements',
		title: 'Tailwind Elements',
		list: [
			{ href: '/elements/core', label: 'Core' },
			{ href: '/elements/typography', label: 'Typography' },
			{ href: '/elements/forms', label: 'Forms' },
			{ href: '/elements/badges', label: 'Badges' },
			{ href: '/elements/buttons', label: 'Buttons' },
			{ href: '/elements/cards', label: 'Cards' },
			{ href: '/elements/lists', label: 'Lists' },
			{ href: '/elements/logo-clouds', label: 'Logo Clouds' },
			{ href: '/elements/placeholders', label: 'Placeholders' }
		]
	},
	{
		id: 'nav-components',
		title: 'Svelte Components',
		list: [
			{ href: '/components/accordions', label: 'Accordions' },
			{ href: '/components/alerts', label: 'Alerts' },
			{ href: '/components/app-bar', label: 'App Bar' },
			{ href: '/components/app-shell', label: 'App Shell' },
			{ href: '/components/avatars', label: 'Avatars' },
			{ href: '/components/breadcrumbs', label: 'Breadcrumbs' },
			{ href: '/components/conic-gradients', label: 'Conic Gradients' },
			{ href: '/components/data-tables', label: 'Data Tables' },
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
			{ href: '/components/tabs', label: 'Tabs' }
			// Work in Progress
			// { href: '/components/svg-icons', label: 'SVG Icons' }, // keep disabled until further notice
		]
	},
	{
		id: 'nav-actions',
		title: 'Svelte Actions',
		list: [
			{ href: '/actions/clipboard', label: 'Clipboard' },
			{ href: '/actions/filters', label: 'Filters', badge: 'Experimental' }
		]
	},
	{
		id: 'nav-utilities',
		title: 'Utilities',
		list: [
			{ href: '/utilities/codeblocks', label: 'Code Blocks' },
			{ href: '/utilities/drawers', label: 'Drawers' },
			{ href: '/utilities/dialogs', label: 'Dialogs' },
			{ href: '/utilities/toasts', label: 'Toasts' },
			{ href: '/utilities/lightswitches', label: 'Lightswitch' },
			{ href: '/utilities/local-storage-stores', label: 'Local Storage Stores' },
			{ href: '/utilities/menus', label: 'Menus' },
			{ href: '/utilities/tooltips', label: 'Tooltips' }
		]
	}
];
