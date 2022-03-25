//  --Sum Zero-- //
const sumZero = (arr) => {
    let value = "false"
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j) {
          if (arr[i] + arr[j] === 0) {
            value = "true"
          } 
        }
      }
    } 
    return value
  }

// Runtime = O(n)  


// --Unique Characters-- //

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

// Runtime: O(1)


// --Pangram Sentence-- //

const isPangram = (string) => {
    let arrStr = string.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for(i = 0; i < alphabet.length; i++) {
        if(arrStr.indexOf(alphabet[i]) < 0){
            return false
        } 
    }
    return true
}

// Runtime: O(n)

//  --Longest Word-- //

const findLongestWord = (arr) => {
    let longestWord = 0
    for(i = 0; i < arr.length; i++) {
        if(arr[i].length > longestWord){
            longestWord = arr[i].length
        }
    }
    return longestWord
}

// Runtime: O(n)
