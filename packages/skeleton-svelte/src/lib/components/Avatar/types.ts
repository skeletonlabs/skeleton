import type { Snippet } from 'svelte';
import type { Action } from 'svelte/action';

export interface AvatarProps {
	/** Provide URL to link the avatar to. */
	href?: string;
	/** Provide a Svelte action reference, such as `filter`. */
	action?: Action<HTMLElement, string>;
	/** Provide Svelte action params, such as Apollo. */
	actionParams?: string;

	// Root (figure)
	/** Set base styles. */
	base?: string;
	/** Set background styles. */
	background?: string;
	/** Set font styles. */
	font?: string;
	/** Set width styles. */
	width?: string;
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
	/** Set avatar image base styles. */
	imageBase?: string;
	/** Provide avatar image arbitrary CSS classes. */
	imageClasses?: string;

	// Snippets
	/** The default child slot. */
	children?: Snippet;
}
