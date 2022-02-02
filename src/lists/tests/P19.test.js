import { rotate } from '../P19.js'
import { strict as assert } from 'assert'

describe('P19', () => {
  it('rotate([], 0) should return []', () => {
    const actualValue = rotate([], 0)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('rotate([], 1) should return []', () => {
    const actualValue = rotate([], 1)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('rotate([\'a\'], 1) should return [\'a\']', () => {
    const actualValue = rotate(['a'], 1)
    const expectedValue = ['a']
    assert.deepEqual(actualValue, expectedValue)
  })

  it('rotate([\'a\', \'b\', \'c\', \'d\', \'e\', \'f\', \'g\', \'h\'], 3) should return [\'d\', \'e\', \'f\', \'g\', \'h\', \'a\', \'b\', \'c\']', () => {
    const actualValue = rotate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3)
    const expectedValue = ['d', 'e', 'f', 'g', 'h', 'a', 'b', 'c']
    assert.deepEqual(actualValue, expectedValue)
  })

  it('rotate([\'a\', \'b\', \'c\', \'d\', \'e\', \'f\', \'g\', \'h\'], -2) should return [\'g\', \'h\', \'a\', \'b\', \'c\', \'d\', \'e\', \'f\']', () => {
    const actualValue = rotate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2)
    const expectedValue = ['g', 'h', 'a', 'b', 'c', 'd', 'e', 'f']
    assert.deepEqual(actualValue, expectedValue)
  })
})