import { Suspense, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.js";
import { Switch } from "./lib/index.js";
import { Moon as IconMoon, Sun as IconSun } from "lucide-react";

function App() {
  const [lightswitch, setLightswitch] = useState(false);

  function onModeChange(newValue: boolean) {
    setLightswitch(newValue);
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div
      className="h-screen grid grid-cols-[320px_minmax(0,_1fr)]"
      data-testid="app"
    >
      {/* Nav */}
      <div className="bg-surface-100-900 p-8 overflow-y-auto space-y-8">
        <a
          className="bg-blue-500 text-white p-2 type-scale-3 font-bold font-mono"
          href="/"
        >
          skeleton-react
        </a>
        <hr className="hr" />
        <label className="label flex justify-between items-center gap-4">
          <p>Set Mode</p>
          <Switch
            id="mode"
            name="mode"
            stateActive="bg-surface-200"
            checked={lightswitch}
            onCheckedChange={onModeChange}
            inactiveChild={<IconMoon size="14" />}
            activeChild={<IconSun size="14" />}
          />
        </label>
        <hr className="hr" />
        {/* Components */}
        <div className="space-y-8">
          <span className="font-bold">Components</span>
          <nav className="flex flex-col gap-2 type-scale-2">
            <a className="anchor" href="/components/accordions">
              Accordions
            </a>
            <a className="anchor" href="/components/avatars">
              Avatars
            </a>
            <a className="anchor" href="/components/app-bars">
              App Bars
            </a>
            <a className="anchor" href="/components/navigation">
              Navigation
            </a>
            <a className="anchor" href="/components/progress">
              Progress
            </a>
            <a className="anchor" href="/components/progress-rings">
              Progress Rings
            </a>
            <a className="anchor" href="/components/switch">
              Switch
            </a>
            <a className="anchor" href="/components/tabs">
              Tabs
            </a>
          </nav>
        </div>
      </div>
      {/* Page */}
      <main className="p-8 overflow-y-auto">
        {/* --- Route Slot --- */}
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
        {/* --- / --- */}
      </main>
    </div>
  );
}

export default App;
