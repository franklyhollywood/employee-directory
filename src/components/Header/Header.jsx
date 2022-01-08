import HeaderLogin from '../HeaderLogin/HeaderLogin.jsx';
import { useUser } from '../../context/UserContext.jsx';

export default function Header() {
  const { user } = useUser();
  return (
    <div>
      <HeaderLogin loggedin={user ? true : false} />
      <h1>Acme Employee Directory</h1>
      <hr></hr>
    </div>
  );
}
