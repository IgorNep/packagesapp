import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../state';
import RepoList from './RepoList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Serach for a Package</h1>
        <RepoList />
      </div>
    </Provider>
  );
};

export default App;
