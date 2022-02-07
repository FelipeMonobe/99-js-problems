import { removeAt } from './P20.js'

const _genRandomInt = (min, max) => {
  const minV = Math.ceil(min)
  const maxV = Math.floor(max)
  return Math.floor(Math.random() * (maxV - minV + 1)) + minV
}

export const rndSelect = (arr, n) => {
  const _rndSelect = (arr, count) => {
    if (count < 1 || !arr.length) return arr
    return _rndSelect(removeAt(arr, _genRandomInt(1, arr.length)), count - 1)
  }

  return _rndSelect(arr, arr.length - n)
}

export const rndSelectES = (arr, n) => arr.length
  ? Array(arr.length - n)
    .fill(null)
    .reduce(a => removeAt(a, _genRandomInt(1, a.length)), arr)
  : []