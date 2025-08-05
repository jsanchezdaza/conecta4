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

export const checkWinner = (board: Board): 0 | 1 | 2 => {
  const rows = board.length
  const cols = board[0].length
  const dirs = [
    [1, 0],
    [0, 1],
    [1, 1],
    [1, -1],
  ] as const
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const player = board[r][c]
      if (player === 0) continue
      for (const [dr, dc] of dirs) {
        let k = 1
        while (
          k < 4 &&
          r + dr * k >= 0 &&
          r + dr * k < rows &&
          c + dc * k >= 0 &&
          c + dc * k < cols &&
          board[r + dr * k][c + dc * k] === player
        )
          k++
        if (k === 4) return player
      }
    }
  }
  return 0
}
