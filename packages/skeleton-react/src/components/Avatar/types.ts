export interface AvatarProps extends React.PropsWithChildren {
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
	/** Set avatar image source URL. */
	imageSrc?: string;
	/** Set avatar image Alt text. */
	imageAlt?: string;
	/** Set avatar image filter name. such as "#Apollo". */
	imageFilter?: string;
	/** Provide avatar image arbitrary CSS classes. */
	imageClasses?: string;
}