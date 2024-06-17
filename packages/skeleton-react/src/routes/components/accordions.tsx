import { useState } from 'react';
import { Accordion } from '../../lib/components/Accordion/Accordion.js';
import { Skull } from 'lucide-react';

export function Component() {
	const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';

	const [multiple, setMultiple] = useState(false);
	const [value, setValue] = useState(['reactItem1']);

	const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMultiple(event.target.checked);
	};

	return (
		<div className="space-y-10">
			{/* Set Multiple */}
			<label className="flex items-center gap-2">
				<input type="checkbox" checked={multiple} onChange={onInputChangeHandler} />
				<span className="label-text">Allow multiple</span>
			</label>

			{/* Current State */}
			<pre className="pre">Open: {value.join(', ')}</pre>

			{/* Component */}
			<Accordion multiple={multiple} value={value} onValueChange={setValue}>
				<Accordion.Item id="reactItem1" onClick={console.log}>
					<Accordion.Control lead={<Skull size={22} />}>React Control 1</Accordion.Control>
					<Accordion.Panel>React Panel 1 - {lorem}</Accordion.Panel>
				</Accordion.Item>
				<hr className="hr" />
				<Accordion.Item id="reactItem2" onClick={console.log}>
					<Accordion.Control>React Control 2</Accordion.Control>
					<Accordion.Panel>React Panel 2 - {lorem}</Accordion.Panel>
				</Accordion.Item>
				<hr className="hr" />
				<Accordion.Item id="reactItem3" onClick={console.log}>
					<Accordion.Control disabled>React Control 3 (Disabled)</Accordion.Control>
					<Accordion.Panel>React Panel 3 - {lorem}</Accordion.Panel>
				</Accordion.Item>
				<hr className="hr" />
				<Accordion.Item id="reactItem4" onClick={console.log}>
					<Accordion.Control>React Control 4</Accordion.Control>
					<Accordion.Panel>React Panel 4 - {lorem}</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</div>
	);
}
