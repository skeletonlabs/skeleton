'use client';

import React, { useEffect, useRef, useState } from 'react';
import { TabsProps, TabsListProps, TabsControlProps, TabPanelsProps, TabsPanelProps } from './types.js';

/** The root Tab component. */
const TabsRoot: React.FC<TabsProps> = ({
	id = '',
	// Root
	base = 'w-full',
	spaceY = 'space-y-4',
	classes = '',
	// Children
	children
}) => {
	return (
		<div id={id} className={`${base} ${spaceY} ${classes}`} data-testid="tabs">
			{children}
		</div>
	);
};

/** The list of `<Tab.Control>` components. */
const TabsList: React.FC<TabsListProps> = ({
	// Root
	base = 'flex',
	justify = 'justify-start',
	gap = 'gap-2',
	border = 'border-b border-surface-200-800',
	classes = '',
	// Children
	children
}) => {
	return (
		<div className={`${base} ${gap} ${justify} ${border} ${classes}`} role="tablist">
			{children}
		</div>
	);
};

/** The individual Tab control component. */
const TabsControl: React.FC<TabsControlProps> = ({
	id = '',
	name,
	group,
	title = '',
	// A11y
	label = '',
	controls = '',
	// Root
	base = 'group',
	width = '',
	active = 'text-surface-950-50 border-surface-950-50',
	inactive = 'text-surface-600-400 border-transparent',
	flex = 'flex justify-center items-center',
	background = '',
	border = 'border-b',
	text = 'type-scale-3',
	padding = 'pb-2',
	rounded = '',
	gap = 'gap-1',
	cursor = 'cursor-pointer',
	classes = '',
	// Content
	contentBase = 'w-full',
	contentFlex = 'flex justify-center items-center',
	contentGap = 'gap-2',
	contentBg = 'group-hover:preset-tonal-primary',
	contentPadding = 'p-2 px-4',
	contentRounded = 'rounded-container',
	contentClasses = '',
	// Events
	onClick = () => {},
	onKeydown = () => {},
	onKeyup = () => {},
	onChange = () => {},
	// Children
	children
}) => {
	const [selected, setSelected] = useState(group === name);
	useEffect(() => {
		setSelected(group === name);
	}, [group, name]);

	const [rxActive, setRxActive] = useState(selected ? active : inactive);
	useEffect(() => {
		setRxActive(selected ? active : inactive);
	}, [selected, active, inactive]);

	function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
		onChange(event.target.value);
	}

	const elemInputRef = useRef<HTMLInputElement>(null);
	function onKeyDownHandler(event: React.KeyboardEvent<HTMLDivElement>) {
		// Fire Event Handler
		onKeydown(event);

		// If select key events
		if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.code)) return;

		const elemInput = elemInputRef.current;
		if (!elemInput) return;

		// Prevent default behavior
		event.preventDefault();

		// Find the closest tab/tablelist
		const currTab = elemInput.closest('[role="tab"]');
		if (!currTab) return;
		const tabList = elemInput.closest('[role="tablist"]');
		if (!tabList) return;

		// Get RTL mode
		const isRTL = getComputedStyle(tabList).direction === 'rtl';
		// Get list of tab elements
		const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
		// Get a reference to the current tab
		const currIndex = tabs.indexOf(currTab);

		// Determine the index of the next tab
		let nextIndex = -1;
		switch (event.code) {
			case 'ArrowRight':
				if (isRTL) {
					nextIndex = currIndex - 1 < 0 ? tabs.length - 1 : currIndex - 1;
					break;
				}
				nextIndex = currIndex + 1 >= tabs.length ? 0 : currIndex + 1;
				break;
			case 'ArrowLeft':
				if (isRTL) {
					nextIndex = currIndex + 1 >= tabs.length ? 0 : currIndex + 1;
					break;
				}
				nextIndex = currIndex - 1 < 0 ? tabs.length - 1 : currIndex - 1;
				break;
			case 'Home':
				nextIndex = 0;
				break;
			case 'End':
				nextIndex = tabs.length - 1;
				break;
		}
		if (nextIndex < 0) return;

		// Set Active Tab
		const nextTab = tabs![nextIndex!];
		const nextTabInput = nextTab?.querySelector('input');
		if (nextTabInput) {
			nextTabInput.click();
			(nextTab as HTMLDivElement).focus();
		}
	}

	return (
		<label
			id={id}
			className={`${base} ${width} ${rxActive} ${flex} ${background} ${border} ${text} ${padding} ${rounded} ${gap} ${cursor} ${classes}`}
			aria-label={label}
			title={title}
		>
			{/* NOTE: do not add additional classes to this <div> */}
			<div
				className="size-full"
				role="tab"
				aria-controls={controls}
				aria-selected={selected}
				data-testid="tabs-control"
				tabIndex={selected ? 0 : -1}
				onKeyDown={onKeyDownHandler}
				onKeyUp={onKeyup}
			>
				{/* Keep these classes on wrapping element */}
				<div className="h-0 w-0 flex-none overflow-hidden">
					<input
						ref={elemInputRef}
						type="radio"
						name={name}
						value={name}
						checked={selected}
						onChange={handleOnChange}
						onClick={onClick}
						tabIndex={-1}
					/>
				</div>
				{/* Children */}
				{children && (
					<div className={`${contentBase} ${contentFlex} ${contentGap} ${contentBg} ${contentPadding} ${contentRounded} ${contentClasses}`}>
						{children}
					</div>
				)}
			</div>
		</label>
	);
};

/** The list of `<Tab.Panel>` components. */
const TabPanels: React.FC<TabPanelsProps> = ({
	// Root
	base = '',
	classes = '',
	// Children
	children
}) => {
	return <div className={`${base} ${classes}`}>{children}</div>;
};

/** The individual Panel component. */
const TabsPanel: React.FC<TabsPanelProps> = ({
	id = '',
	value,
	group,
	// A11y
	labelledBy,
	// Root
	classes = '',
	// Children
	children
}) => {
	return (
		value === group &&
		children && (
			<div id={id} role="tabpanel" tabIndex={0} aria-labelledby={labelledBy} className={classes}>
				{children}
			</div>
		)
	);
};

export const Tabs = Object.assign(TabsRoot, {
	List: TabsList,
	Control: TabsControl,
	Panels: TabPanels,
	Panel: TabsPanel
});
