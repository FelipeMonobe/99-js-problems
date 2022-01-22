import { elementAt } from '../P03.js'
import { strict as assert } from 'assert'

describe('P03', () => {
  it('elementAt([1], 0) should return undefined', () => {
    const actualValue = elementAt([1], 0)
    const expectedValue = undefined
    assert.strictEqual(actualValue, expectedValue)
  })

  it('elementAt([1], 1) should return 1', () => {
    const actualValue = elementAt([1], 1)
    const expectedValue = 1
    assert.strictEqual(actualValue, expectedValue)
  })

  it('elementAt([1], 2) should return undefined', () => {
    const actualValue = elementAt([1], 2)
    const expectedValue = undefined
    assert.strictEqual(actualValue, expectedValue)
  })

  it('elementAt([1, 2, 3, 4, 5], 3) should return 3', () => {
    const actualValue = elementAt([1, 2, 3, 4, 5], 3)
    const expectedValue = 3
    assert.strictEqual(actualValue, expectedValue)
  })
})