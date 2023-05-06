import React, { useMemo, useState } from "react";
import ReactEcharts from "echarts-for-react"


const BalitaStuntingJumlah = (props) => {
    const [query, setQuery] = useState("");
    const [selectedKec, setSelectedKec] = useState("");
    const [selectedDeskel, setSelectedDeskel] = useState("");

    const { data } = props.data

    const listDeskel = useMemo(() => {
        setSelectedDeskel("");
        return data.list_desa.filter(desa => {
            let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`
            return kode_kec === selectedKec
        })
    }, [data, selectedKec])

    const listKec = useMemo(() => {
        return data.list_kecamatan
    },[data])


    const dataChart = useMemo(() => {
        const deskel = data.list_desa.filter(desa => {
            if (query !== "") {
                if (desa.nama_deskel.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                    return true;
                }else{
                    return false;
                }
            }
            if (selectedKec && selectedDeskel) {
                return desa.kode_wilayah === selectedDeskel
            }else if(selectedKec){
                let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`
                return kode_kec === selectedKec
            }else{
                return true
            }
        })

        let data_stunting = deskel.map(desa => {
            return {
                nama_desa: desa.nama_deskel,
                jumlah_stunting: desa.jml_stunting_2022,
                persentasi: desa.persen_stunting_2022
            }
        })
        
        data_stunting.sort((a,b) => {
            if (a.jumlah_stunting === b.jumlah_stunting) {
                return 0
            }
            if (a.jumlah_stunting > b.jumlah_stunting) {
                return -1
            }
            return 1
        })

        return data_stunting;
    },[selectedKec,selectedDeskel,listDeskel, query])

    const options = useMemo(() => {

        let chart_desa = dataChart.map(item => item.nama_desa);
        let chart_jumlah = dataChart.map(item => item.jumlah_stunting);
        let chart_persen = dataChart.map(item => item.persentasi);

        return {
            title: {
                text: 'Keterangan:'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                },
                right: 30
            },
            legend: {
                orient: 'horizontal',
                left: 150,
                top: 0,
                textStyle: {
                    fontSize: 13,
                    fontWeight: "bold"
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                position: "bottom",
                min: 0,
                max: function (value) {
                    return value.max;
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed"
                    }
                },
            },
            yAxis: {
                type: 'category',
                data: chart_desa,
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
                inverse: true
            },
            series: [{
                name: 'Jumlah Balita Stunting',
                type: 'bar',
                data: chart_jumlah,
                color: '#327A6D',
                label: {
                    show: true,
                    position: "right"
                },
                itemStyle: {
                    borderRadius: [0, 5, 5, 0]
                },
                cursor: "auto"
            },
            {
                name: 'Persentase',
                type: 'bar',
                data: chart_persen,
                color: '#EA9501',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + '%';
                    }
                },
                label: {
                    show: true,
                    position: "right",
                    formatter: '{c}%'
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
                yAxisIndex: 0,
                startValue: 95,
                endValue: 100,
                filterMode: 'empty',
                zoomOnMouseWheel: false,
                moveOnMouseMove: true,
                moveOnMouseWheel: true
            }]
        }
    }, [dataChart])

    return (
        <div className="card">
            <div className="card-body pt-4">
                <div className="row g-md-0">
                    <div className="col-12">
                        <div className="stunting-card">
                            <div className="box-featured">
                                <h5 className="card-title">JUMLAH BALITA STUNTING DI DESA/KELURAHAN</h5>
                            </div>
                            <div className="card-body-chart mt-2 mb-5">
                                <div className="filter-primary d-none">
                                    <button type="button" className="btn btn-primary">Export Report</button>
                                </div>
                                <div className="row g-1 mb-4">
                                    <div className="col-3">
                                        <div className="search-produk">
                                            <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                                <input value={query} onChange={e => setQuery(e.target.value)} type="text" name="query" placeholder="Cari Desa/Kelurahan..." title="Enter search keyword" />
                                                <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <select onChange={e => setSelectedKec(e.target.value)} className="form-select" aria-label="Default select example">
                                            <option value={''}>Semua Kecamatan</option>
                                            {listKec.map((item) => {                                            
                                                return (
                                                    <option key={item.kode_wilayah} value={item.kode_wilayah} selected={selectedKec === item.kode_wilayah}>{item.nama_kecamatan}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-3">
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

                                <ReactEcharts
                                    option={options}
                                    style={{ width: "auto", height: "100%" }}
                                ></ReactEcharts>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BalitaStuntingJumlah
