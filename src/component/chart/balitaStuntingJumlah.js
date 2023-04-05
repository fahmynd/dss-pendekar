import React from "react";
import ReactEcharts from "echarts-for-react"

class BalitaStuntingJumlah extends React.Component {
    getOptions = (props) => {
        let chart_desa = [];
        props.resultData.data.list_desa.forEach((item, index) => {
            chart_desa[index] = item.nama_deskel
        })
        let chart_jumlah = [];
        props.resultData.data.list_desa.forEach((item, index) => {
            chart_jumlah[index] = item.jml_stunting_2022
        })
        let chart_persen = [];
        props.resultData.data.list_desa.forEach((item, index) => {
            chart_persen[index] = item.persen_stunting_2022
        })

        return {
            title: {
                text: 'Keterangan'
            },
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
                data: chart_desa.reverse(),
            },
            series: [{
                name: 'Jumlah Balita Stunting',
                type: 'bar',
                data: chart_jumlah.reverse(),
                color: '#327A6D'
            },
            {
                name: 'Persentase',
                type: 'bar',
                data: chart_persen.reverse(),
                color: '#EA9501'
            }
            ]
        }
    }

    render() {
        return (
            <ReactEcharts
                option={this.getOptions(this.props)}
                style={{ width: "auto", height: "500rem" }}
            ></ReactEcharts>
        )
    }
}

export default BalitaStuntingJumlah
