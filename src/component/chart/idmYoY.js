import React from "react";
import ReactEcharts from "echarts-for-react"

const IdmChart = (props) => {
    const options = () => {
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
                    type: 'none'
                }
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                },
                right: 15,
                top: -5
            },
            legend: {},
            grid: {
                height: '80%',
                left: '0',
                right: '4%',
                top: '5%',
                bottom: '20%',
                containLabel: true,
                tooltip: {
                    trigger: "item"
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: chart_tahun,
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
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    min: 0,
                    max: 1,
                    splitNumber: 10,
                    data: chart_idm,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: "dashed"
                        }
                    }
                }
            ],
            series: [
                {
                    type: 'line',
                    data: chart_idm,
                    symbolSize: 10,
                    color: '#E58B20'
                },
            ]
        }
    }

    return (
        <ReactEcharts
            option={options(props)}
            style={{ width: "auto", height: "100%" }}
        ></ReactEcharts>
    )
}

export default IdmChart
