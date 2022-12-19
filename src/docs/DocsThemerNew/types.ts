interface ColorSettings {
	label: string;
	hex: string;
	rgb: string;
	on: string;
}

interface Colors {
	primary: ColorSettings;
	accent: ColorSettings;
	tertiary: ColorSettings;
	success: ColorSettings;
	warning: ColorSettings;
	error: ColorSettings;
	surface: ColorSettings;
}

export interface FormTheme {
	// Colors
	colors: Colors;
	// Form
	fontHeadings: string;
	fontBase: string;
	textColorLight: string;
	textColorDark: string;
	roundedBase: string;
	roundedContainer: string;
	border: string;
}
