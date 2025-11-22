'use client';

import { createFileRoute } from '@tanstack/react-router'
import { Accordion } from '@skeletonlabs/skeleton-react';

export const Route = createFileRoute('/components/accordion/')({
  component: Page,
})

function Page() {
    return (
        <Accordion orientation="horizontal">
            <Accordion.Item value="item-1">
                <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
                <Accordion.ItemContent>Content 1</Accordion.ItemContent>
            </Accordion.Item>
            <Accordion.Item value="item-2">
                <Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
                <Accordion.ItemContent>Content 2</Accordion.ItemContent>
            </Accordion.Item>
            <Accordion.Item value="item-3">
                <Accordion.ItemTrigger>Item 3</Accordion.ItemTrigger>
                <Accordion.ItemContent>Content 3</Accordion.ItemContent>
            </Accordion.Item>
        </Accordion>
    );
}