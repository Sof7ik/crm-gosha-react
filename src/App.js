import React, {useEffect, useCallback} from 'react';
import { BrowserRouter} from 'react-router-dom';
import './Base.scss';
import 'antd/dist/antd.css';

// ======== components ========
import Header from './components/header/Header';
// ======== components ========

import {useRoutes} from './routes.js';
import {useLoginState} from './state/state';

function App() {
	const routes = useRoutes(false);
	return (
		<BrowserRouter>
			<Header/>

			<div id="wrapper">
				{
					routes
				}
			</div>
			
		</BrowserRouter>
  	);
}

export default App;