import { pack } from './P09.js'

export const encode = arr => {
  const _encode = ([e, ...rest]) => {
    if (!e) return []
    return [[e.length, e[0]], ..._encode(rest)]
  }

  return _encode(pack(arr))
}

export const encodeFromScratch = ([e, ...rest], acc = []) => {
  if (!e) return []
  if (e !== rest[0]) return [[acc.length + 1, e], ...encodeFromScratch(rest, [])]
  return encodeFromScratch(rest, [...acc, e])
}

export const encodeES = arr => pack(arr).map(x => [x.length, x[0]])