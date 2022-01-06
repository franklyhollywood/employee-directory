import { useContext, createContext, useState } from 'react';

const userContext = createContext();

const userProvider = ({ children }) => {
  const [user, setUser] = useState('');

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(userContext);

  if (context === undefined) {
    throw new Error('Incorrect Placement');
  }
  return context;
};

export { userProvider, useUser };
