import { rndSelect } from '../P23.js'
import { strict as assert } from 'assert'

describe('P23', () => {
  it('rndSelect([], 0) should return []', () => {
    const actualValue = rndSelect([], 0)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('rndSelect([], 1) should return []', () => {
    const actualValue = rndSelect([], 1)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('rndSelect([\'a\'], 1) should return [\'a\']', () => {
    const actualValue = rndSelect(['a'], 1)
    const expectedValue = ['a']
    assert.deepEqual(actualValue, expectedValue)
  })

  it('rndSelect([\'a\'], 2) should return [\'a\']', () => {
    const actualValue = rndSelect(['a'], 2)
    const expectedValue = ['a']
    assert.deepEqual(actualValue, expectedValue)
  })

  it('rndSelect([\'a\', \'b\', \'c\', \'d\', \'e\', \'f\', \'g\', \'h\'], 3) should return an array with 3 elements from the source array', () => {
    const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    const rndSelection = rndSelect(array, 3)
    const actualValue = rndSelection.every(x => array.includes(x))
    const expectedValue = true
    assert.deepEqual(actualValue, expectedValue)
  })
})