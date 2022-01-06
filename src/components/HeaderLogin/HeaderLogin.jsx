export default function HeaderLogin(props) {
  const loggedInDiv = (
    <div>
      email address <button>sign out</button>
    </div>
  );

  const notLoggedInDiv = (
    <div>
      <p>Not Signed in</p>
      <button>Sign in</button>
    </div>
  );

  return <div>{props.loggedin ? loggedInDiv : notLoggedInDiv}</div>;
}
