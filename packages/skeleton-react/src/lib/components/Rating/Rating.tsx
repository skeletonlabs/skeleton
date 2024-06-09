import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { IconProps, RatingContextState, RatingProps } from "./types";

// Context

export const RatingContext = createContext<RatingContextState>({
    interactive: false,
    value: 0,
    order: 0,
    figureRef: undefined
});

// Components ---
const RatingRoot: React.FC<RatingProps> = ({
    value = 0,
    max = 5,
    interactive = false,
    fraction = 1,
    // Root
    base = 'flex',
    width = 'w-full',
    text = 'text-token',
    fill = 'fill-token',
    justify = 'justify-center',
    spaceX = 'space-x-2',
    classes = '',
    // Item ---
    buttonBase = 'w-full h-full',
    buttonPosition = 'relative',
    buttonAspect = 'aspect-square',
    buttonClasses = '',
    // Events
    onMouseDown = () => {},
    onKeyDown = () => {},
    onValueChange = () => {},
	// Children
	children,
}) => {
    const figureRef = useRef<HTMLElement>(null);

    const [focusedButtonIndex, setFocusedButtonIndex] = useState(0);
    useEffect(() => {
        const index = Math.max(0, Math.ceil(value - 1));
        setFocusedButtonIndex(index);
    }, [value]);

    const onRatingMouseDown = useCallback((event: React.MouseEvent<HTMLButtonElement>, order: number) => {
        if(!figureRef.current) return;

        const ratingRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        const fractionWidth = ratingRect.width / fraction;
        const left = event.clientX - ratingRect.left;
        let selectedFraction = Math.floor(left / fractionWidth) + 1;

        if(getComputedStyle(figureRef.current).direction === 'rtl') {
            selectedFraction = fraction - selectedFraction + 1;
        }

        value = order + selectedFraction / fraction;
        onValueChange(value);
        onMouseDown(event, value);
    }, [fraction]);

    const onRatingKeyDown = useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
        if(!figureRef.current) return;

        const ltr = getComputedStyle(figureRef.current).direction === 'ltr';
        switch(event.key) {
            case 'ArrowLeft':
                ltr ? decreaseValue() : increaseValue();
                break;
            case 'ArrowRight':
                ltr ? increaseValue() : decreaseValue();
                break;
        }
        onKeyDown(event);
    }, []);

    function refreshFocus() {
        if(!figureRef.current) return;

        const buttons = figureRef.current.querySelectorAll('button');
        buttons[Math.max(0, Math.ceil(value - 1))].focus();
    }

    function increaseValue() {
        value = Math.min(max, value + 1 / fraction);
        onValueChange(value);
        refreshFocus();
    }

    function decreaseValue() {
        value = Math.max(0, value - 1 / fraction);
        onValueChange(value);
        refreshFocus();
    }

    return(
        <>
            <style>{`
                .clip-left {
                    clip-path: inset(0 0 0 var(--clip_value));
                }
                .clip-right {
                    clip-path: inset(0 var(--clip_value) 0 0);
                }
            `}</style>
            <figure ref={figureRef} className={`${base} ${width} ${text} ${fill} ${justify} ${spaceX} ${classes}`} data-testid="rating">
                {[...Array(max)].map((_, order) => (
                    <button
                    className={`${buttonBase} ${buttonPosition} ${buttonAspect} ${buttonClasses} ${interactive ? undefined : 'pointer-events-none'}`}
                    tabIndex={interactive && order === focusedButtonIndex ? 0 : -1}
                    onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => interactive ? onRatingMouseDown(event, order) : undefined}
                    onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => interactive ? onRatingKeyDown(event) : undefined}
                    type='button'
                    key={order}>
                            <RatingContext.Provider value={{interactive, value, order, figureRef}}>
                                {children}
                            </RatingContext.Provider>
                    </button>
                ))}
            </figure>
        </>
    );
};

const IconEmpty: React.FC<IconProps> = ({
    base = 'clip-left absolute left-0 top-0 flex items-center justify-center',
    interactive = 'size-full',
    nonInteractive = 'w-fit',
    classes = '',
	// Children
	children,
}) => {
    const ctx = useContext<RatingContextState>(RatingContext);
    const [rxInteractive, setRxInteractive] = useState('');
    const [rxBase, setRxBase] = useState(base);

    useEffect(() => {
        setRxInteractive(ctx.interactive ? interactive : nonInteractive);
    }, [ctx.interactive]);

    useEffect(() => {
        if(!ctx.figureRef?.current) return;
        
        if(getComputedStyle(ctx.figureRef.current).direction  === 'ltr') {
            setRxBase(rxBase.replace('clip-right', 'clip-left'));
        } else {
            setRxBase(rxBase.replace('clip-left', 'clip-right'));
        }
    }, [ctx.figureRef]);

    return(
        <span className={`${rxBase} ${rxInteractive} ${classes}`} style={{'--clip_value': `${(ctx.value - ctx.order) * 100}%`} as React.CSSProperties} data-testid="rating-iconempty">
            {children}
        </span>
    );
};

const IconFull: React.FC<IconProps> = ({
    base = 'clip-right absolute left-0 top-0 flex items-center justify-center',
    interactive = 'size-full',
    nonInteractive = 'w-fit',
    classes = '',
	// Children
	children,
}) => {
    const ctx = useContext<RatingContextState>(RatingContext);
    const [rxInteractive, setRxInteractive] = useState('');
    const [rxBase, setRxBase] = useState(base);

    useEffect(() => {
        setRxInteractive(ctx.interactive ? interactive : nonInteractive);
    }, [ctx.interactive]);

    useEffect(() => {
        if(!ctx.figureRef?.current) return;

        if(getComputedStyle(ctx.figureRef.current).direction === 'ltr') {
            setRxBase(rxBase.replace('clip-left', 'clip-right'));
        } else {
            setRxBase(rxBase.replace('clip-right', 'clip-left'));
        }
    }, [ctx.figureRef]);

    return(
        <span className={`${rxBase} ${rxInteractive} ${classes}`} style={{'--clip_value': `${100 - (ctx.value - ctx.order) * 100}%`} as React.CSSProperties} data-testid="rating-iconfull">
            {children}
        </span>
    );
};

export const Rating = Object.assign(RatingRoot, {
    IconEmpty: IconEmpty,
    IconFull: IconFull
})