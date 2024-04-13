import { useState } from "react";
import { Accordion } from "../../components/Accordion/Accordion.tsx";

export function Component() {
	const lorem =
		"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.";
	// const ontoggle = (e: Event) => console.log(e);

	// FIXME: feed useState to the prop, not just the current state
	const [opened, setOpened] = useState(["reactItem1"]);

	return (
		<>
			<pre className="pre mb-10">Open: {opened.join(", ")}</pre>

			<Accordion  value={opened} onOpenedChange={setOpened} onToggle={console.log}>
				<Accordion.Item id="reactItem1">
					<Accordion.Control lead="💀">React Control 1</Accordion.Control>
					<Accordion.Panel>React Panel 1 - {lorem}</Accordion.Panel>
				</Accordion.Item>
				<hr className="hr" />
				<Accordion.Item id="reactItem2">
					<Accordion.Control>React Control 2</Accordion.Control>
					<Accordion.Panel>React Panel 2 - {lorem}</Accordion.Panel>
				</Accordion.Item>
				<hr className="hr" />
				<Accordion.Item id="reactItem3">
					<Accordion.Control disabled>React Control 3 (Disabled)</Accordion.Control>
					<Accordion.Panel>React Panel 3 - {lorem}</Accordion.Panel>
				</Accordion.Item>
				<hr className="hr" />
				<Accordion.Item id="reactItem4">
					<Accordion.Control>React Control 4</Accordion.Control>
					<Accordion.Panel>React Panel 4 - {lorem}</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</>
	);
}
