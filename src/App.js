import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MoviesList from './containers/MoviesList/MoviesList';

function App() {
  return (
     <Switch>
       <Route path='/' component = {MoviesList}/>
     </Switch>
  );
}

export default App;
