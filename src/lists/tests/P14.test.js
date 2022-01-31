import { dupli } from '../P14.js'
import { strict as assert } from 'assert'

describe('P14', () => {
  it('dupli([]) should return []', () => {
    const actualValue = dupli([])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('dupli([\'a\']) should return [\'a\', \'a\']', () => {
    const actualValue = dupli(['a'])
    const expectedValue = ['a', 'a']
    assert.deepEqual(actualValue, expectedValue)
  })

  it('dupli([\'a\', \'b\', \'c\', \'c\', \'d\']) should return [\'a\', \'a\', \'b\', \'b\', \'c\', \'c\', \'c\', \'c\', \'d\', \'d\']', () => {
    const actualValue = dupli(['a', 'b', 'c', 'c', 'd'])
    const expectedValue = ['a', 'a', 'b', 'b', 'c', 'c', 'c', 'c', 'd', 'd']
    assert.deepEqual(actualValue, expectedValue)
  })
})