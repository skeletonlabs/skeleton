export interface ControlsProps {
	// Color ---
	/** Provide the title attribute for the color palette icon. */
	colorTitle?: string;
	/** Provide the aria-label attribute for the color palette icon. */
	colorAriaLabel?: string;

	// Background ---
	/** Provides the title attribute for the backgrounds icon. */
	backgroundsTitle?: string;
	/** Provides the aria-label attribute for the backgrounds icon. */
	backgroundsAriaLabel?: string;

	// Spacing ---
	/** Provides the title attribute for the spacing icon. */
	spacingTitle?: string;
	/** Provides the aria-label attribute for the spacing icon. */
	spacingAriaLabel?: string;

	// Edges ---
	/** Provides the title attribute for the edges icon. */
	edgesTitle?: string;
	/** Provides the aria-label attribute for the edges icon. */
	edgesAriaLabel?: string;

	// Typography ---
	/** Provides the title attribute for the typography icon. */
	typographyTitle?: string;
	/** Provides the aria-label attribute for the typography icon. */
	typographyAriaLabel?: string;
}
