'use client';

import { FC, useContext, useId } from 'react';
import * as tabs from '@zag-js/tabs';
import { useMachine, normalizeProps } from '@zag-js/react';
import { TabsRootProps, TabsListProps, TabsControlProps, TabsContentProps, TabsPanelProps } from './types.js';
import { TabsContext } from './context.js';

// Components ---

const TabsRoot: FC<TabsRootProps> = ({
	fluid = false,
	// Root
	base = 'w-full',
	classes = '',
	// Children
	children,
	// Zag
	...zagProps
}) => {
	// Zag
	const service = useMachine(tabs.machine, {
		id: useId(),
		...zagProps
	});
	const api = tabs.connect(service, normalizeProps);

	return (
		<div {...api.getRootProps()} className={`${base} ${classes}`} data-testid="tabs">
			<TabsContext.Provider value={{ fluid, api }}>{children}</TabsContext.Provider>
		</div>
	);
};

const TabsList: FC<TabsListProps> = ({
	// Root
	base = 'flex',
	justify = 'justify-start',
	border = 'border-b-[1px] border-surface-200-800',
	margin = 'mb-4',
	gap = 'gap-2',
	classes = '',
	// Children
	children
}) => {
	const ctx = useContext(TabsContext);

	return (
		<div {...ctx.api.getListProps()} className={`${base} ${justify} ${border} ${margin} ${gap} ${classes}`} data-testid="tabs-list">
			{children}
		</div>
	);
};

const TabsControl: FC<TabsControlProps> = ({
	// Root
	base = 'border-b-[1px] border-transparent',
	padding = 'pb-2',
	translateX = 'translate-y-[1px]',
	classes = '',
	// Label
	labelBase = 'btn hover:preset-tonal-primary',
	labelClasses = '',
	// State
	stateInactive = '[&:not(:hover)]:opacity-50',
	stateActive = 'border-b-surface-950-50 opacity-100',
	stateLabelInactive = '',
	stateLabelActive = '',
	// Nodes
	lead,
	// Children
	children,
	// Zag
	...zagProps
}) => {
	const ctx = useContext(TabsContext);
	const state = ctx.api.getTriggerState(zagProps);

	// Reactive
	const rxActive = state.selected ? stateActive : stateInactive;
	const rxLabelActive = state.selected ? stateLabelActive : stateLabelInactive;

	// Styles
	const commonStyles = { width: ctx.fluid ? '100%' : '' };

	return (
		<button
			{...ctx.api.getTriggerProps(zagProps)}
			className={`${base} ${padding} ${translateX} ${rxActive} ${classes}`}
			style={commonStyles}
			data-testid="tabs-control"
		>
			{/* Label */}
			<div className={`${labelBase} ${rxLabelActive} ${labelClasses}`} style={commonStyles} data-testid="tabs-control-label">
				{lead && <span data-testid="tabs-control-lead">{lead}</span>}
				<span data-testid="tabs-control-children">{children}</span>
			</div>
		</button>
	);
};

const TabsContent: FC<TabsContentProps> = ({
	// Root
	base = '',
	classes = '',
	// Children
	children
}) => {
	return (
		<div className={`${base} ${classes}`} data-testid="tabs-content">
			{children}
		</div>
	);
};

const TabsPanel: FC<TabsPanelProps> = ({
	// Root
	base = '',
	classes = '',
	// Children
	children,
	// Zag
	...zagProps
}) => {
	const ctx = useContext(TabsContext);

	return (
		<div {...ctx.api.getContentProps(zagProps)} className={`${base} ${classes}`} data-testid="tabs-panel">
			{children}
		</div>
	);
};

// Export ---

export const Tabs = /* @__PURE__ */ Object.assign(TabsRoot, {
	/** A group of tab controls. */
	List: TabsList,
	/** An individual tab control. */
	Control: TabsControl,
	/** A group of tab panels. */
	Content: TabsContent,
	/** An individual tab panel. */
	Panel: TabsPanel
});
