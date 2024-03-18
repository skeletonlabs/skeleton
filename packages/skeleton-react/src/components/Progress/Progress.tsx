import { useMemo } from 'react';
import { ProgressProps } from './types';

export default function Progress({
		value,
		min = 0,
		max = 100,
		ariaLabelledby = '',
		// Root
		base = 'overflow-x-hidden',
		bg = 'bg-surface-200-800',
		height = 'h-2',
		rounded = 'rounded',
		classes = '',
		// Meter
		meterBase = 'h-full',
		meterBg = 'bg-primary-500',
		meterRounded = 'rounded',
		meterTransition = 'transition-[width]',
		meterIndeterminateAnim = 'indeterminate',
		meterClasses = ''
	}: ProgressProps) {

    const indeterminate = useMemo(() => value === undefined, [value]);
    const fillPercentage = useMemo(() => (indeterminate ? 50 : ((value! - min) / (max - min)) * 100), [value, min, max, indeterminate]);
    const width = useMemo(() =>`${fillPercentage}%`, [fillPercentage]);

	const rxIndeterminate = useMemo(() => indeterminate ? meterIndeterminateAnim : '', [indeterminate, meterIndeterminateAnim]);

    return (
        <>
        <div
            role="progressbar"
            aria-labelledby={ariaLabelledby}
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            className={`${base} ${bg} ${height} ${rounded} ${classes}`}
        >
            <div className={`${meterBase} ${meterBg} ${meterRounded} ${meterTransition} ${rxIndeterminate} ${meterClasses}`} style={{ width }}></div>
        </div>

            <style>{`
                .indeterminate {
                    animation: anim-progress-indeterminate 2s linear infinite;
                }
                @keyframes anim-progress-indeterminate {
                    from {
                        transform: translateX(-200%);
                    }
                    to {
                        transform: translateX(200%);
                    }
                }
            `}</style>
        </>
    )
} 