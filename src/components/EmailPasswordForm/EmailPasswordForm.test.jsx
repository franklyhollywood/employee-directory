import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import EmailPasswordForm from './EmailPasswordForm.jsx';

it('should render form', () => {
  const { container } = render(<EmailPasswordForm />);

  expect(container).toMatchSnapshot();
});
