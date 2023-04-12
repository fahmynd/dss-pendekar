import React, { useMemo, useState } from "react";
import DataTable from 'react-data-table-component';



const AdminTableNew = (props) => {
    const {jenis_administrasi,list_kecamatan, list_desa,list_administrasi} = props.resultData.data;

    const [selectedType,setSelectedType] = useState(jenis_administrasi[0].key);
    const [selectedKec,setSelectedKec] = useState("")
    const [selectedDesa,setSelectedDesa] = useState("")

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
        
    },[selectedType,selectedKec,selectedDesa, list_administrasi])


    return (
        <>
                <div className="row g-1 mb-4">
                    <div className="col-4">
                        <select onChange={e => setSelectedType(e.target.value)} defaultValue='buku_peraturan_di_desa' className="form-select" aria-label="Pilih Jenis Administrasi">
                            {jenis_administrasi.map((item,key) => {
                                return (
                                    <option key={key} value={item.key}>{item.value}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="col-3">
                        <select onChange={e => setSelectedKec(e.target.value)} defaultValue='0' className="form-select" aria-label="Pilih Kecamatan">
                            <option value='0'>Semua Kecamatan</option>
                            {list_kecamatan.map((item,key) => {
                                return (
                                    <option key={key} value={item.kode_wilayah}>{item.nama_kecamatan}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="col-3">
                        <select onChange={e => setSelectedDesa(e.target.value)} defaultValue='0' className="form-select" aria-label="Pilih Desa">
                            <option value='0'>Semua Desa</option>
                            {list_desa.map((item,key) => {
                                return (
                                    <option key={key} value={item.kode_wilayah}>{item.nama_deskel}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="table-responsive">
                <DataTable
                    columns={[
                        {
                            name: "No",
                            selector: (row,index) => index + 1 
                        },
                        {
                            name: "Kecamatan",
                            selector: (row) => row.nama_kecamatan
                        },
                        {
                            name: "Desa",
                            selector: (row) => row.nama_deskel
                        },
                        {
                            name: "Jenis Peraturan",
                            selector: (row) => row.jenis_peraturan
                        },
                        {
                            name: "Nomor Perturan",
                            selector: (row) => row.nomor_peraturan
                        },
                        {
                            name: "Tanggal Peraturan",
                            selector: (row) => row.tanggal_peraturan
                        },
                        {
                            name: "Tentang",
                            selector: (row) => row.tentang
                        },
                        {
                            name: "Lampiran",
                            selector: (row) => row.lampiran,
                            cell: (row) => {
                                return (
                                    <a href={`https://online.digitaldesa.id/uploads/${row.kode}/buku-peraturan-di-desa/${row.lampiran}`} rel="noreferrer" target={"_blank"} className="btn btn-primary">
                                        Download
                                    </a>
                                )
                            }
                        }
                    ]}
                    data={rows}
                    pagination
                />
                </div>
            </>
    )
}


export default AdminTableNew;
