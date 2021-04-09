import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Router, LocationProvider } from '@reach/router';

import Dashboard from './components/Dashboard';
import theme from './theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocationProvider>
        {({ location }) => (
          <Router basepath="/" location={location}>
            <Dashboard path="*" />
          </Router>
        )}
      </LocationProvider>
    </ThemeProvider>
  );
};

export default App;