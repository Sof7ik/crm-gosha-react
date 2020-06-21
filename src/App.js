import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './Base.scss';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

// ======== components ========
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';
// ======== components ========

function App() {
  return (
	<BrowserRouter>
		<Sidebar/>

		<Content />
	</BrowserRouter>
  );
}

export default App;