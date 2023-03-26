import type { SemanticNames } from '$lib/types';

export interface ColorSettings {
	key: SemanticNames;
	label: Capitalize<SemanticNames>;
	hex: string;
	on: string;
}

export interface ContrastReport extends ColorSettings {
	contrastReport: PassReport;
}

export interface FormTheme {
	// Colors
	colors: ColorSettings[];
	// Form
	fontHeadings: string;
	fontBase: string;
	textColorLight: string;
	textColorDark: string;
	roundedBase: string;
	roundedContainer: string;
	borderBase: string;
}

export interface Report {
	emoji: string;
	note: string;
}

export interface PassReport {
	textColor: string;
	backgroundColor: string;
	contrast: number;
	report: Report;
	smallAA: boolean;
	smallAAA: boolean;
	largeAA: boolean;
	largeAAA: boolean;
	fails: boolean;
}
