import { type FC, useContext, useId } from 'react';
import type { NavContextState, NavRailProps, NavBarProps, NavTileProps } from './types.js';
import { NavContext } from './context.js';

// Components ---

export const NavRail: FC<NavRailProps> = ({
	value = '',
	expanded = false,
	// Root
	base = 'flex flex-col',
	background = 'preset-filled-surface-100-900',
	padding = 'p-1',
	width = 'w-24',
	widthExpanded = 'w-64',
	height = 'h-full',
	classes = '',
	// Header
	headerBase = 'flex',
	headerFlexDirection = 'flex-col',
	headerJustify = 'justify-center',
	headerItems = 'items-center',
	headerGap = 'gap-1',
	headerClasses = '',
	// Tiles
	tilesBase = 'flex-1 flex',
	tilesFlexDirection = 'flex-col',
	tilesJustify = 'justify-center',
	tilesItems = 'items-center',
	tilesGap = 'gap-1',
	tilesClasses = '',
	// Footer
	footerBase = 'flex',
	footerFlexDirection = 'flex-col',
	footerJustify = 'justify-center',
	footerItems = 'items-center',
	footerGap = 'gap-1',
	footerClasses = '',
	// Events
	onValueChange,
	// Snippets
	header,
	children,
	footer
}) => {
	// Set Context
	const ctx = {
		parent: 'rail',
		value,
		expanded,
		onValueChange
	};

	// Reactive
	const rxWidth = expanded ? widthExpanded : width;

	return (
		<aside className={`${base} ${background} ${height} ${padding} ${rxWidth} ${classes}`} data-testid="nav-rail">
			<NavContext.Provider value={ctx}>
				{/* Header */}
				{header ? (
					<header
						className={`${headerBase} ${headerFlexDirection} ${headerJustify} ${headerItems} ${headerGap} ${headerClasses}`}
						data-testid="nav-rail-header"
					>
						{header}
					</header>
				) : null}
				{/* Tiles */}
				{children ? (
					<nav
						className={`${tilesBase} ${tilesFlexDirection} ${tilesJustify} ${tilesItems} ${tilesGap} ${tilesClasses}`}
						data-testid="nav-rail-tiles"
					>
						{children}
					</nav>
				) : null}
				{/* Footer */}
				{footer ? (
					<footer
						className={`${footerBase} ${footerFlexDirection} ${footerJustify} ${footerItems} ${footerGap} ${footerClasses}`}
						data-testid="nav-rail-footer"
					>
						{footer}
					</footer>
				) : null}
			</NavContext.Provider>
		</aside>
	);
};

export const NavBar: FC<NavBarProps> = ({
	value = '',
	// Root
	base = 'h-full flex flex-col',
	background = 'preset-filled-surface-100-900',
	width = 'min-w-[320px] w-full',
	height = 'h-20',
	padding = 'p-1',
	classes = '',
	// Tiles
	tilesBase = 'flex-1 flex',
	tilesFlexDirection = '',
	tilesJustify = 'justify-center',
	tilesItems = 'items-center',
	tilesGap = 'gap-1',
	tilesClasses = '',
	// Events
	onValueChange,
	// Snippets
	children
}) => {
	// Set Context
	const ctx = {
		parent: 'bar',
		value,
		expanded: false,
		onValueChange
	};

	return (
		<aside className={`${base} ${background} ${width} ${height} ${padding} ${classes}`} data-testid="nav-bar">
			<NavContext.Provider value={ctx}>
				{children ? (
					<nav className={`${tilesBase} ${tilesFlexDirection} ${tilesJustify} ${tilesItems} ${tilesGap} ${tilesClasses}`}>{children}</nav>
				) : null}
			</NavContext.Provider>
		</aside>
	);
};

export const NavTile: FC<NavTileProps> = ({
	id,
	href,
	target,
	label,
	labelExpanded,
	title,
	selected = undefined,
	type = 'button',
	// Root
	base = 'flex items-center',
	width = 'w-full',
	aspect = 'aspect-square',
	background = '',
	hover = 'hover:preset-filled-surface-50-950',
	active = 'preset-filled-primary-500',
	padding = 'p-2',
	gap = 'gap-1',
	rounded = 'rounded-container',
	classes = 'flex-col justify-center',
	// Expanded
	expandedPadding = 'py-3 px-4',
	expandedGap = 'gap-4',
	expandedClasses = '',
	// Label (base)
	labelBase = 'text-xs',
	labelClasses = '',
	// Label (expanded)
	labelExpandedBase = '',
	labelExpandedClasses = '',
	// Events
	onClick,
	// Snippets
	children
}) => {
	// Get Context
	const ctx = useContext<NavContextState>(NavContext);

	const generatedId = useId();
	if (!id) {
		id = generatedId;
	}

	// Local
	const TileElement = href ? 'a' : 'button';
	const role = href ? undefined : 'button';

	// Reactive
	const rxSize = ctx.parent === 'bar' ? `h-full` : `${aspect}`;
	const classesCollapsed = `${rxSize} ${padding} ${gap} ${classes}`;
	const classesExtended = `${expandedPadding} ${expandedGap} ${expandedClasses}`;
	const rxMode = ctx.expanded ? classesExtended : classesCollapsed;
	const isActive = selected !== undefined ? selected : ctx.value === id;
	const rxBackground = isActive ? active : `${background} ${hover}`;

	function onClickHandler() {
		if (onClick && !id) throw new Error('No ID was provided');
		if (onClick && id) onClick(id);
		if (id) ctx.onValueChange?.(id);
	}

	return (
		<TileElement
			className={`${base} ${width} ${rounded} ${rxBackground} ${rxMode}`}
			href={href}
			target={target}
			type={TileElement === 'button' ? type : undefined}
			title={title}
			role={role}
			onClick={onClickHandler}
			data-parent={ctx.parent}
			data-expanded={ctx.expanded}
			data-testid="nav-tile"
		>
			{/* Icon */}
			{children && <div>{children}</div>}
			{/* Label (base) */}
			{label && !ctx.expanded && (
				<div className={`${labelBase} ${labelClasses}`} data-testid="nav-tile-label">
					{label}
				</div>
			)}
			{/* Label (expanded) */}
			{labelExpanded && ctx.expanded && (
				<div className={`${labelExpandedBase} ${labelExpandedClasses}`} data-testid="nav-tile-label-expanded">
					{labelExpanded}
				</div>
			)}
		</TileElement>
	);
};

// Exports ---

export const Navigation = /* @__PURE__ */ Object.assign(() => null, {
	Rail: NavRail,
	Bar: NavBar,
	Tile: NavTile
});
