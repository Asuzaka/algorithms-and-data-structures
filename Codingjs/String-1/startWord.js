function startWord(str, word) {
  let a = "";
  for (let i = 1; i < word.length; i++) {
    a += str[i];
  }
  let b = "";
  for (let i = 1; i < word.length; i++) {
    b += word[i];
  }
  let c = "";
  if (a == b) {
    for (let i = 0; i < word.length; i++) {
      if (str[i] == undefined) break;
      c += str[i];
    }
    return c;
  } else {
    return c;
  }
}

// Problem desc:
//  Given a string and a second "word" string, we'll say that the word matches
//  the string if it appears at the front of the string, except its first char does
//  not need to match exactly. On a match, return the front of the string, or
//  otherwise return the empty string. So, so with the string "hippo" the word
//  "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1.

// Data to test
// Test → Expected	Yours	Result
// startWord('hippo', 'hi') → hi	hi	✔
// startWord('hippo', 'xip') → hip	hip	✔
// startWord('hippo', 'i') → h	h	✔
// startWord('hippo', 'ix') →		✔
// startWord('h', 'ix') →		✔
// startWord('', 'i') →		✔
// startWord('hip', 'zi') → hi	hi	✔
// startWord('hip', 'zip') → hip	hip	✔
// startWord('hip', 'zig') →		✔
// startWord('h', 'z') → h	h	✔
// startWord('hippo', 'xippo') → hippo	hippo	✔
// startWord('hippo', 'xyz') →		✔
// startWord('hippo', 'hip') → hip	hip	✔
// startWord('kitten', 'cit') → kit	kit	✔
// startWord('kit', 'cit') → kit	kit	✔
