import { Accordion } from '@skeletonlabs/skeleton-react';
import { MinusIcon, PlusIcon } from 'lucide-react';

export default function Default() {
	return (
		<Accordion>
			{['1', '2', '3'].map((item) => (
				<Accordion.Item key={item} value={item}>
					<h3>
						<Accordion.ItemTrigger className="flex justify-between items-center">
							Item {item}
							<Accordion.ItemIndicator>
								<Accordion.Context>
									{(accordion) => (accordion.value.includes(item) ? <MinusIcon className="size-4" /> : <PlusIcon className="size-4" />)}
								</Accordion.Context>
							</Accordion.ItemIndicator>
						</Accordion.ItemTrigger>
					</h3>
					<Accordion.ItemContent>Content for item {item}</Accordion.ItemContent>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
