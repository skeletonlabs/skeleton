"use client";

import React, { createContext, useContext } from "react";
import {
  NavContextState,
  NavRailProps,
  NavBarProps,
  NavTileProps,
} from "./types.js";

// Contexts ---

export const NavContext = createContext<NavContextState>({
  parent: "",
  expanded: false,
});

// Components ---

export const NavRail: React.FC<NavRailProps> = ({
  expanded = false,
  // Root
  base = "h-full flex flex-col",
  background = "preset-filled-surface-100-900",
  padding = "p-1",
  width = "w-24",
  widthExpanded = "w-64",
  height = "h-full",
  classes = "",
  // Header
  headerBase = "flex",
  headerFlexDirection = "flex-col",
  headerJustify = "justify-center",
  headerItems = "items-center",
  headerGap = "gap-1",
  headerClasses = "",
  // Tiles
  tilesBase = "flex-1 flex",
  tilesFlexDirection = "flex-col",
  tilesJustify = "justify-center",
  tilesItems = "items-center",
  tilesGap = "gap-1",
  tilesClasses = "",
  // Footer
  footerBase = "flex",
  footerFlexDirection = "flex-col",
  footerJustify = "justify-center",
  footerItems = "items-center",
  footerGap = "gap-1",
  footerClasses = "",
  // Snippets
  header,
  children,
  footer,
}) => {
  // Set Context
  const ctx = {
    parent: "rail",
    expanded,
  };

  // Reactive
  let rxWidth = expanded ? widthExpanded : width;

  return (
    <aside
      className={`${base} ${background} ${height} ${padding} ${rxWidth} ${classes}`}
      data-testid="nav-rail"
    >
      <NavContext.Provider value={ctx}>
        {/* Header */}
        {header ? (
          <header
            className={`${headerBase} ${headerFlexDirection} ${headerJustify} ${headerItems} ${headerGap} ${headerClasses}`}
          >
            {header}
          </header>
        ) : null}
        {/* Tiles */}
        {children ? (
          <nav
            className={`${tilesBase} ${tilesFlexDirection} ${tilesJustify} ${tilesItems} ${tilesGap} ${tilesClasses}`}
          >
            {children}
          </nav>
        ) : null}
        {/* Footer */}
        {footer ? (
          <footer
            className={`${footerBase} ${footerFlexDirection} ${footerJustify} ${footerItems} ${footerGap} ${footerClasses}`}
          >
            {footer}
          </footer>
        ) : null}
      </NavContext.Provider>
    </aside>
  );
};

export const NavBar: React.FC<NavBarProps> = ({
  // Root
  base = "h-full flex flex-col",
  background = "preset-filled-surface-100-900",
  width = "min-w-[320px] w-full",
  height = "h-20",
  padding = "p-1",
  classes = "",
  // Tiles
  tilesBase = "flex-1 flex",
  tilesFlexDirection = "",
  tilesJustify = "justify-center",
  tilesItems = "items-center",
  tilesGap = "gap-1",
  tilesClasses = "",
  // Snippets
  children,
}) => {
  // Set Context
  const ctx = {
    parent: "bar",
  };

  return (
    <aside
      className={`${base} ${background} ${width} ${height} ${padding} ${classes}`}
      data-testid="nav-bar"
    >
      <NavContext.Provider value={ctx}>
        {children ? (
          <nav
            className={`${tilesBase} ${tilesFlexDirection} ${tilesJustify} ${tilesItems} ${tilesGap} ${tilesClasses}`}
          >
            {children}
          </nav>
        ) : null}
      </NavContext.Provider>
    </aside>
  );
};

export const NavTile: React.FC<NavTileProps> = ({
  id,
  href,
  target,
  label,
  labelExpanded,
  title,
  selected = false,
  // Root
  base = "flex items-center",
  width = "w-full",
  aspect = "aspect-square",
  background = "",
  hover = "hover:preset-filled-surface-50-950",
  active = "preset-filled-primary-500",
  padding = "p-2",
  gap = "gap-1",
  rounded = "rounded-container",
  classes = "flex-col justify-center",
  // Expanded
  expandedPadding = "py-3 px-4",
  expandedGap = "gap-4",
  expandedClasses = "",
  // Label (base)
  labelBase = "type-scale-1",
  labelClasses = "",
  // Label (expanded)
  labelExpandedBase = "",
  labelExpandedClasses = "",
  // Events
  onClick,
  // Snippets
  children,
}) => {
  // Get Context
  const ctx = useContext<NavContextState>(NavContext);

  // Local
  const TileElement = href ? "a" : "button";
  const type = href ? undefined : "button";
  const role = href ? undefined : "button";

  // Reactive
  let rxSize = ctx.parent === "bar" ? `h-full` : `${aspect}`;
  const classesCollapsed = `${rxSize} ${padding} ${gap} ${classes}`;
  const classesExtended = `${expandedPadding} ${expandedGap} ${expandedClasses}`;
  let rxMode = ctx.expanded ? classesExtended : classesCollapsed;
  let rxBackground = selected ? active : `${background} ${hover}`;

  function onClickHandler() {
    if (onClick && !id) throw new Error("No ID was provided");
    if (onClick && id) onClick(id);
  }

  return (
    <TileElement
      className={`${base} ${width} ${rounded} ${rxBackground} ${rxMode}`}
      href={href}
      target={target}
      type={type}
      title={title}
      role={role}
      onClick={onClickHandler}
      data-parent={ctx.parent}
      data-expanded={ctx.expanded}
      data-testid="nav-tile"
    >
      {/* Icon */}
      {children ? <div>{children}</div> : null}
      {/* Label (base) */}
      {label && !ctx.expanded ? (
        <div className={`${labelBase} ${labelClasses}`}>{label}</div>
      ) : null}
      {/* Label (expanded) */}
      {labelExpanded && ctx.expanded ? (
        <div className={`${labelExpandedBase} ${labelExpandedClasses}`}>
          {labelExpanded}
        </div>
      ) : null}
    </TileElement>
  );
};

// Exports ---

export const Nav = Object.assign(() => null, {
  Rail: NavRail,
  Bar: NavBar,
  Tile: NavTile,
});
