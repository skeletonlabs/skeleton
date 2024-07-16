import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { Nav, NavContext } from './Navigation.js';

// *************************
// Integration Tests
// *************************

describe('Integration: Nav Rail', () => {
	it('should render the component', async () => {
		const header = 'testHeader';
		const footer = 'testFooter';
		const { getByTestId } = render(
			<Nav.Rail header={header} footer={footer}>
				<Nav.Tile id="0" label="Tile 1" href="#">
					(icon)
				</Nav.Tile>
				<Nav.Tile id="1" label="Tile 2" href="#">
					(icon)
				</Nav.Tile>
				<Nav.Tile id="2" label="Tile 3" href="#">
					(icon)
				</Nav.Tile>
			</Nav.Rail>
		);

		const elemRoot = getByTestId('nav-rail');
		const elemHeader = elemRoot.querySelector('header');
		const elemTiles = elemRoot.querySelector('nav');
		const elemFooter = elemRoot.querySelector('footer');

		expect(elemRoot).toBeInTheDocument();
		expect(elemHeader).toHaveTextContent(header);
		expect(elemTiles?.childElementCount).toBe(3);
		expect(elemFooter).toHaveTextContent(footer);
	});
});

describe('Integration: Nav Bar', () => {
	it('should render the component', async () => {
		const { getByTestId } = render(
			<Nav.Bar>
				<Nav.Tile id="0" label="Tile 1" href="#">
					(icon)
				</Nav.Tile>
				<Nav.Tile id="1" label="Tile 2" href="#">
					(icon)
				</Nav.Tile>
				<Nav.Tile id="2" label="Tile 3" href="#">
					(icon)
				</Nav.Tile>
			</Nav.Bar>
		);

		const elemRoot = getByTestId('nav-bar');
		const elemTiles = elemRoot.querySelector('nav');

		expect(elemRoot).toBeInTheDocument();
		expect(elemTiles?.childElementCount).toBe(3);
	});
});

// *************************
// Unit Tests
// *************************

// Nav.Rail ---

describe('<Nav.Rail>', () => {
	it('should render the component', () => {
		const { getByTestId } = render(<Nav.Rail />);
		expect(getByTestId('nav-rail')).toBeInTheDocument();
	});

	it('should render with no children', () => {
		const { getByTestId } = render(<Nav.Rail />);
		expect(getByTestId('nav-rail').childElementCount).toBe(0);
	});
});

// Nav.Bar ---

describe('<Nav.Bar>', () => {
	it('should render the component', () => {
		const { getByTestId } = render(<Nav.Bar />);
		expect(getByTestId('nav-bar')).toBeInTheDocument();
	});

	it('should render with no children', () => {
		const { getByTestId } = render(<Nav.Bar />);
		expect(getByTestId('nav-bar').childElementCount).toBe(0);
	});
});

// Nav.Tile ---

describe('<Nav.Tile>', () => {
	it('should render the component', () => {
		const { getByTestId } = render(<Nav.Tile />);
		expect(getByTestId('nav-tile')).toBeInTheDocument();
	});

	it('should render as a button by default', () => {
		const { getByTestId } = render(<Nav.Tile />);
		expect(getByTestId('nav-tile').tagName).toBe('BUTTON');
	});

	it('should render as anchor when href prop provided', () => {
		const { getByTestId } = render(<Nav.Tile href="#" />);
		expect(getByTestId('nav-tile').tagName).toBe('A');
	});

	it('should render active state when selected prop provided', () => {
		const classActive = 'preset-filled-secondary-500';
		const { getByTestId } = render(<Nav.Tile active={classActive} selected />);
		expect(getByTestId('nav-tile')).toHaveClass(classActive);
	});

	it('should render in Nav.Rail expanded state', () => {
		const { getByTestId } = render(
			<NavContext.Provider value={{ parent: 'rail', value: '', expanded: true, onSelectionHandler: () => {} }}>
				<Nav.Tile />
			</NavContext.Provider>
		);
		expect(getByTestId('nav-tile').getAttribute('data-parent')).toBe('rail');
		expect(getByTestId('nav-tile').getAttribute('data-expanded')).toBe('true');
	});

	it('should render in Nav.Bar state', () => {
		const { getByTestId } = render(
			<NavContext.Provider value={{ parent: 'bar', value: '', expanded: true, onSelectionHandler: () => {} }}>
				<Nav.Tile />
			</NavContext.Provider>
		);
		expect(getByTestId('nav-tile').getAttribute('data-parent')).toBe('bar');
	});
});
