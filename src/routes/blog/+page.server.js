export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts`)
	const data = await response.json()
	return {...data}
}