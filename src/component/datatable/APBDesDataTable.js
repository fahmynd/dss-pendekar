import React, { useMemo, useState, Fragment } from "react";
import DataTable from 'react-data-table-component';
import { rupiah } from "../../utils/helper.min";

const APBDTable = (props) => {
    const { list_kecamatan } = props.resultData;

    const [selectedKec, setSelectedKec] = useState("")
    const [query, setQuery] = useState("")

    const rows = useMemo(() => {
        let data = list_kecamatan;
        if (selectedKec !== "" && selectedKec !== '0') {
            data = data.filter(item => {
                let itemKec = `${item.k1}.${item.k2}.${item.k3}`

                return itemKec === selectedKec
            })
        }

        if (query !== "" && query !== '0') {
            data = data.filter(item => {
                return item.nama_kecamatan.toLowerCase().includes(query)
            })
        }

        return data;

    }, [selectedKec, query])

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
                    <div className="search-produk">
                        <form className="search-form-produk d-flex align-items-center">
                            <input type="text" name="query" placeholder="Cari Kecamatan..." title="Enter search keyword" onChange={e => setQuery(e.target.value)} />
                            <button title="Search"><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                </div>
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
                            name: "Anggaran",
                            sortable: true,
                            selector: (row) => rupiah(row.anggaran_2023),
                        },
                        {
                            name: "Realisasi",
                            sortable: true,
                            selector: (row) => rupiah(row.realisasi_2023),
                        },
                        {
                            name: "Sisa",
                            sortable: true,
                            selector: (row) => rupiah(row.sisa_2023),
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

export default APBDTable;