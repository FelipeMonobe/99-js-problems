import { combination } from '../P26.js'
import { strict as assert } from 'assert'

describe('P26', () => {
  it('combination(0, []) should return [[]]', () => {
    const actualValue = combination(0, [])
    const expectedValue = [[]]
    assert.deepEqual(actualValue, expectedValue)
  })

  it('combination(1, []) should return []', () => {
    const actualValue = combination(1, [])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('combination(0, [\'a\']) should return [[]]', () => {
    const actualValue = combination(0, ['a'])
    const expectedValue = [[]]
    assert.deepEqual(actualValue, expectedValue)
  })

  it('combination(1, [\'a\']) should return [[\'a\']]', () => {
    const actualValue = combination(1, ['a'])
    const expectedValue = [['a']]
    assert.deepEqual(actualValue, expectedValue)
  })

  it('combination(2, [\'a\']) should return []', () => {
    const actualValue = combination(2, ['a'])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('combination(2, [\'a\', \'b\', \'c\']) should return [[\'a\', \'b\'], [\'a\', \'c\'], [\'b\', \'c\']]', () => {
    const actualValue = combination(2, ['a', 'b', 'c'])
    const expectedValue = [['a', 'b'], ['a', 'c'], ['b', 'c']]
    assert.deepEqual(actualValue, expectedValue)
  })
})