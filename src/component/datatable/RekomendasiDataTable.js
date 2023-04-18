import React, { useMemo, useState, Fragment } from "react";
import DataTable from 'react-data-table-component';

const RekomendasiTable = (props) => {
    const { list_kecamatan, list_desa } = props.resultData.data;

    const [selectedKec, setSelectedKec] = useState("")
    const [selectedDesa, setSelectedDesa] = useState("")

    const rows = useMemo(() => {
        let data = list_desa;
        if (selectedKec !== "" && selectedKec !== '0') {
            data = data.filter(item => {
                let itemKec = `${item.k1}.${item.k2}.${item.k3}`

                return itemKec === selectedKec
            })
        }

        if (selectedDesa !== "" && selectedDesa !== '0') {
            data = data.filter(item => {
                let itemDesa = `${item.k1}.${item.k2}.${item.k3}.${item.k4}`

                return itemDesa === selectedDesa
            })
        }
        return data;

    }, [selectedKec, selectedDesa])

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
                    <select onChange={e => setSelectedKec(e.target.value)} defaultValue='0' className="form-select" aria-label="Pilih Kecamatan">
                        <option value='0'>Semua Kecamatan</option>
                        {list_kecamatan.map((item, key) => {
                            return (
                                <option key={key} value={item.kode_wilayah}>{item.nama_kecamatan}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="col-3">
                    <select onChange={e => setSelectedDesa(e.target.value)} defaultValue='0' className="form-select" aria-label="Pilih Desa">
                        <option value='0'>Semua Desa</option>
                        {list_desa.map((item, key) => {
                            return (
                                <option key={key} value={item.kode_wilayah}>{item.nama_deskel}</option>
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
                <div className="modal-dialog modal-lg shadow-lg rounded">
                    <div id="item-rekomendasi" className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Rekomendasi</h5>
                            <div data-bs-dismiss="modal" aria-label="Close" style={{ cursor: 'pointer' }}>
                                <span>Tutup</span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <h5><span className="badge bg-super-prioritas">Super Prioritas</span></h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr style={{ background: '#EDEDED' }}>
                                        <th scope="col">Item</th>
                                        <th scope="col">Kategori</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                        <td>Kesehatan</td>
                                    </tr>
                                    <tr>
                                        <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                        <td>Kesehatan</td>
                                    </tr>
                                    <tr>
                                        <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                        <td>Kesehatan</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h5><span className="badge bg-prioritas">Prioritas</span></h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr style={{ background: '#EDEDED' }}>
                                        <th scope="col">Item</th>
                                        <th scope="col">Kategori</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                        <td>Kesehatan</td>
                                    </tr>
                                    <tr>
                                        <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                        <td>Kesehatan</td>
                                    </tr>
                                    <tr>
                                        <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                        <td>Kesehatan</td>
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
