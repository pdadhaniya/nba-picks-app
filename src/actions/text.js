export const TEXT_CHANGED = 'TEXT_CHANGED'
export const textChanged = (newText) => {
  return {
    type: TEXT_CHANGED,
    text: newText
  }
}
