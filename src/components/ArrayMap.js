import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class ArrayMap extends Component{
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    //background: '#f4f4f4',
		            foreColor: '#333'
                },
                xaxis: {
                    time: []
                },
                plotOptions: {
                    bar: {
                        horizontal: false // if true it would be horizontal
                    }
                },
                fill: {
                    colors: ['#f44336']
                },
                dateLabels: {
                    enabled: false
                },
                title: {
                    text: 'Array Manipulation',
                    align: 'center',
                    margin: 20,
                    offsetY: 20,
                    style: {
                        fontSize: '25px'
                    }
                }
            },
            series: [
                {
                    name: 'Data1',
                    data: []
                },
                {
                    name: 'Data2',
                    data: []
                }
            ]
        }
    }

    array1 = () => {
        return (
            Object.values(this.props.data.c1).map(c => {
                return Object.values(c)[0].map( a => {
                    return a.value
                })
            })
        )
    }

    array2 = () => {
        return (
            Object.values(this.props.data.c2).map(c => {
                return Object.values(c)[0].map( a => {
                    return a.value
                })
            })
        )
    }

    time = () => {
        return(
            Object.values(this.props.data.c1).map(c => {
                return Object.values(c)[0].map( a => {
                    return a.time
                })
            })
        )
    }

    componentDidMount() {
        this.setState({
            options: {
                ...this.state.options,
                xaxis: {
                    time: this.time()[0]

                }
            },
		    series: [
                {
                    name: 'Data1',
                    data: this.array1()[0]
                },
                {
                    name: 'Data2',
                    data: this.array1()[1]
                },
                {
                    name: 'Data3',
                    data: this.array2()[0]
                },
                {
                    name: 'Data4',
                    data: this.array2()[1]
                },
            ]
        })
    }

    render() {
        const styling = {
            textAlign: "center",
            fontSize: 20
        };
        const aTag = {
            textDecoration: "none",
            color: '#006bb3'
        }
        const { options, series } = this.state;
        return (
            <div>
                <React.Fragment>
                    <Chart 
                        options = {options}
                        series = {series}
                        type="line"
                        height= "450"
                        width= "100%"
                    />
                    <div style={styling}>Made by <a style={aTag} href="https://github.com/Radinax">Adrian Beria</a></div>
                </React.Fragment>
            </div>
        )
    }
}

export default ArrayMap;