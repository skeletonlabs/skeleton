/**
 * Community project data for the Plus site's community showcase.
 * Each entry includes metadata, images, and quick-info for the listing and detail pages.
 *
 * To generate or update project screenshots, run: pnpm screenshots
 */

import { getRequestEvent, query } from '$app/server';

import etesieCard from '$lib/assets/images/community/etesie/card.webp';
import etesieHero from '$lib/assets/images/community/etesie/hero.webp';
import etesieScreenshot001 from '$lib/assets/images/community/etesie/screenshot-001.webp';
import etesieScreenshot002 from '$lib/assets/images/community/etesie/screenshot-002.webp';
import etesieScreenshot003 from '$lib/assets/images/community/etesie/screenshot-003.webp';

import typogramCard from '$lib/assets/images/community/typogram/card.webp';
import typogramHero from '$lib/assets/images/community/typogram/hero.webp';
import typogramScreenshot001 from '$lib/assets/images/community/typogram/screenshot-001.webp';
import typogramScreenshot002 from '$lib/assets/images/community/typogram/screenshot-002.webp';
import typogramScreenshot003 from '$lib/assets/images/community/typogram/screenshot-003.webp';

export type CommunityCategory =
	| 'accessibility'
	| 'animation'
	| 'branding'
	| 'code'
	| 'design'
	| 'icons'
	| 'plugins'
	| 'templates'
	| 'tooling'
	| 'typography';

export interface CommunityLink {
	label: string;
	href: string;
}

export interface CommunityImage {
	src: string;
	alt: string;
}

export interface CommunityProject {
	slug: string;
	name: string;
	link: string;
	tagline: string;
	description: string;
	categories: CommunityCategory[];
	author: {
		handle: string;
		avatar: string;
	};
	images: {
		card: CommunityImage;
		hero: CommunityImage;
		screenshots: CommunityImage[];
	};
	quickInfo: {
		type: string;
		pricing: string;
		license: string;
	};
	socialLinks: CommunityLink[];
}

const projects: CommunityProject[] = [
	{
		slug: 'etesie',
		name: 'Etesie',
		link: 'https://etesie.dev',
		tagline: 'Frontend foundations for product teams.',
		description:
			'Etesie helps teams own the frontend foundation of their product: a Theme Generator, self-hosted auth UI for Convex + Better Auth, and Figma kits that stay aligned with production.',
		categories: ['design', 'tooling'],
		author: {
			handle: '@etesie',
			avatar: 'https://www.google.com/s2/favicons?domain=etesie.dev&sz=64',
		},
		images: {
			card: { src: etesieCard, alt: 'Etesie homepage — frontend foundations for product teams' },
			hero: { src: etesieHero, alt: 'Etesie homepage — frontend foundations for product teams' },
			screenshots: [
				{ src: etesieScreenshot001, alt: 'Etesie theme browser' },
				{ src: etesieScreenshot002, alt: 'Etesie authentication documentation' },
				{ src: etesieScreenshot003, alt: 'Etesie Figma kit preview' },
			],
		},
		quickInfo: {
			type: 'Design System, Figma kit, and more.',
			pricing: 'Free + Paid',
			license: 'Commercial',
		},
		socialLinks: [],
	},
	{
		slug: 'typogram',
		name: 'Typogram',
		link: 'https://typogram.co',
		tagline: 'Craft standout designs with stunning typography.',
		description:
			'Try our beginner-friendly logo design tool for startups. Typogram allows you to create a unique logo for your startup while helping you learn essential branding and marketing knowledge. No more random logo generations, DIY your unique logo and be in charge from day one.',
		categories: ['branding', 'typography'],
		author: {
			handle: '@typogramco',
			avatar: 'https://www.google.com/s2/favicons?domain=typogram.co&sz=64',
		},
		images: {
			card: { src: typogramCard, alt: 'Typogram homepage — logo and brand design tool' },
			hero: { src: typogramHero, alt: 'Typogram homepage — logo and brand design tool' },
			screenshots: [
				{ src: typogramScreenshot001, alt: 'Typogram studio interface' },
				{ src: typogramScreenshot002, alt: 'Typogram brand guidelines generator' },
				{ src: typogramScreenshot003, alt: 'Typogram font discovery tool' },
			],
		},
		quickInfo: {
			type: 'Web-based typography design tool.',
			pricing: 'Free Trial + Paid',
			license: 'Per-brand lifetime',
		},
		socialLinks: [{ label: 'X', href: 'https://twitter.com/typogramco' }],
	},
];

/** Get all project data */
export const getCommunityProjects = query(async () => {
	return projects;
});

/** Get data for a single project */
export const getCommunityProject = query(async () => {
	const { params } = getRequestEvent();
	return projects.find((p) => p.slug === params.slug);
});
