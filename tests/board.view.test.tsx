import React from 'react'
import { render, screen } from '@testing-library/react'
import { BoardView } from '@/ui/BoardView'

describe('BoardView', () => {
  it('renders a 6x7 grid by default', () => {
    render(<BoardView />)
    const cells = screen.getAllByTestId('cell')
    expect(cells).toHaveLength(6 * 7)
  })
})
