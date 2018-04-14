import React from 'react'

const apiUrl = 'https://data.colorado.gov/resource/p3jp-z4tq.json'

export default class List extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            revenueTotal: 0,
            expensesTotal: 0,
            percentOfCoverage: 0
        }
    }

    getData() {
        const apiUrl = 'https://data.colorado.gov/resource/p3jp-z4tq.json'
        let retrieveData = (response) => {
            this.setState({
                name: response[0].name,
                revenueTotal: 'Total Revenue: $' + response[0].revenuetotal,
                expensesTotal: 'Total Expenses: $' + response[0].expensestotal,
                percentOfCoverage: 'Percent of Coverage: ' + parseInt(response[0].expensestotal / response[0].revenuetotal * 100) + '%'
            })
            console.log(response[0])
        }
        return fetch(apiUrl)
            .then(response => response.json())
            .then(retrieveData)
            .catch()

    }
    
    componentWillMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.revenueTotal}</p>
                <p>{this.state.expensesTotal}</p>
                <p>{this.state.percentOfCoverage}</p>

            </div>
        )
    }
}