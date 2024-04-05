import React from 'react';
import { Accordion } from '@skeletonlabs/skeleton-react';
import { Club, Diamond, Heart, Spade } from 'lucide-react';

export const Page: React.FC<any> = () => {
	const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';

	return (
		<Accordion>
			<Accordion.Item>
				<Accordion.Control controls="reactItem1" lead={<Club size={24} />} open>
					Club
				</Accordion.Control>
				<Accordion.Panel id="reactItem1">{lorem}</Accordion.Panel>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item>
				<Accordion.Control controls="reactItem2" lead={<Diamond size={24} />}>
					Diamond
				</Accordion.Control>
				<Accordion.Panel id="reactItem2">{lorem}</Accordion.Panel>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item>
				<Accordion.Control controls="reactItem3" lead={<Heart size={24} />} disabled>
					Heart (Disabled)
				</Accordion.Control>
				<Accordion.Panel id="reactItem3">{lorem}</Accordion.Panel>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item>
				<Accordion.Control controls="reactItem4" lead={<Spade size={24} />}>
					Spade
				</Accordion.Control>
				<Accordion.Panel id="reactItem4">{lorem}</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
	);
};
