import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';


const App = () => (
	<Router>
		<Fragment>
			<Navbar />
      		<section className='container'>
				<Switch>
					<Route exact path='/register' component={RegisterPage} />
					<Route exact path='/login' component={LoginPage} />
				</Switch>
			</section>
    	</Fragment>
  </Router>
);
    

export default App;
