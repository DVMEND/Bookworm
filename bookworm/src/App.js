//import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles';
import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';

import "./index.css";



import Search from "./components/Search";


// export default () => {
//   return (
//     <div>
//       <Search />
//     </div>
//   )

  
// }



function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/landingpage">
            <LandingPage />
          </Route>
        </Switch>
      </Layout>
  </Router>
  );
}

export default App;