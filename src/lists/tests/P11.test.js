import { encodeModified } from '../P11.js'
import { strict as assert } from 'assert'

describe('P11', () => {
  it('encodeModified([]) should return []', () => {
    const actualValue = encodeModified([])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('encodeModified([\'a\']) should return [\'a\']', () => {
    const actualValue = encodeModified(['a'])
    const expectedValue = ['a']
    assert.deepEqual(actualValue, expectedValue)
  })

  it('encodeModified([\'a\', \'a\', \'a\', \'a\', \'b\', \'c\', \'c\', \'a\', \'a\', \'d\', \'e\', \'e\', \'e\', \'e\']) should return [[4, \'a\'], \'b\', [2, \'c\'], [2, \'a\'], \'d\', [4, \'e\']]', () => {
    const actualValue = encodeModified(['a', 'a', 'a', 'a', 'b', 'c', 'c', 'a', 'a', 'd', 'e', 'e', 'e', 'e'])
    const expectedValue = [[4, 'a'], 'b', [2, 'c'], [2, 'a'], 'd', [4, 'e']]
    assert.deepEqual(actualValue, expectedValue)
  })
})