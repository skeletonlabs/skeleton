import React from 'react';

type FrameworkTabsProps = { selected: 'svelte' | 'react'; svelte: React.ReactNode; react: React.ReactNode };

/** Create a framework-specific tab component. */
export const FrameworkTabs: React.FC<FrameworkTabsProps> = (props) => {
	const [selected, setSelected] = React.useState(props.selected || 'react');
	const cTab = 'font-bold py-2 px-4 border-b-[3px] border-transparent capitalize';
	const cTabActive = '!border-surface-950-50';

	function selectedClass(tab: string) {
		if (tab === selected) return cTabActive;
	}

	return (
		<div className="mt-4 space-y-4">
			{/* Tabs */}
			<nav className="border-surface-200-800 flex gap-4 border-b-[1px]">
				<button className={`${cTab} ${selectedClass('react')}`} onClick={() => setSelected('react')}>
					React
				</button>
				<button className={`${cTab} ${selectedClass('svelte')}`} onClick={() => setSelected('svelte')}>
					Svelte
				</button>
			</nav>
			{/* Panel: React */}
			<div className={selected === 'react' ? 'block' : 'hidden'}>{props.react}</div>
			{/* Panel: Svelte */}
			<div className={selected === 'svelte' ? 'block' : 'hidden'}>{props.svelte}</div>
		</div>
	);
};
