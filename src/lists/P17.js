export const split = (arr, n) => {
  const _split = ([e, ...rest], n, acc = []) => {
    if (!e) return []
    if (n === 1) return [[...acc, e], rest]
    return _split(rest, n - 1, [...acc, e])
  }

  return !n || n > arr.length ? arr : _split(arr, n)
}

export const splitES = (arr, n) => !n || n > arr.length ? arr : arr.reduce((a, c, i) => (i + 1) <= n ? [[...a[0], c], []] : [a[0], [...a[1], c]], [[], []])