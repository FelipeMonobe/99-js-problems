import { encode } from '../P10.js'
import { strict as assert } from 'assert'

describe('P10', () => {
  it('encode([]) should return []', () => {
    const actualValue = encode([])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('encode([\'a\']) should return [[1, \'a\']]', () => {
    const actualValue = encode(['a'])
    const expectedValue = [[1, 'a']]
    assert.deepEqual(actualValue, expectedValue)
  })

  it('encode([\'a\', \'a\', \'a\', \'a\', \'b\', \'c\', \'c\', \'a\', \'a\', \'d\', \'e\', \'e\', \'e\', \'e\']) should return [[4, \'a\'], [1, \'b\'], [2, \'c\'], [2, \'a\'], [1, \'d\'], [4, \'e\']]', () => {
    const actualValue = encode(['a', 'a', 'a', 'a', 'b', 'c', 'c', 'a', 'a', 'd', 'e', 'e', 'e', 'e'])
    const expectedValue = [[4, 'a'], [1, 'b'], [2, 'c'], [2, 'a'], [1, 'd'], [4, 'e']]
    assert.deepEqual(actualValue, expectedValue)
  })
})
