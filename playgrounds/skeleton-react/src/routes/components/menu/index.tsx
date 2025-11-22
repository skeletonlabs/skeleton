import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/menu/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/components/menu/"!</div>
}
