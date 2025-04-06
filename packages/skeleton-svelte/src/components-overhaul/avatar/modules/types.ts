import * as avatar from '@zag-js/avatar';
import type { HTMLAttributes, HTMLImgAttributes } from 'svelte/elements';
import type { PropsWithChild } from '../../../internal/props-with-child.js';
import type { PropsWithChildOrChildren } from '../../../internal/props-with-child-or-children.js';

interface AvatarRootProps extends PropsWithChildOrChildren, Omit<avatar.Props, 'id'>, Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'dir'> {}
interface AvatarImageProps extends PropsWithChild, HTMLImgAttributes {}
interface AvatarFallbackProps extends PropsWithChildOrChildren, HTMLAttributes<HTMLSpanElement> {}
interface AvatarRootContext {
	api: avatar.Api;
}

export type { AvatarRootProps, AvatarImageProps, AvatarFallbackProps, AvatarRootContext };
