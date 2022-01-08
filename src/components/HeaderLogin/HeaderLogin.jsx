import { useUser } from '../../context/UserContext.jsx';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../services/users.js';
import { useHistory } from 'react-router-dom';

export default function HeaderLogin({ loggedin }) {
  const { user, setUser } = useUser();
  const history = useHistory();

  const handleLogOut = async () => {
    await signOutUser();
    setUser(null);
    history.push('/login');
  };

  const loggedInDiv = (
    <div>
      {/* ? is elvis notation: checking to see if variable is defined before reading a property of that variable */}
      {user?.email} <button onClick={handleLogOut}>sign out</button>
    </div>
  );

  const notLoggedInDiv = (
    <div>
      <p>Not Signed in</p>
      <Link to="/login">
        <button>Sign in</button>
      </Link>
    </div>
  );

  return <div>{loggedin ? loggedInDiv : notLoggedInDiv}</div>;
}
