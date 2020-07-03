import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Alert from './components/Alert/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
	<Provider store={store}>
		<Router>
		<Fragment>
			<Navbar />
      		<section className='container'>
				  <Alert />
				<Switch>
					<Route exact path='/register' component={RegisterPage} />
					<Route exact path='/login' component={LoginPage} />
				</Switch>
			</section>
    	</Fragment>
  	    </Router>
	</Provider>
);
    

export default App;
