import * as avatar from '@zag-js/avatar';
import type { HTMLAttributes, HTMLImgAttributes } from 'svelte/elements';
import type { PropsWithChildren } from '../../../internal/props-with-children.js';
import type { PropsWithElement } from '../../../internal/props-with-element.js';

interface AvatarRootProps
	extends PropsWithElement,
		PropsWithChildren,
		Omit<avatar.Props, 'id'>,
		Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'dir'> {}
interface AvatarImageProps extends PropsWithElement, HTMLImgAttributes {}
interface AvatarFallbackProps extends PropsWithElement, PropsWithChildren, HTMLAttributes<HTMLSpanElement> {}
interface AvatarRootContext {
	api: avatar.Api;
}

export type { AvatarRootProps, AvatarImageProps, AvatarFallbackProps, AvatarRootContext };
