import React from 'react';
import { useState } from 'react';
// Floating UI React
import {
	useFloating,
	autoUpdate,
	offset,
	flip,
	shift,
	useClick,
	useDismiss,
	useRole,
	useInteractions,
	FloatingFocusManager
} from '@floating-ui/react';
// Icons
import { ChevronDown as IconChevron } from 'lucide-react';
import { ArrowUpRight as IconArrow } from 'lucide-react';

export const HeaderVersion: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [offset(8), flip(), shift()],
		placement: 'top-start',
		whileElementsMounted: autoUpdate
	});

	const click = useClick(context);
	const dismiss = useDismiss(context);
	const role = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

	return (
		<div>
			{/* Trigger */}
			<button className="hidden xl:flex btn hover:preset-tonal" ref={refs.setReference} {...getReferenceProps()}>
				<span>v3</span>
				<IconChevron className="size-4 opacity-60" />
			</button>
			{/* Popup */}
			{isOpen && (
				<FloatingFocusManager context={context} modal={false}>
					<div
						className="card bg-surface-50-950 border border-surface-200-800 flex flex-col gap-1 p-4"
						ref={refs.setFloating}
						style={floatingStyles}
						{...getFloatingProps()}
					>
						<a
							className="btn hover:preset-tonal justify-between"
							href="https://v2.skeleton.dev/"
							target="_blank"
							rel="noreferrer"
							onClick={() => setIsOpen(false)}
						>
							<span>v2 Docs</span>
							<IconArrow className="size-4 opacity-60" />
						</a>
						<a
							className="btn hover:preset-tonal justify-between"
							href="https://v1.skeleton.dev/"
							target="_blank"
							rel="noreferrer"
							onClick={() => setIsOpen(false)}
						>
							<span>v1 Docs</span>
							<IconArrow className="size-4 opacity-60" />
						</a>
					</div>
				</FloatingFocusManager>
			)}
		</div>
	);
};
