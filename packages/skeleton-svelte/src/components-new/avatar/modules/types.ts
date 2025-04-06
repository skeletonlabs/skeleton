import * as avatar from '@zag-js/avatar';
import type { HTMLAttributes, HTMLImgAttributes } from 'svelte/elements';
import type { PropsWithChildren } from '../../../internal/props-with-children.js';

interface AvatarRootProps extends PropsWithChildren, Omit<avatar.Props, 'id'>, Omit<HTMLAttributes<HTMLElement>, 'id' | 'dir'> {}
type AvatarImageProps = HTMLImgAttributes;
interface AvatarFallbackProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {}
interface AvatarRootContext {
	api: avatar.Api;
}

export type { AvatarRootProps, AvatarImageProps, AvatarFallbackProps, AvatarRootContext };
