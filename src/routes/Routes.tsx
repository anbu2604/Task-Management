import React, { FC } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import * as Screen from '../screen';
import { routes } from './template';

const Routes: FC = () => {
  return (
    <Switch>
      <Route path={routes.login} element={<Screen.Task />} />
    </Switch>
  );
};

export default Routes;
