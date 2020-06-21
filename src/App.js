import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './Style.module.css';

// ======== components ========
import Header from './components/header/Header';
import Content from './components/content/Content';
// ======== components ========

function App() {
  return (
	<div className={`${styles.wrapper}`}>
		<Header image="./components/header/img/Logo.png"/>
		<BrowserRouter>
			<Content />
		</BrowserRouter>
	</div>
  );
}

export default App;