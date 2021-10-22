export const maxLength = (mxLength) => (value) => {
  if (value && value.length > mxLength) return 'Value more than 20 symbols'
  return undefined
}

export const required = value => {
  if (value) return undefined
  return 'Value is empty'
}

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined