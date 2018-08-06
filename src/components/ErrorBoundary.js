import React, { Component } from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        })
    }

    render() {
        if(this.state.hasError){
            return <h1>Ooops.  That's not good... there's been an error!</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;