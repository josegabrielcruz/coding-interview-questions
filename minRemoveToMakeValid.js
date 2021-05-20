/**
 * TODO: 
 * add walkthrough
 * @param {*} str String
 * @returns String
 */
const minRemoveToMakeValid = (str) => {
  const res = str.split('');
  const stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === '(') {
      stack.push(i);
    } else if (res[i] === ')' && stack.length !== 0) {
      stack.pop();
    } else if (res[i] === ')') {
      res[i] = '';
    }
  }

  while (stack.length) {
    const currentIndex = stack.pop();
    res[currentIndex] = '';
  }

  return res.join('');
};
