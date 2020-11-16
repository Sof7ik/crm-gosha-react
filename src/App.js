import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Base.scss';
import 'antd/dist/antd.css';

// ======== components ========
import Header from './components/header/Header';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';
import LoginPage from './components/loginPage/LoginPage';
// ======== components ========

import {useLogin} from './state/state';

function App() {
  return (
	<BrowserRouter>
		<Header/>

		<div id="wrapper">
			<Route exact path='/'> <LoginPage/> </Route> 	
			
			<Route path='/content'>
				<Sidebar/>
				<Content />
			</Route>
		</div>
		
	</BrowserRouter>
  );
}

export default App;