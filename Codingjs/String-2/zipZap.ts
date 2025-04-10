function zipZap(str: string): string {
  let result: string = "";
  const len: number = str.length;
  for (let i: number = 0; i < len; i++) {
    if (str[i] === "z" && i + 2 < len && str[i + 2] === "p") {
      result += str[i] + str[i + 2];
      i += 2;
    } else {
      result += str[i];
    }
  }
  return result;
}

// Problem desc:
// Look for patterns like "zip" and "zap" in the string -- length-3, starting
//  with 'z' and ending with 'p'. Return a string where for all such words, the
//  middle letter is gone, so "zipXzap" yields "zpXzp".

// Data to test
// zipZap('zipXzap') → zpXzp	zpXzp	✔
// zipZap('zopzop') → zpzp	zpzp	✔
// zipZap('zzzopzop') → zzzpzp	zzzpzp	✔
// zipZap('zibzap') → zibzp	zibzp	✔
// zipZap('zip') → zp	zp	✔
// zipZap('zi') → zi	zi	✔
// zipZap('z') → z	z	✔
// zipZap('') →		✔
// zipZap('zzp') → zp	zp	✔
// zipZap('abcppp') → abcppp	abcppp	✔
// zipZap('azbcppp') → azbcppp	azbcppp	✔
// zipZap('azbcpzpp') → azbcpzp	azbcpzp	✔
