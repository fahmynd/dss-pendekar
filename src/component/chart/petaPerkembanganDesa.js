import React, { useMemo } from "react";
import ReactEcharts from "echarts-for-react"

const STATUS_DESA = ['SANGAT TERTINGGAL', 'TERTINGGAL', 'BERKEMBANG', 'MAJU', 'MANDIRI']
const STATUS_COLORS = ['#E84C30', '#EA9501', '#4B7DB8', '#499841', '#327A6D'] // Update with desired colors

export const PetaPerkembangan = (props) => {
    const data = useMemo(() => {
        const { list_desa } = props.resultData.data

        const transformed = list_desa.map((desa, index) => {
            const statusIndex = STATUS_DESA.indexOf(desa.current_status);
            const color = STATUS_COLORS[statusIndex] || '#000000'; // Default to black if status is not recognized

            return {
                name: `${desa.nama_deskel}: SDGS ${desa.capaian.sdgs} | IDM ${desa.capaian.idm} (${desa.current_status})`,
                type: "scatter",
                data: [
                    [
                        desa.capaian.idm,
                        desa.capaian.sdgs
                    ],
                ],
                symbolSize: 25,
                itemStyle: {
                    color: color
                }
            }
        })

        return transformed;
    }, [props.resultData])


    const chartSettings = useMemo(() => {
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
            // toolbox: {
            //     feature: {
            //         dataView: { show: true, readOnly: false },
            //         magicType: { show: true, type: ['line', 'bar'] },
            //         restore: { show: true },
            //         saveAsImage: { show: true }
            //     },
            //     right: 65,
            //     top: 20
            // },
            legend: {
                show: false
            },
            grid: {
                left: "3%",
                right: "7%",
                bottom: "6%",
                // containLabel: true,
                tooltip: {
                    trigger: "item",
                    formatter: '{a}'
                }
            },
            xAxis: {
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
                }
            },
            series: data
        }
    }, [data])

    return (
        <ReactEcharts
            option={chartSettings}
            style={{ width: "auto", height: "500px" }}
        ></ReactEcharts>
    )
}