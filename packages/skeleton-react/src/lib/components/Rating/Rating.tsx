import { RatingProps } from "./types";

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
    // Icon Empty ---
    emptyBase = 'clip-left absolute left-0 top-0 flex items-center justify-center',
    emptyInteractive = 'size-full',
    emptyStatic = 'w-fit',
    emptyClasses = '',
    // Icon Full ---
    fullBase = 'clip-right absolute left-0 top-0 flex items-center justify-center',
    fullInteractive = 'size-full',
    fullStatic = 'w-fit',
    fullClasses = '',
    // Events
    onmousedown = () => {},
    onkeydown = () => {},
	// Children
	children,
}) => {
    return(
        <figure className={`${base} ${width} ${text} ${fill} ${justify} ${spaceX} ${classes}`} data-testid="rating">
            
        </figure>
    );
};