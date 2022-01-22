export const myReverse = ([e, ...rest]) => !e ? [] : [...myReverse(rest), e]
export const myReverseEZ = arr => [...arr].reverse()