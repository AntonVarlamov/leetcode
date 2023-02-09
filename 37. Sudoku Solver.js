/**
 * @param {any[][]} board
 *
 */
const solveSudoku = function (board) {
  let rows = Array.from(new Array(9), () => new Array(10).fill(0));
  let cols = Array.from(new Array(9), () => new Array(10).fill(0));
  let boxes = Array.from(new Array(9), () => new Array(10).fill(0));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c = board[i][j];
      if (c !== '.') {
        let num = parseInt(c);
        let bx = Math.floor(j / 3);
        let by = Math.floor(i / 3);
        rows[i][num] = 1;
        cols[j][num] = 1;
        boxes[by * 3 + bx][num] = 1;
      }
    }
  }
  dfs(board, 0, 0, rows, cols, boxes);
};

function dfs(board, x, y, rows, cols, boxes) {
  // exit recursion condition, reach to the end;
  if (y === 9) return true;

  // traverse from left to right, then next row
  let nextX = (x + 1) % 9;
  let nextY = nextX === 0 ? y + 1 : y;

  // already has number, DFS next element
  if (board[y][x] !== '.') return dfs(board, nextX, nextY, rows, cols, boxes);

  // fill number from 1 - 9
  for (let i = 1; i <= 9; i++) {
    let bx = Math.floor(x / 3);
    let by = Math.floor(y / 3);
    let box_index = by * 3 + bx;
    // if not breaking the following 3 rules
    if (!rows[y][i] && !cols[x][i] && !boxes[box_index][i]) {
      // modify, fill the number
      rows[y][i] = 1;
      cols[x][i] = 1;
      boxes[box_index][i] = 1;
      board[y][x] = i.toString();
      // Try to fill next element, if success return true, or recover
      if (dfs(board, nextX, nextY, rows, cols, boxes)) return true;
      // recover data
      board[y][x] = '.';
      boxes[box_index][i] = 0;
      cols[x][i] = 0;
      rows[y][i] = 0;
    }
  }
  return false;
};

let board = [
  [".","3","6","1",".","5",".","9","."],
  [".",".","7",".",".",".","8",".","."],
  [".",".",".",".","6",".",".",".","."],
  [".","1",".","2",".","3",".","5","."],
  [".",".",".",".",".","4",".",".","."],
  ["5",".",".",".",".",".",".",".","9"],
  [".","6",".",".","9",".",".",".","."],
  [".",".",".",".","4",".",".","2","."],
  [".",".","3","6",".","2",".",".","7"]
]
solveSudoku(board)
console.log(board)

// [
// [".",".","9","7","4","8",".",".","."],
//   ["7",".",".",".",".",".",".",".","."],
//   [".","2",".","1",".","9",".",".","."],
//   [".",".","7",".",".",".","2","4","."],
//   [".","6","4",".","1",".","5","9","."],
//   [".","9","8",".",".",".","3",".","."],
//   [".",".",".","8",".","3",".","2","."],
//   [".",".",".",".",".",".",".",".","6"],
//   [".",".",".","2","7","5","9",".","."]
// ]

// for (let i = 1; i <= 9; i++) {
//   for (let j = 5; j < 6; j++) {
//     let rowUsed = null,
//       columnUsed = null
//     for (let k = 0; k < 9; k++) {
//
//       if (
//         rowUsed !== false &&
//         board[j][k] instanceof Set &&
//         board[j][k].has(i)
//       ) {
//         if (rowUsed === null) {
//           rowUsed = [j, k]
//         } else {
//           rowUsed = false
//         }
//       }
//
//       if (
//         columnUsed !== false &&
//         board[k][j] instanceof Set &&
//         board[k][j].has(i)
//       ) {
//         if (columnUsed === null) {
//           columnUsed = [k, j]
//         } else {
//           columnUsed = false
//         }
//       }
//     }
//     if (columnUsed) {
//       board[columnUsed[0]][columnUsed[1]] = i.toString()
//     }
//     if (rowUsed) {
//       board[rowUsed[0]][rowUsed[1]] = i.toString()
//     }
//   }
// }
