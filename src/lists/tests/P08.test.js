import { compress } from '../P08.js'
import { strict as assert } from 'assert'

describe('P08', () => {
  it('compress([]) should return []', () => {
    const actualValue = compress([])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('compress([1]) should return [1]', () => {
    const actualValue = compress([1])
    const expectedValue = [1]
    assert.deepEqual(actualValue, expectedValue)
  })

  it('compress([1, 1, 2, 1, 3, 3, 2, 1, 1]) should return [1, 2, 1, 3, 2, 1]', () => {
    const actualValue = compress([1, 1, 2, 1, 3, 3, 2, 1, 1])
    const expectedValue = [1, 2, 1, 3, 2, 1]
    assert.deepEqual(actualValue, expectedValue)
  })
})