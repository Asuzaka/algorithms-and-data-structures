function makeTags(tag, word) {
  return `<${tag}>${word}</${tag}>`;
}

// Problem desc:
// The web is built with HTML strings like "<i>Yay</i>" which draws Yay
//  as italic text. In this example, the "i" tag makes <i> and </i> which
//  surround the word "Yay". Given tag and word strings, create the HTML
//  string with tags around the word, e.g. "<i>Yay</i>".

// Data to test
// makeTags('i', 'Yay') → Yay	Yay	✔
// makeTags('i', 'Hello') → Hello	Hello	✔
// makeTags('cite', 'Yay') → Yay	Yay	✔
// makeTags('address', 'here') →here here ✔
// makeTags('body', 'Heart') → Heart	Heart	✔
// makeTags('i', 'i') → i	i	✔
// makeTags('i', 'i') → i	i	✔
// makeTags('i', '') →		✔
