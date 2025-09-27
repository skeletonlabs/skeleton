import { Portal } from '@skeletonlabs/skeleton-react';
import { SkullIcon } from 'lucide-react';
import { useState, useRef } from 'react';

export default function Default() {
	const [disabled, setDisabled] = useState(true);
	const ref = useRef<HTMLDivElement | null>(null);

	return (
		<div className="flex flex-col items-center gap-8 w-full">
			<div className="w-full flex justify-evenly">
				<div className="card preset-outlined size-24 grid place-items-center p-4">
					<Portal disabled={disabled} target={ref.current ?? undefined}>
						<SkullIcon />
					</Portal>
				</div>
				<div className="card preset-outlined size-24 grid place-items-center p-4" ref={ref}></div>
			</div>
			<button className="btn preset-filled w-fit" onClick={() => setDisabled(!disabled)}>
				Portal: {disabled ? 'Disabled' : 'Enabled'}
			</button>
		</div>
	);
}
