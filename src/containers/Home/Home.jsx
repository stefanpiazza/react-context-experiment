'use strict';

import React from 'react';

import {AppContext} from '../../contexts';

import Button from '../../components/Button';

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

export default Home