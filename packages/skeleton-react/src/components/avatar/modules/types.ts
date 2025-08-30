import * as avatar from '@zag-js/avatar';
import type { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import type { PropsWithElement } from '../../../internal/props-with-element.js';

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
interface AvatarRootContextProps {
	children: (api: avatar.Api) => ReactNode;
}

export type { AvatarRootProps, AvatarImageProps, AvatarFallbackProps, AvatarRootContext, AvatarRootContextProps };
