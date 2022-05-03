import React from 'react'; 

import Routes from './routes/index';
import { AuthProvider } from './contexts/Auth';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
   </AuthProvider>
  );
}

export default App;
