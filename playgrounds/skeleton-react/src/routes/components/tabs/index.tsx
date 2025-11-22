import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/tabs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/components/tabs/"!</div>
}
