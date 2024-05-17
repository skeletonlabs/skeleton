import { useState } from "react";
import { Tabs } from "../../components/Tabs/Tabs";

const icons = {
  flight:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane size-4" ><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /></svg>',
  hotel:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hotel size-4" ><path d="M10 22v-6.57" /><path d="M12 11h.01" /><path d="M12 7h.01" /><path d="M14 15.43V22" /><path d="M15 16a5 5 0 0 0-6 0" /><path d="M16 11h.01" /><path d="M16 7h.01" /><path d="M8 11h.01" /><path d="M8 7h.01" /><rect x="4" y="2" width="16" height="20" rx="2" /></svg>',
  cube: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box size-4" ><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>',
};

function Preview(
  group: string,
  setGroup: React.Dispatch<React.SetStateAction<string>>
) {
  return (
    <>
      <section className="space-y-4">
        <h2 className="h2">Preview</h2>
        <Tabs>
          <Tabs.List>
            <Tabs.Control
              name="flight"
              group={group}
              onChange={setGroup}
              onClick={() => console.log("onClick")}
              onKeydown={() => console.log("onKeyDown")}
            >
              <Tabs.Item>Flight</Tabs.Item>
            </Tabs.Control>
            <Tabs.Control name="hotel" group={group} onChange={setGroup}>
              <Tabs.Item>Hotel</Tabs.Item>
            </Tabs.Control>
            <Tabs.Control name="explore" group={group} onChange={setGroup}>
              <Tabs.Item>Explore</Tabs.Item>
            </Tabs.Control>
          </Tabs.List>
          <Tabs.Panel group={group} value="flight">
            Flight Panel
          </Tabs.Panel>
          <Tabs.Panel group={group} value="hotel">
            Hotel Panel
          </Tabs.Panel>
          <Tabs.Panel group={group} value="explore">
            Explore Panel
          </Tabs.Panel>
        </Tabs>
      </section>
    </>
  );
}

function WithIcon(
  group: string,
  setGroup: React.Dispatch<React.SetStateAction<string>>
) {
  return (
    <>
      <section className="space-y-4">
        <h2 className="h2">With Icon</h2>
        <Tabs>
          <Tabs.List>
            <Tabs.Control
              name="flight"
              group={group}
              title="flight"
              onChange={setGroup}
            >
              <Tabs.Item>
                <div dangerouslySetInnerHTML={{ __html: icons.flight }} />
                <span>Flight</span>
              </Tabs.Item>
            </Tabs.Control>
            <Tabs.Control
              name="hotel"
              title="hotel"
              group={group}
              onChange={setGroup}
            >
              <Tabs.Item>
                <div dangerouslySetInnerHTML={{ __html: icons.hotel }} />
                <span>Hotel</span>
              </Tabs.Item>
            </Tabs.Control>
            <Tabs.Control
              name="explore"
              title="explore"
              group={group}
              onChange={setGroup}
            >
              <Tabs.Item>
                <div dangerouslySetInnerHTML={{ __html: icons.cube }} />
                <span>Explore</span>
              </Tabs.Item>
            </Tabs.Control>
          </Tabs.List>
          <Tabs.Panel group={group} value="flight">
            Flight Panel
          </Tabs.Panel>
          <Tabs.Panel group={group} value="hotel">
            Hotel Panel
          </Tabs.Panel>
          <Tabs.Panel group={group} value="explore">
            Explore Panel
          </Tabs.Panel>
        </Tabs>
      </section>
    </>
  );
}

function IconOnly(
  group: string,
  setGroup: React.Dispatch<React.SetStateAction<string>>
) {
  return (
    <>
      <section className="space-y-4">
        <h2 className="h2">Icon Only</h2>
        <Tabs>
          <Tabs.List>
            <Tabs.Control
              name="flight"
              group={group}
              title="flight"
              onChange={setGroup}
            >
              <Tabs.Item>
                <div dangerouslySetInnerHTML={{ __html: icons.flight }} />
              </Tabs.Item>
            </Tabs.Control>
            <Tabs.Control
              name="hotel"
              title="hotel"
              group={group}
              onChange={setGroup}
            >
              <Tabs.Item>
                <div dangerouslySetInnerHTML={{ __html: icons.hotel }} />
              </Tabs.Item>
            </Tabs.Control>
            <Tabs.Control
              name="explore"
              title="explore"
              group={group}
              onChange={setGroup}
            >
              <Tabs.Item>
                <div dangerouslySetInnerHTML={{ __html: icons.cube }} />
              </Tabs.Item>
            </Tabs.Control>
          </Tabs.List>
          <Tabs.Panel group={group} value="flight">
            Flight Panel
          </Tabs.Panel>
          <Tabs.Panel group={group} value="hotel">
            Hotel Panel
          </Tabs.Panel>
          <Tabs.Panel group={group} value="explore">
            Explore Panel
          </Tabs.Panel>
        </Tabs>
      </section>
    </>
  );
}

function Stretched(
  group: string,
  setGroup: React.Dispatch<React.SetStateAction<string>>
) {
  return (
    <>
      <section className="space-y-4">
        <h2 className="h2">Stretched</h2>
        <Tabs>
          <Tabs.List>
            <Tabs.Control
              name="flight"
              group={group}
              onChange={setGroup}
              width="w-full"
            >
              <Tabs.Item>Flight</Tabs.Item>
            </Tabs.Control>
            <Tabs.Control
              name="hotel"
              group={group}
              onChange={setGroup}
              width="w-full"
            >
              <Tabs.Item>Hotel</Tabs.Item>
            </Tabs.Control>
            <Tabs.Control
              name="explore"
              group={group}
              onChange={setGroup}
              width="w-full"
            >
              <Tabs.Item>Explore</Tabs.Item>
            </Tabs.Control>
          </Tabs.List>
          <Tabs.Panel group={group} value="flight">
            Flight Panel
          </Tabs.Panel>
          <Tabs.Panel group={group} value="hotel">
            Hotel Panel
          </Tabs.Panel>
          <Tabs.Panel group={group} value="explore">
            Explore Panel
          </Tabs.Panel>
        </Tabs>
      </section>
    </>
  );
}

function JustifyCenter(
  group: string,
  setGroup: React.Dispatch<React.SetStateAction<string>>
) {
  return (
    <>
      <section className="space-y-4">
        <h2 className="h2">Justify Center</h2>
        <Tabs>
          <Tabs.List justify="justify-center">
            <Tabs.Control name="flight" group={group} onChange={setGroup}>
              <Tabs.Item>Flight</Tabs.Item>
            </Tabs.Control>
            <Tabs.Control name="hotel" group={group} onChange={setGroup}>
              <Tabs.Item>Hotel</Tabs.Item>
            </Tabs.Control>
            <Tabs.Control name="explore" group={group} onChange={setGroup}>
              <Tabs.Item>Explore</Tabs.Item>
            </Tabs.Control>
          </Tabs.List>
          <Tabs.Panel group={group} value="flight">
            Flight Panel
          </Tabs.Panel>
          <Tabs.Panel group={group} value="hotel">
            Hotel Panel
          </Tabs.Panel>
          <Tabs.Panel group={group} value="explore">
            Explore Panel
          </Tabs.Panel>
        </Tabs>
      </section>
    </>
  );
}

function JustifyEnd(
  group: string,
  setGroup: React.Dispatch<React.SetStateAction<string>>
) {
  return (
    <>
      <section className="space-y-4">
        <h2 className="h2">Justify End</h2>
        <Tabs>
          <Tabs.List justify="justify-end">
            <Tabs.Control name="flight" group={group} onChange={setGroup}>
              <Tabs.Item>Flight</Tabs.Item>
            </Tabs.Control>
            <Tabs.Control name="hotel" group={group} onChange={setGroup}>
              <Tabs.Item>Hotel</Tabs.Item>
            </Tabs.Control>
            <Tabs.Control name="explore" group={group} onChange={setGroup}>
              <Tabs.Item>Explore</Tabs.Item>
            </Tabs.Control>
          </Tabs.List>
          <Tabs.Panel group={group} value="flight">
            Flight Panel
          </Tabs.Panel>
          <Tabs.Panel group={group} value="hotel">
            Hotel Panel
          </Tabs.Panel>
          <Tabs.Panel group={group} value="explore">
            Explore Panel
          </Tabs.Panel>
        </Tabs>
      </section>
    </>
  );
}

function FocusableContent(
  group: string,
  setGroup: React.Dispatch<React.SetStateAction<string>>
) {
  return (
    <>
      <section className="space-y-4">
        <h2 className="h2">Focusable Content</h2>
        <Tabs>
          <Tabs.List>
            <Tabs.Control name="flight" group={group} onChange={setGroup}>
              <Tabs.Item>Flight</Tabs.Item>
            </Tabs.Control>
            <Tabs.Control name="hotel" group={group} onChange={setGroup}>
              <Tabs.Item>Hotel</Tabs.Item>
            </Tabs.Control>
            <Tabs.Control name="explore" group={group} onChange={setGroup}>
              <Tabs.Item>Explore</Tabs.Item>
            </Tabs.Control>
          </Tabs.List>
          <Tabs.Panel group={group} value="flight">
            <button type="button" className="btn preset-filled">
              Book a Flight
            </button>
          </Tabs.Panel>
          <Tabs.Panel group={group} value="hotel">
            <button type="button" className="btn preset-filled">
              See Hotels near you
            </button>
          </Tabs.Panel>
          <Tabs.Panel group={group} value="explore">
            <button type="button" className="btn preset-filled">
              Explore
            </button>
          </Tabs.Panel>
        </Tabs>
      </section>
    </>
  );
}

function RTL(
  group: string,
  setGroup: React.Dispatch<React.SetStateAction<string>>
) {
  return (
    <>
      <section className="space-y-4">
        <h2 className="h2">RTL</h2>
        <div dir="rtl">
          <Tabs>
            <Tabs.List>
              <Tabs.Control name="flight" group={group} onChange={setGroup}>
                <Tabs.Item>Flight</Tabs.Item>
              </Tabs.Control>
              <Tabs.Control name="hotel" group={group} onChange={setGroup}>
                <Tabs.Item>Hotel</Tabs.Item>
              </Tabs.Control>
              <Tabs.Control name="explore" group={group} onChange={setGroup}>
                <Tabs.Item>Explore</Tabs.Item>
              </Tabs.Control>
            </Tabs.List>
            <Tabs.Panel group={group} value="flight">
              Flight Panel{" "}
            </Tabs.Panel>
            <Tabs.Panel group={group} value="hotel">
              Hotel Panel{" "}
            </Tabs.Panel>
            <Tabs.Panel group={group} value="explore">
              Explore Panel
            </Tabs.Panel>
          </Tabs>
        </div>
      </section>
    </>
  );
}

export function Component() {
  const [group, setGroup] = useState("flight");
  return (
    <>
      <div className="space-y-10">
        <header>
          <h1 className="h1">Tabs</h1>
        </header>
        {Preview(group, setGroup)}
        {WithIcon(group, setGroup)}
        {IconOnly(group, setGroup)}
        {Stretched(group, setGroup)}
        {JustifyCenter(group, setGroup)}
        {JustifyEnd(group, setGroup)}
        {FocusableContent(group, setGroup)}
        {RTL(group, setGroup)}
      </div>
    </>
  );
}
