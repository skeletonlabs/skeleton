import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/rating-group/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/components/rating-group/"!</div>
}
