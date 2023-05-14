import type { SemanticNames } from '@skeletonlabs/skeleton/types';

export interface ColorSettings {
	key: SemanticNames;
	label: string;
	hex: string;
	rgb: string;
	on: string;
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

export interface ContrastReport {
	key: SemanticNames;
	label: string;
	hex: string;
	rgb: string;
	on: string;
	contrastReport: PassReport;
}
