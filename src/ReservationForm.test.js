import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import ReservationForm from './components/sections/reservePages/BookingForm'; // Adjust the import based on your file structure

const mockUpdateTimes = jest.fn();
const mockAvailableTimes = ['5:00 PM', '6:00 PM', '7:00 PM']; // Example times

describe('ReservationForm', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ReservationForm
          availableTimes={mockAvailableTimes}
          updateTimes={mockUpdateTimes}
        />
      </MemoryRouter>,
    );
  });

  it('renders the form with all fields', () => {
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of people/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/seating preferences/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/additional comments/i)).toBeInTheDocument();
  });

  it('displays validation messages when required fields are empty', async () => {
    fireEvent.click(screen.getByText(/book table/i));

    expect(
      await screen.findByText(/first name is required/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/last name is required/i),
    ).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/phone number is required/i),
    ).toBeInTheDocument();
  });

  it('does not show validation messages when fields are filled', async () => {
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: '1234567890' },
    });

    fireEvent.click(screen.getByText(/book table/i));

    expect(
      screen.queryByText(/first name is required/i),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/last name is required/i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/email is required/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/phone number is required/i),
    ).not.toBeInTheDocument();
  });

  it('submits the form with valid data', async () => {
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByLabelText(/number of people/i), {
      target: { value: '2' },
    });
    fireEvent.change(screen.getByLabelText(/select date/i), {
      target: { value: '2024-10-12' },
    });
    fireEvent.change(screen.getByLabelText(/select time/i), {
      target: { value: '5:00 PM' },
    });

    jest.spyOn(console, 'log');

    // Submit the form
    fireEvent.click(screen.getByText(/book table/i));
  });
});
