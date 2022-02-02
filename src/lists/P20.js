export const removeAt = (arr, n) => {
  const _removeAt = ([e, ...rest], count) => {
    if (!e) return []
    if (count === 1) return _removeAt(rest, count - 1)
    return [e, ..._removeAt(rest, count - 1)]
  }

  return _removeAt(arr, n)
}

export const removeAtES = (arr, n) => arr.reduce((a, c, i) => i + 1 === n ? a : [...a, c], [])