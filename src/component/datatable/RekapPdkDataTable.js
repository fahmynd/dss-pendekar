import React, { useMemo, useState, Fragment } from "react";
import DataTable from 'react-data-table-component';

const RekapPendudukTable = (props) => {
    const { list_kecamatan, list_desa } = props.resultData;

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

    return (
        <Fragment>
            <div className="row g-1 mb-4">
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
                            name: "Laki-Laki",
                            sortable: true,
                            selector: (row) => row.pria,
                        },
                        {
                            name: "Perempuan",
                            sortable: true,
                            selector: (row) => row.wanita,
                        },
                        {
                            name: "Jumlah Penduduk",
                            sortable: true,
                            selector: (row) => row.jumlah_penduduk,
                        },
                        {
                            name: "Jumlah KK",
                            sortable: true,
                            selector: (row) => row.jumlah_kk,
                        },
                        {
                            name: "Wajib KTP",
                            sortable: true,
                            selector: (row) => row.jml_wktp,
                        },
                    ]
                }
                data={rows}
                customStyles={customStyles}
                pagination
            />

        </Fragment>
    )
}

export default RekapPendudukTable;