import { render } from '@testing-library/react';
import HeaderLogin from './HeaderLogin';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext.jsx';

jest.mock('../../services/users.js');
jest.mock('../../context/UserContext.jsx');

it('header test', () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <HeaderLogin />
      </MemoryRouter>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
