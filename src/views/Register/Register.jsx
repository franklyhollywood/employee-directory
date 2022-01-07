import { useState } from 'react';
import EmailPasswordForm from '../../components/EmailPasswordForm/EmailPasswordForm.jsx';
import { useUser } from '../../context/UserContext.jsx';
import { signUpUser } from '../../services/users.js';
import { useHistory } from 'react-router-dom';

export default function Register() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const handleSignup = async (e) => {
    // call signup function coming from users file
    e.preventDefault();
    const user = await signUpUser(email, password);
    setUser(user);
    history.replace('/editprofile');
  };
  return (
    <>
      <h2>Welcome!</h2>
      <EmailPasswordForm
        signin={false}
        handleSubmit={handleSignup}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <p>
        Already have an account?<a href="/login">Sign In</a>
      </p>
    </>
  );
}
