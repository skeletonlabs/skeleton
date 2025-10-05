import { Accordion } from '@skeletonlabs/skeleton-react';
import { ClubIcon, DiamondIcon, HeartIcon, SpadeIcon } from 'lucide-react';

export default function Columns() {
	return (
		<Accordion>
			<Accordion.Item value="item-1">
				<h3>
					<Accordion.ItemTrigger className="grid grid-cols-[1fr_auto]">
						<span>Club</span>
						<ClubIcon />
					</Accordion.ItemTrigger>
				</h3>
				<Accordion.ItemContent>Content for Item 1</Accordion.ItemContent>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-2">
				<h3>
					<Accordion.ItemTrigger className="grid grid-cols-[1fr_auto]">
						<span>Diamond</span>
						<DiamondIcon />
					</Accordion.ItemTrigger>
				</h3>
				<Accordion.ItemContent>Content for Item 2</Accordion.ItemContent>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-3">
				<h3>
					<Accordion.ItemTrigger className="grid grid-cols-[1fr_auto]">
						<span>Heart</span>
						<HeartIcon />
					</Accordion.ItemTrigger>
				</h3>
				<Accordion.ItemContent>Content for Item 3</Accordion.ItemContent>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-4">
				<h3>
					<Accordion.ItemTrigger className="grid grid-cols-[1fr_auto]">
						<span>Spade</span>
						<SpadeIcon />
					</Accordion.ItemTrigger>
				</h3>
				<Accordion.ItemContent>Content for Item 4</Accordion.ItemContent>
			</Accordion.Item>
		</Accordion>
	);
}
