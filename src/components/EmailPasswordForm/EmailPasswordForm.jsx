export default function EmailPasswordForm({
  handleSubmit,
  signin,
  email,
  setEmail,
  password,
  setPassword,
}) {
  const text = signin ? 'SIGN IN' : 'SIGN UP';
  return (
    <div>
      {/* <h2>Welcome!</h2> */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>{text}</legend>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
            />
          </div>
          <button type="submit">{text}</button>
        </fieldset>
      </form>
    </div>
  );
}
