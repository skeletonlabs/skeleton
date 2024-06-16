import type { Snippet } from 'svelte';

export interface ProgressRingProps {
  /** Set the value */
  value?: number;
  /** Set the maximum value */
  max?: number;
  /** Set the stroke size (px) */
  strokeWidth?: number;
  /** Defines the shape of the meter */
  strokeLinecap?: 'inherit' | 'butt' | 'round' | 'square';
  /** Set the aria-labelledby value */
  labelledby?: string;

  // Root (Figure) ---
  /** Set the root base classes */
  base?: string;
  /** Set the root size classes */
  size?: string;
  /** Provide arbitrary classes to the root element */
  classes?: string;

  // Children ---
  /** Set the default snippet region base classes */
  childrenBase?: string;
  /** Provide arbitrary classes to the default snippet region. */
  childrenClasses?: string;

  // SVG ---
  /** Set the SVG element base classes */
  svgBase?: string;
  /** Provide arbitrary classes to the SVG element */
  svgClasses?: string;

  // Track ---
  /** Set the track base classes */
  trackBase?: string;
  /** Set the track stroke color classes  */
  trackStroke?: string;
  /** Provide arbitrary classes to the track element */
  trackClasses?: string;

  // Meter ---
  /** Set the meter base classes */
  meterBase?: string;
  /** Set the meter stroke color classes */
  meterStroke?: string;
  /** Set the meter transition classes */
  meterTransition?: string;
  /** Set the meter transition duration classes */
  meterDuration?: string;
  /** Provide arbitrary classes to the meter element */
  meterClasses?: string;

  // Label ---
  /** Set the text for the scalable label */
  label?: string;
  /** Set the label classes */
  labelBase?: string;
  /** Set the label fill color classes */
  labelFill?: string;
  /** Set the label font size */
  labelFontSize?: number;
  /** Set the label font weight */
  labelFontWeight?: string;
  /** Provide arbitrary classes to the label element */
  labelClasses?: string;

  // Snippets ---
  /** The default child slot. */
  children?: Snippet;
}
