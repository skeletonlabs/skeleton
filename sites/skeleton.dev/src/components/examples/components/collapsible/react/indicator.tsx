import { Collapsible } from '@skeletonlabs/skeleton-react';
import { MinusIcon, PlusIcon } from 'lucide-react';

export default function Default() {
	return (
		<Collapsible>
			<Collapsible.Trigger>
				Toggle
				<Collapsible.Indicator className="group">
					<MinusIcon className="size-4 group-data-[state=open]:block hidden" />
					<PlusIcon className="size-4 group-data-[state=open]:hidden block" />
				</Collapsible.Indicator>
			</Collapsible.Trigger>
			<Collapsible.Content>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam assumenda veritatis modi repellendus enim accusantium inventore
				architecto maxime voluptates quibusdam velit perferendis mollitia, quas, aliquam sapiente adipisci illo nostrum vitae?
			</Collapsible.Content>
		</Collapsible>
	);
}
