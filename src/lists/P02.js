export const myButLast = ([e, ...rest]) => {
  if (rest.length < 1) return
  if (rest.length === 1) return e
  return myButLast(rest)
}

export const myButLastEZ = arr => arr[arr.length - 2]