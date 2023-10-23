module.exports = function check(str, bracketsConfig) {
    const OPEN = Array.from(bracketsConfig.map(item => item.slice()[0]));
    const CLOSED = Object.fromEntries(bracketsConfig.map(([key, value]) => [value, key]));
      let stack = [];
      for (let i = 0; i < str.length; i++) {
          let cur = str[i];
        if (OPEN.includes(cur) != (Object.keys(CLOSED).includes(cur))) {
          if (OPEN.includes(cur)) {
            stack.push(cur);
         }
         else {
           if(stack.length == 0) {
            return false;
           }
             let top = stack[stack.length-1];
             if(CLOSED[cur] == top) {
                 stack.pop();
             }
             else {
                 return false;
             }
         }
        }
        else {
          if (OPEN.includes(cur) && Object.keys(CLOSED).includes(cur)) {
            let top = stack[stack.length -1];
            if (CLOSED[cur] == top) {
              stack.pop();
            }
            else {
              stack.push(cur);
            }
          }
        }
      }
      if (stack.length == 0) {
        return true;
      } else {
        return false;
      }
}