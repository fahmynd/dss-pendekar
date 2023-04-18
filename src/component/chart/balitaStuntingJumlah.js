import React from "react";
import ReactEcharts from "echarts-for-react"

const BalitaStuntingJumlah = (props) => {
    const options = () => {
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
                text: 'Keterangan:'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                orient: 'horizontal',
                left: 150,
                top: 0,
                textStyle: {
                    fontSize: 13,
                    fontWeight: "bold"
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.3],
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
                inverse: true
            },
            series: [{
                name: 'Jumlah Balita Stunting',
                type: 'bar',
                data: chart_jumlah,
                color: '#327A6D',
                label: {
                    show: true,
                    position: "right"
                },
                itemStyle: {
                    borderRadius: [0, 5, 5, 0]
                },
                cursor: "auto"
            },
            {
                name: 'Persentase',
                type: 'bar',
                data: chart_persen,
                color: '#EA9501',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + '%';
                    }
                },
                label: {
                    show: true,
                    position: "right",
                    formatter: '{c}%'
                },
                itemStyle: {
                    borderRadius: [0, 5, 5, 0]
                },
                cursor: "auto"
            }
            ],
            dataZoom: [{
                type: 'inside',
                id: 'insideY',
                yAxisIndex: 0,
                start: 95,
                end: 100,
                zoomOnMouseWheel: false,
                moveOnMouseMove: true,
                moveOnMouseWheel: true
            }]
        }
    }

    return (
        <ReactEcharts
            option={options(props)}
            style={{ width: "auto", height: "100%" }}
        ></ReactEcharts>
    )
}

export default BalitaStuntingJumlah
