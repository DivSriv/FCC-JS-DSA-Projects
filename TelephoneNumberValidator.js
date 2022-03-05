function telephoneCheck(str) {
  let regex1 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;
  let regex2 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/;

    if (regex1.test(str) || regex2.test(str)) {
        return true;
    }
    else {
        return false;
    }
}

telephoneCheck("1 555-555-5555");
//should return true

telephoneCheck("1 (555) 555-5555") 
//should return true

telephoneCheck("5555555555") 
//should return true

telephoneCheck("(555)555-5555") 
//should return true

telephoneCheck("-1 (757) 622-7382") 
//should return false

telephoneCheck("55 55-55-555-5")
//should return false
