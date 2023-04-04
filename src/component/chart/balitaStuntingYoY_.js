import React from "react";
import ReactEcharts from "echarts-for-react"

class BalitaYoY extends React.Component {
    getOptions = (props) => {
        let chart_tahun = [];
        props.resultData.data.stunting.forEach((item, index) => {
            chart_tahun[index] = item.tahun
        })
        let chart_jumlah = [];
        props.resultData.data.stunting.forEach((item, index) => {
            chart_jumlah[index] = item.jml_stunting
        })
        let chart_persen = [];
        props.resultData.data.stunting.forEach((item, index) => {
            chart_persen[index] = item.persen_stunting
        })

        return {
            title: {
                text: 'Keterangan:'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            // toolbox: {
            //     feature: {
            //         dataView: { show: true, readOnly: false },
            //         magicType: { show: true, type: ['line', 'bar'] },
            //         restore: { show: true },
            //         saveAsImage: { show: true }
            //     }
            // },
            legend: {
                orient: 'horizontal',
                left: 150
            },
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
            yAxis: [
                {
                    type: 'value',
                    name: 'JUMLAH BALITA STUNTING',
                    nameLocation: "center",
                    nameGap: 40,
                    nameTextStyle: {
                        fontWeight: "bold",
                    },
                    min: 0,
                    max: 500,
                    // interval: 50,
                },
                {
                    type: 'value',
                    name: 'PERSENTASE BALITA STUNTING',
                    nameLocation: "center",
                    nameGap: 40,
                    nameTextStyle: {
                        fontWeight: "bold",
                    },
                    min: 0,
                    max: 5,
                    // interval: 5,
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }
            ],
            series: [
                {
                    name: 'Jumlah Balita Stunting',
                    type: 'bar',
                    data: chart_jumlah,
                    color: '#2CA454'
                },
                {
                    name: 'Persentase',
                    type: 'line',
                    yAxisIndex: 1,
                    tooltip: {
                        valueFormatter: function (value) {
                            return value + '%';
                        }
                    },
                    data: chart_persen,
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

export default BalitaYoY
