import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/tags-input/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/components/tags-input/"!</div>
}
