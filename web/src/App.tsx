import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

// GlobalStyle
import GlobalStyle from './styles/global';

// context
import ToastContainer from './components/ToastContainer';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
