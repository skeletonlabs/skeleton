import type { Snippet } from 'svelte';
import type * as avatar from '@zag-js/avatar';

export interface AvatarProps extends Omit<avatar.Props, 'id'> {
	/** Set avatar image source URL. */
	src?: string;
	/** The source set of the avatar image. */
	srcset?: string;
	/** Provide a name or username for the avatar. */
	name: string;
	/** Set avatar image filter name, such as: "#Apollo". */
	filter?: string;

	// Root ---
	/** Set base styles. */
	base?: string;
	/** Set background styles. */
	background?: string;
	/** Set size styles. */
	size?: string;
	/** Set font styles. */
	font?: string;
	/** Set border styles. */
	border?: string;
	/** Set border radius styles. */
	rounded?: string;
	/** Set shadow styles. */
	shadow?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Image ---
	/** Set avatar image base styles. */
	imageBase?: string;
	/** Provide avatar image arbitrary CSS classes. */
	imageClasses?: string;
	/** Set avatar image styles. */
	style?: string;

	// Fallback ---
	/** Set base classes for the fallback element. */
	fallbackBase?: string;
	/** Provide arbitrary CSS classes to fallback element. */
	fallbackClasses?: string;
	/** Set fallback element styles. */
	fallbackStyle?: string;

	// Snippets ---
	/** The default child slot. */
	children?: Snippet;
}
