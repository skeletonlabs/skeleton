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
import { ArrowUpRightIcon, ChevronDownIcon, HeartIcon } from 'lucide-react';
import React from 'react';
import { useState } from 'react';

export const HeaderSponsors: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [offset(8), flip(), shift()],
		placement: 'top-end',
		whileElementsMounted: autoUpdate,
	});

	const click = useClick(context);
	const dismiss = useDismiss(context);
	const role = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

	return (
		<nav className="h-full flex items-stretch">
			{/* Trigger */}
			<button className="hidden xl:flex btn hover:preset-tonal gap-1" title="Sponsor Us" ref={refs.setReference} {...getReferenceProps()}>
				<HeartIcon className="size-5" />
				<ChevronDownIcon className="size-4 opacity-60" />
			</button>
			{/* Popup */}
			{isOpen && (
				<FloatingFocusManager context={context} modal={false}>
					<div
						className="card max-w-72 bg-surface-50-950 border border-surface-200-800 p-4 space-y-4"
						ref={refs.setFloating}
						style={floatingStyles}
						{...getFloatingProps()}
					>
						<header className="space-y-2">
							<p className="font-bold">Sponsor Us</p>
							<p className="text-xs opacity-60">Sponsor Skeleton and help support the project. Available on the following services.</p>
						</header>
						<hr className="hr" />
						<div className="flex flex-col gap-1">
							<a
								className="btn hover:preset-tonal justify-between"
								href="https://github.com/sponsors/skeletonlabs"
								target="_blank"
								rel="noreferrer"
								onClick={() => setIsOpen(false)}
							>
								<span>Via GitHub</span>
								<ArrowUpRightIcon className="size-4 opacity-60" />
							</a>
							<a
								className="btn hover:preset-tonal justify-between"
								href="https://ko-fi.com/skeletonlabs"
								target="_blank"
								rel="noreferrer"
								onClick={() => setIsOpen(false)}
							>
								<span>Via Ko-Fi</span>
								<ArrowUpRightIcon className="size-4 opacity-60" />
							</a>
						</div>
					</div>
				</FloatingFocusManager>
			)}
		</nav>
	);
};
