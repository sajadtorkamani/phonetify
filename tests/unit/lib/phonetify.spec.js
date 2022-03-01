import phonetify  from '@/lib/phonetify'

describe('phonetify', () => {
  it('returns phonetic alphabet for each character in the input', function () {
    const input = 'Sajad'
    const expectedOutput = 'Sierra alfa juliett alfa delta'

    expect(phonetify(input)).toEqual(expectedOutput)
  })

  it('returns four spaces for each space', function () {
    const input = 'John Doe'
    const expectedOutput = 'Juliett oscar hotel november    Delta oscar echo'

    expect(phonetify(input)).toEqual(expectedOutput)
  })

  it("doesn't convert characters that aren't letters or spaces", function () {
    const input = 'John123*_-'
    const expectedOutput = 'Juliett oscar hotel november 1 2 3 * _ -'

    expect(phonetify(input)).toEqual(expectedOutput)
  })
})
