import React, { useMemo, useState } from "react";
import ReactEcharts from "echarts-for-react"
import { rupiah } from "../../utils/helper.min";

function AnggaranDesa(props) {

    const [query, setQuery] = useState("");
    const [selectedKec, setSelectedKec] = useState("");
    const [selectedDeskel, setSelectedDeskel] = useState("");

    const { list_desa, list_kecamatan } = props.resultData

    const listDeskel = useMemo(() => {
        setSelectedDeskel("");
        return list_desa.filter(desa => {
            let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`
            return kode_kec === selectedKec
        })
    }, [list_desa, selectedKec])

    const listKec = useMemo(() => {
        return list_kecamatan
    }, [list_kecamatan])


    const dataChart = useMemo(() => {
        const deskel = list_kecamatan.filter(desa => {
            if (query !== "") {
                if (desa.nama_deskel.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                    return true;
                } else {
                    return false;
                }
            }
            if (selectedKec && selectedDeskel) {
                return desa.kode_wilayah === selectedDeskel
            } else if (selectedKec) {
                let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`
                return kode_kec === selectedKec
            } else {
                return true
            }
        })

        let data_apbd = deskel.map(desa => {
            return {
                nama_kec: desa.nama_kecamatan,
                anggaran: desa.anggaran_2021,
                anggaran2: desa.anggaran_2022,
                anggaran3: desa.anggaran_2023,
            }
        })

        data_apbd.sort((a, b) => {
            if (a.anggaran === b.anggaran) {
                return 0
            }
            if (a.anggaran > b.anggaran) {
                return -1
            }
            return 1
        })

        return data_apbd;
    }, [selectedKec, selectedDeskel, listDeskel, query])

    const options = useMemo(() => {

        let chart_kecamatan = dataChart.map(item => item.nama_kec);
        let chart_anggaran = dataChart.map(item => item.anggaran);
        let chart_anggaran2 = dataChart.map(item => item.anggaran2);
        let chart_anggaran3 = dataChart.map(item => item.anggaran3);

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
                data: chart_kecamatan,
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
                data: chart_anggaran,
                color: '#9AD295',
                tooltip: {
                    valueFormatter: function (value) {
                        return rupiah(value);
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
                data: chart_anggaran2,
                color: '#499841',
                tooltip: {
                    valueFormatter: function (value) {
                        return rupiah(value);
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
                data: chart_anggaran3,
                color: '#327A6D',
                tooltip: {
                    valueFormatter: function (value) {
                        return rupiah(value);
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
            tooltip: {
                trigger: "axis"
            },
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

export default AnggaranDesa
