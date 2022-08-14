const presetUrl: string = 'https://github.com/Brain-Bones/skeleton/blob/theme-modifier/static/themes/';
const presets: { name: string; colors: string[]; surface: string; url: string; }[] = [
    { name: 'Skeleton', colors: ['#10b981', '#6366f1', '#f43f5e'], surface: '#111827', url: `${presetUrl}/theme-skeleton.css` },
    { name: 'Rocket', colors: ['#06b6d4', '#3b82f6', '#ec4899'], surface: '#3c4553', url: `${presetUrl}/theme-rocket.css` },
    { name: 'Vintage', colors: ['#f59e0b', '#22c55e', '#ef4444'], surface: '#1c1917', url: `${presetUrl}/theme-vintage.css` },
    { name: 'Modern', colors: ['#ec4899', '#06b6d4', '#eab308'], surface: '#312e81', url: `${presetUrl}/theme-modern.css` },
    { name: 'Sahara', colors: ['#facc15', '#fb923c', '#14b8a6'], surface: '#881337', url: `${presetUrl}/theme-sahara.css` },
    { name: 'Seafoam', colors: ['#14b8a6', '#8b5cf6', '#f59e0b'], surface: '#0c4a6e', url: `${presetUrl}/theme-seafoam.css` },
];

export default presets;