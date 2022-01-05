import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
