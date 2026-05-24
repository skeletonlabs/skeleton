import type { Component } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';
import AstroIcon from 'virtual:icons/simple-icons/astro';
import ReactIcon from 'virtual:icons/simple-icons/react';
import SolidIcon from 'virtual:icons/simple-icons/solid';
import SvelteIcon from 'virtual:icons/simple-icons/svelte';
import VueIcon from 'virtual:icons/simple-icons/vuedotjs';

export const frameworkIconMap: Record<string, Component<SvelteHTMLElements['svg']>> = {
	svelte: SvelteIcon,
	react: ReactIcon,
	vue: VueIcon,
	solid: SolidIcon,
	astro: AstroIcon,
};
