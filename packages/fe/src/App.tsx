import React from 'react';
import { Card, CssBaseline, Paper, ThemeProvider } from '@material-ui/core';
import { Router, LocationProvider, Link, RouteComponentProps } from '@reach/router';

import Dashboard from './components/Dashboard';
import theme from './theme';

const Home = (_props: RouteComponentProps) => (
  <Paper>
    <Card><Link to="/cittadino">Cittadino</Link></Card>
    <Card><Link to="/decision-maker">Decision Maker</Link></Card>
  </Paper>
)

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocationProvider>
        {({ location }) => (
          <Router basepath="/" location={location}>
            <Home default />
            <Dashboard path=":type" />
          </Router>
        )}
      </LocationProvider>
    </ThemeProvider>
  );
};

export default App;