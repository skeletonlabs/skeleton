import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vitest, afterEach } from 'vitest';

import Avatar from '$lib/components/Avatar/Avatar.svelte';
import { filter } from '$lib/actions/Filters/filter';

const imgTextSrc = 'https://i.pravatar.cc/512?img=48';

const cBase = 'flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate';
const cImage = 'w-full h-full object-cover';

const props = {
	background: 'bg-surface-500',
	width: 'w-12',
	border: '',
	rounded: 'rounded-full',
	shadow: 'shadow-xl',
	cursor: 'cursor-pointer',
	class: 'my-custom-class'
};

const defaultProps = {
	background: 'bg-surface-400-500-token',
	width: 'w-12',
	border: '',
	rounded: 'rounded-full',
	shadow: '',
	cursor: ''
};

const imageProps = {
	...props,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	action: filter,
	actionParams: '#Apollo',
	src: imgTextSrc,
	alt: 'Avatar image',
	style: 'width: 40px; height: 40px; border: 2px solid #b6bcd1;'
};

const initialsProps = { ...props, fill: 'fill-slate-50', initials: 'LA' };

const getWrapper = () => screen.getByTestId('avatar');

const getInitialsSvg = (text: string) => ({
	initialsSvg: screen.getByTestId('avatar-initials'),
	svgText: screen.getByText(text)
});

//TODO: Consider moving into global utility functions, and add test cases to it
const textToInitials = (text: string) => String(text).substring(0, 2).toUpperCase();
/**
 * @description Regex pattern to match a string in a text no matter the location of it
 * @param stringToMatch
 * @returns RegExp
 */
const pattern = (stringToMatch: string) => new RegExp('\\b' + stringToMatch + '\\b');

describe('Avatar.svelte', () => {
	afterEach(() => {
		vitest.clearAllMocks();
	});

	/**  ------------------------ Testing Overall Component Starts ------------------------ */
	it('Renders with minimal props', async () => {
		//Arrange
		render(Avatar);

		//Act
		const [wrapper, { initialsSvg, svgText }] = [getWrapper(), getInitialsSvg('AB')];

		//Assert
		expect(wrapper.className).toMatch(cBase);
		expect(wrapper.className).toMatch(pattern('avatar'));
		expect(svgText.textContent).toStrictEqual('AB');
		expect(initialsSvg.classList.value).toMatch(pattern('avatar-initials w-full h-full'));
		Object.values(defaultProps).forEach((className) => expect(wrapper.className).toMatch(pattern(className)));
	});

	it('Renders component with all props', async () => {
		//Arrange
		render(Avatar, { ...initialsProps, ...imageProps });

		//Act
		const wrapper = getWrapper();
		const image = screen.getByAltText(imageProps.alt);

		//Assert
		expect(wrapper.className).toMatch(pattern(cBase));
		expect(wrapper.className).toMatch(pattern('avatar'));
		expect(image).toHaveProperty('src', imageProps.src);
		expect(image).toHaveProperty('alt', imageProps.alt);
		Object.values(props).forEach((className) => expect(wrapper.className).toMatch(pattern(className)));
		//TODO: Consider adding jest-dom to enable many more functionalities like testing styles as such:
		//expect(image).toHaveStyle(imageProps.style)
	});

	it('Renders img when both img and initials are provided', async () => {
		//Arrange
		render(Avatar, { ...initialsProps, ...imageProps });

		//Act
		const image = screen.queryByAltText(imageProps.alt);
		const initialsSvg = screen.queryByTestId('avatar-initials');

		//Assert
		expect(image).toBeTruthy();
		expect(initialsSvg).toBeFalsy();
	});

	it('Renders wrapper with custom class', async () => {
		//Arrange
		const myClass = 'try-this-now';
		render(Avatar, { ...props, class: myClass });

		//Act
		const wrapper = getWrapper();

		//Assert
		expect(wrapper.className).toMatch(pattern(myClass));
	});

	//TODO: Consider adding userEvent from testing-library that makes testing events much more practical (Declarative)
	it('Fires events properly', async () => {
		//Arrange
		const [onClick, onKeyDown, onKeyUp, onKeyPress] = [vitest.fn(), vitest.fn(), vitest.fn(), vitest.fn()];
		const { component } = render(Avatar, { ...imageProps });
		component.$on('click', onClick);
		component.$on('keydown', onKeyDown);
		component.$on('keyup', onKeyUp);
		component.$on('keypress', onKeyPress);

		//Act
		const wrapper = getWrapper();

		//Act
		fireEvent.click(wrapper);
		//Assert
		expect(onClick).toHaveBeenCalledOnce();

		//Act
		fireEvent.keyDown(wrapper);
		//Assert
		expect(onKeyDown).toHaveBeenCalledOnce();

		//Act
		fireEvent.keyUp(wrapper);
		//Assert
		expect(onKeyUp).toHaveBeenCalledOnce();

		//Act
		fireEvent.keyPress(wrapper);
		//Assert
		expect(onKeyPress).toHaveBeenCalledOnce();
	});
	/**  ------------------------ Testing Overall Component Ends ------------------------ */

	/**  ------------------------ Testing Initials Starts ------------------------ */

	it('Renders initials with all props', async () => {
		//Arrange
		render(Avatar, initialsProps);

		//Act
		const { initialsSvg, svgText } = getInitialsSvg(initialsProps.initials);

		//Assert
		expect(svgText.textContent).toStrictEqual(initialsProps.initials);

		expect(svgText.classList.value).toMatch(pattern('avatar-text'));
		expect(svgText.classList.value).toMatch(pattern(initialsProps.fill));
		expect(initialsSvg.classList.value).toMatch(pattern('avatar-initials w-full h-full'));
	});

	it('Renders initials', async () => {
		//Arrange
		const initials = 'SD';
		render(Avatar, { initials });

		//Act
		const { svgText } = getInitialsSvg(initials);

		//Assert
		expect(svgText.textContent).toStrictEqual(initials);
	});

	it('Renders initials capitalized', async () => {
		//Arrange
		const initials = 'sd';
		render(Avatar, { initials });

		//Act
		const { svgText } = getInitialsSvg(initials.toUpperCase());

		//Assert
		expect(svgText.textContent).toStrictEqual(initials.toUpperCase());
	});

	it('Renders any string into initials', async () => {
		//Arrange
		const text = 'Hello';
		const initials = textToInitials(text);
		render(Avatar, { initials: text });

		//Act
		const { svgText } = getInitialsSvg(initials);

		//Assert
		expect(svgText.textContent).toStrictEqual(initials);
	});

	/**  ------------------------  Testing Initials Ends ------------------------ */

	/**  ------------------------  Testing  {Image} Starts ------------------------ */

	//It renders custom action and ActionParam

	it('Renders image', async () => {
		//Arrange
		render(Avatar, { ...imageProps });

		//Act
		const img = screen.getByAltText(imageProps.alt);

		//Assert
		expect(img).toHaveProperty('src', imageProps.src);
		expect(img).toHaveProperty('alt', imageProps.alt);
		expect(img.className).toMatch(pattern('avatar-image'));
		expect(img.className).toMatch(pattern(cImage));
	});

	it('Renders with both action and actionParam from Skeleton', async () => {
		//Arrange
		const mockedFilterFn = vitest.fn().mockImplementation(filter);
		render(Avatar, { ...imageProps, action: mockedFilterFn });

		//Act
		const img = screen.getByAltText(imageProps.alt);

		//Assert
		expect(mockedFilterFn).toHaveBeenCalled();
		expect(mockedFilterFn).toHaveBeenCalledWith(img, imageProps.actionParams);

		//TODO: Missing styles test(s), pending jest-dom
	});

	it('Renders custom action and actionParam', async () => {
		//Arrange
		const mockedFilterFn = vitest.fn();
		const customParams = { action: mockedFilterFn, actionParams: 'HIIII' };
		render(Avatar, { ...imageProps, ...customParams });

		//Act
		const img = screen.getByAltText(imageProps.alt);

		//Assert
		expect(mockedFilterFn).toHaveBeenCalled();
		expect(mockedFilterFn).toHaveBeenCalledWith(img, customParams.actionParams);
		//TODO: Missing styles test(s), pending jest-dom
	});
	//TODO: Missing test(s)
	//It renders image with custom styles, pending jest-dom

	/**  ------------------------ Testing Image Ends ------------------------ */
});
