import { myReverse } from '../P05.js'
import { strict as assert } from 'assert'

describe('P05', () => {
  it('myReverse([]) should return []', () => {
    const actualValue = myReverse([])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('myReverse([1]) should return [1]', () => {
    const actualValue = myReverse([1])
    const expectedValue = [1]
    assert.deepEqual(actualValue, expectedValue)
  })

  it('myReverse([1, 2, 3]) should return [3, 2, 1]', () => {
    const actualValue = myReverse([1, 2, 3])
    const expectedValue = [3, 2, 1]
    assert.deepEqual(actualValue, expectedValue)
  })
})