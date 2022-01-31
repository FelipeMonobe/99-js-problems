import { repli } from '../P15.js'
import { strict as assert } from 'assert'

describe.only('P15', () => {
  it('repli([]) should return []', () => {
    const actualValue = repli([])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('repli([\'a\'], 0) should return []', () => {
    const actualValue = repli(['a'], 0)
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('repli([\'a\'], 1) should return [\'a\']', () => {
    const actualValue = repli(['a'], 1)
    const expectedValue = ['a']
    assert.deepEqual(actualValue, expectedValue)
  })

  it('repli([\'a\'], 3) should return [\'a\', \'a\', \'a\']', () => {
    const actualValue = repli(['a'], 3)
    const expectedValue = ['a', 'a', 'a']
    assert.deepEqual(actualValue, expectedValue)
  })

  it('repli([\'a\', \'b\', \'c\'], 3) should return [\'a\', \'a\', \'a\', \'b\', \'b\', \'b\', \'c\', \'c\', \'c\']', () => {
    const actualValue = repli(['a', 'b', 'c'], 3)
    const expectedValue = ['a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'c']
    assert.deepEqual(actualValue, expectedValue)
  })
})