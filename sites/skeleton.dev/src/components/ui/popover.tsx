import {
	FloatingArrow,
	arrow,
	autoUpdate,
	flip,
	offset,
	shift,
	useClick,
	useDismiss,
	useFloating,
	useFocus,
	useInteractions,
	useRole,
} from '@floating-ui/react';
import React, { useRef, useState } from 'react';

interface PopoverProps extends React.PropsWithChildren {
	trigger: React.ReactNode;
	// Trigger ---
	triggerBase?: string;
	triggerPreset?: string;
	triggerClasses?: string;
	// Popover
	popoverBase?: string;
	popoverClasses?: string;
	// Arrow
	arrowBase?: string;
	arrowClasses?: string;
}

export const Popover: React.FC<PopoverProps> = ({
	// prettier-ignore
	trigger,
	// Trigger
	triggerBase = '',
	triggerPreset = '',
	triggerClasses = '',
	// Popover
	popoverBase = 'z-10',
	popoverClasses = '',
	// Arrow
	arrowBase = '',
	arrowClasses = '',
	// Children
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const arrowRef = useRef(null);
	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [offset(12), flip(), shift(), arrow({ element: arrowRef })],
		placement: 'top',
		whileElementsMounted: autoUpdate,
	});

	const click = useClick(context, {});
	const focus = useFocus(context);
	const dismiss = useDismiss(context);
	const role = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([click, focus, dismiss, role]);

	return (
		<>
			{/* Trigger */}
			<button ref={refs.setReference} {...getReferenceProps()} className={`${triggerBase} ${triggerPreset} ${triggerClasses}`}>
				{trigger ?? 'Trigger'}
			</button>
			{/* Popover */}
			{isOpen && (
				<div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()} className={`floating  ${popoverBase} ${popoverClasses}`}>
					<div>{children ?? '(children missing)'}</div>
					{/* Arrow */}
					<FloatingArrow ref={arrowRef} context={context} className={`${arrowBase} ${arrowClasses}`} />
				</div>
			)}
		</>
	);
};
