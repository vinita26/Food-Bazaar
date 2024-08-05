import { fireEvent, render, screen } from "@testing-library/react";
import Body from '../Body.js';
import { act } from "react-dom/test-utils";
import MOCK_DATA from '../../mocks/mockResListData.json';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

beforeAll(()=> {
    console.log('Before All');
});

beforeEach(()=> {
    console.log('Before Each');
});
afterAll(()=> {
    console.log('After All');
});

afterEach(()=> {
    console.log('After Each');
});






it("Should search RestList with Search input",async ()=>{
  await  act( async () => render(<BrowserRouter><Body /></BrowserRouter>))

  const searchBtn = screen.getByRole('button', {name: 'Search'});

  const searchInput = screen.getByTestId('searchInput');

  fireEvent.change(searchInput, {target: {value: "Burger"}});

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId('resCard');
  expect(cards.length).toBe(1);


});