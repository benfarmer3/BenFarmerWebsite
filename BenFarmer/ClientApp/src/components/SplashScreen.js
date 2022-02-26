import React, { Component } from 'react';

export class SplashScreen extends Component {
    static displayName = SplashScreen.name;

    render() {
        return (
            <div>
                <h1>Test </h1>
                <p>Welcome to your new single-page application, built with:</p>
                <p>To help you get started, we have also set up:</p>
            </div>
        );
    }
}
