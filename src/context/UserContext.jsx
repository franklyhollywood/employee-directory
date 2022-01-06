import { useContext, createContext, useState } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(
    currentUser ? { id: currentUser.id, email: currentUser.email } : null
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const UserCtx = useContext(UserContext);

  if (UserCtx === undefined) {
    throw new Error('Must be wrapped in a userprovider to use useUser');
  }
  return UserCtx;
};

export { UserProvider, useUser };
