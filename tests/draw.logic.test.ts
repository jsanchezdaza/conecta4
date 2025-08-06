import { createBoard, dropPiece, checkWinner, isBoardFull } from '@/board'

describe('Draw logic', () => {
  it('detects draw on a full board with no winner', () => {
    let board = createBoard()
    // columns order chosen to avoid creating 4-in-a-row patterns
    const fillOrder = [0, 2, 4, 6, 1, 3, 5]
    let player: 1 | 2 = 1

    for (let r = 0; r < 6; r++) {
      for (const c of fillOrder) {
        const next = dropPiece(board, c, player)
        if (next === board) throw new Error('column unexpectedly full')
        board = next
        player = player === 1 ? 2 : 1
      }
    }

    expect(checkWinner(board)).toBe(0)
    expect(isBoardFull(board)).toBe(true)
  })
})
