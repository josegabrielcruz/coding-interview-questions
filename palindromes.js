/* outside in */
let isValidPalindromeOutsideIn = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
      if (s[p1] !== s[p2]) {
          return false;
      }
      p1++;
      p2--;
  }
      
  return true;
}

/* inside out */
let isValidPalindromeInsideOut = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
  let left = Math.floor(s.length / 2), right = left;

  if(s.length % 2 === 0) {
      left--;
  }

  while(left >= 0 && right < s.length) {
      if(s[left] !== s[right]) {
          return false
      }
      
      left--;
      right++;
  }
  
  return true;
}

/* reversed */
let isValidPalindromeReversed = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
  let rev = '';
  for(let i = s.length - 1; i >= 0; i--) {
      rev += s[i];
  }
  return s === rev;
}

// console.log(isValidPalindrome('A man, a plan, za canal: Panama'))