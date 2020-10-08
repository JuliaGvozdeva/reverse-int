module.exports = function reverse (n) {
  let str = n.toString().split('').reverse().join('');
  if (str[str.length-1] === '-'){
      return +str.substring(0,str.length-1);
  }
  else {
    return +str;
    }
}
