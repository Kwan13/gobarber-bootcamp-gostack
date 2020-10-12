import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

// GlobalStyle
import GlobalStyle from './styles/global';

// context
import { AuthProvider } from './hooks/AuthContext';

import ToastContainer from './components/ToastContainer';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
};

export default App;
