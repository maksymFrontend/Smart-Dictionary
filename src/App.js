import logo from './logo.svg';
import './App.css';
import {Router, Route, Link, Redirect, Switch, BrowserRouter} from 'react-router-dom';
import React, {useState, useMemo, useRef, useEffect} from 'react';
import {Provider, connect}   from 'react-redux';
import { Root } from './components/Root'
import { history } from './helpers'
import { store } from './reducers/createStore'
const REACT_VERSION = React.version;
console.log(REACT_VERSION) // 18.2.0
console.log(history)

function App() {
  return (
    <BrowserRouter>
		<Provider store={store}>
			<Root/>
		</Provider>
	</BrowserRouter>
  );
}

export default App;
