import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Routes, Route, MemoryRouter } from "react-router-dom";

const memoryHistory = createMemoryHistory(options);

ReactDOM.render(
  <MemoryRouter>
    <Routes>
      <Route path="/files*"><Redirect to="https://files.owenoertell.com/" /></Route>
      <Route path="*" element={<App />} />
    </Routes>
  </MemoryRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
