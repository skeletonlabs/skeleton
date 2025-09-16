// Floating UI React
import {
	FloatingFocusManager,
	autoUpdate,
	flip,
	offset,
	shift,
	useClick,
	useDismiss,
	useFloating,
	useInteractions,
	useRole,
} from '@floating-ui/react';
// Themes
import { themes } from '@skeletonlabs/skeleton-common';
// Icons
import { ArrowUpRight as IconArrow } from 'lucide-react';
import { ChevronDown as IconChevron } from 'lucide-react';
import { SwatchBook as IconTheme } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const HeaderThemes: React.FC = () => {
	const defaultTheme = 'cerberus';

	const [isOpen, setIsOpen] = useState(false);
	const [activeTheme, setActiveTheme] = useState(defaultTheme);

	useEffect(() => {
		setActiveTheme(localStorage.getItem('theme') || defaultTheme);
	}, []);

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [offset(8), flip(), shift()],
		whileElementsMounted: autoUpdate,
	});

	const click = useClick(context);
	const dismiss = useDismiss(context);
	const role = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

	function onSelection(themeName: string) {
		setActiveTheme(themeName);

		document.body.classList.add('transition-all');
		document.body.classList.add('duration-200');

		document.documentElement.setAttribute('data-theme', themeName);
		localStorage.setItem('theme', themeName);
		setIsOpen(false);

		setTimeout(() => {
			document.body.classList.remove('transition-all');
			document.body.classList.remove('duration-200');
		}, 200);
	}

	return (
		<div>
			{/* Trigger */}
			<button className="btn hover:preset-tonal gap-1" title="Choose Theme" ref={refs.setReference} {...getReferenceProps()}>
				<IconTheme className="xl:hidden size-5" />
				<span className="hidden xl:inline">Theme</span>
				<IconChevron className="size-4 opacity-60" />
			</button>
			{/* Popup */}
			{isOpen && (
				<FloatingFocusManager context={context} modal={false}>
					<div
						className="card max-h-[calc(75vh)] xl:max-h-none overflow-y-auto xl:overflow-y-visible bg-surface-50-950 border border-surface-200-800 space-y-4 p-4 pr-2"
						ref={refs.setFloating}
						style={floatingStyles}
						{...getFloatingProps()}
					>
						{/* Theme Generator */}
						<figure className="linker bg-noise !p-5">
							<a
								className="btn preset-filled"
								href="https://themes.skeleton.dev/"
								target="_blank"
								rel="noreferrer"
								onClick={() => setIsOpen(false)}
							>
								<span>Create a Theme</span>
								<IconArrow className="size-4" />
							</a>
						</figure>
						{/* Divider */}
						<hr className="hr" />
						{/* Theme List */}
						<div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
							{themes.map((theme) => (
								<button
									key={theme.name}
									data-theme={theme.name}
									className={`w-full bg-surface-50-950 p-3 preset-outlined-surface-100-900 hover:preset-outlined-surface-950-50 rounded-md grid grid-cols-[auto_1fr_auto] items-center gap-4 ${activeTheme === theme.name ? 'preset-outlined-surface-500' : ''}`}
									onClick={() => onSelection(theme.name)}
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
					</div>
				</FloatingFocusManager>
			)}
		</div>
	);
};
