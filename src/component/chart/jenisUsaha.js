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
                left: '10',
                right: '4%',
                top: '5%',
                bottom: '20%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                min: 0,
                max: 10,
                boundaryGap: [0, 0.01],
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
                data: chart_jenis,
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
            series: [{
                type: 'bar',
                data: chart_jumlah,
                color: '#EA9501',
                label: {
                    show: true,
                    position: "right",
                    formatter: '{c}',
                    fontSize: 12
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
                filterMode: 'weakFilter',
                yAxisIndex: 0,
                start: 0,
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

export default JenisUsaha
