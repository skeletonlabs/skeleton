/**
 * Tutorial data for the Plus site's tutorials section.
 */

import { getRequestEvent, query } from '$app/server';

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

export type TutorialList = Record<string, TutorialListChapter[]>;

export interface TutorialLesson {
	title: string;
	description: string;
	markdown: string;
}

const placeholderDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
const placeholderLessons: TutorialListLesson[] = [
	{ title: 'Design System', description: placeholderDescription, href: '/content/tutorials/beginner/fundamentals/lession-1' },
	{ title: 'Tailwind Components', description: placeholderDescription, href: '/content/tutorials/beginner/fundamentals/lession-2' },
	{
		title: 'Framework Components',
		description: placeholderDescription,
		href: '/content/tutorials/beginner/fundamentals/lession-3',
	},
];

const tutorialsList: TutorialList = {
	beginner: [
		{ value: 'fundamentals', title: 'Fundamentals', lessons: placeholderLessons },
		{ value: 'design-system', title: 'Design System', lessons: placeholderLessons },
		{ value: 'tailwind-components', title: 'Tailwind Components', lessons: placeholderLessons },
		{ value: 'framework-components', title: 'Framework Components', lessons: placeholderLessons },
		{ value: 'integrations', title: 'Integrations', lessons: placeholderLessons },
		{ value: 'misc', title: 'Miscellaneous', lessons: placeholderLessons },
	],
	advanced: [{ value: 'example', title: 'Example', lessons: placeholderLessons }],
};
const tutorialLesson: TutorialLesson = {
	title: 'Lesson 1',
	description: placeholderDescription,
	markdown: '(markdown-content-here)',
};

/** Get all tutorials data, organized by tier */
export const getTutorialsList = query(async (): Promise<TutorialList> => {
	return tutorialsList;
});

/** Get a single tutorial lesson by tier, chapter, and lesson params */
export const getTutorialLesson = query(async (): Promise<TutorialLesson | undefined> => {
	const { params } = getRequestEvent();
	const { tier, chapter } = params as Record<string, string>;
	const found = tutorialsList[tier]?.find((c) => c.value === chapter);
	if (!found) return undefined;
	return tutorialLesson;
});
