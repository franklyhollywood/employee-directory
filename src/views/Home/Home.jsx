import HeaderLogin from '../../components/HeaderLogin/HeaderLogin.jsx';
import { useUser } from '../../context/UserContext';

export default function Home() {
  const { user } = useUser();

  return (
    <>
      <div>
        <h1>Welcome to the Acme Inc. Employee Directory!</h1> As an employee of
        Acme Inc., you're required to create a profile on our intranet in order
        to gain access to... things. Create an account, then log in and fill out
        the requested details. Thank you for your participation.
        {!user ? (
          <>
            <a href="/register">Create Account </a>
            or <a href="/login">Sign In</a>
          </>
        ) : (
          <p>
            <a href="/profile">View your profile</a>
          </p>
        )}
      </div>
    </>
  );
}
