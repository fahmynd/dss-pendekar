import React, { useMemo, useState } from "react";
import DataTable from 'react-data-table-component';



const AdminTableNew = (props) => {
    const { jenis_administrasi, list_kecamatan, list_desa, list_administrasi } = props.resultData.data;

    const [selectedType, setSelectedType] = useState(jenis_administrasi[0].key);
    const [selectedKec, setSelectedKec] = useState("")
    const [selectedDesa, setSelectedDesa] = useState("")

    const rows = useMemo(() => {
        let data = list_administrasi[selectedType];
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

    }, [selectedType, selectedKec, selectedDesa, list_administrasi])

    const customStyles = {
        headCells: {
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                backgroundColor: '#F1ECFF',
                borderRight: '1px solid #EDEDED',
                borderTop: '1px solid #EDEDED',
            },
        },
        cells: {
            style: {
                fontSize: '14px',
                borderRight: '1px solid #EDEDED',
            },
        },
    };

    return (
        <>
            <div className="row g-1 mb-4">
                <div className="col-4">
                    <select onChange={e => setSelectedType(e.target.value)} defaultValue='buku_peraturan_di_desa' className="form-select" aria-label="Pilih Jenis Administrasi">
                        {jenis_administrasi.map((item, key) => {
                            return (
                                <option key={key} value={item.key}>{item.value}</option>
                            )
                        })}
                    </select>
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
                            name: "Kecamatan",
                            sortable: true,
                            selector: (row) => row.nama_kecamatan,
                            maxWidth: "20%",
                        },
                        {
                            name: "Desa",
                            sortable: true,
                            selector: (row) => row.nama_deskel,
                            maxWidth: "20%",
                        },
                        {
                            name: "Jenis Peraturan",
                            sortable: true,
                            selector: (row) => row.jenis_peraturan,
                            maxWidth: "20%",
                        },
                        {
                            name: "Nomor Perturan",
                            sortable: true,
                            selector: (row) => row.nomor_peraturan,
                            // width: "auto",
                        },
                        {
                            name: "Tanggal Peraturan",
                            sortable: true,
                            selector: (row) => row.tanggal_peraturan,
                            // width: "auto",
                        },
                        {
                            name: "Tentang",
                            sortable: true,
                            selector: (row) => row.tentang,
                            wrap: true,
                            // style: {
                            //     wordBreak: "break-all",
                            // },
                            // width: "auto",
                        },
                        {
                            name: "Lampiran",
                            sortable: true,
                            selector: (row) => row.lampiran,
                            cell: (row) => {
                                return (
                                    <a href={`https://online.digitaldesa.id/uploads/${row.kode_wilayah}/buku-peraturan-di-desa/${row.lampiran}`} rel="noreferrer" target={"_blank"} className="btn btn-primary">
                                        Download
                                    </a>
                                )
                            },
                            // width: "auto",
                        }
                    ]
                }
                data={rows}
                customStyles={customStyles}
                pagination
            />
        </>
    )
}


export default AdminTableNew;
