function convertToRoman(num) {
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let converted = "";

  for (let index = 0; index < values.length; index++) {
    for(let i=values[index]; i <= num; num=num-i){
       converted = converted + roman[index];
    }
    
  //OR
  /**
   * while (values[index] <= num) {
      converted = converted + roman[index];
      num = num - values[index];
    }
    */
  }
  console.log(converted)
  return converted;
}

convertToRoman(3999);
//result MMMCMXCIX 
convertToRoman(1000);
//result M
convertToRoman(1006);
//result MVI
convertToRoman(2014);
//result MMXIV
convertToRoman(891);
//result DCCCXCI
convertToRoman(649);
//result DCXLIX
convertToRoman(97);
//result XCVII
convertToRoman(2);
//result II
