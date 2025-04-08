import * as avatar from '@zag-js/avatar';
import type { HTMLAttributes, ImgHTMLAttributes, PropsWithChildren } from 'react';
import type { PropsWithElement } from '../../../internal/props-with-child.js';

interface AvatarRootProps
	extends PropsWithChildren,
		PropsWithElement,
		Omit<avatar.Props, 'id'>,
		Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'dir'> {}
interface AvatarImageProps extends PropsWithElement, ImgHTMLAttributes<HTMLImageElement> {}
interface AvatarFallbackProps extends PropsWithChildren, PropsWithElement, HTMLAttributes<HTMLSpanElement> {}
interface AvatarRootContext {
	api: avatar.Api;
}

export type { AvatarRootProps, AvatarImageProps, AvatarFallbackProps, AvatarRootContext };
