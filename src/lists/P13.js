export const encodeDirect = ([e, ...rest], acc = []) => {
  if (!e) return []
  if (e !== rest[0]) return [acc.length ? [acc.length + 1, e] : e, ...encodeDirect(rest, [])]
  return encodeDirect(rest, [...acc, e])
}

export const encodeDirectES = arr => arr.reduce((a, c) => {
  if (!a.prev.length || c === a.prev[0]) return { ...a, prev: [...a.prev, c] }
  return { res: [...a.res, a.prev.length > 1 ? [a.prev.length, a.prev[0]] : a.prev[0]], prev: [c] }
}, { res: [], prev: [] }).res