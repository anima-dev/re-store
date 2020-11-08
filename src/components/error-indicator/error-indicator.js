import React from 'react';
import './error-indicator.css';

const ErrorIndicator = ({msg}) => {
    return (
        <div>
            <h2>Oops!</h2>
            <p>{msg}</p>
        </div>
    );
};

export default ErrorIndicator;