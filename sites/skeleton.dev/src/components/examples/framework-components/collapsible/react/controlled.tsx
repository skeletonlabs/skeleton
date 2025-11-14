import { Collapsible } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

export default function Controlled() {
	const [open, setOpen] = useState(false);

	return (
		<Collapsible open={open} onOpenChange={(details) => setOpen(details.open)}>
			<Collapsible.Content>
				The world dies over and over again, but the skeleton always gets up and walks. Every heart has its own skeletons. The bones of the
				skeleton which support the body can become the bars of the cage which imprison the spirit.
			</Collapsible.Content>
			<Collapsible.Trigger className="btn preset-filled">Show {open ? 'Less' : 'More'}</Collapsible.Trigger>
		</Collapsible>
	);
}
