export const myFlatten = ([e, ...rest]) => {
  if (!e) return []
  if (Array.isArray(e)) return myFlatten([...e, ...rest])
  return [e, ...myFlatten(rest)]
}

export const myFlattenES = arr => arr.flat(Infinity)