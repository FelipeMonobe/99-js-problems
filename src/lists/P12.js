export const decodeModified = (arr) => {
  const _decodeModified = ([e, ...rest]) => {
    if (!e) return ''
    if (!e[1]) return e + _decodeModified(rest)
    if (!e[0]) return _decodeModified(rest)
    return e[1] + _decodeModified([[e[0] - 1, e[1]], ...rest])
  }

  return _decodeModified(arr)
}

export const decodeModifiedES = (arr) => arr.reduce((a, c) => `${a}${Array.isArray(c) ? c[1].repeat(c[0]) : c}`, '')