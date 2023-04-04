import React from "react";
import ReactEcharts from "echarts-for-react"

class UsahaDiWilayah extends React.Component {
    getOptions = (props) => {
        let chart_desa = [];
        props.resultData.list_kecamatan.forEach((item, index) => {
            chart_desa[index] = item.nama_kecamatan
        })
        let chart_jumlah = [];
        props.resultData.list_kecamatan.forEach((item, index) => {
            chart_jumlah[index] = item.jml_umkm
        })

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
                data: chart_desa
            },
            series: [{
                type: 'bar',
                data: chart_jumlah,
                color: '#499841'
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

export default UsahaDiWilayah
