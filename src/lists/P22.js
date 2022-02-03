export const range = (n, m) => {
  if (n === undefined || m === undefined) return []
  if (n === m) return [m]
  return [n, ...range(n + 1, m)]
}

export const rangeES = (n, m) => n === undefined || m === undefined
  ? []
  : Array(m - n + 1)
    .fill(null)
    .reduce((a, _, i) => [...a, n + i], [])