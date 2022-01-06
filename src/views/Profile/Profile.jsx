export default function Profile(props) {
  return (
    <>
      <button>EDIT PROFILE</button>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.birthdate}</p>
      <p>{props.aboutme}</p>
    </>
  );
}
