
// eslint-disable-next-line import/prefer-default-export
export const titleSelector = state => {
  const { IntroState: { title } } = state
  return title
}
