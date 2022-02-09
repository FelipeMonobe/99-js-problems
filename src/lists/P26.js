export const combination = (n, [e, ...rest]) => {
  if (!n) return [[]]
  if (!e) return []
  return [...combination(n - 1, rest).map(x => [e, ...x]), ...combination(n, rest)]
}

export const combinationES = combination