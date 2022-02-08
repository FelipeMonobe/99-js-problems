import { removeAt } from './P20.js'

const _genRandomInt = (min, max) => {
  const minV = Math.ceil(min)
  const maxV = Math.floor(max)
  return Math.floor(Math.random() * (maxV - minV + 1)) + minV
}

export const rndSelect = (arr, n) => {
  if (!n || !arr.length) return []
  const rndNum = _genRandomInt(0, arr.length - 1)
  return [arr[rndNum], ...rndSelect(removeAt(arr, rndNum + 1), n - 1)]
}

export const rndSelectES = (arr, n) => Array(n)
  .fill(null)
  .reduce((a) => {
    const rndNum = _genRandomInt(0, a.prev.length - 1)
    return { r: [...a.r, a.prev[rndNum]], prev: removeAt(a.prev, rndNum + 1) }
  }, { r: [], prev: arr }).r

console.log(rndSelectES([1,2,3], 3))