import { render, fireEvent } from '@testing-library/svelte';
import Tabs from '../components/Tabs.svelte';

describe('Tabs Component', () => {
  const tabs = [
    { value: 'tab1', label: 'Tab 1', href: '/tab1', content: 'Tab 1 Content' },
    { value: 'tab2', label: 'Tab 2', href: '/tab2', content: 'Tab 2 Content' },
  ];

  it('renders button triggers and switches tabs', async () => {
    const { getByText, getByRole } = render(Tabs, {
      props: { tabs, triggerElement: 'button' },
    });

    const tab1 = getByText('Tab 1');
    const tab2 = getByText('Tab 2');
    const content1 = getByText('Tab 1 Content');

    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(content1).toBeVisible();

    await fireEvent.click(tab2);
    expect(tab2).toHaveAttribute('aria-selected', 'true');
    expect(getByText('Tab 2 Content')).toBeVisible();
  });
  
  it('renders anchor triggers and switches tabs', async () => {
    const { getByText, getByRole } = render(Tabs, {
      props: { tabs, triggerElement: 'a' },
    });

    const tab1 = getByText('Tab 1');
    const tab2 = getByText('Tab 2');
    const content1 = getByText('Tab 1 Content');

    expect(tab1).toHaveAttribute('aria-selected', 'true');
    expect(tab1).toHaveAttribute('href', '/tab1');
    expect(content1).toBeVisible();

    await fireEvent.click(tab2);
    expect(tab2).toHaveAttribute('aria-selected', 'true');
    expect(tab2).toHaveAttribute('href', '/tab2');
    expect(getByText('Tab 2 Content')).toBeVisible();
  });
});