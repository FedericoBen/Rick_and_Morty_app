import { fireEvent, render, screen } from "@testing-library/react";
import { describe, beforeEach, vi, it, } from "vitest";
import Button from "../../components/atoms/button";

describe('Button Component', () => {
    const mockFun = vi.fn();
  
    beforeEach(() => {
      render(<Button onClick={mockFun}>onClick</Button>);
    });
  
    it('should call the onClick function when clicked', () => {
      const button = screen.getByText('onClick');
      fireEvent.click(button);
      expect(mockFun).toHaveBeenCalledTimes(1);
    });
  });