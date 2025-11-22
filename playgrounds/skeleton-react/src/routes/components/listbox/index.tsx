import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/components/listbox/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/components/listbox/"!</div>
}
