import { Accordion } from "@skeletonlabs/skeleton-react";
import { MinusIcon, PlusIcon } from "lucide-react";

export default function Indicator() {
	return (
		<Accordion>
			{["1", "2", "3"].map((item) => (
				<Accordion.Item key={item} value={item}>
					<h3>
						<Accordion.ItemTrigger className="flex items-center justify-between">
							Item {item}
							<Accordion.ItemIndicator className="group">
								<MinusIcon className="hidden size-4 group-data-[state=open]:block" />
								<PlusIcon className="block size-4 group-data-[state=open]:hidden" />
							</Accordion.ItemIndicator>
						</Accordion.ItemTrigger>
					</h3>
					<Accordion.ItemContent>Content for item {item}</Accordion.ItemContent>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
