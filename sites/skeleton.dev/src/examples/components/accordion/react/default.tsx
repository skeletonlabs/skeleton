import { Accordion } from '@skeletonlabs/skeleton-react';
import { Club as IconClub, Diamond as IconDiamond, Heart as IconHeart, Spade as IconSpade } from 'lucide-react';

export default function Default() {
	const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';
	return (
		<Accordion>
			<Accordion.Item value="item-1">
				<Accordion.ItemHeading>
					<Accordion.ItemTrigger className="grid grid-cols-[auto_1fr_auto] gap-2">
						<IconClub />
						<span>Club</span>
						<Accordion.ItemIndicator>
							<Accordion.Context>{(accordion) => (accordion.value.includes('item-1') ? '-' : '+')}</Accordion.Context>
						</Accordion.ItemIndicator>
					</Accordion.ItemTrigger>
				</Accordion.ItemHeading>
				<Accordion.ItemContent>{lorem}</Accordion.ItemContent>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-2">
				<Accordion.ItemHeading>
					<Accordion.ItemTrigger className="grid grid-cols-[auto_1fr_auto] gap-2">
						<IconDiamond />
						<span>Diamond</span>
						<Accordion.ItemIndicator>
							<Accordion.Context>{(accordion) => (accordion.value.includes('item-2') ? '-' : '+')}</Accordion.Context>
						</Accordion.ItemIndicator>
					</Accordion.ItemTrigger>
				</Accordion.ItemHeading>
				<Accordion.ItemContent>{lorem}</Accordion.ItemContent>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-3">
				<Accordion.ItemHeading>
					<Accordion.ItemTrigger className="grid grid-cols-[auto_1fr_auto] gap-2">
						<IconHeart />
						<span>Heart</span>
						<Accordion.ItemIndicator>
							<Accordion.Context>{(accordion) => (accordion.value.includes('item-3') ? '-' : '+')}</Accordion.Context>
						</Accordion.ItemIndicator>
					</Accordion.ItemTrigger>
				</Accordion.ItemHeading>
				<Accordion.ItemContent>{lorem}</Accordion.ItemContent>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="item-4">
				<Accordion.ItemHeading>
					<Accordion.ItemTrigger className="grid grid-cols-[auto_1fr_auto] gap-2">
						<IconSpade />
						<span>Spade</span>
						<Accordion.ItemIndicator>
							<Accordion.Context>{(accordion) => (accordion.value.includes('item-4') ? '-' : '+')}</Accordion.Context>
						</Accordion.ItemIndicator>
					</Accordion.ItemTrigger>
				</Accordion.ItemHeading>
				<Accordion.ItemContent>{lorem}</Accordion.ItemContent>
			</Accordion.Item>
		</Accordion>
	);
}
