/**
 * Template data for the Plus site's templates showcase.
 * Each entry includes metadata, screenshots, and per-framework download links
 * for the listing and detail pages.
 */

import { getRequestEvent, query } from '$app/server';

export type TemplateCategory = 'Portfolio' | 'Blog' | 'Admin' | 'Landing';

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
	category: TemplateCategory;
	tagline: string;
	description: string;
	isPremium: boolean;
	previewUrl: string;
	images: {
		card: TemplateImage;
		hero: TemplateImage;
		screenshots: TemplateImage[];
	};
	stack: string[];
	downloads: TemplateDownload[];
}

const placeholder = (size: string, label: string) =>
	`https://placehold.co/${size}/1f1f1f/666666/webp?text=${encodeURIComponent(label)}&font=raleway`;

const placeholderDownloads: TemplateDownload[] = [
	{ key: 'svelte', label: 'Svelte', href: '#' },
	{ key: 'react', label: 'React', href: '#' },
	{ key: 'vue', label: 'Vue', href: '#' },
	{ key: 'solid', label: 'Solid.js', href: '#' },
	{ key: 'astro', label: 'Astro', href: '#' },
];

const placeholderStack: string[] = ['SvelteKit', 'Svelte', 'Skeleton', 'Tailwind CSS', 'TypeScript', 'Vite'];

const templates: Template[] = [
	{
		slug: 'pebble',
		name: 'Pebble',
		category: 'Portfolio',
		tagline: 'A portfolio template with case-studies, blog & contact.',
		description:
			'A polished portfolio template designed for designers, developers, and studios who want a focused, content-first online presence. Pebble leads with quiet typography and generous whitespace, letting your work do the talking without competing for attention. The case-study layouts are built for narrative depth — extended write-ups, inline image galleries, pull quotes, and process breakdowns are all first-class citizens, so you can walk visitors through the thinking behind a project rather than just the final pixels. A long-form blog is included for essays, notes, and changelogs, and supports tagging, reading time estimates, and a clean archive view. The contact flow is intentionally minimal: a single form, an inbox-friendly layout, and pre-wired hooks ready to drop into your transactional email provider, CRM, or service of choice. Every page is responsive down to mobile, dark-mode aware, and tuned for fast time-to-content so prospective clients land on your strongest work within a heartbeat.',
		isPremium: false,
		previewUrl: 'https://example.skeleton.dev',
		images: {
			card: { src: placeholder('1280x720', 'Pebble'), alt: 'Pebble template screenshot' },
			hero: { src: placeholder('1920x960', 'Pebble — Main Hero'), alt: 'Pebble homepage hero' },
			screenshots: [
				{ src: placeholder('800x800', 'About'), alt: 'Pebble about page' },
				{ src: placeholder('800x800', 'Case Study'), alt: 'Pebble case study page' },
				{ src: placeholder('800x800', 'Blog Index'), alt: 'Pebble blog index' },
				{ src: placeholder('800x800', 'Blog Post'), alt: 'Pebble blog post' },
			],
		},
		stack: placeholderStack,
		downloads: placeholderDownloads,
	},
	{
		slug: 'pulse',
		name: 'Pulse',
		category: 'Blog',
		tagline: 'A modern blog template with featured posts and tag pages.',
		description:
			'Pulse is a magazine-style blog template built for editors and small publications that ship new writing on a steady cadence. The homepage is anchored by a featured-posts hero that surfaces your latest headline alongside a curated rail of secondary stories, giving the front page the rhythm of a real publication rather than a reverse-chronological dump. Tag and author archives are first-class: every contributor gets a proper bio page with social links and a backlog of their writing, and every tag rolls up into a topical landing page you can deep-link from social or newsletters. The article layout itself is tuned for long-form reading, with comfortable measure, careful vertical rhythm, captioned figures, blockquote treatments, and inline code styling that holds up for technical posts. A built-in newsletter capture, search page, and reading-progress indicator round out the editorial toolkit, and the entire template is wired to be content-source agnostic — point it at Markdown files, a headless CMS, or your database and it will keep its shape.',
		isPremium: false,
		previewUrl: 'https://example.skeleton.dev',
		images: {
			card: { src: placeholder('1280x720', 'Pulse'), alt: 'Pulse template screenshot' },
			hero: { src: placeholder('1920x960', 'Pulse — Main Hero'), alt: 'Pulse homepage hero' },
			screenshots: [
				{ src: placeholder('800x800', 'Article'), alt: 'Pulse article page' },
				{ src: placeholder('800x800', 'Tag Archive'), alt: 'Pulse tag archive' },
				{ src: placeholder('800x800', 'Author'), alt: 'Pulse author page' },
				{ src: placeholder('800x800', 'Newsletter'), alt: 'Pulse newsletter signup' },
			],
		},
		stack: placeholderStack,
		downloads: placeholderDownloads,
	},
	{
		slug: 'helix',
		name: 'Helix',
		category: 'Admin',
		tagline: 'An admin dashboard template with analytics, billing, and settings.',
		description:
			'Helix is a full admin shell that gives a SaaS product everything it needs behind the login screen, without the months of internal-tools work that usually precedes a real dashboard. It opens onto an overview page with composable analytics — trend lines, sparkline tiles, segment breakdowns, and a recent-activity feed — all backed by chart primitives you can repoint at your own data. A complete billing surface covers plan selection, payment methods, invoice history, and seat-based upgrades, with empty and error states designed alongside the happy path. Team management includes invitations, role assignment, and a permissions matrix that is straightforward to extend, while the deep settings area is organized into a nested sidebar covering profile, workspace, security, integrations, notifications, and API keys. The shell uses a collapsible primary sidebar with a command palette, breadcrumbed page headers, and a slide-over panel pattern for secondary tasks, and every screen is responsive down to mobile so on-call work from a phone is genuinely usable rather than a fallback.',
		isPremium: true,
		previewUrl: 'https://example.skeleton.dev',
		images: {
			card: { src: placeholder('1280x720', 'Helix'), alt: 'Helix template screenshot' },
			hero: { src: placeholder('1920x960', 'Helix — Main Hero'), alt: 'Helix dashboard hero' },
			screenshots: [
				{ src: placeholder('800x800', 'Dashboard'), alt: 'Helix dashboard' },
				{ src: placeholder('800x800', 'Analytics'), alt: 'Helix analytics' },
				{ src: placeholder('800x800', 'Billing'), alt: 'Helix billing' },
				{ src: placeholder('800x800', 'Team'), alt: 'Helix team management' },
			],
		},
		stack: placeholderStack,
		downloads: placeholderDownloads,
	},
	{
		slug: 'quantum',
		name: 'Quantum',
		category: 'Landing',
		tagline: 'A high-conversion landing page template for product launches.',
		description:
			'Quantum is a marketing-first landing page template engineered around the rhythm of a high-conversion launch sequence, where every section earns its place by moving the reader one step closer to a decision. The hero pairs a confident headline slot with a supporting subhead, primary and secondary calls to action, and an integrated product visual that holds its own on widescreen and on mobile. Beneath it sits a social-proof band — logos, ratings, and a press strip — followed by a feature bento that mixes large narrative tiles with smaller spec callouts, so you can sell both the big idea and the concrete details on the same scroll. A pricing section ships with monthly/annual toggles, a recommended-plan accent, and tiered feature comparison; a testimonial block, FAQ accordion, and final CTA round out the page with the kind of objection-handling that actually moves a launch from interest to signup. Designed to drop in cleanly, restyle to your brand in an afternoon, and convert visitors on first read.',
		isPremium: true,
		previewUrl: 'https://example.skeleton.dev',
		images: {
			card: { src: placeholder('1280x720', 'Quantum'), alt: 'Quantum template screenshot' },
			hero: { src: placeholder('1920x960', 'Quantum — Main Hero'), alt: 'Quantum landing hero' },
			screenshots: [
				{ src: placeholder('800x800', 'Features'), alt: 'Quantum features section' },
				{ src: placeholder('800x800', 'Pricing'), alt: 'Quantum pricing section' },
				{ src: placeholder('800x800', 'Testimonials'), alt: 'Quantum testimonials' },
				{ src: placeholder('800x800', 'FAQ'), alt: 'Quantum FAQ section' },
			],
		},
		stack: placeholderStack,
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
