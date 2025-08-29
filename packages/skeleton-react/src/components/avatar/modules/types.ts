import * as avatar from '@zag-js/avatar';
import type { ComponentProps, PropsWithChildren } from 'react';
import type { PropsWithElement } from '@/internal/props-with-child.js';

interface AvatarRootProps
	extends PropsWithChildren,
		PropsWithElement,
		Omit<avatar.Props, 'id'>,
		Omit<ComponentProps<'div'>, 'id' | 'dir'> {}
interface AvatarImageProps extends PropsWithElement, ComponentProps<'img'> {}
interface AvatarFallbackProps extends PropsWithChildren, PropsWithElement, ComponentProps<'span'> {}
interface AvatarRootContext {
	api: avatar.Api;
}

export type { AvatarRootProps, AvatarImageProps, AvatarFallbackProps, AvatarRootContext };
