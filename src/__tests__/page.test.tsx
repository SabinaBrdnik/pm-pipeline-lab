import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

test('homepage displays project title', () => {
  render(<Home />)
  expect(screen.getByText('PM Pipeline Lab')).toBeInTheDocument()
})