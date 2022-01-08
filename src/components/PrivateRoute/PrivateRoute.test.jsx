import { render } from '@testing-library/react';
import PrivateRoute from './PrivateRoute.jsx';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext.jsx';

jest.mock('../../services/users.js');
jest.mock('../../context/UserContext.jsx');

it('should render private route', () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <PrivateRoute location="/" />
      </MemoryRouter>
    </UserProvider>
  );
  expect(container).toMatchSnapshot();
});
