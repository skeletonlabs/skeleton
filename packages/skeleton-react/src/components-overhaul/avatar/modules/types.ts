import * as avatar from '@zag-js/avatar';
import type { HTMLAttributes, ImgHTMLAttributes } from 'react';
import type { PropsWithChildOrChildren } from '../../../internal/props-with-child-or-children.js';
import type { PropsWithChild } from '../../../internal/props-with-child.js';

interface AvatarRootProps extends PropsWithChildOrChildren, Omit<avatar.Props, 'id'>, Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'dir'> {}
interface AvatarImageProps extends PropsWithChild, ImgHTMLAttributes<HTMLImageElement> {}
interface AvatarFallbackProps extends PropsWithChildOrChildren, HTMLAttributes<HTMLSpanElement> {}
interface AvatarRootContext {
	api: avatar.Api;
}

export type { AvatarRootProps, AvatarImageProps, AvatarFallbackProps, AvatarRootContext };
