export const myLength = ([e, ...rest]) => !e ? 0 : myLength(rest) + 1
export const myLengthEZ = arr => arr.length