import type { PropsWithChild } from './props-with-child.js';
import type { PropsWithChildren } from './props-with-children.js';

interface PropsWithChildOrChildren extends PropsWithChild, PropsWithChildren {}

export type { PropsWithChildOrChildren };
