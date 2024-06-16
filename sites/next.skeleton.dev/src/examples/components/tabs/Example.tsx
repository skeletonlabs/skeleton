import React, { useState } from 'react';
import { Tabs } from '@skeletonlabs/skeleton-react';

export const Page: React.FC<any> = () => {
  const [group, setGroup] = useState('books');
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Control name="books" group={group} onChange={setGroup}>
          <Tabs.Item>Books</Tabs.Item>
        </Tabs.Control>
        <Tabs.Control name="movies" group={group} onChange={setGroup}>
          <Tabs.Item>Movies</Tabs.Item>
        </Tabs.Control>
        <Tabs.Control name="television" group={group} onChange={setGroup}>
          <Tabs.Item>Television</Tabs.Item>
        </Tabs.Control>
      </Tabs.List>
      <Tabs.Panel group={group} value="books">
        Books tab content
      </Tabs.Panel>
      <Tabs.Panel group={group} value="movies">
        Movies tab content
      </Tabs.Panel>
      <Tabs.Panel group={group} value="television">
        Television tab content
      </Tabs.Panel>
    </Tabs>
  );
};
