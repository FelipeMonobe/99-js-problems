import { encode } from './P10.js'

export const encodeModified = (arr) => {
  const _encodeModified = ([e, ...rest]) => {
    if (!e) return []
    return [e[0] === 1 ? e[1] : e, ..._encodeModified(rest)]
  }
  return _encodeModified(encode(arr))
}

export const encodeModifiedES = arr => encode(arr).map(x => x[0] === 1 ? x[1] : x)