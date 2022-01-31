import { encodeDirect } from '../P13.js'
import { strict as assert } from 'assert'

describe('P13', () => {
  it('encodeDirect([]) should return []', () => {
    const actualValue = encodeDirect([])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('encodeDirect([\'a\']) should return [\'a\']', () => {
    const actualValue = encodeDirect(['a'])
    const expectedValue = ['a']
    assert.deepEqual(actualValue, expectedValue)
  })

  it('encodeDirect([\'a\', \'a\', \'a\', \'a\', \'b\', \'c\', \'c\', \'a\', \'a\', \'d\', \'e\', \'e\', \'e\', \'e\']) should return [[4, \'a\'], \'b\', [2, \'c\'], [2, \'a\'], \'d\', [4, \'e\']]', () => {
    const actualValue = encodeDirect(['a', 'a', 'a', 'a', 'b', 'c', 'c', 'a', 'a', 'd', 'e', 'e', 'e', 'e'])
    const expectedValue = [[4, 'a'], 'b', [2, 'c'], [2, 'a'], 'd', [4, 'e']]
    assert.deepEqual(actualValue, expectedValue)
  })
})