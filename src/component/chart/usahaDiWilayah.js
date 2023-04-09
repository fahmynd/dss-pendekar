import React from "react";
import ReactEcharts from "echarts-for-react"

class UsahaDiWilayah extends React.Component {
    getOptions = (props) => {
        let chart_desa = [];
        props.resultData.list_desa.forEach((item, index) => {
            chart_desa[index] = item.nama_deskel
        })
        let chart_jumlah = [];
        props.resultData.list_desa.forEach((item, index) => {
            chart_jumlah[index] = item.jml_umkm
        })

        return {
            title: {
                show: false
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {},
            grid: {
                height: '95%',
                left: '0',
                right: '4%',
                top: '5%',
                bottom: '20%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                min: 0,
                max: 10,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        width: 0,
                        type: "dashed"
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed"
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: chart_desa,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 0,
                        type: "dashed"
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed"
                    }
                },
                inverse: false
            },
            series: [{
                type: 'bar',
                data: chart_jumlah,
                label: {
                    show: true,
                    position: "right",
                    formatter: '{c}',
                    fontSize: 12
                },
                itemStyle: {
                    borderRadius: [0, 5, 5, 0]
                },
                cursor: "auto",
                color: '#499841'
            }
            ],
            dataZoom: [{
                type: 'inside',
                id: 'insideY',
                filterMode: 'weakFilter',
                yAxisIndex: 0,
                start: 90,
                end: 100,
                zoomOnMouseWheel: false,
                moveOnMouseMove: true,
                moveOnMouseWheel: true
            }]
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
