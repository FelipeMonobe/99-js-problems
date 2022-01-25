export const myReverse = ([e, ...rest]) => !e ? [] : [...myReverse(rest), e]
export const myReverseES = arr => [...arr].reverse()