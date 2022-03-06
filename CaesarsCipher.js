function rot13(str) {
  let regex = /[A-Z]/
  str = str.split("")
  let store =0;
  for(let i=0; i<str.length; i++){
    if(regex.test(str[i])){
      //console.log(str[i].charCodeAt())
      store = 65 + str[i].charCodeAt() % 26;
      //console.log(store)
      str[i] = String.fromCharCode(store);
      //console.log(str[i])
    }
  }
  str = str.join("");
  return str;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
