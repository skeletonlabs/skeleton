import * as avatar from '@zag-js/avatar';
import type { HTMLAttributes, ImgHTMLAttributes, PropsWithChildren } from 'react';

interface AvatarRootProps extends PropsWithChildren, Omit<avatar.Props, 'id'>, Omit<HTMLAttributes<HTMLElement>, 'id' | 'dir'> {}
type AvatarImageProps = ImgHTMLAttributes<HTMLImageElement>;
interface AvatarFallbackProps extends PropsWithChildren, HTMLAttributes<HTMLElement> {}
interface AvatarRootContext {
	api: avatar.Api;
}

export type { AvatarRootProps, AvatarImageProps, AvatarFallbackProps, AvatarRootContext };
