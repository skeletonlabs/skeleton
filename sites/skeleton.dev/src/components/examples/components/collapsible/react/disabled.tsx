import { Collapsible } from '@skeletonlabs/skeleton-react';

export default function Disabled() {
	return (
		<Collapsible disabled>
			<Collapsible.Trigger>Toggle</Collapsible.Trigger>
			<Collapsible.Content>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas maxime in praesentium reiciendis eveniet modi mollitia? Odio
				accusantium veritatis accusamus quia placeat sapiente reiciendis? Consectetur, quis! Voluptatem omnis accusantium blanditiis.
			</Collapsible.Content>
		</Collapsible>
	);
}
