module.exports = function solveSudoku(matrix) {
  // your solution
  while(progon(matrix)){
    //progon(matrix);
  }
  

  function progon(matrix){
    function unique(number) {
      for (let i = 0; i < number.length; i++) {
        for (let j = number.length - 1; j > i; j--) {
          if (number[i] == number[j]) {
            // delete number[j];
            number.splice(j, 1);
          }
        }
      }
    }
  
    function sectOffset(i, j) {
      return {
        j: Math.floor(j / 3) * 3,
        i: Math.floor(i / 3) * 3
      };
    };
  
    function renew(matrix, i, j, sectOff) {
      let value = matrix[i][j];
      let baseI = i, baseJ = j;
      let text = '';
      let number = []
      for (let row = i, index = 0; index < matrix.length; index++) {
        const element = matrix[row][index];
        if (element != 0) number.push(element);
      }
      for (let col = j, index = 0; index < matrix.length; index++) {
        const element = matrix[index][col];
        if (element != 0) number.push(element);
      }
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          const element = matrix[sectOff.i + x][sectOff.j + y];
          if (element != 0) {
            number.push(element);
          }
        }
      }
  
      unique(number);
      // console.log(number.length);
      if (number.length == 8) {
        number.sort();
        text = '';
        let tmpCompareArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < tmpCompareArray.length; i++) {
          if (number[i] != tmpCompareArray[i]) {
            text = text + " " + tmpCompareArray[i];
            matrix[baseI][baseJ] = tmpCompareArray[i];
            // console.log(`number: ${number} -> tmpCompareArray: ${tmpCompareArray[i]}`)
            //return tmpCompareArray[i];
            return false;
            // break;
          }
        }
      } else {
        return true;
      }
      // return step;
    }
    
      let step = false;
      for (let i = 0; i < matrix.length; i++) {
        let array = matrix[i];
        for (let j = 0; j < array.length; j++) {
          let element = array[j];
          if (element == 0) {
            var sectOff = sectOffset(i, j);
            step = step + renew(matrix, i, j, sectOff);
          }
        }
      }
    return step;
  }
  return matrix;
}



// function solveSudoku(matrix) {
//   while(progon(matrix)){
//     //progon(matrix);
//   }
//   return matrix;
// }

// function progon(matrix){


//   function unique(number) {
//     for (let i = 0; i < number.length; i++) {
//       for (let j = number.length - 1; j > i; j--) {
//         if (number[i] == number[j]) {
//           // delete number[j];
//           number.splice(j, 1);
//         }
//       }
//     }
//   }

//   function sectOffset(i, j) {
//     return {
//       j: Math.floor(j / 3) * 3,
//       i: Math.floor(i / 3) * 3
//     };
//   };

//   function renew(matrix, i, j, sectOff) {
//     let value = matrix[i][j];
//     let baseI = i, baseJ = j;
//     let text = '';
//     let number = []
//     for (let row = i, index = 0; index < matrix.length; index++) {
//       const element = matrix[row][index];
//       if (element != 0) number.push(element);
//     }
//     for (let col = j, index = 0; index < matrix.length; index++) {
//       const element = matrix[index][col];
//       if (element != 0) number.push(element);
//     }
//     for (let x = 0; x < 3; x++) {
//       for (let y = 0; y < 3; y++) {
//         const element = matrix[sectOff.i + x][sectOff.j + y];
//         if (element != 0) {
//           number.push(element);
//         }
//       }
//     }

//     unique(number);
//     // console.log(number.length);
//     if (number.length == 8) {
//       number.sort();
//       text = '';
//       let tmpCompareArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//       for (let i = 0; i < tmpCompareArray.length; i++) {
//         if (number[i] != tmpCompareArray[i]) {
//           text = text + " " + tmpCompareArray[i];
//           matrix[baseI][baseJ] = tmpCompareArray[i];
//           // console.log(`number: ${number} -> tmpCompareArray: ${tmpCompareArray[i]}`)
//           //return tmpCompareArray[i];
//           return false;
//           // break;
//         }
//       }
//     } else {
//       return true;
//     }
//     // return step;
//   }
  
//     let step = false;
//     for (let i = 0; i < matrix.length; i++) {
//       let array = matrix[i];
//       for (let j = 0; j < array.length; j++) {
//         let element = array[j];
//         if (element == 0) {
//           var sectOff = sectOffset(i, j);
//           step = step + renew(matrix, i, j, sectOff);
//         }
//       }
//     }
//   return step;
// }

// matrix = [
//   [2, 1, 0, 3, 0, 0, 7, 0, 0],
//   [7, 0, 0, 0, 2, 5, 3, 0, 0],
//   [8, 0, 5, 0, 1, 7, 0, 0, 0],
//   [0, 0, 6, 7, 0, 0, 0, 0, 3],
//   [5, 9, 2, 0, 0, 1, 0, 0, 6],
//   [0, 4, 0, 5, 8, 6, 1, 2, 0],
//   [4, 0, 0, 6, 0, 0, 0, 0, 7],
//   [0, 0, 1, 2, 0, 9, 5, 0, 8],
//   [0, 0, 8, 0, 7, 0, 0, 0, 4]
// ]

// resolve = [
//   [2, 1, 9 ,3, 6, 4, 7 , 8 , 5],
//   [7, 6, 4 ,8, 2, 5, 3 , 9 , 1],
//   [8, 3, 5 ,9, 1, 7, 6 , 4 , 2],
//   [1, 8, 6 ,7, 9, 2, 4 , 5 , 3],
//   [5, 9, 2 ,4, 3, 1, 8 , 7 , 6],
//   [3, 4, 7 ,5, 8, 6, 1 , 2 , 9],
//   [4, 2, 3 ,6, 5, 8, 9 , 1 , 7],
//   [6, 7, 1 ,2, 4, 9, 5 , 3 , 8],
//   [9, 5, 8 ,1, 7, 3, 2 , 6 , 4]
// ]

// let mat = solveSudoku(matrix);
// for (let i = 0; i < mat.length; i++) {
//   const array = mat[i];
//   let text = '';
//   for (let j = 0; j < array.length; j++) {
//     let element = array[j];
//     text = text + "_" + element
//   }
//   console.log(text);
// }