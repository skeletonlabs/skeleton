/**
 * Tutorial data for the Plus site's tutorials section.
 */

import { query } from '$app/server';
import placeholderContent from './kitchen-sink.md?raw';

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
	content: string;
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
		{ value: 'integrations', title: 'Integrations', lessons: placeholderLessons },
		{ value: 'misc', title: 'Miscellaneous', lessons: placeholderLessons },
	],
	advanced: [{ value: 'example', title: 'Advanced Example', lessons: placeholderLessons }],
};

const tutorialLesson: TutorialLesson = {
	title: 'Lesson Name Here',
	description: placeholderDescription,
	content: placeholderContent,
};

/** Get all tutorials data, organized by tier (beginner|advanced) */
export const getTutorialsList = query(async (): Promise<TutorialList> => {
	return tutorialsList;
});

/** Get a single tutorial lesson by tier, chapter, and lesson params */
export const getTutorialLesson = query(async (): Promise<TutorialLesson | undefined> => {
	return tutorialLesson;
});
