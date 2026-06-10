/**
 * Tutorial data for the Plus site's tutorials section.
 */

import { query } from '$app/server';
import { parseFrontmatter } from 'comark/parse';
import * as v from 'valibot';

// Types ---

export interface TutorialListLesson {
	title: string;
	description: string;
	href: string;
}

export interface TutorialListChapter {
	value: string;
	title: string;
	lessons: TutorialListLesson[];
}

export interface TutorialLesson {
	title: string;
	description: string;
	content: string;
}

// Global Imports ---

const freeFiles = import.meta.glob('../../content/free/tutorials/**/*.md', {
	query: '?raw',
	import: 'default',
	eager: true,
}) as Record<string, string>;

const premiumFiles = import.meta.glob('../../content/premium/tutorials/**/*.md', {
	query: '?raw',
	import: 'default',
	eager: true,
}) as Record<string, string>;

// Helper Functions ---

function buildChapters(files: Record<string, string>, tier: 'free' | 'premium'): TutorialListChapter[] {
	const chapterMap = new Map<string, { raw: string; lessonFile: string }[]>();
	for (const [path, raw] of Object.entries(files)) {
		const parts = path.split('/');
		const chapterDir = parts[parts.length - 2];
		const lessonFile = parts[parts.length - 1];
		if (!chapterMap.has(chapterDir)) chapterMap.set(chapterDir, []);
		chapterMap.get(chapterDir)!.push({ raw, lessonFile });
	}
	return [...chapterMap.entries()]
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([chapterDir, entries]) => {
			const chapterSlug = chapterDir.replace(/^\d+-/, '');
			const title = chapterSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
			const lessons: TutorialListLesson[] = entries
				.sort((a, b) => a.lessonFile.localeCompare(b.lessonFile))
				.map(({ raw, lessonFile }) => {
					const { title: lessonTitle, description } = parseFrontmatter(raw).data;
					const lessonSlug = lessonFile.replace(/^\d+-/, '').replace(/\.md$/, '');
					return { title: lessonTitle, description, href: `/content/tutorials/${tier}/${chapterSlug}/${lessonSlug}` };
				});
			return { value: chapterSlug, title, lessons };
		});
}

// Data Functions ---

/** Get all free tutorial chapters */
export const getTutorialChaptersFree = query(async (): Promise<TutorialListChapter[]> => {
	return buildChapters(freeFiles, 'free');
});

/** Get all premium tutorial chapters */
export const getTutorialChaptersPremium = query(async (): Promise<TutorialListChapter[]> => {
	return buildChapters(premiumFiles, 'premium');
});

/** Get a single tutorial lesson by tier, chapter, and lesson slug */
export const getTutorialLesson = query(
	v.object({ tier: v.string(), chapter: v.string(), lesson: v.string() }),
	async ({ tier, chapter, lesson }): Promise<TutorialLesson | undefined> => {
		const files = tier === 'premium' ? premiumFiles : freeFiles;
		const path = Object.keys(files).find((p) => {
			const parts = p.split('/');
			const chapterMatch = parts[parts.length - 2].replace(/^\d+-/, '') === chapter;
			const lessonMatch = parts[parts.length - 1].replace(/^\d+-/, '').replace(/\.md$/, '') === lesson;
			return chapterMatch && lessonMatch;
		});
		if (!path) return undefined;
		const { content, data } = parseFrontmatter(files[path]);
		return { title: data.title ?? '', description: data.description ?? '', content };
	},
);
