import React, { type ReactNode } from "react";

// Accordion Context ---

export interface AccordionContextState {
  open: (id: string) => void;
  close: (id: string) => void;
  toggle: (id: string) => void;
  isOpen: (id: string) => boolean;
  animDuration?: number;
}

export interface AccordionItemContextState {
  id: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Accordion ---

export interface AccordionProps extends React.PropsWithChildren {
  /** Enables opening multiple items at once. */
  multiple?: boolean;
  /** Takes an array list of open items. */
  value?: string[];
  /** The slide animation duration in milliseconds. */
  animDuration?: number;
  // Events ---
  /** Set the opened state. */
  onValueChange?: (opened: string[]) => void;
  // Root ---
  /** Sets base styles. */
  base?: string;
  /** Set padding styles. */
  padding?: string;
  /** Set vertical spacing styles. */
  spaceY?: string;
  /** Set border radius styles. */
  rounded?: string;
  /** Set the width styles. */
  width?: string;
  /** Provide arbitrary CSS classes. */
  classes?: string;
}

// Accordion Item ---

export interface AccordionItemProps extends React.PropsWithChildren {
  /** The unique ID. */
  id: string;
  // Root ---
  /** Sets base styles. */
  base?: string;
  /** Set vertical spacing styles. */
  spaceY?: string;
  /** Provide arbitrary CSS classes. */
  classes?: string;
  // Events ---
  /** Triggers on item click. */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Accordion Control ---

export interface AccordionControlProps extends React.PropsWithChildren {
  /** Set a disabled state for the item. */
  disabled?: boolean;
  // Root ---
  /** Sets control's base styles. */
  base?: string;
  /** Sets control's the hover styles. */
  hover?: string;
  /** Sets control's the padding styles. */
  padding?: string;
  /** Sets control's the border radius styles. */
  rounded?: string;
  /** Provide arbitrary CSS classes to the control. */
  classes?: string;
  // Slots ---
  // https://www.totaltypescript.com/pass-component-as-prop-react
  /** Set the open state icon. */
  iconOpen?: ReactNode;
  /** Set the closed state icon. */
  iconClosed?: ReactNode;
  /** The lead child slot for the control. */
  lead?: ReactNode;
}

// Accordion Panel ---

export interface AccordionPanelProps extends React.PropsWithChildren {
  /** Set the panel's base styles. */
  base?: string;
  /** Set the panel's padding styles. */
  padding?: string;
  /** Set the panel's border-radius styles. */
  rounded?: string;
  /** Provide arbitrary CSS classes to the panel. */
  classes?: string;
}
