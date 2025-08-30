import * as avatar from '@zag-js/avatar';
import type { HTMLAttributes, HTMLImgAttributes } from 'svelte/elements';
import type { PropsWithElement } from '../../../internal/props-with-element.js';
import type { Snippet } from 'svelte';

interface AvatarRootProps extends PropsWithElement, Omit<avatar.Props, 'id'>, Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'dir'> {}
interface AvatarImageProps extends PropsWithElement, HTMLImgAttributes {}
interface AvatarFallbackProps extends PropsWithElement, HTMLAttributes<HTMLSpanElement> {}
interface AvatarRootContext {
	api: avatar.Api;
}
interface AvatarRootContextProps {
	children: Snippet<[avatar.Api]>;
}

export type { AvatarRootProps, AvatarImageProps, AvatarFallbackProps, AvatarRootContext, AvatarRootContextProps };
