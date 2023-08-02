import type { CssClasses } from '../../index.js';

export interface TOCLink {
	/** href of the link */
	href: string;
	/** text of the link */
	text: string;
	/** indent class of the link */
	indent?: CssClasses;
}
