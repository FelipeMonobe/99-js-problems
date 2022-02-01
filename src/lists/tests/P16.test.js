import { drop } from '../P16.js'
import { strict as assert } from 'assert'

describe('P16', () => {
  it('drop([]) should return []', () => {
    const actualValue = drop([])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('drop([\'a\'], 0) should return [\'a\']', () => {
    const actualValue = drop(['a'], 0)
    const expectedValue = ['a']
    assert.deepEqual(actualValue, expectedValue)
  })

  it('drop([\'a\'], 1) should return []', () => {
    const actualValue = drop(['a'], 1)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('drop([\'a\'], 3) should return [\'a\']', () => {
    const actualValue = drop(['a'], 3)
    const expectedValue = ['a']
    assert.deepEqual(actualValue, expectedValue)
  })

  it('drop([\'a\', \'b\', \'c\', \'d\', \'e\', \'f\', \'g\', \'h\', \'i\', \'j\'], 3) should return [\'a\', \'b\', \'d\', \'e\', \'g\', \'h\', \'j\']', () => {
    const actualValue = drop(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 3)
    const expectedValue = [ 'a', 'b', 'd', 'e', 'g', 'h', 'j' ]
    assert.deepEqual(actualValue, expectedValue)
  })
})