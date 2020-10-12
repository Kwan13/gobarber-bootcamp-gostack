import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

// GlobalStyle
import GlobalStyle from './styles/global';

// context
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
