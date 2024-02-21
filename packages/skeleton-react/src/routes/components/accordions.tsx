import { Accordion } from "../../components/Accordion/Accordion.tsx";

export function Component() {
  const lorem =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.";
  // const ontoggle = (e: Event) => console.log(e);

  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Control controls="reactItem1" lead="💀" open>
          React Control 1
        </Accordion.Control>
        <Accordion.Panel id="reactItem1">
          React Panel 1 - {lorem}
        </Accordion.Panel>
      </Accordion.Item>
      <hr className="hr" />
      <Accordion.Item>
        <Accordion.Control controls="reactItem2">
          React Control 2
        </Accordion.Control>
        <Accordion.Panel id="reactItem2">
          React Panel 2 - {lorem}
        </Accordion.Panel>
      </Accordion.Item>
      <hr className="hr" />
      <Accordion.Item>
        <Accordion.Control controls="reactItem3" disabled>
          React Control 3 (Disabled)
        </Accordion.Control>
        <Accordion.Panel id="reactItem3">
          React Panel 3 - {lorem}
        </Accordion.Panel>
      </Accordion.Item>
      <hr className="hr" />
      <Accordion.Item>
        <Accordion.Control controls="reactItem4">
          React Control 4
        </Accordion.Control>
        <Accordion.Panel id="reactItem4">
          React Panel 4 - {lorem}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
