import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './Base.scss';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

// ======== components ========
import Header from './components/header/Header';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';
// ======== components ========

function App() {
  return (
	<BrowserRouter>
		<Header/>
		<div id="wrapper">
			<Sidebar/>
			<Content />
		</div>
	</BrowserRouter>
  );
}

export default App;