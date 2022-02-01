import { split } from '../P17.js'
import { strict as assert } from 'assert'

describe('P17', () => {
  it('split([], 0) should return []', () => {
    const actualValue = split([])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('split([], 1) should return []', () => {
    const actualValue = split([], 1)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('split([\'a\', \'b\', \'c\'], 1) should return [[\'a\'], [\'b\', \'c\']]', () => {
    const actualValue = split(['a', 'b', 'c'], 1)
    const expectedValue = [['a'], ['b', 'c']]
    assert.deepEqual(actualValue, expectedValue)
  })

  it('split([\'a\', \'b\', \'c\'], 4) should return [\'a\', \'b\', \'c\']', () => {
    const actualValue = split(['a', 'b', 'c'], 4)
    const expectedValue = ['a', 'b', 'c']
    assert.deepEqual(actualValue, expectedValue)
  })

  it('split([\'a\', \'b\', \'c\', \'d\', \'e\', \'f\', \'g\', \'h\', \'i\', \'j\'], 3) should return [[\'a\', \'b\', \'c\'], [\'d\', \'e\', \'f\', \'g\', \'h\', \'i\', \'j\']]', () => {
    const actualValue = split(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 3)
    const expectedValue = [['a', 'b', 'c'], ['d', 'e', 'f', 'g', 'h', 'i', 'j']]
    assert.deepEqual(actualValue, expectedValue)
  })
})