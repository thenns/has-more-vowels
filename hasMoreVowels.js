function hasMoreVowels (word) {
    //get vowels off the string
    //get consonatns off the sting
    let vowels = word.match(/[aeiouAEIOU]/gi);
    let consonants = word.match(/[bcdfgjklmnpqstvxzhrwyBCDFGJKLMNPQSTVXZHRWY]/gi);
    //return vowels;
      if (vowels.length > consonants.length) {
        return true;
    } else {
        return false;
    }
}
console.log(hasMoreVowels ('moose'));
console.log(hasMoreVowels ('mice'));
console.log(hasMoreVowels ('graph'));
console.log(hasMoreVowels ('yay'));
console.log(hasMoreVowels ('Aal'));
