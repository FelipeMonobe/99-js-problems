export const elementAt = ([e, ...rest], n) => {
  if (n === 1) return e
  return elementAt(rest, n - 1)
}

export const elementAtEZ = (arr, n) => arr[n - 1]