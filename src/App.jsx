'use strict';

var styles = require('./App.scss');

import React from 'react';
import { render } from 'react-dom';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Button from './components/Button';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<AppContext.Consumer>
        	    {(context) => (
        	        <div>
        	        	<p>Home</p>
        	            <Button text='Increase' onClick={context.inreaseCount}/>
        	            <Button text='Decrease' onClick={context.decreaseCount}/>
        	        </div>
        	    )}
        	</AppContext.Consumer>
        )
    }
}

class All extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<AppContext.Consumer>
        	    {(context) => (
        	        <div>
        	        	<p>All</p>
        	            <Button text='Increase' onClick={context.inreaseCount}/>
        	            <Button text='Decrease' onClick={context.decreaseCount}/>
        	        </div>
        	    )}
        	</AppContext.Consumer>
        )
    }
}

const AppContext = React.createContext();

// class AppProvider extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }

//         this.increaseCount = this.increaseCount.bind(this);
//         this.decreaseCount = this.decreaseCount.bind(this);
//     }

//     increaseCount() {
//     	this.setState({count: this.state.count += 1})
//     }

//     decreaseCount() {
//     	this.setState({count: this.state.count -= 1})
//     }

//     render() {
//         return (
//             <AppContext.Provider value={{
//                 state: this.state,
//                 inreaseCount: this.increaseCount,
//                 decreaseCount: this.decreaseCount,
//             }}>
//                 {this.props.children}
//             </AppContext.Provider>
//         )
//     }
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }

    increaseCount() {
    	this.setState({count: this.state.count += 1})
    }

    decreaseCount() {
    	this.setState({count: this.state.count -= 1})
    }

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
        	<AppContext.Provider value={{
        	    state: this.state,
        	    inreaseCount: this.increaseCount,
        	    decreaseCount: this.decreaseCount,
        	}}>
            {/*<AppProvider>*/}
                <div className='app'>
                   	<AppContext.Consumer>
                	    {(context) => (
                	        <div>
                	            <p>Current Count: {context.state.count}</p>
                	        </div>
                	    )}
                	</AppContext.Consumer>
                	<Router>
                		<React.Fragment>
	    	            	<Link to='/'>Home</Link>
	                		<Link to='/all'>All</Link>
	                		<Switch>
	                		    <Route exact path='/' component={Home}/>
	                		    <Route exact path='/all' component={All}/>
	                		</Switch>
                		</React.Fragment>
	                </Router>
                </div>
            {/*</AppProvider>*/}
            </AppContext.Provider>
        )
    }
}

export default App