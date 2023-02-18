export interface ColorSettings {
	key: string;
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
