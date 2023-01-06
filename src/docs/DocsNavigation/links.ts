// Navigation Links & Sitemap

export const menuNavLinks: any = [
	// Docs ---

	{
		id: 'docs',
		title: 'Docs',
		list: [
			{ href: '/docs/why', label: 'Why Skeleton', keywords: 'svelte, sirens, license, release' },
			{ href: '/docs/features', label: 'Features', keywords: 'tailwind, svelte, utilities' },
			{ href: '/docs/comparisons', label: 'Comparisons', keywords: 'mantine, flowbite, daisy, material' },
			{ href: '/docs/faqs', label: 'FAQs', keywords: 'typescript, npm, pnpm, yarn, tutorial' },
			{ href: '/docs/contributions', label: 'Contributions', keywords: 'branch, pr' }
			// { href: '/docs/recommended', label: 'Recommended', keywords: '' } // DISABLED until more complete
		]
	},

	// Guides ---

	{
		id: 'guides',
		title: 'Guides',
		list: [
			{ href: '/guides/install', label: 'Installation', keywords: 'start, install, setup' },
			{ href: '/guides/tailwind', label: 'Tailwind CSS', keywords: 'dark, content, plugin' },
			{ href: '/guides/themes', label: 'Themes', keywords: 'create, generate, generator, colors, tokens' },
			{ href: '/guides/styling', label: 'Styling', keywords: 'css, import, customization, props, class, styles' },
			{ href: '/guides/quickstart', label: 'Quickstart', keywords: 'start, setup, tutorial, guide' }
		]
	},

	// Tailwind ---

	{
		id: 'tokens',
		title: 'Info',
		list: [{ href: '/elements/tokens', label: 'Design Tokens', keywords: 'theme, color, pairing, css, utility' }]
	},
	{
		id: 'base',
		title: 'Base',
		list: [
			{ href: '/elements/core', label: 'Core', keywords: 'body, scroll, scrollbar, hr, horizontal, rule' },
			{
				href: '/elements/typography',
				label: 'Typography',
				keywords: 'unstyled, headings, paragraph, anchor, blockquote, pre, code, keyboard, ins, del'
			},
			{
				href: '/elements/forms',
				label: 'Forms',
				keywords: 'plugin, label, input, select, checkbox, radio, date, color, picker, slider, range'
			}
		]
	},
	{
		id: 'elements',
		title: 'Elements',
		list: [
			{ href: '/elements/alerts', label: 'Alerts', keywords: 'message, notification' },
			{ href: '/elements/badges', label: 'Badges', keywords: 'sup, sub, overlay, favorite, icon' },
			{ href: '/elements/breadcrumbs', label: 'Breadcrumbs', keywords: 'nav, navigation, seperator, hierarchy' },
			{ href: '/elements/buttons', label: 'Buttons', keywords: 'click, anchor, icon, preload' },
			{ href: '/elements/cards', label: 'Cards', keywords: 'header, footer, background, cell, region' },
			{ href: '/elements/chips', label: 'Chips', keywords: 'action, select, selection, filter, filtering, interactive' },
			{ href: '/elements/lists', label: 'Lists', keywords: 'unordered, ordered, description, nav, navigation, ul, ol, li, dd, dt' },
			{ href: '/elements/logo-clouds', label: 'Logo Clouds', keywords: 'logo, brand, branding, links' },
			{ href: '/elements/placeholders', label: 'Placeholders', keywords: 'skeleton, spacer, text, image, avatar, animate, animate' },
			{ href: '/elements/tables', label: 'Tables', keywords: 'data, entry' }
		]
	},

	// Svelte ---

	{
		id: 'actions',
		title: 'Actions',
		list: [
			{ href: '/actions/clipboard', label: 'Clipboard', keywords: 'copy, contenteditable, html, input' },
			{ href: '/actions/filters', label: 'Filters', keywords: 'svg, filtering, image, images, effect' },
			{ href: '/actions/focus-trap', label: 'Focus Trap', keywords: 'form, modal, a11y, accessibility, keyboard, interaction' }
		]
	},
	{
		id: 'components',
		title: 'Components',
		list: [
			{ href: '/components/accordions', label: 'Accordions', keywords: 'collapse' },
			{ href: '/components/app-bar', label: 'App Bar', keywords: 'header, top, bar, title' },
			{ href: '/components/app-rail', label: 'App Rail', keywords: 'nav, navigation, tile, sidebar' },
			{ href: '/components/app-shell', label: 'App Shell', keywords: 'layout, header, footer, sidebar, page, content' },
			{ href: '/components/avatars', label: 'Avatars', keywords: 'image, initial, filter' },
			{ href: '/components/conic-gradients', label: 'Conic Gradients', keywords: 'chart, graph, circle, pie, spinner, legend' },
			{ href: '/components/file-buttons', label: 'File Buttons', keywords: 'upload, form, input, file, media' },
			{ href: '/components/file-dropzone', label: 'File Dropzone', keywords: 'upload, form, input, file, media, drag, drop' },
			{ href: '/components/input-chips', label: 'Input Chips', keywords: 'multi, multiple, select, tags, form, validation' },
			{ href: '/components/listboxes', label: 'Listboxes', keywords: 'list, select, multi, multiple' },
			{ href: '/components/paginators', label: 'Paginators', keywords: 'nav, navigation, table, data, list' },
			{ href: '/components/progress-bars', label: 'Progress Bars', keywords: 'meter, track, indeterminate, determinate, min, max' },
			{ href: '/components/progress-radials', label: 'Progress Radials', keywords: 'meter, track, indeterminate, determinate, spin' },
			{ href: '/components/radio-groups', label: 'Radio Groups', keywords: 'input, form, select, selection' },
			{ href: '/components/range-sliders', label: 'Range Sliders', keywords: 'value, min, max, step,, tick, input, form' },
			{ href: '/components/slide-toggles', label: 'Slide Toggles', keywords: 'check, checkbox, toggle, input, form' },
			{ href: '/components/steppers', label: 'Steppers', keywords: 'intro, onboard, onboarding, form, progress' },
			{ href: '/components/tabs', label: 'Tabs', keywords: 'select, selection, panel' },
			{ href: '/components/tables', label: 'Tables', keywords: 'data, entry' },
			{ href: '/components/table-of-contents', label: 'Table of Contents', keywords: 'page, results, links, navigation' },
			// Slated for Deprecation:
			{ href: '/components/alerts', label: 'Alerts', keywords: 'message, notification', badge: 'Deprecated' },
			{ href: '/components/breadcrumbs', label: 'Breadcrumbs', keywords: 'nav, navigation, seperator, hierarchy', badge: 'Deprecated' },
			{ href: '/components/dividers', label: 'Dividers', keywords: 'hr, horizontal, rule, separator', badge: 'Deprecated' },
			{
				href: '/components/gradient-headings',
				label: '<small>Gradient Headings</small>',
				keywords: 'header, h1, h2, h3',
				badge: 'Deprecated'
			}
		]
	},

	// Utilities ---

	{
		id: 'utilities',
		title: 'Utilities',
		list: [
			{ href: '/utilities/codeblocks', label: 'Code Blocks', keywords: 'highlight, syntax, code' },
			{
				href: '/utilities/data-tables',
				label: 'Data Tables',
				keywords: 'search, sort, page, pagination, async',
				badge: 'Experimental'
			},
			{ href: '/utilities/drawers', label: 'Drawers', keywords: 'overlay, slide, panel, sidebar' },
			{ href: '/utilities/lightswitches', label: 'Lightswitch', keywords: 'light, dark, toggle, prefer, color, scheme' },
			{ href: '/utilities/local-storage-stores', label: 'Local Storage Stores', keywords: 'svelte, writable, get, cache, persist' },
			{ href: '/utilities/menus', label: 'Menus', keywords: 'overlay, dropdown, drop, down, select' },
			{
				href: '/utilities/modals',
				label: 'Modals',
				keywords: 'overlay, dialog, notification, alert, confirm, prompt, multiple, form, list, embed, video'
			},
			{ href: '/utilities/toasts', label: 'Toasts', keywords: 'overlay, snack, snackbar, bar, action, alert, notification' },
			{ href: '/utilities/tooltips', label: 'Tooltips', keywords: 'pop, up, popup, overlay, hover' }
		]
	}
];
