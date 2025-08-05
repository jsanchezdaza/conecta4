export const ROWS = 6
export const COLS = 7
export type Cell = 0 | 1 | 2
export type Board = Cell[][]

export const createBoard = (rows = ROWS, cols = COLS): Board =>
  Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0 as Cell))

export const dropPiece = (board: Board, col: number, player: 1 | 2): Board => {
  const rows = board.length
  for (let r = rows - 1; r >= 0; r--) {
    if (board[r][col] === 0) {
      const next = board.map((row) => row.slice())
      next[r][col] = player
      return next
    }
  }
  return board
}

export const DIRECTIONS = [
  [1, 0],
  [0, 1],
  [1, 1],
  [1, -1],
] as const

const inBounds = (row: number, col: number, rows: number, cols: number) =>
  row >= 0 && row < rows && col >= 0 && col < cols

const has4From = (
  board: Board,
  row: number,
  col: number,
  deltaRow: number,
  deltaCol: number,
) => {
  const player = board[row][col]
  if (player === 0) return false
  for (let step = 1; step < 4; step++) {
    const nextRow = row + deltaRow * step
    const nextCol = col + deltaCol * step
    if (!inBounds(nextRow, nextCol, board.length, board[0].length)) return false
    if (board[nextRow][nextCol] !== player) return false
  }
  return true
}

export const checkWinner = (board: Board): 0 | 1 | 2 => {
  const rows = board.length
  const cols = board[0].length
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === 0) continue
      for (const [deltaRow, deltaCol] of DIRECTIONS) {
        if (has4From(board, row, col, deltaRow, deltaCol)) return board[row][col]
      }
    }
  }
  return 0
}
