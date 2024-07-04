import { render, screen, fireEvent, within } from "@testing-library/react";
import App from "./App";

let goToReservationPage = () => {
  render(<App />);
  const linkElement = screen.getAllByText("Reservation")[0];
  fireEvent.click(linkElement);
};

test('Renders the ReservationForm heading', () => {
  goToReservationPage();

  const headingElement = screen.getByText("Book a table");
  expect(headingElement).toBeInTheDocument();
});

test('Initializes available times', () => {
  goToReservationPage();

  const timesElement = screen.getByLabelText("Choose time");
  const options = within(timesElement).getAllByRole("option");
  const times = options.map(c => c.innerHTML);
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]);
});

test('Updates available times', () => {
  goToReservationPage();

  const dateElement = screen.getByLabelText("Choose date");
  fireEvent.change(dateElement, { target: { value : "2023-12-02"}});

  const timesElement = screen.getByLabelText("Choose time");
  const options = within(timesElement).getAllByRole("option");
  const times = options.map(c => c.innerHTML);
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});