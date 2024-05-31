import { useState } from "react";
import { Switch } from "../../lib/components/Switch/Switch.js";

export function Component() {
  const [disturb, setDisturb] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [icons, setIcons] = useState(true);
  const [lightswitch, setLightswitch] = useState(false);
  const [compact, setCompact] = useState(false);

  return (
    <div className="space-y-10">
      <header>
        <h1 className="h1">Switch</h1>
      </header>
      <pre className="pre">
        {JSON.stringify({ disturb, notifications, icons }, null, 2)}
      </pre>
      <section className="card p-4 space-y-4">
        <label className="label flex justify-between items-center gap-4">
          <p>Defaults to inactive state.</p>
          <Switch
            id="disturb"
            name="disturb"
            checked={disturb}
            onCheckedChange={setDisturb}
          />
        </label>
        <hr className="hr" />
        <label className="label flex justify-between items-center gap-4">
          <p>Defaults to active state.</p>
          <Switch
            id="notifications"
            name="notifications"
            checked={notifications}
            onCheckedChange={setNotifications}
          />
        </label>
        <hr className="hr" />
        <label className="label flex justify-between items-center gap-4">
          <p>Uses the disabled state.</p>
          <Switch id="disabled" name="disabled" disabled />
        </label>
        <hr className="hr" />
        <label className="label flex justify-between items-center gap-4">
          <p>Custom Icons</p>
          <Switch
            id="icons"
            name="icons"
            stateActive="bg-secondary-500"
            checked={icons}
            onCheckedChange={setIcons}
          >
            {/* {#snippet inactiveChild()}<IconX size="14" />{/snippet} */}
            {/* {#snippet activeChild()}<IconCheck size="14" />{/snippet} */}
          </Switch>
        </label>
        <hr className="hr" />
        <label className="label flex justify-between items-center gap-4">
          <p>Lightswitch</p>
          <Switch
            id="mode"
            name="mode"
            stateActive="bg-surface-200"
            checked={lightswitch}
            onCheckedChange={setLightswitch}
          >
            {/* {#snippet inactiveChild()}<IconMoon size="14" />{/snippet} */}
            {/* {#snippet activeChild()}<IconSun size="14" />{/snippet} */}
          </Switch>
        </label>
        <hr className="hr" />
        <label className="label flex justify-between items-center gap-4">
          <p>Compact</p>
          <Switch
            id="compact"
            name="compact"
            checked={compact}
            onCheckedChange={setCompact}
            width="w-9"
            compact
          >
            {/* {#snippet inactiveChild()}<IconMoon size="14" />{/snippet} */}
            {/* {#snippet activeChild()}<IconSun size="14" />{/snippet} */}
          </Switch>
        </label>
      </section>
    </div>
  );
}
