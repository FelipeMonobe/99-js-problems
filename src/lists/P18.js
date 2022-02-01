export const slice = ([e, ...rest], iStart = 1, iEnd = 1) => {
  if (!e) return []
  if (iStart <= 1 && iEnd >= 1) return [e, ...slice(rest, iStart - 1, iEnd - 1)]
  return slice(rest, iStart - 1, iEnd - 1)
}

export const sliceES = (arr, iStart, iEnd) => arr.reduce((a, c, i) => (i + 1) >= iStart && (i + 1) <= iEnd ? [...a, c] : a, [])