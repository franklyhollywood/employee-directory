import { render } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext.jsx';

jest.mock('../../services/users.js');
jest.mock('../../context/UserContext.jsx');

it('header test', () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});

it('header test', () => {
  const { container } = render(
    <UserProvider mockUser={{ email: 'email@email.com' }}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
