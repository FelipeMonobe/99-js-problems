export const repli = (arr, n = 0) => {
  const _repli = ([e, ...rest], count = 0) => {
    if (!e) return []
    if (!count) return [..._repli(rest, n)]
    return [e, ..._repli([e, ...rest], count - 1)]
  }

  return _repli(arr, n)
}

export const repliES = arr => arr.reduce((a, c) => [...a, ...Array(n).fill(c)], [])