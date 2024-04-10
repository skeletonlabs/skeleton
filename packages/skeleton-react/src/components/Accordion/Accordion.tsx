"use client";

import React, { createContext, useContext, useState } from "react";
import {
	AccordionContextState,
	AccordionControlProps,
	AccordionItemProps,
	AccordionPanelProps,
	AccordionProps,
} from "./types";
import { motion, AnimatePresence } from "framer-motion";

// Context ---

export const AccordionContext = createContext<AccordionContextState>({
	animDuration: 0.2,
	open: () => {},
	close: () => {},
	toggle: () => {},
	isOpen: () => false,
});

// Components ---

const AccordionRoot: React.FC<AccordionProps> = ({
	multiple = false,
	opened = [],
	animDuration = 0.2,
	// Root
	base = "",
	padding = "",
	spaceY = "space-y-2",
	rounded = "rounded",
	width = "w-full",
	classes = "",
	// Events
	ontoggle = () => {},
	// Children
	children,
}) => {
	// State
	const [openedState, setOpenedState] = useState<string[]>(multiple ? opened : [opened[0]]);

	// Functions
	function open(id: string) {
		if (multiple) {
			setOpenedState((openedState) => [...openedState, id]);
		} else {
			setOpenedState([id]);
		}
	}
	function close(id: string) {
		setOpenedState((openedState) => openedState.filter((_id) => _id !== id));
	}
	function toggle(id: string) {
		isOpen(id) ? close(id) : open(id);
		ontoggle(new CustomEvent("toggle", { detail: { id, open: isOpen(id) } }));
	}
	function isOpen(id: string) {
		return openedState.includes(id);
	}

	// Side effects
	// If multiple prop is updated to false and there are more than one opened item, keep only the first one open.
	if (!multiple && opened.length > 1) {
		setOpenedState([opened[0]]);
	}

	return (
		<div
			className={`${base} ${padding} ${spaceY} ${rounded} ${width} ${classes}`}
			data-testid="accordion"
		>
			<AccordionContext.Provider
				value={{
					animDuration,
					open,
					close,
					toggle,
					isOpen,
				}}
			>
				{children}
			</AccordionContext.Provider>
		</div>
	);
};

const AccordionItem: React.FC<AccordionItemProps> = ({
	base = "",
	spaceY = "",
	classes = "",
	// Children
	children,
}) => {
	return (
		<div className={`${base} ${spaceY} ${classes}`} data-testid="accordion-item">
			{children}
		</div>
	);
};

const AccordionControl: React.FC<AccordionControlProps> = ({
	controls,
	disabled = false,
	// Control
	base = "flex text-start items-center space-x-4 w-full",
	hover = "hover:preset-tonal-primary",
	padding = "py-2 px-4",
	rounded = "rounded",
	classes = "",
	// Children
	iconOpen = "-",
	iconClosed = "+",
	lead,
	children,
}) => {
	const ctx = useContext<AccordionContextState>(AccordionContext);
	return (
		<button
			type="button"
			className={`${base} ${hover} ${padding} ${rounded} ${classes}`}
			aria-expanded={ctx.isOpen(controls)}
			aria-controls={`accordion-panel-${controls}`}
			onClick={() => ctx.toggle(controls)}
			disabled={disabled}
			data-testid="accordion-control"
		>
			{/* Lead */}
			{lead && <div>{lead}</div>}
			{/* Content */}
			<div className="flex-1">{children}</div>
			{/* State Indicator */}
			<div>{ctx.isOpen(controls) ? iconOpen : iconClosed}</div>
		</button>
	);
};

const AccordionPanel: React.FC<AccordionPanelProps> = ({
	id,
	// Panel
	base = "",
	padding = "py-2 px-4",
	rounded = "",
	classes = "",
	// Children
	children,
}) => {
	const ctx = useContext<AccordionContextState>(AccordionContext);
	return (
		<div
			role="region"
			aria-hidden={ctx.isOpen(id)}
			aria-labelledby={id}
			data-testid="accordion-panel"
		>
			<AnimatePresence>
				{ctx.isOpen(id) && (
					<motion.div
						className="overflow-hidden"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: "auto" },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{ duration: ctx.animDuration && 0.2 }}
					>
						<div className={`${base} ${padding} ${rounded} ${classes}`}>{children}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export const Accordion = Object.assign(AccordionRoot, {
	Item: AccordionItem,
	Control: AccordionControl,
	Panel: AccordionPanel,
});
