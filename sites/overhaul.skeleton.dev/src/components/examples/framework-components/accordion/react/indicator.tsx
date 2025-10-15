import { Accordion } from '@skeletonlabs/skeleton-react';
import { MinusIcon, PlusIcon } from 'lucide-react';

export default function Indicator() {
	return (
		<Accordion>
			{['1', '2', '3'].map((item) => (
				<Accordion.Item key={item} value={item}>
					<h3>
						<Accordion.ItemTrigger className="flex justify-between items-center">
							Item {item}
							<Accordion.ItemIndicator className="group">
								<MinusIcon className="size-4 group-data-[state=open]:block hidden" />
								<PlusIcon className="size-4 group-data-[state=open]:hidden block" />
							</Accordion.ItemIndicator>
						</Accordion.ItemTrigger>
					</h3>
					<Accordion.ItemContent>Content for item {item}</Accordion.ItemContent>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
