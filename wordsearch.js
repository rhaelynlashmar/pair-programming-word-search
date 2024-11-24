// Transpose Function

const transpose = function (matrix) {
    // declare rows & declare columns as empty arrays
    // create transpose array thats currently empty as well
    // then we reverse the values and push into new array
    const rows = matrix.length;
    const columns = matrix[0].length;
    let transposed = [];
  
    for (let i = 0; i < columns; i++) {
      transposed[i] = [];
    }
    // console.log(transposed);
    for (let column = 0; column < columns; column++) {
      for (let row = 0; row < rows; row++) {
        transposed[column][row] = matrix[row][column];
      }
    }
    return transposed;
  };

// WordSearch function 

const wordSearch = (letters, word) => { 
    if (!word || letters.length === 0) {
      return false;
    }
    const transposed = transpose(letters);
    let fullArray = letters.concat(transposed);
    const horizontalJoin = fullArray.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    return false;
};

  
module.exports = wordSearch