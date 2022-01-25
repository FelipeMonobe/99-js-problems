import { pack } from '../P09.js'
import { strict as assert } from 'assert'

describe('P09', () => {
  it('pack([]) should return []', () => {
    const actualValue = pack([])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('pack([1]) should return [[1]]', () => {
    const actualValue = pack([1])
    const expectedValue = [[1]]
    assert.deepEqual(actualValue, expectedValue)
  })

  it('pack([1, 1, 1, 2, 2, 3, 2, 1, 1, 3, 3]) should return [[1, 1, 1], [2, 2], [3], [2], [1, 1], [3, 3]]', () => {
    const actualValue = pack([1, 1, 1, 2, 2, 3, 2, 1, 1, 3, 3])
    const expectedValue = [[1, 1, 1], [2, 2], [3], [2], [1, 1], [3, 3]]
    assert.deepEqual(actualValue, expectedValue)
  })
})
