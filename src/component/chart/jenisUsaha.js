import React from "react";
import ReactEcharts from "echarts-for-react"

class JenisUsaha extends React.Component {
    getOptions = (props) => {
        let chart_jenis = [];
        for (const key in props.resultData.jenis_umkm) {
            // console.log(`${key}: ${props.resultData.chart_umkm[key]}`);
            chart_jenis.push(props.resultData.jenis_umkm[key])
        }

        let chart_jumlah = [];
        for (const key in props.resultData.chart_umkm) {
            // console.log(`${key}: ${props.resultData.chart_umkm[key]}`);
            chart_jumlah.push(props.resultData.chart_umkm[key])
        }

        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: chart_jenis
            },
            series: [{
                type: 'bar',
                data: chart_jumlah,
                color: '#EA9501'
            }
            ]
        }
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOptions(this.props)}
                style={{ width: "auto", height: "100%" }}
            ></ReactEcharts>
        )
    }
}

export default JenisUsaha
