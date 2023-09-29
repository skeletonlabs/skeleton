---
"@skeletonlabs/skeleton": minor
---

feat: Multiple revisions and updates to the Tree View feature:
- Enhanced and properly named non-recursive tree-view events.
- Separated the recursive tree-view under the new component RecursiveTreeView.
- RecursiveTreeView now utilizes the `relational` prop to enable relational checking.
- RecursiveTreeView is now using ID arrays with 2-way binding to control the tree-view state, including:
    - `expandedNodes`
    - `disabledNodes`
    - `checkedNodes`
    - `indeterminateNodes` (has effect only in multiple relational mode)
- TreeViewNode now requires a unique ID to support the new checking system.