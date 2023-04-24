import { describe, test, expect } from 'vitest'
import {  render, fireEvent  } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
/* import { toBeInTheDocument } from '@testing-library/jest-dom'; */
import Header from './Header';


describe('Header Component', () => {

  test('should render the DrawerCart component', () => {
      const { getByLabelText  } = render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>)
      const drawerCart = getByLabelText(/open cart drawer/i)
      expect(drawerCart).toBeDefined()
    });

    test('should render the title correctly', () => {
        const { getByText } = render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>)
        const title = getByText(/MSTORE!/i)
        expect(title).toBeDefined()
    })

    test('should navigate to the home page when clicking the logo! title', () => {
      const { getByRole } = render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>);
      const homeLink = getByRole('link', { name: /mstore!/i });
      expect(homeLink).toBeDefined()

      fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');
    });


})