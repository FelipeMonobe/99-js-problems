export const pack = ([e, ...rest], prev = []) => {
  if (!e) return []
  if (e !== rest[0]) return [[...prev, e], ...pack(rest)]
  return pack(rest, [...prev, e])
}

export const packES = arr => arr.reduce((a, c) => {
  if (!a.length) return [[c]]
  if (c === a[a.length - 1][0]) return [...a.slice(0, a.length - 1), [...a[a.length - 1], c]]
  return [...a, [c]]
}, [])
