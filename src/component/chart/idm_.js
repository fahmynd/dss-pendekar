import React from "react";
import ReactEcharts from "echarts-for-react"

class IdmChart extends React.Component {
    getOptions = (props) => {
        let chart_tahun = [];
        props.resultData.data.idm.forEach((item, index) => {
            chart_tahun[index] = item.tahun
        })
        let chart_idm = [];
        props.resultData.data.idm.forEach((item, index) => {
            chart_idm[index] = item.skor_idm
        })
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            legend: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: chart_tahun,
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [{
                type: 'category',
                data: chart_idm,
            }],
            series: [
                {
                    name: 'IDM',
                    type: 'line',
                    yAxisIndex: 1,
                    tooltip: {
                        valueFormatter: function (value) {
                            return value + '%';
                        }
                    },
                    data: chart_idm,
                    color: '#E58B20'
                },
            ]
        }
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOptions(this.props)}
                style={{ width: "auto", height: "500px" }}
            ></ReactEcharts>
        )
    }
}

export default IdmChart
