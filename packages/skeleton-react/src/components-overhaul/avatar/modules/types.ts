import * as avatar from '@zag-js/avatar';
import type { HTMLAttributes, ImgHTMLAttributes, PropsWithChildren } from 'react';

interface AvatarRootProps extends PropsWithChildren, Omit<avatar.Props, 'id'>, Omit<HTMLAttributes<HTMLDivElement>, 'id' | 'dir'> {}
type AvatarImageProps = ImgHTMLAttributes<HTMLImageElement>;
interface AvatarFallbackProps extends PropsWithChildren, HTMLAttributes<HTMLSpanElement> {}
interface AvatarRootContext {
	api: avatar.Api;
}

export type { AvatarRootProps, AvatarImageProps, AvatarFallbackProps, AvatarRootContext };
