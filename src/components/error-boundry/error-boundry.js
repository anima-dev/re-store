import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
    state = {
        gotError: false
    };

    componentDidCatch() {
        this.setState({
            gotError: true
        });
    };

    render() {
        if (this.state.gotError) {
            return (
                <ErrorIndicator msg={this.props.msg}/>
            );
        }
        return this.props.children;
    };
};
