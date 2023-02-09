/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function (s, words) {
  const wordLength = words[0].length
  const wordStore = {}
  words.forEach(word => {
    wordStore[word] = (wordStore[word] || 0) + 1
  })

  function checkSubstring(store, symbols, wordLength) {
    for (let i = 0; i < symbols.length - wordLength + 1; i+= wordLength) {
      const word = symbols.slice(i, i + wordLength)
      if (!store.hasOwnProperty(word) || store[word] === 0) {
        return false
      }
      store[word]--
    }
    return true
  }

  const result = []

  for (let i = 0; i < s.length - (wordLength * words.length) + 1; i++) {
    if (
      wordStore.hasOwnProperty(s.slice(i, i + wordLength)) &&
      checkSubstring({...wordStore}, s.slice(i, i + wordLength * words.length), wordLength)
    ) {
      result.push(i)
    }
  }
  return result
};

let s = "wordgoodgoodgoodbestword", words = ["word","good","best","good"]
console.log(findSubstring(s, words))
