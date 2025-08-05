export type Cell = 0 | 1 | 2
export type Board = Cell[][]

export const createBoard = (rows = 6, cols = 7): Board =>
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
