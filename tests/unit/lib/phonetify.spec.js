import phonetify, { phonetifyChar } from '@/lib/phonetify'
import each from 'jest-each'

describe('phonetify', () => {
  it('returns phonetic alphabet for each character in the input', function () {
    const input = 'Sajad'
    const expectedOutput = 'Sierra alfa juliett alfa delta'

    expect(phonetify(input)).toEqual(expectedOutput)
  })

  it('returns triple space for each space', function () {
    const input = 'John Doe'
    const expectedOutput = 'Juliett oscar hotel november   Delta oscar echo'

    expect(phonetify(input)).toEqual(expectedOutput)
  })
})

describe('phonetifyChar', () => {
  describe('returns correct phonetic alphabet for lowercase character', () => {
    each([
      ['a', 'alfa'],
      ['z', 'zulu'],
    ]).test('returns %s when given %s', (input, expectedOutput) => {
      expect(phonetifyChar(input)).toEqual(expectedOutput)
    })
  })

  describe('returns correct phonetic alphabet for uppercase character', () => {
    each([
      ['A', 'Alfa'],
      ['Z', 'Zulu'],
    ]).test('returns %s when given %s', (input, expectedOutput) => {
      expect(phonetifyChar(input)).toEqual(expectedOutput)
    })
  })

  it('returns space for a space', () => {
    expect(phonetifyChar(' ')).toEqual(' ')
  })

  describe('returns same char if char is not a letter', () => {
    each([
      ['.', '.'],
      ['1', '1'],
      ['-', '-'],
      ['*', '*'],
    ]).test('returns %s when given %s', (input, expectedOutput) => {
      expect(phonetifyChar(input)).toEqual(expectedOutput)
    })
  })
})
