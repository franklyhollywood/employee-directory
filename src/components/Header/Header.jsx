import HeaderLogin from '../HeaderLogin/HeaderLogin.jsx';

export default function Header() {
  return (
    <div>
      <HeaderLogin loggedin={true} />
      <h1>Acme Employee Directory</h1>
      <hr></hr>
    </div>
  );
}
