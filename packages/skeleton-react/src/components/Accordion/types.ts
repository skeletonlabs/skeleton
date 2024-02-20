import React, {
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from "react";

// Context ---

export interface AccordionContextState {
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
  allowMultiple: boolean;
  setAllowMultiple: Dispatch<SetStateAction<boolean>>;
}

// Components ---

export interface AccordionProps extends React.PropsWithChildren {
  /** Enables opening multiple items at once. */
  multiple?: boolean;
  /** The slide animation duration in milliseconds. */
  // animDuration?: number;
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

export interface AccordionItemProps extends React.PropsWithChildren {
  /** Sets base styles. */
  base?: string;
  /** Set vertical spacing styles. */
  spaceY?: string;
  /** Provide arbitrary CSS classes. */
  classes?: string;
}

export interface AccordionControlProps extends React.PropsWithChildren {
  /** Identifies the panel ID this controls. */
  controls: string;
  /** Set the open state of the item. */
  open?: boolean;
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

export interface AccordionPanelProps extends React.PropsWithChildren {
  /** The unique panel ID. */
  id: string;
  /** Set the panel's base styles. */
  base?: string;
  /** Set the panel's padding styles. */
  padding?: string;
  /** Set the panel's border-radius styles. */
  rounded?: string;
  /** Provide arbitrary CSS classes to the panel. */
  classes?: string;
}
