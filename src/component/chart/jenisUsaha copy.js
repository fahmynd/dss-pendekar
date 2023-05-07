import React, { useMemo, useState } from "react";
import ReactEcharts from "echarts-for-react"

const JenisUsaha = (props) => {
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
        const deskel = list_desa.filter(desa => {
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

        let data_umkm = deskel.map(desa => {
            let jenis_umkm = [];
            for (const key in props.resultData.jenis_umkm) {
                jenis_umkm.push(props.resultData.jenis_umkm[key])
            }

            let chart_umkm = [];
            for (const key in props.resultData.chart_umkm) {
                chart_umkm.push(props.resultData.chart_umkm[key])
            }
            return {
                jenis_umkm: desa.kuliner,
                chart_umkm: desa.market,
            }
        })

        data_umkm.sort((a, b) => {
            if (a.chart_umkm === b.chart_umkm) {
                return 0
            }
            if (a.chart_umkm > b.chart_umkm) {
                return -1
            }
            return 1
        })

        return data_umkm;
    }, [selectedKec, selectedDeskel, listDeskel, query])

    const options = useMemo(() => {
        // let chart_jenis = [];
        // for (const key in dataChart.jenis_umkm) {
        //     dataChart.map(item => item.jenis_umkm[key])
        // }

        // let chart_jumlah = [];
        // for (const key in dataChart.chart_umkm) {
        //     dataChart.map(item => item.chart_umkm[key])
        // }

        let chart_jenis = dataChart.map(item => item.jenis_umkm);
        let chart_jumlah = dataChart.map(item => item.chart_umkm);

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
                boundaryGap: [0, 1],
                min: 0,
                max: function (value) {
                    return value.max;
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
                filterMode: 'empty',
                zoomOnMouseWheel: false,
                moveOnMouseMove: true,
                moveOnMouseWheel: true
            }]
        }
    }, [dataChart])

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title-potensi">JENIS USAHA</h2>
                <div className="filter-primary">
                    <button type="button" className="btn btn-primary">Export Report</button>
                </div>
                <div className="row g-1 mb-0 pb-0">
                    <div className="col">
                        <div className="search-produk">
                            <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                <input value={query} onChange={e => setQuery(e.target.value)} type="text" name="query" placeholder="Cari Desa/Kelurahan..." title="Enter search keyword" />
                                <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="col">
                        <select onChange={e => setSelectedKec(e.target.value)} className="form-select" aria-label="Default select example">
                            <option value={''}>Semua Kecamatan</option>
                            {listKec.map((item) => {
                                return (
                                    <option key={item.kode_wilayah} value={item.kode_wilayah} selected={selectedKec === item.kode_wilayah}>{item.nama_kecamatan}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="col">
                        <select onChange={e => setSelectedDeskel(e.target.value)} className="form-select" aria-label="Default select example">
                            <option value={''}>Semua Desa</option>
                            {listDeskel.map((item) => {
                                return (
                                    <option key={item.kode_wilayah} value={item.kode_wilayah} selected={selectedDeskel === item.kode_wilayah}>{item.nama_deskel}</option>
                                )
                            })}
                        </select>
                    </div>

                </div>
                <div style={{ height: '400px' }}>
                    <ReactEcharts
                        option={options}
                        style={{ width: "auto", height: "100%" }}
                    ></ReactEcharts>
                </div>
            </div>
        </div>
    )
}

export default JenisUsaha
