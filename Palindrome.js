function palindrome(str) {
  str = str.replaceAll('_', '');
  str = str.replaceAll(' ', '');
  let testRegex = /[a-zA-z0-9]/;
  let str2 =[]
  str = str.toLowerCase().split("");
  for(let i = 0; i < str.length; i++){
    if(testRegex.test(str[i])){
      str2.push(str[i]);
    }
  }
  str2 = str2.join("");
  let str3 = [...str2];
  str3 = str3.reverse().join("");
  return str2 == str3

}

palindrome("1 eye for of 1 eye.");
//should return false

palindrome("eye");
//should return true.

palindrome("_eye") 
//should return true.

palindrome("race car") 
//should return true.

palindrome("not a palindrome") 
//should return false.

palindrome("0_0 (: /-\ :) 0-0") 
//should return true.

palindrome("five|\_/|four")
//should return false.

palindrome("nope") 
//should return false.
