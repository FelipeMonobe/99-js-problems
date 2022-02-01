import { slice } from '../P18.js'
import { strict as assert } from 'assert'

describe('P18', () => {
  it('slice([], 0, 0) should return []', () => {
    const actualValue = slice([], 0, 0)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('slice([], 1, 2) should return []', () => {
    const actualValue = slice([], 1, 2)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('slice([\'a\', \'b\', \'c\', \'d\', \'e\', \'f\', \'g\', \'h\', \'i\', \'k\'], 3, 7) should return [\'c\', \'d\' \'e\', \'f\', \'g\']', () => {
    const actualValue = slice(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k'], 3, 7)
    const expectedValue = ['c', 'd', 'e', 'f', 'g']
    assert.deepEqual(actualValue, expectedValue)
  })
})