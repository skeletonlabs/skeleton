"use client";

import React from "react";
import { AvatarProps, FigureProps } from "./types";

// Components
const Figure: React.FC<FigureProps> = ({
    // Root
    base = '',
    background = '',
    size = '',
    font = '',
    border = '',
    rounded = '',
    shadow = '',
    classes = '',
    // Image
    imageSrc = '',
    imageAlt = '',
    imageFilter = '',
    imageBase = '',
    imageClasses = '',
    // Children
    children
}): React.ReactElement => {
    return(
        <figure className={`${base} ${background} ${size} ${font} ${border} ${rounded} ${shadow} ${classes}`}>
            {imageSrc ? (
                <img className={`${imageBase} ${imageClasses}`} src={imageSrc} alt={imageAlt} style={{ filter: `url(${imageFilter})` }} />
            ) : (
                children
            )}
	    </figure>  
    );
};

const Avatar: React.FC<AvatarProps> = ({
    href = '',
    // Root
    base = 'overflow-hidden isolate',
    background = 'bg-surface-400-600',
    size = 'size-16',
    font = '',
    border = '',
    rounded = 'rounded-full',
    shadow = '',
    classes = '',
    // Image
    imageSrc = '',
    imageAlt = '',
    imageFilter = '',
    imageBase = 'w-full object-cover',
    imageClasses = '',
    // Children
    children
}): React.ReactElement => {
    const figureProps = {
        base,
        background,
        size,
        font,
        border,
        rounded,
        shadow,
        classes,
        imageSrc,
        imageAlt,
        imageFilter,
        imageBase,
        imageClasses,
        children
    }
    return href ? (
        <a href={href}>
            <Figure {...figureProps} />
        </a>
    ) : (
        <Figure {...figureProps} />
    )
};

export default Avatar;