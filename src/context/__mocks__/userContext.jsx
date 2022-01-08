import { useContext, createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ mockUser, children }) => {
  const [user, setUser] = useState(mockUser ? { email: mockUser.email } : {});

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
