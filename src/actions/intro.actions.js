export const CHANGE_TITLE = 'CHANGE_TITLE'

// eslint-disable-next-line import/prefer-default-export
export const ChangeTitle = newtitle => {
  return {
    type: CHANGE_TITLE,
    newtitle
  }
}
