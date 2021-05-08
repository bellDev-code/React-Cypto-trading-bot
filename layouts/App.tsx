import Login from '@pages/Login';
import Signup from '@pages/Signup';
import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import styles from '@utils/styles';

const AppContainer = styled.div`
  height: 100vh;
  > div {
    height: 100%;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <ThemeProvider theme={styles}>
        <BrowserRouter>
          <Switch>
            <Redirect exact path="/" to="/login"></Redirect>
            <Route path="/login" render={() => <Login />} />
            <Route path="/signup" render={() => <Signup />} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </AppContainer>
  );
};

export default App;
