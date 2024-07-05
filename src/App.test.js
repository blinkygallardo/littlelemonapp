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
  expect(times.length).toBeGreaterThan(0);
});

test('Updates available times', () => {
  goToReservationPage();

  const dateElement = screen.getByLabelText("Choose date");
  fireEvent.change(dateElement, { target: { value : "2023-12-02"}});

  const timesElement = screen.getByLabelText("Choose time");
  const options = within(timesElement).getAllByRole("option");
  const times = options.map(c => c.innerHTML);
  expect(times).toEqual(["17:00", "17:30", "18:30", "20:00", "20:30", "21:00", "22:00", "23:30"]);
});

test('Fields have the correct attributes', () => {
  goToReservationPage();

  const dateElement = screen.getByLabelText("Choose date");
  var min = dateElement.attributes["min"];
  expect(min).toBeDefined();
  expect(min.value).toEqual(new Date().toISOString().slice(0, 10));

  const guestsElement = screen.getByLabelText("Number of guests");
  var min = guestsElement.attributes["min"];
  expect(min).toBeDefined();
  expect(min.value).toEqual("1");

  const phoneElement = screen.getByLabelText("Phone number *");
  var req = phoneElement.attributes["required"];
  expect(req).toBeDefined();

  const submitElement = screen.getByText("Make your reservation", {exact : false});
  var dis = submitElement.attributes["disabled"];
  expect(dis).toBeDefined();
});

test('Can submit valid form', () => {
  goToReservationPage();

  const phoneElement = screen.getByLabelText("Phone number *");
  fireEvent.change(phoneElement, { target: { value : "07919656565"}});

  const submitElement = screen.getByText("Make your reservation", {exact : false});
  expect(submitElement).toBeEnabled();
});

test('Cannot submit invalid form', () => {
  goToReservationPage();

  const phoneElement = screen.getByLabelText("Phone number *");
  fireEvent.blur(phoneElement);

  const errorElement = screen.getByText("Please add your mobile number", {exact : false});
  expect(errorElement).toBeVisible();

  const submitElement = screen.getByText("Make your reservation", {exact : false});
  expect(submitElement).toBeDisabled();
});