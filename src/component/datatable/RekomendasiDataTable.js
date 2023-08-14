import React, { useMemo, useState, Fragment } from "react";
import DataTable from 'react-data-table-component';
import "./RekomendasiDataTable.css";

const RekomendasiTable = (props) => {
    const { list_kecamatan, list_desa } = props.resultData.data;

    const [selectedKec, setSelectedKec] = useState("")
    const [selectedDesa, setSelectedDesa] = useState("")
    const [query, setQuery] = useState("")

    const listDeskel = useMemo(() => {
        setSelectedDesa("");
        return list_desa.filter(desa => {
            let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`
            return kode_kec === selectedKec
        })
    }, [list_desa, selectedKec])

    const listKec = useMemo(() => {
        return list_kecamatan
    }, [list_kecamatan])

    const rows = useMemo(() => {
        const deskel = list_desa.filter(desa => {
            if (query !== "") {
                if (desa.nama_deskel.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                    return true;
                } else {
                    return false;
                }
            }
            if (selectedKec && selectedDesa) {
                return desa.kode_wilayah === selectedDesa
            } else if (selectedKec) {
                let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`
                return kode_kec === selectedKec
            } else {
                return true
            }
        })

        return deskel;

    }, [selectedKec, selectedDesa, query, listDeskel])

    const customStyles = {
        headCells: {
            style: {
                fontSize: '15px',
                fontWeight: 'bold',
                backgroundColor: '#F1ECFF',
                borderRight: '1px solid #EDEDED',
                borderTop: '1px solid #EDEDED',
            },
        },
        cells: {
            style: {
                fontSize: '15px',
                borderRight: '1px solid #EDEDED',
            },
        },
    };

    let statusIDM = {
        '': { 'class': '' },
        'SANGAT TERTINGGAL': { 'class': 'bg-super-prioritas' },
        'TERTINGGAL': { 'class': 'bg-prioritas' },
        'BERKEMBANG': { 'class': 'bg-rkd' },
        'MAJU': { 'class': 'bg-pengajuan' },
        'MANDIRI': { 'class': 'bg-verifikasi' },
    };

    return (
        <Fragment>
            <div className="row g-1 my-4">
                <div className="col-3">
                    <div className="search-produk">
                        <form className="search-form-produk d-flex align-items-center">
                            <input value={query} onChange={e => setQuery(e.target.value)} type="text" name="query" placeholder="Cari Desa/Kelurahan..." title="Enter search keyword" />
                            <button type="submit" title="Search" disabled><i className="bi bi-search"></i></button>
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
                    <select onChange={e => setSelectedDesa(e.target.value)} className="form-select" aria-label="Default select example">
                        <option value={''}>Semua Desa</option>
                        {listDeskel.map((item) => {
                            return (
                                <option key={item.kode_wilayah} value={item.kode_wilayah} selected={selectedDesa === item.kode_wilayah}>{item.nama_deskel}</option>
                            )
                        })}
                    </select>
                </div>

            </div>
            <DataTable
                columns={
                    [
                        {
                            name: "No",
                            selector: (row, index) => index + 1,
                            width: "70px",
                            style: {
                                borderLeft: "1px solid #EDEDED"
                            }
                        },
                        {
                            name: "Kecamatan",
                            sortable: true,
                            selector: (row) => row.nama_kecamatan,
                        },
                        {
                            name: "Desa",
                            sortable: true,
                            selector: (row) => row.nama_deskel,
                        },
                        {
                            name: "Status",
                            sortable: true,
                            selector: (row) => row.current_status,
                            cell: (row) => {
                                return (
                                    <h5>
                                        <span className={`badge ${statusIDM[row.current_status].class}`}>{row.current_status}</span>
                                    </h5>
                                )
                            },
                            width: "200px"
                        },
                        {
                            name: "Skor IDM",
                            sortable: true,
                            selector: (row) => row.capaian.idm,
                        },
                        {
                            name: "Skor SDGS",
                            sortable: true,
                            selector: (row) => row.capaian.sdgs,
                        },
                        {
                            name: "Rekomendasi",
                            sortable: true,
                            selector: (row) => row.rekomendasi,
                            cell: (row) => {
                                return (
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#disablebackdrop">
                                        Lihat Rekomendasi
                                    </button>
                                )
                            },
                            width: "220px"
                        }
                    ]
                }
                data={rows}
                customStyles={customStyles}
                pagination
            />

            <div className="modal fade" id="disablebackdrop" tabIndex="-1" data-bs-backdrop="false">
                <div className="modal-dialog modal-fullscreen shadow-lg rounded">
                    <div id="item-rekomendasi" className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Rekomendasi</h5>
                            <div data-bs-dismiss="modal" aria-label="Close" style={{ cursor: 'pointer' }}>
                                <span>Tutup</span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <table className="tg" style={{ width: '100%' }}>
                                <thead style={{ backgroundColor: '#317A75', color: 'white' }}>
                                    <tr>
                                        <th className="tg-amwm" rowSpan="2">No</th>
                                        <th className="tg-amwm" rowSpan="2">Indikator IDM</th>
                                        <th className="tg-amwm" rowSpan="2" >Skor</th>
                                        <th className="tg-amwm" rowSpan="2">Keterangan</th>
                                        <th className="tg-amwm" rowSpan="2">Kegiatan yang dapat dilakukan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="tg-baqh">-</td>
                                        <td className="tg-baqh">-</td>
                                        <td className="tg-baqh">-</td>
                                        <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>-</span></td>
                                        <td className="tg-baqh">-</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-zwfm text-center" colSpan="12">SKOR - : -</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-baqh">-</td>
                                        <td className="tg-baqh">-</td>
                                        <td className="tg-baqh">-</td>
                                        <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>-</span></td>
                                        <td className="tg-baqh">-</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-zwfm text-center" colSpan="12">SKOR - : -</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-baqh">-</td>
                                        <td className="tg-baqh">-</td>
                                        <td className="tg-baqh">-</td>
                                        <td className="tg-baqh"><span style={{ fontWeight: '400', fontStyle: 'normal' }}>-</span></td>
                                        <td className="tg-baqh">-</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-zwfm text-center" colSpan="12">SKOR - : -</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-zwfm text-center" colSpan="12">IDM <span id="tahunIDM" name="tahunIDM">-</span> : -</td>
                                    </tr>
                                    <tr>
                                        <td className="tg-zwfm text-center" colSpan="12">STATUS IDM <span id="tahunIDM" name="tahunIDM">-</span> : -</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default RekomendasiTable;
