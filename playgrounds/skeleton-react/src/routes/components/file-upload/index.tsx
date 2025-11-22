import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/file-upload/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/components/file-upload/"!</div>
}
