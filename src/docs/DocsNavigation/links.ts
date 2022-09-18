// Documentation AppBar Navigation

export const menuNavLinks: any = [
	{
		id: 'nav-guides',
		title: 'Get Started',
		list: [
			{ href: '/guides/install', label: 'Install', icon: 'circle-check' },
			{ href: '/guides/tailwind', label: 'Tailwind Settings', icon: 'tailwind' },
			{ href: '/guides/themes', label: 'Themes', icon: 'swatchbook' },
			{ href: '/guides/styling', label: 'Styling', icon: 'pen-ruler' },
			{ href: '/guides/astro', label: 'Usage with Astro', icon: 'rocket' }
		]
	},
	{
		id: 'nav-docs',
		title: 'Docs',
		list: [
			{ href: '/docs/why', label: 'Why Skeleton' },
			{ href: '/docs/comparisons', label: 'Comparisons' },
			{ href: '/docs/contributions', label: 'Contributions' }
		]
	},
	{
		id: 'nav-elements',
		title: 'Tailwind Elements',
		list: [
			{ href: '/tailwind/core', label: 'Core' },
			{ href: '/tailwind/typography', label: 'Typography' },
			{ href: '/tailwind/badges', label: 'Badges' },
			{ href: '/tailwind/buttons', label: 'Buttons' },
			{ href: '/tailwind/cards', label: 'Cards' },
			{ href: '/tailwind/lists', label: 'Lists' },
			{ href: '/tailwind/logo-clouds', label: 'Logo Clouds' }
		]
	},
	{
		id: 'nav-components',
		title: 'Svelte Components',
		list: [
			{ href: '/components/app-shell', label: 'App Shell' },
			{ href: '/components/app-bar', label: 'App Bar' },
			{ href: '/components/accordions', label: 'Accordions' },
			{ href: '/components/alerts', label: 'Alerts' },
			{ href: '/components/avatars', label: 'Avatars' },
			{ href: '/components/breadcrumbs', label: 'Breadcrumbs' },
			{ href: '/components/data-tables', label: 'Data Tables' },
			{ href: '/components/dividers', label: 'Dividers' },
			{ href: '/components/gradient-headings', label: 'Gradient Headings' },
			{ href: '/components/listboxes', label: 'Listboxes', badge: 'Updated' },
			{ href: '/components/menus', label: 'Menus' },
			{ href: '/components/paginators', label: 'Paginators' },
			{ href: '/components/placeholders', label: 'Placeholders' },
			{ href: '/components/progress-bars', label: 'Progress Bars' },
			{ href: '/components/progress-radials', label: 'Progress Radials' },
			{ href: '/components/radio-groups', label: 'Radio Groups' },
			{ href: '/components/range-sliders', label: 'Range Sliders' },
			{ href: '/components/slide-toggles', label: 'Slide Toggles' },
			{ href: '/components/steppers', label: 'Steppers' },
			{ href: '/components/tabs', label: 'Tabs' },
			{ href: '/components/tooltips', label: 'Tooltips' },
			// Work in Progress
			// {href: '/components/conic-gradients', label: 'Conic Gradients'}, // keep disabled until further notice
			// { href: '/components/svg-icons', label: 'SVG Icons' }, // keep disabled until further notice
			// Depricated
			{ href: '/components/badges', label: 'Badges', badge: 'Depricated' },
			{ href: '/components/buttons', label: 'Buttons', badge: 'Depricated' },
			{ href: '/components/cards', label: 'Cards', badge: 'Depricated' },
			{ href: '/components/logo-clouds', label: 'Logo Clouds', badge: 'Depricated' }
		]
	},
	{
		id: 'nav-actions',
		title: 'Svelte Actions',
		list: [{ href: '/actions/filters', label: 'Filters', badge: 'Experimental' }]
	},
	{
		id: 'nav-utilities',
		title: 'Utilities',
		list: [
			{ href: '/utilities/codeblocks', label: 'Code Blocks' },
			{ href: '/utilities/drawers', label: 'Drawers' },
			{ href: '/utilities/dialogs', label: 'Dialogs' },
			{ href: '/utilities/toasts', label: 'Toasts' },
			{ href: '/utilities/lightswitches', label: 'Lightswitch' }
		]
	}
];
