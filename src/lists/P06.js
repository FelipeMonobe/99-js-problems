export const isPalindrome = ([...chars] = '') => {
  if (!chars.length) return
  if (chars.length < 2 || (chars.length === 2 && chars[0] === chars[chars.length - 1])) return true
  if (chars[0] !== chars[chars.length - 1]) return false
  return isPalindrome(chars.slice(1, chars.length - 1))
}

export const isPalindromeEZ = (str) => str === [...str].reverse().join('')