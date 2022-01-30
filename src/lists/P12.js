export const decodeModified = ([e, ...rest]) => {
  if (!e) return ''
  if (!e[1]) return e + decodeModified(rest)
  return e[1].repeat(e[0]) + decodeModified(rest)
}

export const decodeModifiedES = (arr) => arr.reduce((a, c) => `${a}${Array.isArray(c) ? c[1].repeat(c[0]) : c}`, '')
