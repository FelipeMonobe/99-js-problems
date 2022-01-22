import { myLast } from '../P01.js'
import { strict as assert } from 'assert'

describe('P01', () => {
  it('myLast([]) should return undefined', () => {
    const actualValue = myLast([])
    const expectedValue = undefined
    assert.strictEqual(actualValue, expectedValue)
  })

  it('myLast([1]) should return 1', () => {
    const actualValue = myLast([1])
    const expectedValue = 1
    assert.strictEqual(actualValue, expectedValue)
  })

  it('myLast([1, 2, 3]) should return 3', () => {
    const actualValue = myLast([1, 2, 3])
    const expectedValue = 3
    assert.strictEqual(actualValue, expectedValue)
  })
})