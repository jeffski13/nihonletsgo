import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HoverWord from './HoverWord';

describe('HoverWord', () => {
  it('renders the word text', () => {
    render(<HoverWord text="食べる" reading="taberu" meaning="to eat" />);
    expect(screen.getByText('食べる')).toBeInTheDocument();
  });

  it('has correct test id', () => {
    render(<HoverWord text="食べる" reading="taberu" meaning="to eat" />);
    expect(screen.getByTestId('hover-word-食べる')).toBeInTheDocument();
  });

  it('shows tooltip on hover with reading and meaning', async () => {
    render(<HoverWord text="食べる" reading="taberu" meaning="to eat" />);
    const word = screen.getByText('食べる');

    fireEvent.mouseOver(word);

    await waitFor(() => {
      expect(screen.getByText('taberu')).toBeInTheDocument();
      expect(screen.getByText('to eat')).toBeInTheDocument();
    });
  });

  it('applies different styling for new words', () => {
    const { container } = render(
      <HoverWord text="食べる" reading="taberu" meaning="to eat" isNewWord={true} />
    );
    const span = container.querySelector('span');
    expect(span).toHaveStyle({ borderBottom: '2px solid #0d6efd' });
  });

  it('applies default styling for regular words', () => {
    const { container } = render(
      <HoverWord text="を" reading="wo" meaning="(object marker)" isNewWord={false} />
    );
    const span = container.querySelector('span');
    expect(span).toHaveStyle({ borderBottom: '1px dotted #6c757d' });
  });
});
