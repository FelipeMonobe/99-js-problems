export const insertAt = (el, [e, ...rest], i) => {
  if (!e) return []
  if (i === 1) return [el, e, ...insertAt(null, rest, 0)]
  return [e, ...insertAt(el, rest, i - 1)]
}

export const insertAtES = (el, arr, i) => !i || i < 0 || i > arr.length
  ? arr
  : [...arr.slice(0, i - 1), el, ...arr.slice(i - 1)]

console.log(insertAtES('a', [], ))