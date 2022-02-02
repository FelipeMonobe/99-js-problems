export const rotate = (arr, n) => {
  const _rotate = ([e, ...rest], count, acc = []) => {
    if (!e) return [...acc]
    if (count > 0) return _rotate(rest, count - 1, [...acc, e])
    return [e, ..._rotate(rest, count - 1, acc)]
  }

  return n > 0 ? _rotate(arr, n) : _rotate(arr, arr.length + n)
}

export const rotateES = (arr, n) => arr.reduce((a, c, i) => {
  if (n > 0 && i < n || n < 0 && i < arr.length + n) return [a[0], [...a[1], c]]
  return [[...a[0], c], a[1]]
}, [[], []]).flat(Infinity)