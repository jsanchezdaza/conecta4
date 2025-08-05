export type Cell = 0 | 1 | 2
export type Board = Cell[][]

export const createBoard = (rows = 6, cols = 7): Board =>
  Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0 as Cell))
