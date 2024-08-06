'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { createContext, useContext, useId } from 'react';
import type { FC } from 'react';
import * as accordion from '@zag-js/accordion';
import { useMachine, normalizeProps } from '@zag-js/react';

import type { AccordionContextState, AccordionControlProps, AccordionItemProps, AccordionPanelProps, AccordionProps } from './types.js';
import { noop } from '../../internal/noop.js';

// Contexts ---
export const AccordionContext = createContext<AccordionContextState>({
	animDuration: 0.2,
	iconOpen: '-',
	iconClosed: '+',
	api: {} as ReturnType<typeof accordion.connect>
});
export const AccordionItemContext = createContext<accordion.ItemProps>({
	value: '',
	disabled: false
});

// Components ---
const AccordionRoot: FC<AccordionProps> = ({
	animDuration = 0.2,
	// Root
	base = '',
	padding = '',
	spaceY = 'space-y-2',
	rounded = 'rounded',
	width = 'w-full',
	classes = '',
	// Icons
	iconOpen = '-',
	iconClosed = '+',
	// Events
	onValueChange = noop,
	// Children
	children,
	// Zag
	...zagProps
}) => {
	const [state, send] = useMachine(
		accordion.machine({
			id: useId(),
			onValueChange: (details) => {
				onValueChange(details.value);
			}
		}),
		{ context: zagProps }
	);

	const api = accordion.connect(state, send, normalizeProps);

	return (
		<div className={`${base} ${padding} ${spaceY} ${rounded} ${width} ${classes}`} {...api.getRootProps()}>
			<AccordionContext.Provider value={{ animDuration, iconOpen, iconClosed, api }}>{children}</AccordionContext.Provider>
		</div>
	);
};

const AccordionItem: FC<AccordionItemProps> = ({
	base = '',
	spaceY = '',
	classes = '',
	// Children
	children,
	...zagProps
}) => {
	const ctx = useContext(AccordionContext);

	return (
		<AccordionItemContext.Provider value={zagProps}>
			<div className={`${base} ${spaceY} ${classes}`} {...ctx?.api.getItemProps(zagProps)}>
				{children}
			</div>
		</AccordionItemContext.Provider>
	);
};

const AccordionControl: FC<AccordionControlProps> = ({
	headingElement = 'h3',
	// Control
	base = 'flex text-start items-center space-x-4 w-full',
	hover = 'hover:preset-tonal-primary',
	padding = 'py-2 px-4',
	rounded = 'rounded',
	classes = '',
	iconsBase = '',
	// Icons
	lead,
	// Children
	children
}) => {
	const ctx = useContext(AccordionContext);
	const itemCtx = useContext(AccordionItemContext);

	const HeadingElement = headingElement;

	return (
		<HeadingElement>
			<button className={`${base} ${hover} ${padding} ${rounded} ${classes}`} {...ctx.api.getItemTriggerProps(itemCtx)}>
				{/* Lead */}
				{lead && <div>{lead}</div>}
				{/* Content */}
				<div className="flex-1">{children}</div>
				{/* State Indicator */}
				<div className={`${iconsBase}`}>{ctx.api.value.includes(itemCtx.value) ? ctx.iconOpen : ctx.iconClosed}</div>
			</button>
		</HeadingElement>
	);
};

const AccordionPanel: FC<AccordionPanelProps> = ({
	// Panel
	base = '',
	padding = 'py-2 px-4',
	rounded = '',
	classes = '',
	// Children
	children
}) => {
	const ctx = useContext(AccordionContext);
	const itemCtx = useContext(AccordionItemContext);
	return (
		<div {...ctx.api.getItemContentProps(itemCtx)}>
			<AnimatePresence initial={false}>
				{ctx.api.value.includes(itemCtx.value) && (
					<motion.div
						className="overflow-hidden"
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 }
						}}
						transition={{ duration: ctx.animDuration }}
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
	Panel: AccordionPanel
});
