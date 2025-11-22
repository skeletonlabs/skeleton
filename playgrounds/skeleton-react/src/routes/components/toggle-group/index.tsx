import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/toggle-group/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/components/toggle-group/"!</div>
}
