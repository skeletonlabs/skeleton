// Preset Themes

const ghPath = 'https://github.com/skeletonlabs/skeleton/blob/master/src/themes';
export const themes: any[] = [
	// Custom (IMPORTANT: must remain the first option)
	{
		file: 'custom',
		name: '🎨 Custom Theme',
		colors: ['#FFFFFF'],
		surface: '#000000',
		fonts: [
			{
				source: 'Google Fonts',
				url: 'https://fonts.google.com/specimen/Inter?query=inter',
				name: 'Inter',
				file: 'Inter-VariableFont_slnt,wght.ttf',
				import:
					'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100&display=swap'
			}
		]
	},
	// Presets
	{
		file: 'skeleton',
		name: '💀 Skeleton',
		colors: ['#0FBA81', '#4F46E5', '#0EA5E9', '#84cc16', '#EAB308', '#D41976'],
		surface: '#242c46',
		url: `${ghPath}/theme-skeleton.css`,
		fonts: []
	},
	{
		file: 'modern',
		name: '🤖 Modern',
		colors: ['#ec4899', '#06b6d4', '#14b8a6', '#84cc16', '#eab308', '#ef4444'],
		surface: '#313276',
		url: `${ghPath}/theme-modern.css`,
		fonts: [
			{
				source: 'Google Fonts',
				url: 'https://fonts.google.com/specimen/Quicksand?query=Quicksand',
				name: 'Quicksand',
				file: 'Quicksand-VariableFont_wght.ttf',
				import: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
			}
		]
	},
	{
		file: 'rocket',
		name: '🚀 Rocket',
		colors: ['#06b6d4', '#3b82f6', '#a855f7', '#4ccb15', '#f4c12a', '#b52c55'],
		surface: '#313944',
		url: `${ghPath}/theme-rocket.css`,
		fonts: [
			{
				source: 'Google Fonts',
				url: 'https://fonts.google.com/specimen/Space+Grotesk',
				name: 'Space Grotesk',
				file: 'SpaceGrotesk-VariableFont_wght.ttf',
				import: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
			}
		]
	},
	{
		file: 'seafoam',
		name: '🧜‍♀️ Seafoam',
		colors: ['#86d0cb', '#213355', '#ff3d00', '#06e5a2', '#eae557', '#d24646'],
		surface: '#126668',
		url: `${ghPath}/theme-seafoam.css`,
		fonts: [
			{
				source: 'Google Fonts',
				url: 'https://fonts.google.com/specimen/Playfair+Display?query=playfair',
				name: 'Playfair Display',
				file: 'PlayfairDisplay-Italic-VariableFont_wght.ttf',
				import:
					'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
			}
		]
	},
	{
		file: 'vintage',
		name: '📺 Vintage',
		colors: ['#ea861a', '#97cea5', '#06b6d4', '#84cb5d', '#f2ac23', '#d57e78'],
		surface: '#1f1b18',
		url: `${ghPath}/theme-vintage.css`,
		fonts: [
			{
				source: 'Google Fonts',
				url: 'https://fonts.google.com/specimen/Abril+Fatface?query=Abril+Fatface&noto.query=Abril',
				name: 'Abril Fatface',
				file: 'AbrilFatface-Regular.ttf',
				import: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap'
			}
		]
	},
	{
		file: 'sahara',
		name: '🏜️ Sahara',
		colors: ['#ecaa36', '#3acbba', '#bbdf86', '#84cc16', '#e5c157', '#db5c9c'],
		surface: '#6b2631',
		url: `${ghPath}/theme-sahara.css`,
		fonts: []
	},
	// Community Contest Themes
	{
		file: 'hamlindigo',
		name: '👔 Hamlindigo',
		colors: ['#a8bef1', '#a48e5b', '#6197a3', '#47947d', '#daa93e', '#a26175'],
		surface: '#313a50',
		url: `${ghPath}/theme-hamlindigo.css`,
		fonts: []
	},
	{
		file: 'gold-nouveau',
		name: '💫 Gold Nouveau',
		colors: ['#744aa1', '#0672e5', '#7f78dd', '#72c585', '#e77f08', '#8f0f22'],
		surface: '#120b18',
		url: `${ghPath}/theme-gold-nouveau.css`,
		fonts: [
			{
				source: 'Google Fonts',
				url: 'https://fonts.google.com/specimen/Quicksand?query=Quicksand',
				name: 'Quicksand',
				file: 'Quicksand-VariableFont_wght.ttf',
				import: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap'
			}
		]
	},
	{
		file: 'crimson',
		name: '⭕ Crimson',
		colors: ['#d4163c', '#4685af', '#c0b6b4', '#c1dd97', '#e4c25e', '#d27f81'],
		surface: '#15171f',
		url: `${ghPath}/theme-crimson.css`,
		fonts: []
	}
];
