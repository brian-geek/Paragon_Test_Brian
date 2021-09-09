import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Page Imports
import WorkMode from './pages/WorkMode';
import EditMode from './pages/EditMode';

const Routes = () => {
  return (
    <Switch>
      <Route path={'/worker'} exact component={WorkMode} />
      <Route path={'/editor/:id'} component={EditMode} />
      <Redirect from="/" to="/worker" />
    </Switch>
  );
};

export default Routes;
