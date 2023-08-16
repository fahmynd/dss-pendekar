import React, { useMemo, useState } from "react";
import ReactEcharts from "echarts-for-react";

const BalitaStuntingJumlah = (props) => {
    const { data } = props.data;

    const [query, setQuery] = useState("");
    const [selectedKec, setSelectedKec] = useState("");
    const [selectedDeskel, setSelectedDeskel] = useState("");

    const listDeskel = useMemo(() => {
        setSelectedDeskel("");
        return data.list_desa.filter(desa => {
            let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`
            return kode_kec === selectedKec
        })
    }, [data, selectedKec])

    const listKec = useMemo(() => {
        return data.list_kecamatan
    }, [data])

    const dataChart = useMemo(() => {
        const deskel = data.list_desa.filter(desa => {
            if (query !== "") {
                if (desa.nama_deskel.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                    return true;
                } else {
                    return false;
                }
            }
            if (selectedKec && selectedDeskel) {
                return desa.kode_wilayah === selectedDeskel;
            } else if (selectedKec) {
                let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`
                return kode_kec === selectedKec
            } else {
                return true;
            }
        });

        let data_stunting = deskel.map(desa => {
            return {
                nama_desa: desa.nama_deskel,
                keluarga_sasaran: desa.keluarga_sasaran_2022,
                berisiko: desa.berisiko_2022,
                kk_memiliki_baduta: desa.kk_memiliki_baduta_2022,
                kk_memiliki_balita: desa.kk_memiliki_balita_2022,
                kk_memiliki_pus: desa.kk_memiliki_pus_2022,
                kk_memiliki_pushamil: desa.kk_memiliki_pushamil_2022,
                persen_stunting: desa.persen_stunting_2022,
            }
        })

        data_stunting.sort((a, b) => b.keluarga_sasaran - a.keluarga_sasaran);

        return data_stunting;

    }, [selectedKec, selectedDeskel, listDeskel, query])

    const options = useMemo(() => {
        const chart_desa = dataChart.map((item) => item.nama_desa);
        const chart_keluarga_sasaran = dataChart.map((item) => item.keluarga_sasaran);
        const chart_berisiko = dataChart.map((item) => item.berisiko);
        const chart_kk_memiliki_baduta = dataChart.map((item) => item.kk_memiliki_baduta);
        const chart_kk_memiliki_balita = dataChart.map((item) => item.kk_memiliki_balita);
        const chart_kk_memiliki_pus = dataChart.map((item) => item.kk_memiliki_pus);
        const chart_kk_memiliki_pushamil = dataChart.map((item) => item.kk_memiliki_pushamil);
        const chart_persen_stunting = dataChart.map((item) => item.persen_stunting);

        return {
            title: {
                text: "Keterangan:",
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            // toolbox: {
            //     feature: {
            //         dataView: { show: true, readOnly: false },
            //         magicType: { show: true, type: ["line", "bar"] },
            //         restore: { show: true },
            //         saveAsImage: { show: true },
            //     },
            //     right: 30,
            // },
            legend: {
                orient: "horizontal",
                left: 150,
                top: 0,
                textStyle: {
                    fontSize: 13,
                    fontWeight: "bold",
                },
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true,
            },
            xAxis: {
                type: "value",
                position: "bottom",
                min: 0,
                max: (value) => value.max,
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed",
                    },
                },
            },
            yAxis: {
                type: "category",
                data: chart_desa,
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 0,
                        type: "dashed",
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed",
                    },
                },
                inverse: true,
            },
            series: [
                {
                    name: "Keluarga Sasaran",
                    type: "bar",
                    data: chart_keluarga_sasaran,
                    label: {
                        show: true,
                        position: "right",
                    },
                    itemStyle: {
                        borderRadius: [0, 5, 5, 0],
                    },
                    cursor: "auto",
                },
                {
                    name: "Berisiko",
                    type: "bar",
                    data: chart_berisiko,
                    label: {
                        show: true,
                        position: "right",
                    },
                    itemStyle: {
                        borderRadius: [0, 5, 5, 0],
                    },
                    cursor: "auto",
                },
                {
                    name: "Baduta",
                    type: "bar",
                    data: chart_kk_memiliki_baduta,
                    label: {
                        show: true,
                        position: "right",
                    },
                    itemStyle: {
                        borderRadius: [0, 5, 5, 0],
                    },
                    cursor: "auto",
                },
                {
                    name: "Balita",
                    type: "bar",
                    data: chart_kk_memiliki_balita,
                    label: {
                        show: true,
                        position: "right",
                    },
                    itemStyle: {
                        borderRadius: [0, 5, 5, 0],
                    },
                    cursor: "auto",
                },
                {
                    name: "Pasangan Usia Subur (PUS)",
                    type: "bar",
                    data: chart_kk_memiliki_pus,
                    label: {
                        show: true,
                        position: "right",
                    },
                    itemStyle: {
                        borderRadius: [0, 5, 5, 0],
                    },
                    cursor: "auto",
                },
                {
                    name: "PUS Hamil",
                    type: "bar",
                    data: chart_kk_memiliki_pushamil,
                    label: {
                        show: true,
                        position: "right",
                    },
                    itemStyle: {
                        borderRadius: [0, 5, 5, 0],
                    },
                    cursor: "auto",
                },
                {
                    name: "Persentase",
                    type: "bar",
                    data: chart_persen_stunting,
                    color: "#EA9501",
                    tooltip: {
                        valueFormatter: (value) => `${value}%`,
                    },
                    label: {
                        show: true,
                        position: "right",
                        formatter: "{c}%",
                    },
                    itemStyle: {
                        borderRadius: [0, 5, 5, 0],
                    },
                    cursor: "auto",
                },
            ],
            dataZoom: [
                {
                    type: "inside",
                    id: "insideY",
                    yAxisIndex: 0,
                    startValue: 98,
                    endValue: 100,
                    filterMode: "empty",
                    zoomOnMouseWheel: false,
                    moveOnMouseMove: true,
                    moveOnMouseWheel: true,
                },
            ],
        };
    }, [dataChart]);

    return (
        <div className="card">
            <div className="card-body pt-4">
                <div className="row g-md-0">
                    <div className="col-12">
                        <div className="stunting-card">
                            <div className="box-featured">
                                <h5 className="card-title">JUMLAH STUNTING DI DESA/KELURAHAN</h5>
                            </div>
                            <div className="card-body-chart mt-2 mb-5">
                                <div className="filter-primary d-none">
                                    <button type="button" className="btn btn-primary">
                                        Export Report
                                    </button>
                                </div>
                                <div className="row g-1 mb-4">
                                    <div className="col-3">
                                        <div className="search-produk">
                                            <form className="search-form-produk d-flex align-items-center">
                                                <input
                                                    value={query}
                                                    onChange={(e) => setQuery(e.target.value)}
                                                    type="text"
                                                    name="query"
                                                    placeholder="Cari Desa/Kelurahan..."
                                                    title="Enter search keyword"
                                                />
                                                <button type="submit" title="Search" disabled>
                                                    <i className="bi bi-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <select
                                            onChange={(e) => setSelectedKec(e.target.value)}
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option value={""} selected>
                                                Semua Kecamatan
                                            </option>
                                            {listKec.map((item) => (
                                                <option
                                                    key={item.kode_wilayah}
                                                    value={item.kode_wilayah}
                                                    selected={selectedKec === item.kode_wilayah}
                                                >
                                                    {item.nama_kecamatan}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-3">
                                        <select
                                            onChange={(e) => setSelectedDeskel(e.target.value)}
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            <option value={""} selected>
                                                Semua Desa
                                            </option>
                                            {listDeskel.map((item) => (
                                                <option
                                                    key={item.kode_wilayah}
                                                    value={item.kode_wilayah}
                                                    selected={selectedDeskel === item.kode_wilayah}
                                                >
                                                    {item.nama_deskel}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <ReactEcharts option={options} style={{ width: "auto", height: "100%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BalitaStuntingJumlah;
