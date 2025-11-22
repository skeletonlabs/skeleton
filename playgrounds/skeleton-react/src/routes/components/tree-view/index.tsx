import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/tree-view/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/components/tree-view/"!</div>
}
