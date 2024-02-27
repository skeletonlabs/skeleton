"use client";

import React from "react";
import { AvatarProps } from "./types";

export const Avatar: React.FC<AvatarProps> = ({
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
    return (
        <figure className={`${base} ${background} ${size} ${font} ${border} ${rounded} ${shadow} ${classes}`} data-testId="avatar">
            {imageSrc ? (
                <img className={`${imageBase} ${imageClasses}`} src={imageSrc} alt={imageAlt} style={{ filter: imageFilter ? `url(${imageFilter})` : undefined }} />
            ) : (
                children
            )}
	    </figure>  
    );
};