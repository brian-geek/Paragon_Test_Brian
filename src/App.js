import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
//routes
import Routes from './routes';
//page layout
import Layout from './layout';


const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
};

export default App;
