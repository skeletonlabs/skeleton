import type { PropsWithChildren } from 'react';
import type { PropsWithChild } from './props-with-child.js';

interface PropsWithChildOrChildren extends PropsWithChild, PropsWithChildren {}

export type { PropsWithChildOrChildren };
