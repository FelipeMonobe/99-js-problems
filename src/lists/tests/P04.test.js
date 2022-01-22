import { myLength } from '../P04.js'
import { strict as assert } from 'assert'

describe('P04', () => {
  it('myLength([]) should return 0', () => {
    const actualValue = myLength([])
    const expectedValue = 0
    assert.strictEqual(actualValue, expectedValue)
  })

  it('myLength([1]) should return 1', () => {
    const actualValue = myLength([1])
    const expectedValue = 1
    assert.strictEqual(actualValue, expectedValue)
  })

  it('myLength([1, 2, 3, 4, 5]) should return 5', () => {
    const actualValue = myLength([1, 2, 3, 4, 5])
    const expectedValue = 5
    assert.strictEqual(actualValue, expectedValue)
  })
})