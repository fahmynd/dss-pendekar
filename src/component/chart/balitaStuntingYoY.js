import React, { useMemo } from "react";
import ReactEcharts from "echarts-for-react"
import { formatAngka } from "../../utils/helper.min";

const BalitaYoY = (props) => {
    const { stunting } = props.resultData.data;
    const dataChart = useMemo(() => {
        const sortedData = stunting.map(item => ({
            tahun: item.tahun,
            nama_keluarga_sasaran: item.keluarga_sasaran,
            nama_berisiko: item.berisiko,
            nama_kk_memiliki_baduta: item.kk_memiliki_baduta,
        }));

        sortedData.sort((a, b) => b.nama_keluarga_sasaran - a.nama_keluarga_sasaran);

        return sortedData;
    }, [stunting]);

    const options = useMemo(() => {
        const chart_tahun = dataChart.map(item => item.tahun);
        const chart_keluarga_sasaran = dataChart.map(item => item.nama_keluarga_sasaran);
        const chart_berisiko = dataChart.map(item => item.nama_berisiko);
        const chart_kk_memiliki_baduta = dataChart.map(item => item.nama_kk_memiliki_baduta);

        return {
            title: {
                show: false
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            legend: {
                bottom: '-5'
            },
            grid: {
                top: 40,
                right: 40,
                bottom: 60,
                left: 100,
                // containLabel: true
            },
            xAxis: {
                type: "category",
                data: chart_tahun,
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed"
                    }
                },
            },
            yAxis: {
                type: "value",
                min: 0,
                max: function (value) {
                    return value.max;
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
            series: [{
                name: 'Data Tahun 2021',
                type: 'bar',
                data: chart_keluarga_sasaran,
                color: '#9AD295',
                tooltip: {
                    valueFormatter: function (value) {
                        return formatAngka(value);
                    }
                },
                label: {
                    show: false,
                    position: "top"
                },
                itemStyle: {
                    borderRadius: [5, 5, 0, 0]
                },
                cursor: "auto"
            },
            {
                name: 'Data Tahun 2022',
                type: 'bar',
                data: chart_berisiko,
                color: '#499841',
                tooltip: {
                    valueFormatter: function (value) {
                        return formatAngka(value);
                    }
                },
                label: {
                    show: false,
                    position: "top",
                    // formatter: '{c}%'
                },
                itemStyle: {
                    borderRadius: [5, 5, 0, 0]
                },
                cursor: "auto"
            },
            {
                name: 'Data Tahun 2023',
                type: 'bar',
                data: chart_kk_memiliki_baduta,
                color: '#327A6D',
                tooltip: {
                    valueFormatter: function (value) {
                        return formatAngka(value);
                    }
                },
                label: {
                    show: false,
                    position: "top",
                    // formatter: '{c}%'
                },
                itemStyle: {
                    borderRadius: [5, 5, 0, 0]
                },
                cursor: "auto"
            }
            ],
            // tooltip: {
            //     trigger: "axis"
            // },
            // dataZoom: [{
            //     type: 'inside',
            //     id: 'insideX',
            //     yAxisIndex: 0,
            //     startValue: 100,
            //     endValue: 100,
            //     filterMode: 'empty',
            //     zoomOnMouseWheel: false,
            //     moveOnMouseMove: true,
            //     moveOnMouseWheel: true
            // }]
        }
    }, [dataChart])

    return (
        <ReactEcharts
            option={options}
            style={{ width: "auto", height: "500px" }}
        ></ReactEcharts>
    )
}

export default BalitaYoY
