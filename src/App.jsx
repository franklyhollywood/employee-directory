import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login/Login.jsx';
import Profile from './views/Profile/Profile.jsx';
import Home from './views/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Register from './views/Register/Register.jsx';
import EditProfile from './views/EditProfile/EditProfile.jsx';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import { ProfileProvider } from './context/ProfileContext';

export default function App() {
  return (
    <UserProvider>
      <ProfileProvider>
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
              <Profile />
            </PrivateRoute>
            <PrivateRoute exact path="/editprofile">
              <EditProfile />
            </PrivateRoute>
          </Switch>
        </Router>
      </ProfileProvider>
    </UserProvider>
  );
}
