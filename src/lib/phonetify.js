const phonetify = (textInput) => {
  return textInput.split('').map(phonetifyChar).join(' ')
}

const PHONETIC_ALPHABET = [
  'alfa',
  'bravo',
  'charlie',
  'delta',
  'echo',
  'foxtrot',
  'golf',
  'hotel',
  'india',
  'juliett',
  'kilo',
  'lima',
  'mike',
  'november',
  'oscar',
  'papa',
  'quebec',
  'romeo',
  'sierra',
  'tango',
  'uniform',
  'victor',
  'whiskey',
  'x-ray',
  'yankee',
  'zulu',
]

export const phonetifyChar = (char) => {
  if (!/[A-Za-z]/.test(char)) {
    return char
  }

  const isUppercase = char === char.toUpperCase()
  char = char.toLowerCase()
  const charCode = char.charCodeAt(0) - 97
  const phonetic = PHONETIC_ALPHABET[charCode]
  return isUppercase ? phonetic[0].toUpperCase() + phonetic.slice(1) : phonetic
}

export default phonetify
