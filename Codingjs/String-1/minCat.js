function minCat(a, b) {
  if (a.length > b.length) return `${a.slice(a.length - b.length) + b}`;
  else if (b.length > a.length) return `${a + b.slice(b.length - a.length)}`;
}
