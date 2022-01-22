import { myButLast } from '../P02.js'
import { strict as assert } from 'assert'

describe('P02', () => {
  it('myButLast([]) should return undefined', () => {
    const actualValue = myButLast([])
    const expectedValue = undefined
    assert.strictEqual(actualValue, expectedValue)
  })

  it('myButLast([1]) should return undefined', () => {
    const actualValue = myButLast([1])
    const expectedValue = undefined
    assert.strictEqual(actualValue, expectedValue)
  })

  it('myButLast([1, 2, 3]) should return 2', () => {
    const actualValue = myButLast([1, 2, 3])
    const expectedValue = 2
    assert.strictEqual(actualValue, expectedValue)
  })
})