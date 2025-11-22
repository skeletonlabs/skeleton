import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/progress-circular/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/components/progress-circular/"!</div>
}
