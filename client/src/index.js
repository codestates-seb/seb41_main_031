import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

const container = document.getElementById('root');
const root = createRoot(container);

/*redux 예시*/
const num = 14;

function reducer(state = num, action) {
  if (action.type === 'increase') {
    state = action.number;
    return state;
  } else if (action.type === 'decrease') {
    state--;
    return state;
  } else if (action.type === 'ADD_TODO') {
    return [];
  }

  return state;
}

let contain = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={contain}>
      <App />
    </Provider>
  </React.StrictMode>
);

App();
