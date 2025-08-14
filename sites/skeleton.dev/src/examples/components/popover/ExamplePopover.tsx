// Based On: https://floating-ui.com/docs/popover

import React, { useRef, useState } from 'react';
import {
	useFloating,
	autoUpdate,
	offset,
	flip,
	shift,
	arrow,
	useClick,
	useDismiss,
	useRole,
	useInteractions,
	FloatingFocusManager,
	FloatingArrow
} from '@floating-ui/react';
import { X as IconX } from 'lucide-react';

export const Page: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const arrowRef = useRef(null);
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [
			offset(10),
			flip(),
			shift(),
			arrow({
				element: arrowRef
			})
		],
		placement: 'top',
		whileElementsMounted: autoUpdate
	});

	const click = useClick(context);
	const dismiss = useDismiss(context);
	const role = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

	return (
		<>
			{/* Trigger */}
			<button ref={refs.setReference} {...getReferenceProps()} className="btn preset-tonal">
				Click Me
			</button>
			{isOpen && (
				<FloatingFocusManager context={context} modal={false}>
					{/* Popover */}
					{/* Note the use of the `.floating` class here */}
					<div
						ref={refs.setFloating}
						style={floatingStyles}
						className="floating card bg-surface-200-800 p-4 max-w-[320px]"
						{...getFloatingProps()}
					>
						<div className="space-y-4">
							<header className="flex justify-between">
								<p className="font-bold text-xl">Popover Example</p>
								<button className="btn-icon hover:preset-tonal" onClick={() => setIsOpen(false)} title="Close" aria-label="Close">
									<IconX />
								</button>
							</header>
							<article>
								<p className="opacity-60">
									This will display a basic popover with a header and body. This also includes a title, description, and close button.
								</p>
							</article>
						</div>
						{/* Arrow */}
						<FloatingArrow ref={arrowRef} context={context} className="fill-surface-200-800" />
					</div>
				</FloatingFocusManager>
			)}
		</>
	);
};
