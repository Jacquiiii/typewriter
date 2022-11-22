const transpose = function(matrix) {
  let output = [];
  if (matrix.length === 1) {
    for (let num of matrix[0]) {
      let arr = [];
      arr.push(num);
      output.push(arr);
    }
    return output;
  }
  for (let row = 0; row < matrix.length; row++) {
    let nestArr = [];
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[col][row]) {
        nestArr.push(matrix[col][row]);
      }
    }
    if (nestArr.length > 0) {
      output.push(nestArr);
    }
  }

  return output;
};


// Do not edit this function
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};


// Test code
printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));
