import { useState } from 'react';
import EmailPasswordForm from '../../components/EmailPasswordForm/EmailPasswordForm.jsx';
import { useUser } from '../../context/UserContext.jsx';
import { signInUser } from '../../services/users.js';
import { useHistory } from 'react-router-dom';
import { useProfile } from '../../context/ProfileContext.jsx';

export default function Register() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const { profile } = useProfile();

  const handleSignIn = async (e) => {
    // call signup function coming from users file
    e.preventDefault();
    const user = await signInUser(email, password);
    setUser(user);
    {
      profile ? history.replace('/profile') : history.replace('/editprofile');
    }
  };
  return (
    <>
      <h2>Welcome!</h2>
      <EmailPasswordForm
        signin={true}
        handleSubmit={handleSignIn}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <p>
        Need an account?<a href="/register">Sign up</a>
      </p>
    </>
  );
}
