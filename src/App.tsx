import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <Routes />
    <GlobalStyle />
  </Router>
);

export default App;
