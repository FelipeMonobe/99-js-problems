import { range } from '../P22.js'
import { strict as assert } from 'assert'

describe('P22', () => {
  it('range() should return []', () => {
    const actualValue = range()
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('range(, 3) should return []', () => {
    const actualValue = range(undefined, 3)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('range(0) should return []', () => {
    const actualValue = range(0)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('range(0, 3) should return [0, 1, 2, 3]', () => {
    const actualValue = range(0, 3)
    const expectedValue = [0, 1, 2, 3]
    assert.deepEqual(actualValue, expectedValue)
  })

  it('range(4, 9) should return [4, 5, 6, 7, 8, 9]', () => {
    const actualValue = range(4, 9)
    const expectedValue = [4, 5, 6, 7, 8, 9]
    assert.deepEqual(actualValue, expectedValue)
  })
})