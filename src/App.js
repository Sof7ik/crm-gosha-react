import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import './Base.scss';
import 'antd/dist/antd.css';

// ======== components ========
import Header from './components/header/Header';
// ======== components ========

import Authcontext from "./context/AuthContext";

import {useRoutes} from './routes.js';
import {useAuth} from "./hooks/auth.hook";

function App() {
    const {login, logout, token, userId} = useAuth()
    const isAuthed = !!userId;
	const routes = useRoutes(isAuthed);
	return (
		<Authcontext.Provider value={{userId, token, login, logout}}>
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