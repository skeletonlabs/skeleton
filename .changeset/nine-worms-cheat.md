---
"@skeletonlabs/skeleton": minor
---

feat: Multiple revisions to the Tree View component:

- Enhanced and properly named non-recursive Tree View events.
- Separated the recursive Tree View under the new component RecursiveTreeView.
- RecursiveTreeView now utilizes the `relational` prop to enable relational checking.
- RecursiveTreeView is now using ID arrays with 2-way binding to control the Tree View state, including:
  - `expandedNodes`
  - `disabledNodes`
  - `checkedNodes`
  - `indeterminateNodes` (affects only multiple relational mode)
- TreeViewNode now requires a unique ID to support the new checking system.
