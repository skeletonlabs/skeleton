import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/switch/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/components/switch/"!</div>
}
