export const elementAt = ([e, ...rest], n = 0) => {
  if (n < 1) return
  if (n === 1) return e
  return elementAt(rest, n - 1)
}

export const elementAtEZ = (arr, n) => arr[n - 1]