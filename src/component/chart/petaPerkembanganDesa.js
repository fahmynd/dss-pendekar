import React from "react";
import ReactEcharts from "echarts-for-react"

export const PetaPerkembangan = (props) => {
    const options = () => {
        // let chart_sdgs = [];
        // props.resultData.data.list_desa.forEach((item, index) => {
        //     chart_sdgs[index] = item.capaian.sdgs
        // })

        // let chart_idm = [];
        // props.resultData.data.list_desa.forEach((item, index) => {
        //     chart_idm[index] = item.capaian.idm
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
                containLabel: true,
                tooltip: {
                    trigger: "item",
                    formatter: '{a}'
                }
            },
            xAxis: {
                data: ['SANGAT TERTINGGAL', 'TERTINGGAL', 'BERKEMBANG', 'MAJU', 'MANDIRI'],
                scale: true,
                axisLabel: {
                    formatter: "{value}"
                },
                axisPointer: {
                    type: 'none'
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
                name: "SDGS",
                scale: true,
                axisLabel: {
                    formatter: "{value}"
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
                        [0, 0],
                    ],
                    symbolSize: 13,
                    label: {}
                },
                {
                    name: "TERTINGGAL",
                    type: "scatter",
                    data: [
                        [0, 0.3],
                    ],
                    symbolSize: 13,
                    label: {}
                },
                {
                    name: "BERKEMBANG",
                    type: "scatter",
                    data: [
                        [0, 0.8],
                    ],
                    symbolSize: 13,
                    label: {}
                },
                {
                    name: "MAJU",
                    type: "scatter",
                    data: [
                        [0, 1.3],
                    ],
                    symbolSize: 13,
                    label: {}
                },
                {
                    name: "MANDIRI",
                    type: "scatter",
                    data: [
                        [0, 2.3],
                    ],
                    symbolSize: 13,
                    label: {
                        show: false
                    },
                    tooltip: {
                        valueFormatter: function (value) {
                            return value + '';
                        }
                    },
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