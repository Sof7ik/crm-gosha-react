import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import './Base.scss';
import 'antd/dist/antd.css';

// ======== components ========
import Header from './components/header/Header';
// ======== components ========

import Authcontext from "./context/AuthContext";

import {useRoutes} from './routes.js';

function App() {
	const routes = useRoutes(false);
	return (
		<Authcontext.Provider value={{id: 1}}>
			<BrowserRouter>
				<Header/>

				<div id="wrapper">
					{
						routes
					}
				</div>

			</BrowserRouter>
		</Authcontext.Provider>
	);
}

export default App;