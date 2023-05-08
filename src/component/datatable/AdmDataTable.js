import React, { useMemo, useState, Fragment } from "react";
import DataTable from 'react-data-table-component';
import { tgl_indo } from "../../utils/helper.min";

const AdminTableNew = (props) => {
    const { jenis_administrasi, list_kecamatan, list_desa, list_administrasi } = props.resultData.data;

    const [selectedType, setSelectedType] = useState(jenis_administrasi[0].key);
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

    const DATA = useMemo(() => {
        // let data = list_administrasi[selectedType];
        // if (selectedKec !== "" && selectedKec !== '0') {
        //     data = data.filter(item => {
        //         let itemKec = `${item.k1}.${item.k2}.${item.k3}`

        //         return itemKec === selectedKec
        //     })
        // }

        // if (selectedDesa !== "" && selectedDesa !== '0') {
        //     data = data.filter(item => {
        //         let itemDesa = `${item.k1}.${item.k2}.${item.k3}.${item.k4}`

        //         return itemDesa === selectedDesa
        //     })
        // }

        const data = list_administrasi[selectedType].filter(desa => {
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

        let cols = {
            buku_peraturan_di_desa: [
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
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    maxWidth: "20%",
                },
                {
                    name: "Jenis Peraturan",
                    sortable: true,
                    selector: (row) => row.jenis_peraturan,
                    wrap: true,
                    // width: "auto",
                },
                {
                    name: "Nomor Peraturan",
                    sortable: true,
                    selector: (row) => row.nomor_peraturan,
                    // width: "auto",
                },
                {
                    name: "Tanggal Peraturan",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_peraturan),
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
                }
            ],
            buku_keputusan_kepala_desa: [
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
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    maxWidth: "20%",
                },
                {
                    name: "Nomor Keputusan",
                    sortable: true,
                    selector: (row) => row.nomor_keputusan,
                    wrap: true,
                    // width: "auto",
                },
                {
                    name: "Tanggal Keputusan",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_keputusan),
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
                            <a href={`https://online.digitaldesa.id/uploads/${row.kode_wilayah}/buku-keputusan-kepala-desa/${row.lampiran}`} rel="noreferrer" target={"_blank"} className="btn btn-primary">
                                Download
                            </a>
                        )
                    },
                    // width: "auto",
                }
            ],
            buku_inventaris_dan_kekayaan_desa: [
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
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    maxWidth: "20%",
                },
                {
                    name: "Tahun",
                    sortable: true,
                    selector: (row) => row.tahun,
                    // width: "auto",
                },
                {
                    name: "Jenis Barang",
                    sortable: true,
                    selector: (row) => row.jenis_barang,
                    wrap: true,
                    // width: "auto",
                },
                {
                    name: "Nilai Beli",
                    sortable: true,
                    selector: (row) => row.nilai_beli,
                    // width: "auto",
                },
                {
                    name: "Tanggal Penghapusan",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_penghapusan),
                    maxWidth: "20%",
                },
            ],
            buku_aparat_pemerintah_desa: [
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
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    maxWidth: "20%",
                },
                {
                    name: "Nama",
                    sortable: true,
                    selector: (row) => row.nama,
                    // width: "auto",
                },
                {
                    name: "NIP",
                    sortable: true,
                    selector: (row) => row.nip,
                    wrap: true,
                    // width: "auto",
                },
                {
                    name: "Jabatan",
                    sortable: true,
                    selector: (row) => row.jabatan,
                    // width: "auto",
                },
                {
                    name: "Tanggal Pengangkatan",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_pengangkatan),
                    maxWidth: "20%",
                },
                {
                    name: "Tanggal Pemberhentian",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_pemberhentian),
                    maxWidth: "20%",
                },
            ],
            buku_tanah_kas_desa: [
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
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    maxWidth: "20%",
                },
                {
                    name: "Asal Tanah",
                    sortable: true,
                    selector: (row) => row.asal_tanah,
                    // width: "auto",
                },
                {
                    name: "Nomor Sertifikat",
                    sortable: true,
                    selector: (row) => row.nomor_sertifikat,
                    wrap: true,
                    // width: "auto",
                },
                {
                    name: "Luas",
                    sortable: true,
                    selector: (row) => row.luas,
                    // width: "auto",
                },
                {
                    name: "Kelas",
                    sortable: true,
                    selector: (row) => row.kelas,
                    // width: "auto",
                },
                {
                    name: "Tanggal Perolehan",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_perolehan),
                    maxWidth: "20%",
                },
            ],
            buku_tanah_di_desa: [
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
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    maxWidth: "20%",
                },
                {
                    name: "Nama",
                    sortable: true,
                    selector: (row) => row.nama,
                    // width: "auto",
                },
                {
                    name: "Luas Tanah",
                    sortable: true,
                    selector: (row) => row.luas_tanah,
                    wrap: true,
                    // width: "auto",
                },
                {
                    name: "Status Tanah",
                    sortable: true,
                    selector: (row) => row.status_tanah,
                    // width: "auto",
                },
                {
                    name: "Penggunaan Tanah",
                    sortable: true,
                    selector: (row) => row.penggunaan_tanah,
                    // width: "auto",
                },
            ],
            buku_agenda: [
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
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    maxWidth: "20%",
                },
                {
                    name: "Kode Surat",
                    sortable: true,
                    selector: (row) => row.kode_surat,
                    // width: "auto",
                },
                {
                    name: "Tanggal",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal),
                    maxWidth: "20%",
                },
                {
                    name: "Jenis",
                    sortable: true,
                    selector: (row) => row.jenis,
                    wrap: true,
                    // width: "auto",
                },
                {
                    name: "Nomor Surat",
                    sortable: true,
                    selector: (row) => row.nomor_surat,
                    // width: "auto",
                },
                {
                    name: "Pelaku Surat",
                    sortable: true,
                    selector: (row) => row.pelaku_surat,
                    // width: "auto",
                },
            ],
            buku_ekspedisi: [
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
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    maxWidth: "20%",
                },
                {
                    name: "Tanggal Pengiriman",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_pengiriman),
                    maxWidth: "20%",
                },
                {
                    name: "Nomor Surat",
                    sortable: true,
                    selector: (row) => row.nomor_surat,
                    // width: "auto",
                },
                {
                    name: "Ditujukan Kepada",
                    sortable: true,
                    selector: (row) => row.ditujukan_kepada,
                    // width: "auto",
                },
            ],
            buku_lembaran_desa_dan_berita_desa: [
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
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    maxWidth: "20%",
                },
                {
                    name: "Jenis Peraturan",
                    sortable: true,
                    selector: (row) => row.jenis_peraturan,
                    // width: "auto",
                },
                {
                    name: "Nomor Peraturan",
                    sortable: true,
                    selector: (row) => row.nomor_peraturan,
                    // width: "auto",
                },
                {
                    name: "Tanggal Peraturan",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_peraturan),
                    maxWidth: "20%",
                },
                {
                    name: "Tentang",
                    sortable: true,
                    selector: (row) => row.tentang,
                    wrap: true,
                    // width: "auto",
                },
            ],
        };

        return [cols[selectedType], data];

    }, [selectedType, selectedKec, selectedDesa, query, list_administrasi])

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
        <Fragment>
            <div className="row g-1 mb-4">
                <div className="col-3">
                    <select onChange={e => setSelectedType(e.target.value)} defaultValue='buku_peraturan_di_desa' className="form-select" aria-label="Pilih Jenis Administrasi">
                        {jenis_administrasi.map((item, key) => {
                            return (
                                <option key={key} value={item.key}>{item.value}</option>
                            )
                        })}
                    </select>
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
                <div className="col-3">
                    <div className="search-produk">
                        <form className="search-form-produk d-flex align-items-center">
                            <input value={query} onChange={e => setQuery(e.target.value)} type="text" name="query" placeholder="Cari Desa/Kelurahan..." title="Enter search keyword" />
                            <button type="submit" title="Search" disabled><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            <DataTable
                columns={DATA[0]}
                data={DATA[1]}
                customStyles={customStyles}
                pagination
            />
        </Fragment>
    )
}

export default AdminTableNew;
