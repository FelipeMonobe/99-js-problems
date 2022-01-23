import { myFlatten } from '../P07.js'
import { strict as assert } from 'assert'

describe('P07', () => {
  it('myFlatten([]) should return []', () => {
    const actualValue = myFlatten([])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('myFlatten([[[[]], []]]) should return []', () => {
    const actualValue = myFlatten([[[[]], []]])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('myFlatten([[1, [2], [[[3]]]]]) should return [1, 2, 3]', () => {
    const actualValue = myFlatten([[1, [2], [[[3]]]]])
    const expectedValue = [1, 2, 3]
    assert.deepEqual(actualValue, expectedValue)
  })
})