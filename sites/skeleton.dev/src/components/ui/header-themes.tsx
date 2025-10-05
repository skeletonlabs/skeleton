import { themes } from '@skeletonlabs/skeleton-common';
import { Popover, Portal } from '@skeletonlabs/skeleton-react';
import { SwatchBookIcon, ChevronDownIcon, ArrowUpRightIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const DEFAULT_THEME = 'cerberus';

export default function HeaderThemes() {
	const [activeTheme, setActiveTheme] = useState(DEFAULT_THEME);

	useEffect(() => {
		setActiveTheme(localStorage.getItem('theme') || DEFAULT_THEME);
	}, []);

	function selectTheme(theme: string) {
		setActiveTheme(theme);
		document.body.classList.add('transition-all', 'duration-200');
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
		setTimeout(() => {
			document.body.classList.remove('transition-all', 'duration-200');
		}, 200);
	}

	return (
		<Popover positioning={{ placement: 'top-end' }}>
			<Popover.Trigger className="btn hover:preset-tonal gap-1" title="Choose Theme">
				<SwatchBookIcon className="xl:hidden size-5" />
				<span className="hidden xl:inline">Theme</span>
				<ChevronDownIcon className="size-4 opacity-60" />
			</Popover.Trigger>
			<Portal>
				<Popover.Positioner>
					<Popover.Content className="card max-h-[calc(75vh)] xl:max-h-none overflow-y-auto xl:overflow-y-visible bg-surface-50-950 border border-surface-200-800 space-y-4 p-4 pr-2 z-50">
						<figure className="linker bg-noise !p-5">
							<a className="btn preset-filled" href="https://themes.skeleton.dev/" target="_blank" rel="noreferrer">
								<span>Create a Theme</span>
								<ArrowUpRightIcon className="size-4" />
							</a>
						</figure>
						<hr className="hr" />
						<div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
							{themes.map((theme) => (
								<button
									key={theme.name}
									data-theme={theme.name}
									className={`w-full bg-surface-50-950 p-3 preset-outlined-surface-100-900 hover:preset-outlined-surface-950-50 rounded-md grid grid-cols-[auto_1fr_auto] items-center gap-4 ${activeTheme === theme.name ? 'preset-outlined-surface-500' : ''}`}
									onClick={() => selectTheme(theme.name)}
								>
									<span>{theme.emoji}</span>
									<h3 className="text-sm capitalize font-bold text-left">{theme.name}</h3>
									<div className="flex justify-center items-center -space-x-1.5">
										<div className="aspect-square w-4 bg-primary-500 border-[1px] border-black/10 rounded-full" />
										<div className="aspect-square w-4 bg-secondary-500 border-[1px] border-black/10 rounded-full" />
										<div className="aspect-square w-4 bg-tertiary-500 border-[1px] border-black/10 rounded-full" />
									</div>
								</button>
							))}
						</div>
					</Popover.Content>
				</Popover.Positioner>
			</Portal>
		</Popover>
	);
}
