import React, { useMemo, useState, Fragment } from "react";
import DataTable from 'react-data-table-component';

const ProfilTable = (props) => {
    const { list_kecamatan, list_desa } = props.resultData;

    const [selectedKec, setSelectedKec] = useState("")
    const [selectedDesa, setSelectedDesa] = useState("")
    const [query, setQuery] = useState("")

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

        if (query !== "" && query !== '0') {
            data = data.filter(item => {
                return item.nama_deskel.toLowerCase().includes(query)
            })
        }

        return data;

    }, [selectedKec, selectedDesa, query])

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
            <div className="row g-1 my-4">
                <div className="col-3">
                    <div className="search-produk">
                        <form className="search-form-produk d-flex align-items-center">
                            <input type="text" name="query" placeholder="Cari Desa/Kelurahan..." title="Enter search keyword" onChange={e => setQuery(e.target.value)} />
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
                            name: "Kode Wilayah",
                            sortable: true,
                            selector: (row) => row.kode_wilayah,
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
                            name: "Website",
                            sortable: true,
                            selector: (row) => row.link,
                            cell: (row) => {
                                return (
                                    <a href={row.link} target={'_blank'} rel='noreferrer' style={{ color: '#3B2D64' }}><i className="fa-solid fa-earth-asia"></i>
                                        &nbsp; Website Desa {row.desa}
                                    </a>
                                )
                            },
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

export default ProfilTable;