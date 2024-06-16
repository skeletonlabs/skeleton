import { useEffect, useState, type FC } from 'react';

import { ProgressRingProps } from './types.js';

export const ProgressRing: FC<ProgressRingProps> = ({
  value,
  max = 100,
  strokeWidth = 50, // px
  strokeLinecap = 'round',
  labelledby = '',
  // Base (figure)
  base = 'relative',
  size = 'size-32',
  classes = '',
  // Slot
  childrenBase = 'absolute top-0 left-0 z-[1] flex justify-center items-center',
  childrenClasses = '',
  // SVG
  svgBase = 'absolute top-0 left-0 w-full h-full rounded-full',
  svgClasses = '',
  // Track
  trackBase = 'fill-none',
  trackStroke = 'stroke-surface-200-800',
  trackClasses = '',
  // Meter
  meterBase = 'fill-none',
  meterStroke = 'stroke-primary-500',
  meterTransition = 'transition-[stroke-dashoffset]',
  meterDuration = 'duration-100',
  meterClasses = '',
  // Label
  label,
  labelBase = '',
  labelFill = 'fill-surface-950-50',
  labelFontSize = 96, // px
  labelFontWeight = 'bold',
  labelClasses = '',
  // Children
  children
}) => {
  // Local
  const baseSize = 512; // px
  const radius: number = baseSize / 2 - strokeWidth / 2;
  const [circumference, setCircumference] = useState<number>(radius);
  const [dashoffset, setDashoffset] = useState<number>(0);

  useEffect(() => {
    // Since calcDashOffset is only used in this effect, it's implementation should be inside the effect to avoid a rerender loop
    const calcDashOffset = () => {
      const v = value !== undefined ? value : 25;
      const percent = (100 * v) / max;
      setCircumference(radius * 2 * Math.PI);
      return circumference - (percent / 100) * circumference;
    };

    setDashoffset(calcDashOffset());
  }, [circumference, max, radius, setCircumference, value]);

  return (
    <figure
      className={`${base} ${size} ${classes}`}
      role="meter"
      aria-labelledby={labelledby}
      aria-valuenow={value || 0}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuetext={`${value} / ${max}`}
      data-testid="progress-ring"
    >
      {/* Slot */}
      {children ? <div className={`${childrenBase} ${size} ${childrenClasses}`}>{children}</div> : null}
      {/* SVG */}
      <svg viewBox={`0 0 ${baseSize} ${baseSize}`} className={`${svgBase} ${svgClasses} ${value === undefined ? 'animate-spin' : ''}`}>
        {/* Track */}
        <circle className={`${trackBase} ${trackStroke} ${trackClasses}`} strokeWidth={strokeWidth} r={radius} cx="50%" cy="50%" />
        {/* Meter */}
        <circle
          className={`${meterBase} ${meterStroke} ${meterTransition} ${meterDuration} ${meterClasses}`}
          r={radius}
          cx="50%"
          cy="50%"
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={dashoffset}
          transform={`rotate(-90 ${baseSize / 2} ${baseSize / 2})`}
        />
        {/* Text */}
        {value !== undefined && !children ? (
          <text
            className={`${labelBase} ${labelFill} ${labelClasses}`}
            x="50%"
            y="50%"
            fontSize={labelFontSize}
            fontWeight={labelFontWeight}
            textAnchor="middle"
            dominantBaseline="central"
          >
            {label ?? `${value}%`}
          </text>
        ) : null}
      </svg>
    </figure>
  );
};
