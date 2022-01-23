export const myFlatten = ([e, ...rest]) => {
  if (!e) return []
  if (Array.isArray(e)) return myFlatten([...e, ...rest])
  return [e, ...myFlatten(rest)]
}

export const myFlattenEZ = arr => arr.flat(Infinity)