export const compress = ([e, ...rest], prev) => {
  if (!e) return []
  if (e === prev) return compress(rest, prev)
  return [e, ...compress(rest, e)]
}

export const compressEZ = arr => arr.reduce((a, c, i) => arr[i - 1] === c ? a : [...a, c], [])