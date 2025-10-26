import { defineSkeletonClasses } from '../internal/define-skeleton-classes.js' with { type: 'macro' };

export const classesAvatar = defineSkeletonClasses({
	root: 'isolate bg-surface-400-600 size-16 rounded-full overflow-hidden',
	image: 'w-full object-cover',
	fallback: 'size-full flex justify-center items-center',
});
