import { useState } from "react";
import { Nav } from "../../lib/components/Navigation/Navigation.js";
import {
  Skull as IconLogo,
  Menu as IconMenu,
  Box as IconBox,
  Settings as IconSettings,
} from "lucide-react";

export function Component() {
  const [activeItem, setActiveItem] = useState("0");

  function onClickHandler(id: string) {
    setActiveItem(id);
  }

  function isActive(id: string) {
    return activeItem === id;
  }

  return (
    <div className="space-y-10">
      <header>
        <h1 className="h1">Navigation</h1>
      </header>
      <section className="space-y-4">
        <h2 className="h2">Bar</h2>
        {/* prettier-ignore */}
        <Nav.Bar>
            <Nav.Tile id="0" label="Tile 1" onClick={onClickHandler} selected={isActive('0')}>
                <IconBox />
            </Nav.Tile>
            <Nav.Tile id="1" label="Tile 2" onClick={onClickHandler} selected={isActive('1')}>
                <IconBox />
            </Nav.Tile>
            <Nav.Tile id="2" label="Tile 3" onClick={onClickHandler} selected={isActive('2')}>
                <IconBox />
            </Nav.Tile>
            <Nav.Tile id="3" label="Tile 4" onClick={onClickHandler} selected={isActive('3')}>
                <IconBox />
            </Nav.Tile>
        </Nav.Bar>
      </section>
      <section className="space-y-4">
        <h2 className="h2">Rail</h2>
        <div className="flex justify-center gap-10 h-[960px]">
          <Nav.Rail
            header={
              <Nav.Tile href="/" title="Menu">
                <IconMenu />
              </Nav.Tile>
            }
            footer={
              <Nav.Tile href="/settings" title="settings">
                <IconSettings />
              </Nav.Tile>
            }
          >
            <Nav.Tile id="0" label="Tile 1" href="#">
              <IconBox />
            </Nav.Tile>
            <Nav.Tile id="1" label="Tile 2" href="#">
              <IconBox />
            </Nav.Tile>
            <Nav.Tile id="2" label="Tile 3" href="#">
              <IconBox />
            </Nav.Tile>
            <Nav.Tile id="3" label="Tile 4" href="#">
              <IconBox />
            </Nav.Tile>
            <Nav.Tile id="4" label="Tile 5" href="#">
              <IconBox />
            </Nav.Tile>
          </Nav.Rail>
          {/* expanded */}
          <Nav.Rail
            expanded
            header={
              <a
                href="/"
                className="w-full aspect-square flex flex-col justify-center items-center gap-2"
              >
                <IconLogo size={48} />
                <span className="type-scale-5 font-bold">Skeleton</span>
              </a>
            }
            footer={
              <Nav.Tile labelExpanded="Settings" href="/settings">
                <IconSettings />
              </Nav.Tile>
            }
          >
            <Nav.Tile id="0" labelExpanded="Expanded Tile 1" href="#">
              <IconBox />
            </Nav.Tile>
            <Nav.Tile id="1" labelExpanded="Expanded Tile 2" href="#">
              <IconBox />
            </Nav.Tile>
            <Nav.Tile id="2" labelExpanded="Expanded Tile 3" href="#">
              <IconBox />
            </Nav.Tile>
            <Nav.Tile id="3" labelExpanded="Expanded Tile 4" href="#">
              <IconBox />
            </Nav.Tile>
            <Nav.Tile id="4" labelExpanded="Expanded Tile 5" href="#">
              <IconBox />
            </Nav.Tile>
          </Nav.Rail>
        </div>
      </section>
    </div>
  );
}
