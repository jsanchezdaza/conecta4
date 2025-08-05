import React from 'react'
import { render, screen } from '@testing-library/react'
import { BoardView } from '@/ui/BoardView'

describe('BoardView a11y', () => {
  it('marks each cell as an identifiable gridcell', () => {
    render(<BoardView />)
    const cells = screen.getAllByRole('gridcell', { name: 'cell' })
    expect(cells).toHaveLength(6 * 7)
  })
})
