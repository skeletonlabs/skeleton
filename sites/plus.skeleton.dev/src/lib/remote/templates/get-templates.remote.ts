/**
 * Template data for the Plus site's templates showcase.
 * Each entry includes metadata, screenshots, and per-framework download links
 * for the listing and detail pages.
 */

import { getRequestEvent, query } from '$app/server';
import personaHero from '$lib/assets/images/templates/persona/hero.png';
import stardustHero from '$lib/assets/images/templates/stardust/hero.png';

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

const placeholder = (size: string) => `https://placehold.co/${size}/1f1f1f/666666/webp?font=raleway`;

const placeholderDownloads: TemplateDownload[] = [
	{ key: 'svelte', label: 'Svelte', href: '#' },
	{ key: 'react', label: 'React', href: '#' },
	{ key: 'vue', label: 'Vue', href: '#' },
	{ key: 'solid', label: 'Solid.js', href: '#' },
	{ key: 'astro', label: 'Astro', href: '#' },
];

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
			card: { src: personaHero, alt: 'Persona template screenshot' },
			hero: { src: personaHero, alt: 'Persona homepage hero' },
			screenshots: [
				{ src: placeholder('426x240'), alt: 'Persona about page' },
				{ src: placeholder('426x240'), alt: 'Persona case study page' },
				{ src: placeholder('426x240'), alt: 'Persona blog index' },
				{ src: placeholder('426x240'), alt: 'Persona blog post' },
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
			card: { src: stardustHero, alt: 'Stardust template screenshot' },
			hero: { src: stardustHero, alt: 'Stardust homepage hero' },
			screenshots: [
				{ src: placeholder('426x240'), alt: 'Stardust article page' },
				{ src: placeholder('426x240'), alt: 'Stardust tag archive' },
				{ src: placeholder('426x240'), alt: 'Stardust author page' },
				{ src: placeholder('426x240'), alt: 'Stardust newsletter signup' },
			],
		},
		downloads: [{ key: 'astro', label: 'Astro', href: 'https://github.com/skeletonlabs/skeleton-templates/tree/main/templates/blog' }],
	},
	// Placeholder
	{
		slug: 'helix',
		name: 'Helix',
		category: 'Admin',
		tagline: 'An admin dashboard template with analytics, billing, and settings.',
		description: placeholderDescription,
		isPremium: true,
		previewUrl: 'https://example.skeleton.dev',
		images: {
			card: { src: placeholder('768x432'), alt: 'Helix template screenshot' },
			hero: { src: placeholder('1920x960'), alt: 'Helix dashboard hero' },
			screenshots: [
				{ src: placeholder('426x240'), alt: 'Helix dashboard' },
				{ src: placeholder('426x240'), alt: 'Helix analytics' },
				{ src: placeholder('426x240'), alt: 'Helix billing' },
				{ src: placeholder('426x240'), alt: 'Helix team management' },
			],
		},
		downloads: placeholderDownloads,
	},
	// Placeholder
	{
		slug: 'quantum',
		name: 'Quantum',
		category: 'Landing',
		tagline: 'A high-conversion landing page template for product launches.',
		description: placeholderDescription,
		isPremium: true,
		previewUrl: 'https://example.skeleton.dev',
		images: {
			card: { src: placeholder('768x432'), alt: 'Quantum template screenshot' },
			hero: { src: placeholder('1920x960'), alt: 'Quantum landing hero' },
			screenshots: [
				{ src: placeholder('426x240'), alt: 'Quantum features section' },
				{ src: placeholder('426x240'), alt: 'Quantum pricing section' },
				{ src: placeholder('426x240'), alt: 'Quantum testimonials' },
				{ src: placeholder('426x240'), alt: 'Quantum FAQ section' },
			],
		},
		downloads: placeholderDownloads,
	},
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
