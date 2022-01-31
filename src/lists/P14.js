export const dupli = ([e, ...rest]) => {
  if (!e) return []
  return [e, e, ...dupli(rest)]
}

export const dupliES = arr => arr.reduce((a, c) => [...a, c, c], [])