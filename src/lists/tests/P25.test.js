import { rndPermu } from '../P25.js'
import { strict as assert } from 'assert'

describe('P25', () => {
  it('rndPermu([]) should return []', () => {
    const actualValue = rndPermu([])
    const expectedValue = []
    assert.deepEqual(actualValue, expectedValue)
  })

  it('rndPermu([1]) should return [1]', () => {
    const actualValue = rndPermu([1])
    const expectedValue = [1]
    assert.deepEqual(actualValue, expectedValue)
  })

  it('rndPermu([\'a\', \'b\', \'c\', \'d\', \'e\', \'f\']) should return an array with a permutation of the source array elements', () => {
    const array = ['a', 'b', 'c', 'd', 'e', 'f']
    const rndPermutation = rndPermu(array)
    const actualValue = rndPermutation.every(x => array.includes(x))
    const expectedValue = true
    assert.deepEqual(actualValue, expectedValue)
  })
})