import { Portal } from '@skeletonlabs/skeleton-react';
import { SkullIcon } from 'lucide-react';
import { useState, useRef } from 'react';

export default function Default() {
	const [disabled, setDisabled] = useState(true);
	const ref = useRef<HTMLDivElement | null>(null);

	const cardClasses = 'card preset-outlined-surface-300-700 size-24 grid place-items-center p-4';
	const buttonClasses = 'col-span-2 btn preset-filled';

	return (
		<div className="grid grid-cols-2 gap-4">
			{/* Source */}
			<div className={cardClasses}>
				<Portal disabled={disabled} target={ref.current ?? undefined}>
					<SkullIcon className="size-8" />
				</Portal>
			</div>

			{/* Target */}
			<div className={cardClasses} ref={ref}>
				{/* (the content will appear here) */}
			</div>

			{/* Trigger */}
			<button className={buttonClasses} onClick={() => setDisabled(!disabled)}>
				{disabled ? 'Enable' : 'Disable'}
			</button>
		</div>
	);
}
