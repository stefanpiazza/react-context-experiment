'use strict';

var styles = require('./App.scss');

import React from 'react';

import Button from './components/Button';

const AppContext = React.createContext();

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
                inreaseCount: () => this.setState({count: this.state.count += 1}),
                decreaseCount: () => this.setState({count: this.state.count -=1})
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppProvider>
                <div className='app'>
                    <AppContext.Consumer>
                        {(context) => (
                            <div>
                                <p>Current Count: {context.state.count}</p>
                                <Button text='Increase' onClick={context.inreaseCount}/>
                                <Button text='Decrease' onClick={context.decreaseCount}/>
                            </div>
                        )}
                    </AppContext.Consumer>
                </div>
            </AppProvider>
        )
    }
}

export default App