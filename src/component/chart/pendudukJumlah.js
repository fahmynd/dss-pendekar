import ReactEcharts from "echarts-for-react"
import React from "react"

const PendudukJumlah = (props) => {
    const options = () => {
        let chart_desa = [];
        props.resultData.list_desa.forEach((item, index) => {
            chart_desa[index] = item.nama_deskel
        })
        let chart_pria = [];
        props.resultData.list_desa.forEach((item, index) => {
            chart_pria[index] = item.pria
        })
        let chart_wanita = [];
        props.resultData.list_desa.forEach((item, index) => {
            chart_wanita[index] = item.wanita
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
                containLabel: true,
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: chart_desa,
            },
            series: [{
                name: 'Laki-Laki',
                type: 'bar',
                data: chart_pria,
                color: '#327A6D',
            },
            {
                name: 'Perempuan',
                type: 'bar',
                data: chart_wanita,
                color: '#EA9501',
            }
            ]
        }
    }

    return (
        <ReactEcharts
            option={options(props)}
            style={{ width: "auto", height: "500rem" }}
        ></ReactEcharts>
    )
}

export default PendudukJumlah
