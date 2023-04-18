import React from "react";
import ReactEcharts from "echarts-for-react"

export const PetaPerkembangan = (props) => {
    const options = () => {
        // let chart_tahun = [];
        // props.resultData.data.stunting.forEach((item, index) => {
        //     chart_tahun[index] = item.tahun
        // })

        // let chart_jumlah = [];
        // props.resultData.data.stunting.forEach((item, index) => {
        //     chart_jumlah[index] = item.jml_stunting
        // })

        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            legend: {},
            grid: {
                left: "3%",
                right: "7%",
                bottom: "3%",
                containLabel: true
            },
            xAxis: {
                type: "value",
                scale: true,
                axisLabel: {
                    formatter: "IDM: {value}"
                },
                axisPointer: {
                    type: 'shadow'
                },
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
                type: "value",
                scale: true,
                axisLabel: {
                    formatter: "SDGS: {value}"
                },
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
            },
            series: [
                {
                    name: "SANGAT TERTINGGAL",
                    type: "scatter",
                    data: [
                        [174, 65.6],
                    ],
                    symbolSize: 13,
                    label: {}
                },
                {
                    name: "TERTINGGAL",
                    type: "scatter",
                    data: [
                        [175.3, 71.8],
                    ],
                    symbolSize: 13,
                    label: {}
                },
                {
                    name: "BERKEMBANG",
                    type: "scatter",
                    data: [
                        [193.5, 80.7],
                    ],
                    symbolSize: 13,
                    label: {}
                },
                {
                    name: "MAJU",
                    type: "scatter",
                    data: [
                        [186.5, 72.6],
                    ],
                    symbolSize: 13,
                    label: {}
                },
                {
                    name: "MANDIRI",
                    type: "scatter",
                    data: [
                        [187.2, 78.8],
                    ],
                    symbolSize: 13,
                    label: {}
                },
            ]
        }
    }

    return (
        <ReactEcharts
            option={options()}
            style={{ width: "auto", height: "500px" }}
        ></ReactEcharts>
    )
}