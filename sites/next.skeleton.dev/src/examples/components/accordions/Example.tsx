import { Accordion } from "@skeletonlabs/skeleton-react";
import { Club, Diamond, Heart, Spade } from "lucide-react";
import { useState } from "react";
import type { FC } from "react";

export const Page: FC = () => {
	const lorem =
		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.";

	// State
	const [value, setValue] = useState(["club"]);

	return (
		<Accordion value={value} onValueChange={(e) => setValue(e.value)}>
			<Accordion.Item value="club">
				<Accordion.Control lead={<Club size={24} />}>Club</Accordion.Control>
				<Accordion.Panel>{lorem}</Accordion.Panel>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="diamond">
				<Accordion.Control lead={<Diamond size={24} />}>
					Diamond
				</Accordion.Control>
				<Accordion.Panel>{lorem}</Accordion.Panel>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="heart" disabled>
				<Accordion.Control lead={<Heart size={24} />}>
					Heart (disabled)
				</Accordion.Control>
				<Accordion.Panel>{lorem}</Accordion.Panel>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item value="spade">
				<Accordion.Control lead={<Spade size={24} />}>Spade</Accordion.Control>
				<Accordion.Panel>{lorem}</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
	);
};
