import React from 'react';

type PreviewProps = { selected: 'preview' | 'code'; preview: React.ReactNode; code: React.ReactNode };

/** Create preview/code tabs for showcasing features. */
export const Preview: React.FC<PreviewProps> = (props) => {
	const [selected, setSelected] = React.useState(props.selected || 'preview');
	const cTab = 'border-b border-transparent pb-2 hover:[&>span]:preset-tonal-primary';
	const cTabControl = 'block p-2 px-4 capitalize rounded-container';
	const cTabActive = '!border-surface-950-50';

	function selectedClass(tab: string) {
		if (tab === selected) return cTabActive;
	}

	return (
		// TODO: fix this top margin due to generate script tags
		<div className="mt-4 space-y-4">
			{/* Tabs */}
			<nav className="border-surface-200-800 flex gap-4 border-b">
				<button className={`${cTab} ${selectedClass('preview')}`} onClick={() => setSelected('preview')}>
					<span className={`${cTabControl}`}>Preview</span>
				</button>
				<button className={`${cTab} ${selectedClass('code')}`} onClick={() => setSelected('code')}>
					<span className={`${cTabControl}`}>Code</span>
				</button>
			</nav>
			{/* Panel: Preview */}
			<div className={`card-enhanced-outlined ${selected !== 'preview' && '!hidden'}`}>
				<div className="card-enhanced-outlined-inner flex justify-center p-8">{props.preview}</div>
			</div>
			{/* Panel: Codeblock */}
			<div className={`w-full max-w-full ${selected === 'code' ? 'block' : 'hidden'}`}>{props.code}</div>
		</div>
	);
};
