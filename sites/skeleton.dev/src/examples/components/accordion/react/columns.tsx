import { Accordion } from '@skeletonlabs/skeleton-react';
import { Club as IconClub, Diamond as IconDiamond, Heart as IconHeart, Spade as IconSpade } from 'lucide-react';

export default function Columns() {
	return (
		<Accordion>
			<Accordion.Item value="item-1">
				<Accordion.ItemHeading>
					<Accordion.ItemTrigger className="grid grid-cols-[1fr_auto]">
						<span>Club</span>
						<IconClub />
					</Accordion.ItemTrigger>
				</Accordion.ItemHeading>
				<Accordion.ItemContent>Content for Item 1</Accordion.ItemContent>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-2">
				<Accordion.ItemHeading>
					<Accordion.ItemTrigger className="grid grid-cols-[1fr_auto]">
						<span>Diamond</span>
						<IconDiamond />
					</Accordion.ItemTrigger>
				</Accordion.ItemHeading>
				<Accordion.ItemContent>Content for Item 2</Accordion.ItemContent>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-3">
				<Accordion.ItemHeading>
					<Accordion.ItemTrigger className="grid grid-cols-[1fr_auto]">
						<span>Heart</span>
						<IconHeart />
					</Accordion.ItemTrigger>
				</Accordion.ItemHeading>
				<Accordion.ItemContent>Content for Item 3</Accordion.ItemContent>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-4">
				<Accordion.ItemHeading>
					<Accordion.ItemTrigger className="grid grid-cols-[1fr_auto]">
						<span>Spade</span>
						<IconSpade />
					</Accordion.ItemTrigger>
				</Accordion.ItemHeading>
				<Accordion.ItemContent>Content for Item 4</Accordion.ItemContent>
			</Accordion.Item>
		</Accordion>
	);
}
