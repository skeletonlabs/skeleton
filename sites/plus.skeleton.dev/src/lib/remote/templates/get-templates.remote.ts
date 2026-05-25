/**
 * Template data for the Plus site's templates showcase.
 * Each entry includes metadata, screenshots, and per-framework download links
 * for the listing and detail pages.
 */

import { getRequestEvent, query } from '$app/server';

import personaCard from '$lib/assets/images/templates/persona/card.webp';
import personaHero from '$lib/assets/images/templates/persona/hero.webp';
import personaScreenshot001 from '$lib/assets/images/templates/persona/screenshot-001.webp';
import personaScreenshot002 from '$lib/assets/images/templates/persona/screenshot-002.webp';
import personaScreenshot003 from '$lib/assets/images/templates/persona/screenshot-003.webp';
import personaScreenshot004 from '$lib/assets/images/templates/persona/screenshot-004.webp';

import stardustCard from '$lib/assets/images/templates/stardust/card.webp';
import stardustHero from '$lib/assets/images/templates/stardust/hero.webp';
import stardustScreenshot001 from '$lib/assets/images/templates/stardust/screenshot-001.webp';
import stardustScreenshot002 from '$lib/assets/images/templates/stardust/screenshot-002.webp';
import stardustScreenshot003 from '$lib/assets/images/templates/stardust/screenshot-003.webp';
import stardustScreenshot004 from '$lib/assets/images/templates/stardust/screenshot-004.webp';

export interface TemplateImage {
	src: string;
	alt: string;
}

export interface TemplateDownload {
	key: string;
	label: string;
	href: string;
}

export interface Template {
	slug: string;
	name: string;
	category: string;
	tagline: string;
	description: string;
	isPremium: boolean;
	previewUrl: string;
	images: {
		card: TemplateImage;
		hero: TemplateImage;
		screenshots: TemplateImage[];
	};
	downloads: TemplateDownload[];
}

// const placeholder = (size: string) => `https://placehold.co/${size}/1f1f1f/666666/webp?font=raleway`;

const placeholderDescription =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const templates: Template[] = [
	// Free: Portfolio Site
	{
		slug: 'persona',
		name: 'Persona',
		category: 'Portfolio',
		tagline: 'A personal portfolio website for promoting yourself.',
		description: placeholderDescription,
		isPremium: false,
		previewUrl: 'https://skeleton-template-portfolio.vercel.app/',
		images: {
			card: { src: personaCard, alt: 'Persona template screenshot' },
			hero: { src: personaHero, alt: 'Persona homepage hero' },
			screenshots: [
				{ src: personaScreenshot001, alt: 'Persona about page' },
				{ src: personaScreenshot002, alt: 'Persona projects index' },
				{ src: personaScreenshot003, alt: 'Persona project detail page' },
				{ src: personaScreenshot004, alt: 'Persona design project page' },
			],
		},
		downloads: [
			{ key: 'svelte', label: 'SvelteKit', href: 'https://github.com/skeletonlabs/skeleton-templates/tree/main/templates/portfolio' },
		],
	},
	// Free: Blog Site
	{
		slug: 'stardust',
		name: 'Stardust',
		category: 'Blog',
		tagline: 'An personal blog template powered by markdown.',
		description: placeholderDescription,
		isPremium: false,
		previewUrl: 'https://skeleton-template-blog.vercel.app/',
		images: {
			card: { src: stardustCard, alt: 'Stardust template screenshot' },
			hero: { src: stardustHero, alt: 'Stardust homepage hero' },
			screenshots: [
				{ src: stardustScreenshot001, alt: 'Stardust about page' },
				{ src: stardustScreenshot002, alt: 'Stardust blog index' },
				{ src: stardustScreenshot003, alt: 'Stardust blog post' },
				{ src: stardustScreenshot004, alt: 'Stardust blog post' },
			],
		},
		downloads: [{ key: 'astro', label: 'Astro', href: 'https://github.com/skeletonlabs/skeleton-templates/tree/main/templates/blog' }],
	},
	// Premium: Placeholder
	// {
	// 	slug: 'placeholder',
	// 	name: 'Placeholder',
	// 	category: 'Admin',
	// 	tagline: 'An admin dashboard template with analytics, billing, and settings.',
	// 	description: placeholderDescription,
	// 	isPremium: true,
	// 	previewUrl: 'https://example.skeleton.dev',
	// 	images: {
	// 		card: { src: placeholder('768x432'), alt: 'Placeholder template screenshot' },
	// 		hero: { src: placeholder('1920x960'), alt: 'Placeholder dashboard hero' },
	// 		screenshots: [
	// 			{ src: placeholder('426x240'), alt: 'Placeholder dashboard' },
	// 			{ src: placeholder('426x240'), alt: 'Placeholder analytics' },
	// 			{ src: placeholder('426x240'), alt: 'Placeholder billing' },
	// 			{ src: placeholder('426x240'), alt: 'Placeholder team management' },
	// 		],
	// 	},
	// 	downloads: [
	// 		{ key: 'svelte', label: 'Svelte', href: '#' },
	// 		{ key: 'react', label: 'React', href: '#' },
	// 		{ key: 'vue', label: 'Vue', href: '#' },
	// 		{ key: 'solid', label: 'Solid.js', href: '#' },
	// 		{ key: 'astro', label: 'Astro', href: '#' },
	// 	],
	// },
];

/** Get all templates */
export const getTemplates = query(async (): Promise<Template[]> => {
	return templates;
});

/** Get a single template by slug (matches route param `slug`) */
export const getTemplate = query(async (): Promise<Template | undefined> => {
	const { params } = getRequestEvent();
	return templates.find((t) => t.slug === (params as Record<string, string>).slug);
});
