import React, { useMemo } from "react";
import ReactEcharts from "echarts-for-react"

const STATUS_DESA = ['SANGAT TERTINGGAL', 'TERTINGGAL', 'BERKEMBANG', 'MAJU', 'MANDIRI']
const STATUS_COLORS = ['#E84C30', '#EA9501', '#4B7DB8', '#499841', '#327A6D']

export const PetaPerkembangan = (props) => {
    const data = useMemo(() => {
        const { list_desa } = props.resultData.data

        const transformed = list_desa.map((desa, index) => {
            const statusIndex = STATUS_DESA.indexOf(desa.current_status);
            const color = STATUS_COLORS[statusIndex] || '#000000';

            return {
                // name: desa.current_status,
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
            legend: {
                show: false,
            },
            grid: {
                top: 30,
                left: 30,
                right: 40,
                bottom: 50,
                // containLabel: true,
                tooltip: {
                    trigger: "item",
                    formatter: '{a}'
                }
            },
            xAxis: {
                type: "value",
                name: "IDM",
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
                name: "SDGs",
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
        <div>
            <ReactEcharts
                option={chartSettings}
                style={{ width: "auto", height: "500px" }}
            />
            <div className="row g-0 text-center fw-bold small">
                <p className="col"><i className="bi bi-circle-fill" style={{ color: '#E84C30' }}></i> SANGAT TERTINGGAL</p>
                <p className="col"><i className="bi bi-circle-fill" style={{ color: '#EA9501' }}></i> TERTINGGAL</p>
                <p className="col"><i className="bi bi-circle-fill" style={{ color: '#4B7DB8' }}></i> BERKEMBANG</p>
                <p className="col"><i className="bi bi-circle-fill" style={{ color: '#499841' }}></i> MAJU</p>
                <p className="col"><i className="bi bi-circle-fill" style={{ color: '#327A6D' }}></i> MANDIRI</p>
            </div>
        </div>
    )
}