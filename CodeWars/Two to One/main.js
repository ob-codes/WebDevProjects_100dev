function longest(s1, s2) {
  let str = "";  
  str = s1 + s2;
  str = str.toLowerCase();
  str = str.split("");
  
  str.sort();
  str = str.join('');
  return str;
}

console.log(longest("areTHeyhere", "yestheyarehere"));