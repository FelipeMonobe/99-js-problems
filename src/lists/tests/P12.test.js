import { decodeModified } from '../P12.js'
import { strict as assert } from 'assert'

describe('P12', () => {
  it('decodeModified([]) should return \'\'', () => {
    const actualValue = decodeModified([])
    const expectedValue = ''
    assert.deepEqual(actualValue, expectedValue)
  })

  it('decodeModified([\'a\']) should return \'a\'', () => {
    const actualValue = decodeModified(['a'])
    const expectedValue = 'a'
    assert.deepEqual(actualValue, expectedValue)
  })

  it('decodeModified([[3, \'a\']]) should return \'aaa\'', () => {
    const actualValue = decodeModified([[3, 'a']])
    const expectedValue = 'aaa'
    assert.deepEqual(actualValue, expectedValue)
  })

  it('decodeModified([[4, \'a\'], \'b\', [2, \'c\'], [2, \'a\'], \'d\', [4, \'e\']]) should return \'aaaabccaadeeee\'', () => {
    const actualValue = decodeModified([[4, 'a'], 'b', [2, 'c'], [2, 'a'], 'd', [4, 'e']])
    const expectedValue = 'aaaabccaadeeee'
    assert.deepEqual(actualValue, expectedValue)
  })
})