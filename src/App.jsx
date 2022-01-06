import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login/Login.jsx';
import Profile from './views/Profile/Profile.jsx';
import Home from './views/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Register from './views/Register/Register.jsx';
import EditProfile from './views/EditProfile/EditProfile.jsx';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/editprofile">
          <EditProfile />
        </Route>
      </Switch>
    </Router>
  );
}
