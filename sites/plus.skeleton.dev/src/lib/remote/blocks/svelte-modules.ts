const freeSvelteModules = import.meta.glob('../../content/free/blocks/**/svelte/*.svelte');
const premiumSvelteModules = import.meta.glob('../../content/premium/blocks/**/svelte/*.svelte');

export const svelteModules = { ...freeSvelteModules, ...premiumSvelteModules };
