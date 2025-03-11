export interface CodeBlockProps {
	code?: string;
	lang?: 'console' | 'html' | 'css' | 'js';
	theme?: 'dark-plus';
	// Base Style Props
	base?: string;
	rounded?: string;
	shadow?: string;
	classes?: string;
	// Pre Style Props
	preBase?: string;
	prePadding?: string;
	preClasses?: string;
}
