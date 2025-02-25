'use client';

import { useContext, useId } from 'react';
import type { FC } from 'react';
import * as accordion from '@zag-js/accordion';
import { useMachine, normalizeProps } from '@zag-js/react';
import type { AccordionControlProps, AccordionItemProps, AccordionPanelProps, AccordionProps } from './types.js';
import { AccordionContext, AccordionItemContext } from './context.js';

// Components ---

const AccordionRoot: FC<AccordionProps> = ({
	animDuration = 0.2,
	// Root
	base = '',
	padding = '',
	spaceY = 'space-y-2',
	rounded = 'rounded-base',
	width = 'w-full',
	classes = '',
	// Icons
	iconOpen = '-',
	iconClosed = '+',
	// Children
	children,
	// Zag
	...zagProps
}) => {
	// Zag
	const service = useMachine(accordion.machine, {
		id: useId(),
		...zagProps
	});
	const api = accordion.connect(service, normalizeProps);
	return (
		<div className={`${base} ${padding} ${spaceY} ${rounded} ${width} ${classes}`} {...api.getRootProps()} data-testid="accordion">
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
			<div className={`${base} ${spaceY} ${classes}`} {...ctx?.api.getItemProps(zagProps)} data-testid="accordion-item">
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
	rounded = 'rounded-base',
	classes = '',
	// Lead
	leadBase = '',
	leadClasses = '',
	// Content
	contentBase = 'flex-1',
	contentClasses = '',
	// Indicator
	indicatorBase = '',
	indicatorClasses = '',
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
			<button
				className={`${base} ${hover} ${padding} ${rounded} ${classes}`}
				{...ctx.api.getItemTriggerProps(itemCtx)}
				data-testid="accordion-control"
			>
				{/* Lead */}
				{lead && (
					<div className={`${leadBase} ${leadClasses}`} data-testid="accordion-lead">
						{lead}
					</div>
				)}
				{/* Content */}
				<div className={`${contentBase} ${contentClasses}`} data-testid="accordion-content">
					{children}
				</div>
				{/* Indicator */}
				<div className={`${indicatorBase} ${indicatorClasses}`} data-testid="accordion-indicator">
					{ctx.api.value.includes(itemCtx.value) ? ctx.iconOpen : ctx.iconClosed}
				</div>
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
		ctx.api.value.includes(itemCtx.value) && (
			<div {...ctx.api.getItemContentProps(itemCtx)} className={`${base} ${padding} ${rounded} ${classes}`} data-testid="accordion-panel">
				{children}
			</div>
		)
	);
};

export const Accordion = /* @__PURE__ */ Object.assign(AccordionRoot, {
	Item: AccordionItem,
	Control: AccordionControl,
	Panel: AccordionPanel
});
