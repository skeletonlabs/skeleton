"use client";

import React from "react";
import { AppBarCenterProps, AppBarHeadlineProps, AppBarLeadProps, AppBarProps, AppBarToolBarProps, AppBarTrailProps } from "./types";

// React Compose ---
import { reactCompose } from "../../utils/react-compose";


// Components ---
const AppBarRoot: React.FC<AppBarProps> = ({
    // Root
    base = 'w-full flex flex-col',
    background = 'bg-surface-100-900',
    spaceY = 'space-y-4',
    border = '',
    padding = 'p-4',
    shadow = '',
    classes = '',
    // Children
    children
}) => {
    return (
        <div
            className={`${base} ${background} ${spaceY} ${border} ${padding} ${shadow} ${classes}`}
            role="toolbar"
            data-testid="app-bar"
        >
            {children}
        </div>
    );
};

const AppBarToolBarRoot: React.FC<AppBarToolBarProps> = ({
    // Toolbar
    base = 'flex justify-between',
    gridCols = 'grid-cols-[auto_1fr_auto]',
    gap = 'gap-4',
    classes = '',
    // Children
    children
}) => {
    return(
        <div className={`${base} ${gridCols} ${gap} ${classes}`}>
            {children}
        </div>
    );
};

const AppBarLead: React.FC<AppBarLeadProps> = ({
    // Lead
    base = 'flex',
    spaceX = 'space-x-4 rtl:space-x-reverse',
    padding = '',
    classes = '',
    // Children
    children
}) => {
    return(
        <div className={`${base} ${spaceX} ${padding} ${classes}`}>
            {children}
        </div>
    );
};

const AppBarCenter: React.FC<AppBarCenterProps> = ({
    // Center
    base = 'grow',
    align = 'text-center',
    padding = '',
    classes = '',
    // Children
    children
}) => {
    return(
        <div className={`${base} ${align} ${padding} ${classes}`}>
            {children}
        </div> 
    );
};

const AppBarTrail: React.FC<AppBarTrailProps> = ({
    // Trail
    base = 'flex',
    spaceX = 'space-x-4 rtl:space-x-reverse',
    padding = '',
    classes = '',
    // Children
    children
}) => {
    return(
        <div className={`${base} ${spaceX} ${padding} ${classes}`}>
            {children}
        </div>  
    );
};

const AppBarHeadline: React.FC<AppBarHeadlineProps> = ({
    // Headline
    base = 'w-full',
    classes = '',
    // Children
    children
}) => {
    return(
        <div className={`${base} ${classes}`}>
            {children}
        </div> 
    );
};

export const ToolBar = reactCompose(AppBarToolBarRoot, {
    Lead: AppBarLead,
    Center: AppBarCenter,
    Trail: AppBarTrail
});

export const AppBar = reactCompose(AppBarRoot, {
    Toolbar: ToolBar,
    Headline: AppBarHeadline
})