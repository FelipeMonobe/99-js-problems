export const myLast = ([e, ...rest]) => !rest.length ? e : myLast(rest)
export const myLastES = arr => arr[arr.length - 1]