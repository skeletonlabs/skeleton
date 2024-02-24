import type { Snippet } from 'svelte';
import type { Action } from 'svelte/action';

export interface AvatarProps {
	// Root (figure)
	/** Set base styles. */
	base?: string;
	/** Set background styles. */
	background?: string;
	/** Set font styles. */
	font?: string;
	/** Set size styles. */
	size?: string;
	/** Set border styles. */
	border?: string;
	/** Set border radius styles. */
	rounded?: string;
	/** Set shadow styles. */
	shadow?: string;
	/** Provide arbitrary CSS classes. */
	classes?: string;

	// Image
	/** Set avatar image source URL. */
	imageSrc?: string;
	/** Set avatar image Alt text. */
	imageAlt?: string;
	/** Set avatar image filter name. such as "#Apollo". */
	imageFilter?: string;
	/** Set avatar image base styles. */
	imageBase?: string;
	/** Provide avatar image arbitrary CSS classes. */
	imageClasses?: string;

	// Anchor
	/** Provide URL to link the avatar to. */
	anchorHref?: string;
	/** Provide Anchor base styles. */
	anchorBase?: string;
	/** Provide Anchor arbitrary CSS classes. */
	anchorClasses?: string;

	// Snippets
	/** The default child slot. */
	children?: Snippet;
}
