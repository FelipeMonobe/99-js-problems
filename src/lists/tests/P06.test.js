import { isPalindrome } from '../P06.js'
import { strict as assert } from 'assert'

describe('P06', () => {
  it('isPalindrome(\'\') should return undefined', () => {
    const actualValue = isPalindrome('')
    const expectedValue = undefined
    assert.deepEqual(actualValue, expectedValue)
  })

  it('isPalindrome(\'a\') should return true', () => {
    const actualValue = isPalindrome('a')
    const expectedValue = true
    assert.deepEqual(actualValue, expectedValue)
  })

  it('isPalindrome(\'aa\') should return true', () => {
    const actualValue = isPalindrome('aa')
    const expectedValue = true
    assert.deepEqual(actualValue, expectedValue)
  })

  it('isPalindrome(\'ab\') should return false', () => {
    const actualValue = isPalindrome('ab')
    const expectedValue = false
    assert.deepEqual(actualValue, expectedValue)
  })

  it('isPalindrome(\'aba\') should return true', () => {
    const actualValue = isPalindrome('aba')
    const expectedValue = true
    assert.deepEqual(actualValue, expectedValue)
  })

  it('isPalindrome(\'abb\') should return false', () => {
    const actualValue = isPalindrome('abb')
    const expectedValue = false
    assert.deepEqual(actualValue, expectedValue)
  })

  it('isPalindrome(\'detartrated\') should return true', () => {
    const actualValue = isPalindrome('detartrated')
    const expectedValue = true
    assert.deepEqual(actualValue, expectedValue)
  })
})