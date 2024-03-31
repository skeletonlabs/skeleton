import React, { useEffect, useRef, useState } from "react";
import { TabProps, TabListProps, TabControlProps, TabControlItemProps, TabPanelItemProps } from "./types";

// React Compose ---
import { reactCompose } from "../../utils/react-compose";

// Components ---
const TabRoot: React.FC<TabProps> = ({
    id,
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

const TabListRoot: React.FC<TabListProps> = ({
    // Root
    base = 'flex',
    justify = 'justify-start',
    gap = 'gap-2',
    border = 'border-b-[1px] border-surface-200-800',
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

const TabControlRoot: React.FC<TabControlProps> = ({
    id,
    name,
    group,
    title,
    // A11y
    label = '',
    controls = '',
    // Root
    base = 'group',
    active = 'text-surface-950-50 border-surface-950-50',
    inactive = 'text-surface-600-400 border-transparent',
    flex = 'flex justify-center items-center',
    background = '',
    border = 'border-b-[1px]',
    text = 'type-scale-3',
    padding = 'pb-2',
    rounded = '',
    gap = 'gap-1',
    cursor = 'cursor-pointer',
    classes = '',
    // Events
    onclick = () => {},
    onkeydown = () => {},
    onkeyup = () => {},
    onchange = () => {},
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
        onchange(event.target.value);
    }    

    const elemInputRef = useRef<HTMLInputElement>(null);
	function onKeyDownHandler(event: React.KeyboardEvent<HTMLDivElement>) {
		// Fire Event Handler
		onkeydown(event);

		// If select key events
		if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.code)) return;

        const elemInput = elemInputRef.current;
        if(!elemInput) return;

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
            className={`${base} ${rxActive} ${flex} ${background} ${border} ${text} ${padding} ${rounded} ${gap} ${cursor} ${classes}`}
            aria-label={label}
            title={title}
        >
            { /* NOTE: do not add additional classes to this <div> */ }
            <div
                className="size-full"
                role="tab"
                aria-controls={controls}
                aria-selected={selected}
                data-testid="tabs-control"
                tabIndex={selected ? 0 : -1}
                onKeyDown={onKeyDownHandler}
                onKeyUp={onkeyup}
            >
                { /* Keep these classes on wrapping element */ }
                <div className="h-0 w-0 flex-none overflow-hidden">
                    <input ref={elemInputRef} type="radio" name={name} value={name} checked={selected} onChange={handleOnChange} onClick={onclick} tabIndex={-1} />
                </div>

                {children}
            </div>
        </label>
    );
};

const TabControlItem: React.FC<TabControlItemProps> = ({
    // Root
    base = 'w-full',
    flex = 'flex justify-center items-center',
    gap = 'gap-2',
    background = 'group-hover:preset-tonal-primary',
    padding = 'p-2 px-4',
    rounded = 'rounded',
    classes = '',
    // Children
    children
}) => {
    return(
        <div className={`${base} ${flex} ${gap} ${background} ${padding} ${rounded} ${classes}`}>
            {children}
        </div>
    );
};

const TabPanelItem: React.FC<TabPanelItemProps> = ({
    id,
    value,
    group,
    // A11y
    labelledBy,
    // Root
    classes = '',
    // Children
    children
}) => {
    return value === group && children && (
        <div id={id} role="tabpanel" tabIndex={0} aria-labelledby={labelledBy} className={classes}>
            {children}
        </div> 
    );
};

export const TabControl = reactCompose(TabControlRoot, {
    Item: TabControlItem
})

export const TabList = reactCompose(TabListRoot, {
    Control: TabControl
});

export const Tab = reactCompose(TabRoot, {
    List: TabList,
    Panel: TabPanelItem
});