import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App';
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';
import SomeOtherPage from './components/SomeOtherPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/search/pahe" component={SearchPage} />
    <Route path="/some/otherpage" component={SomeOtherPage} />
  </Route>
);