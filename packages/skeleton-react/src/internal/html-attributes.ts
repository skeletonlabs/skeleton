import type { ComponentProps, JSX } from 'react';

export type HTMLAttributes<Tag extends keyof JSX.IntrinsicElements> = ComponentProps<Tag>;
