import React, { useMemo } from "react";
import ReactEcharts from "echarts-for-react"

const STATUS_DESA = ['SANGAT TERTINGGAL', 'TERTINGGAL', 'BERKEMBANG', 'MAJU', 'MANDIRI']

export const PetaPerkembangan = (props) => {
    const data = useMemo(() => {
        const { list_desa } = props.resultData.data

        const transformed = list_desa.map(desa => {

            return {
                name: desa.nama_deskel + ` - Skor SDGS ${desa.capaian.sdgs}`,
                type: "scatter",
                data: [
                    [
                        desa.capaian.idm,
                        desa.capaian.sdgs
                    ],
                ],
                symbolSize: 20,
                label: {}
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