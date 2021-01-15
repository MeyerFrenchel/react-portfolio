import React from 'react';

import { Container, Grid } from '@material-ui/core';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
  <Container className={'top_60'}>
    <Grid container spacing={7}>
      <Grid item xs={12} sm={12} md={4} lg={4}>
        <Profile/>
      </Grid>
      <Grid item xs style={{backgroundColor: "rgb(7, 15, 15)"}}>
        <Header />
        <Router>
          <Switch>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          
          <Route path='/'>
            <Resume />
          </Route>
          </Switch>
        </Router>

        <Footer />
      </Grid>
    </Grid>
  </Container>
  );
}

export default App;
