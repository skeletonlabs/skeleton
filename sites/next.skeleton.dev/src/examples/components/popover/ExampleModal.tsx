// Based On: https://floating-ui.com/docs/dialog

import React, { useState } from 'react';
import {
	useFloating,
	useClick,
	useDismiss,
	useRole,
	useInteractions,
	useId,
	FloatingOverlay,
	FloatingFocusManager,
	useTransitionStyles,
} from '@floating-ui/react';

export const Page: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { refs, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
	});

	// https://floating-ui.com/docs/useTransition#usetransitionstatus
	const { isMounted, styles } = useTransitionStyles(context, {
		duration: 200,
		initial: {
			opacity: 0,
			transform: 'translateY(50px)',
		},
	});

	const click = useClick(context);
	const dismiss = useDismiss(context, {
		outsidePressEvent: 'mousedown',
	});
	const role = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

	const labelId = useId();
	const descriptionId = useId();

	return (
		<>
			{/* Trigger */}
			<button ref={refs.setReference} {...getReferenceProps()} className="btn preset-tonal">
				Open Modal
			</button>
			{isMounted && (
				// Backdrop
				<FloatingOverlay
					lockScroll
					className="bg-surface-50/75 dark:bg-surface-950/75 fixed bottom-0 left-0 right-0 top-0 z-[998] flex items-center justify-center p-4 backdrop-blur-sm"
				>
					<FloatingFocusManager context={context}>
						{/* Modal */}
						<div
							ref={refs.setFloating}
							aria-labelledby={labelId}
							aria-describedby={descriptionId}
							{...getFloatingProps()}
							className="card bg-surface-100-900 max-w-screen-sm space-y-4 p-4 shadow-xl"
							style={{
								...styles, // Transition styles
							}}
						>
							<header className="flex justify-between">
								<h2 className="h2">Modal Example</h2>
							</header>
							<article>
								<p className="opacity-60">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ab adipisci. Libero cumque sunt quis error veritatis amet,
									expedita voluptatem. Quos repudiandae consequuntur voluptatem et dicta quas, reprehenderit velit excepturi?
								</p>
							</article>
							<footer className="flex justify-end gap-4">
								<button type="button" className="btn preset-tonal" onClick={() => setIsOpen(false)}>
									Cancel
								</button>
								<button type="button" className="btn preset-filled" onClick={() => setIsOpen(false)}>
									Confirm
								</button>
							</footer>
						</div>
					</FloatingFocusManager>
				</FloatingOverlay>
			)}
		</>
	);
};
