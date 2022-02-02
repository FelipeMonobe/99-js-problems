import { removeAt } from '../P20.js'
import { strict as assert } from 'assert'

describe('P20', () => {
  it('removeAt([], 0) should return []', () => {
    const actualValue = removeAt([], 0)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('removeAt([], 1) should return []', () => {
    const actualValue = removeAt([], 1)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('removeAt([\'a\'], 1) should return []', () => {
    const actualValue = removeAt(['a'], 1)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('removeAt([\'a\'], 2) should return [\'a\']', () => {
    const actualValue = removeAt(['a'], 2)
    const expectedValue = ['a']
    assert.deepEqual(actualValue, expectedValue)
  })

  it('removeAt([\'a\', \'b\', \'c\', \'d\'], 2) should return [\'a\', \'c\', \'d\']', () => {
    const actualValue = removeAt(['a', 'b', 'c', 'd'], 2)
    const expectedValue = ['a', 'c', 'd']
    assert.deepEqual(actualValue, expectedValue)
  })
})