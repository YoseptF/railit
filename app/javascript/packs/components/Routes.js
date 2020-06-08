import {
  Link, Switch, Route, useHistory,
} from 'react-router-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Hello from './Hello';


const Routes = ({ initialUrl }) => {
  const history = useHistory();
  useEffect(() => {
    // history.push(initialUrl);
  }, []);

  return (
    <>
      <Link to="/dogo">Dogo</Link>
      <Link to="/">/</Link>
      <Switch>
        <Route path="/:name"><Hello /></Route>
      </Switch>
    </>
  );
};

Routes.propTypes = {
  initialUrl: PropTypes.string.isRequired,
};

export default Routes;
