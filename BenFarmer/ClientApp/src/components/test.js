import React, { Component } from 'react';

export class Test extends Component {
    static displayName = Test.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>

                        <th>   {forecasts.age}</th>
                    </tr>
                </thead>
        
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Test.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <h1 id="tabelLabel" >Test Name Age : </h1>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('NameAge');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
