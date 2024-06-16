import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { Switch } from './Switch.js';

describe('<Switch>', () => {
  it('should render the component', () => {
    const { getByTestId } = render(<Switch id="test" name="test" />);
    const component = getByTestId('switch');
    expect(component).toBeInTheDocument();
  });

  it('should render the component in the off state', () => {
    const { getByTestId } = render(<Switch id="test" name="test" checked={false} />);
    const component = getByTestId('switch');
    const ariaChecked = component.getAttribute('aria-checked');
    expect(ariaChecked).toBeFalsy;
  });

  it('should render the component in the on state', () => {
    const { getByTestId } = render(<Switch id="test" name="test" checked={true} />);
    const component = getByTestId('switch');
    const ariaChecked = component.getAttribute('aria-checked');
    expect(ariaChecked).toBeTruthy;
  });

  it('should render the component with an inactive icon', () => {
    const testIcon = 'iconOff';
    const { getByTestId } = render(<Switch id="test" name="test" checked={false} inactiveChild={testIcon} />);
    const component = getByTestId('switch');
    const elemSpan = component.querySelector('div span');
    expect(elemSpan).toHaveTextContent(testIcon);
  });

  it('should render the component with an active icon', () => {
    const testIcon = 'iconActive';
    const { getByTestId } = render(<Switch id="test" name="test" checked={false} inactiveChild={testIcon} />);
    const component = getByTestId('switch');
    const elemSpan = component.querySelector('div span');
    expect(elemSpan).toHaveTextContent(testIcon);
  });

  it('should render the component in the disabled state', () => {
    const { getByTestId } = render(<Switch id="test" name="test" disabled />);
    const component = getByTestId('switch');
    expect(component).toHaveClass('opacity-50');
    expect(component).toHaveClass('cursor-not-allowed');
  });

  it('should render the component in the compact mode', () => {
    const { getByTestId } = render(<Switch id="test" name="test" compact />);
    const component = getByTestId('switch');
    expect(component).toHaveClass('aspect-square');
  });
});
