import { insertAt } from '../P21.js'
import { strict as assert } from 'assert'

describe('P21', () => {
  it('insertAt(\'alfa\', [], 0) should return []', () => {
    const actualValue = insertAt('alfa', [], 0)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('insertAt(\'alfa\', [], 1) should return []', () => {
    const actualValue = insertAt('alfa', [], 1)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('insertAt(\'alfa\', [\'a\', \'b\', \'c\', \'d\'], 2)) should return [\'a\', \'alfa\', \'b\', \'c\', \'d\']', () => {
    const actualValue = insertAt('alfa', ['a', 'b', 'c', 'd'], 2)
    const expectedValue = ['a', 'alfa', 'b', 'c', 'd']
    assert.deepEqual(actualValue, expectedValue)
  })
})