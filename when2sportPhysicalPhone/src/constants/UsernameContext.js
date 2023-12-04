import React from 'react';

const UsernameContext = React.createContext({
  username: '',
  setUsername: () => { },
});

export default UsernameContext;