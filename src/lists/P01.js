export const myLast = ([e, ...rest]) => !rest.length ? e : myLast(rest)
export const myLastEZ = arr => arr[arr.length - 1]