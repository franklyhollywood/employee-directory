import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login/Login.jsx';
import Profile from './views/Profile/Profile.jsx';
import Home from './views/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Register from './views/Register/Register.jsx';
import EditProfile from './views/EditProfile/EditProfile.jsx';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';

export default function App() {
  return (
    <UserProvider>
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
          <PrivateRoute exact path="/profile">
            <Profile
              name={'Marvin'}
              email={'marvinlambert@me.com'}
              birthdate={'Birthdate: 01/01/1977'}
              aboutme={<b>Bio: anything about me</b>}
            />
          </PrivateRoute>
          <PrivateRoute exact path="/editprofile">
            <EditProfile create={false} />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserProvider>
  );
}
