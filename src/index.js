module.exports = function towelSort (matrix = []) {
    let arr = [];

    for(let item of matrix) {
      if (matrix.indexOf(item) % 2 == 0) {
        for (let i = 0; i < item.length; i++) {
          arr.push(item[i]);
        }
      } else {
        for (let i = item.length - 1; i >= 0; i--) {
          arr.push(item[i]);
        }           
      }
    }
    
    return arr;
}
