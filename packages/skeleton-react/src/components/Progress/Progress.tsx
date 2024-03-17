import { useState, useMemo } from 'react';
import { ProgressProps } from './types';

export default function Progress({
		value,
		min = 0,
		max = 100,
		// Root
		base = 'overflow-x-hidden bg-surface-200-800',
		height = 'h-2',
		rounded = 'rounded',
		classes = '',
		// Indicator
		indicatorBase = 'bg-primary-500 h-full',
		indicatorRounded = 'rounded',
		indicatorTransition = 'transition-[width]',
		indicatorIndeterminateAnimation = 'indeterminate',
		indicatorClasses = ''
	}: ProgressProps) {

    const [indeterminate] = useState(value === undefined);
    const fillPercentage = useMemo(() => (indeterminate ? 50 : ((value! - min) / (max - min)) * 100), [value, min, max, indeterminate]);
    const width = `${fillPercentage}%`;

    return (
        <>
            <div className={`${base} ${height} ${rounded} ${classes}`}>
                <div className={`${indicatorBase} ${indicatorRounded} ${indicatorTransition} ${indeterminate ? indicatorIndeterminateAnimation : ''} ${indicatorClasses}`} style={{ width }} ></div>
            </div>

            <style>{`
                .indeterminate {
                    animation: indeterminate 2s linear infinite;
                }
                @keyframes indeterminate {
                    from {
                        transform: translateX(-100%);
                    }
                    to {
                        transform: translateX(200%);
                    }
                }
            `}</style>
        </>
    )
} 
