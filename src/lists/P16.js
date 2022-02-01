export const drop = (arr, n = 0) => {
  const _drop = ([e, ...rest], count = n) => {
    if (!e) return []
    if (count === 1) return _drop(rest, n)
    return [e, ..._drop(rest, count - 1)]
  }

  return _drop(arr, n)
}

export const dropES = (arr, n = 0) => !n ? arr : arr.reduce((a, c, i) => (i + 1) % n === 0 ? a : [...a, c], [])