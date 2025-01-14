import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./styles.css";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <App />
);

/*
  todo - 아래 형식은 17버전 (참고 : https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis)

  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

*/