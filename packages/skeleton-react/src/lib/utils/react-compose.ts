export function reactCompose<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends React.FC<any>,
  U extends Record<string, unknown>
>(root: T, components: { [k in keyof U]: React.FC<U[k]> }) {
  return Object.assign(root, components);
}
