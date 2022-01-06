import React from 'react';

export default function EmailPasswordForm(props) {
  const text = props.signin ? 'SIGN IN' : 'SIGN UP';
  return (
    <div>
      <h2>Welcome!</h2>
      <form>
        <fieldset>
          <legend>{text}</legend>
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
          <button>{text}</button>
        </fieldset>
      </form>
    </div>
  );
}
