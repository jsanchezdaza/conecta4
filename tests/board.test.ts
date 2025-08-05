import { createBoard } from '@/board'

describe('Board', () => {
  it('creates a 6x7 empty board by default', () => {
    const board = createBoard()
    expect(board).toHaveLength(6)
    expect(board.every((row) => row.length === 7)).toBe(true)
    expect(board.flat().every((c) => c === 0)).toBe(true)
  })

  it('supports custom dimensions', () => {
    const board = createBoard(2, 3)
    expect(board).toHaveLength(2)
    expect(board[0]).toHaveLength(3)
  })
})
