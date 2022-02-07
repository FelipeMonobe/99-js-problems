import { lottoSelect } from '../P24.js'
import { strict as assert } from 'assert'

describe('P24', () => {
  it('lottoSelect(0, 1) should return []', () => {
    const actualValue = lottoSelect(0, 1)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('lottoSelect(1, 1) should return [1]', () => {
    const actualValue = lottoSelect(1, 1)
    const expectedValue = [1]
    assert.deepEqual(actualValue, expectedValue)
  })

  it('lottoSelect(5, 10) should return an array with length 5', () => {
    const actualValue = lottoSelect(5, 10).length
    const expectedValue = 5
    assert.deepEqual(actualValue, expectedValue)
  })

  it('lottoSelect(6, 49) should return an array with 6 elements contained in a 1..49 range set', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
    const selection = lottoSelect(6, 49)
    const actualValue = selection.every(x => array.includes(x))
    const expectedValue = true
    assert.deepEqual(actualValue, expectedValue)
  })
})