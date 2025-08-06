export const ROWS = 6
export const COLS = 7
export type Cell = 0 | 1 | 2
export type Board = Cell[][]

export type GameState = { board: Board; turn: 1 | 2; winner: 0 | 1 | 2; draw: boolean }

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

export const initialState = (): GameState => ({ board: createBoard(), turn: 1, winner: 0, draw: false })

export const step = (state: GameState, col: number): GameState => {
  if (state.winner || state.draw) return state
  const nextBoard = dropPiece(state.board, col, state.turn)
  if (nextBoard === state.board) return state
  const winner = checkWinner(nextBoard)
  const draw = winner === 0 && isBoardFull(nextBoard)
  const turn: 1 | 2 = winner || draw ? state.turn : state.turn === 1 ? 2 : 1
  return { board: nextBoard, turn, winner, draw }
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
      const cell = board[row][col]
      if (cell === 0) continue
      for (const [deltaRow, deltaCol] of DIRECTIONS) {
        const prevRow = row - deltaRow
        const prevCol = col - deltaCol
        if (inBounds(prevRow, prevCol, rows, cols) && board[prevRow][prevCol] === cell) continue
        if (has4From(board, row, col, deltaRow, deltaCol)) return cell
      }
    }
  }
  return 0
}

export const isBoardFull = (board: Board) => board.every((row) => row.every((c) => c !== 0))
