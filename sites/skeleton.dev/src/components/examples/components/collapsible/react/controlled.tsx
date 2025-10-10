import { Collapsible } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

export default function Controlled() {
	const [open, setOpen] = useState(false);

	return (
		<Collapsible open={open} onOpenChange={(details) => setOpen(details.open)}>
			<Collapsible.Trigger className="btn preset-filled">{open ? 'Open' : 'Close'}</Collapsible.Trigger>
			<Collapsible.Content>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit pariatur error soluta voluptate, accusantium modi repudiandae omnis
				eligendi, suscipit repellat impedit architecto neque sequi mollitia autem dicta quae ipsum et?
			</Collapsible.Content>
		</Collapsible>
	);
}
