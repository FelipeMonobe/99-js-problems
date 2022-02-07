import { range } from './P22.js'
import { rndSelect } from './P23.js'

export const lottoSelect = (n, m) => rndSelect(range(1, m), n)
export const lottoSelectES = lottoSelect