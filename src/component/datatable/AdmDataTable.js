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
                    width: "60px",
                    style: {
                        borderLeft: "1px solid #EDEDED"
                    }
                },
                {
                    name: "Kecamatan",
                    sortable: true,
                    selector: (row) => row.nama_kecamatan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Desa",
                    sortable: true,
                    selector: (row) => row.nama_deskel,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Jenis Peraturan",
                    sortable: true,
                    selector: (row) => row.jenis_peraturan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Nomor Peraturan",
                    sortable: true,
                    selector: (row) => row.nomor_peraturan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Peraturan",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_peraturan),
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tentang",
                    sortable: true,
                    selector: (row) => row.tentang,
                    width: "300px",
                    wrap: true,
                },
                {
                    name: "Lampiran",
                    sortable: true,
                    selector: (row) => row.lampiran,
                    cell: (row) => {

                        let download = {
                            '': { 'class': '' },
                            'null': { 'class': 'disabled' },
                        };

                        return (
                            <a href={`https://online.digitaldesa.id/uploads/${row.kode_wilayah}/buku-peraturan-di-desa/${row.lampiran}`} rel="noreferrer" target={"_blank"} className={`btn btn-primary`}>
                                Download
                            </a>
                        )
                    },
                    width: "150px",
                }
            ],
            buku_keputusan_kepala_desa: [
                {
                    name: "No",
                    selector: (row, index) => index + 1,
                    width: "60px",
                    style: {
                        borderLeft: "1px solid #EDEDED"
                    }
                },
                {
                    name: "Kecamatan",
                    sortable: true,
                    selector: (row) => row.nama_kecamatan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Desa",
                    sortable: true,
                    selector: (row) => row.nama_deskel,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Nomor Keputusan",
                    sortable: true,
                    selector: (row) => row.nomor_keputusan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Keputusan",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_keputusan),
                    width: "190px",
                    wrap: true,
                },
                {
                    name: "Tentang",
                    sortable: true,
                    selector: (row) => row.tentang,
                    width: "300px",
                    wrap: true,
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
                    width: "150px",
                }
            ],
            buku_inventaris_dan_kekayaan_desa: [
                {
                    name: "No",
                    selector: (row, index) => index + 1,
                    width: "60px",
                    style: {
                        borderLeft: "1px solid #EDEDED"
                    }
                },
                {
                    name: "Kecamatan",
                    sortable: true,
                    selector: (row) => row.nama_kecamatan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Desa",
                    sortable: true,
                    selector: (row) => row.nama_deskel,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tahun",
                    sortable: true,
                    selector: (row) => row.tahun,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Jenis Barang",
                    sortable: true,
                    selector: (row) => row.jenis_barang,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Nilai Beli",
                    sortable: true,
                    selector: (row) => row.nilai_beli,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Penghapusan",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_penghapusan),
                    width: "210px",
                    wrap: true,
                },
            ],
            buku_aparat_pemerintah_desa: [
                {
                    name: "No",
                    selector: (row, index) => index + 1,
                    width: "60px",
                    style: {
                        borderLeft: "1px solid #EDEDED"
                    }
                },
                {
                    name: "Kecamatan",
                    sortable: true,
                    selector: (row) => row.nama_kecamatan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Desa",
                    sortable: true,
                    selector: (row) => row.nama_deskel,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Nama",
                    sortable: true,
                    selector: (row) => row.nama,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "NIP",
                    sortable: true,
                    selector: (row) => row.nip,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Jabatan",
                    sortable: true,
                    selector: (row) => row.jabatan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Pengangkatan",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_pengangkatan),
                    width: "210px",
                    wrap: true,
                },
                {
                    name: "Tanggal Pemberhentian",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_pemberhentian),
                    width: "220px",
                    wrap: true,
                },
            ],
            buku_tanah_kas_desa: [
                {
                    name: "No",
                    selector: (row, index) => index + 1,
                    width: "60px",
                    style: {
                        borderLeft: "1px solid #EDEDED"
                    }
                },
                {
                    name: "Kecamatan",
                    sortable: true,
                    selector: (row) => row.nama_kecamatan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Desa",
                    sortable: true,
                    selector: (row) => row.nama_deskel,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Asal Tanah",
                    sortable: true,
                    selector: (row) => row.asal_tanah,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Nomor Sertifikat",
                    sortable: true,
                    selector: (row) => row.nomor_sertifikat,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Luas",
                    sortable: true,
                    selector: (row) => row.luas,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Kelas",
                    sortable: true,
                    selector: (row) => row.kelas,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Perolehan",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_perolehan),
                    width: "200px",
                    wrap: true,
                },
            ],
            buku_tanah_di_desa: [
                {
                    name: "No",
                    selector: (row, index) => index + 1,
                    width: "60px",
                    style: {
                        borderLeft: "1px solid #EDEDED"
                    }
                },
                {
                    name: "Kecamatan",
                    sortable: true,
                    selector: (row) => row.nama_kecamatan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Desa",
                    sortable: true,
                    selector: (row) => row.nama_deskel,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Nama",
                    sortable: true,
                    selector: (row) => row.nama,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Luas Tanah",
                    sortable: true,
                    selector: (row) => row.luas_tanah,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Status Tanah",
                    sortable: true,
                    selector: (row) => row.status_tanah,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Penggunaan Tanah",
                    sortable: true,
                    selector: (row) => row.penggunaan_tanah,
                    width: "200px",
                    wrap: true,
                },
            ],
            buku_agenda: [
                {
                    name: "No",
                    selector: (row, index) => index + 1,
                    width: "60px",
                    style: {
                        borderLeft: "1px solid #EDEDED"
                    }
                },
                {
                    name: "Kecamatan",
                    sortable: true,
                    selector: (row) => row.nama_kecamatan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Desa",
                    sortable: true,
                    selector: (row) => row.nama_deskel,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Kode Surat",
                    sortable: true,
                    selector: (row) => row.kode_surat,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal),
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Jenis",
                    sortable: true,
                    selector: (row) => row.jenis,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Nomor Surat",
                    sortable: true,
                    selector: (row) => row.nomor_surat,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Pelaku Surat",
                    sortable: true,
                    selector: (row) => row.pelaku_surat,
                    width: "180px",
                    wrap: true,
                },
            ],
            buku_ekspedisi: [
                {
                    name: "No",
                    selector: (row, index) => index + 1,
                    width: "60px",
                    style: {
                        borderLeft: "1px solid #EDEDED"
                    }
                },
                {
                    name: "Kecamatan",
                    sortable: true,
                    selector: (row) => row.nama_kecamatan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Desa",
                    sortable: true,
                    selector: (row) => row.nama_deskel,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Pengiriman",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_pengiriman),
                    width: "190px",
                    wrap: true,
                },
                {
                    name: "Nomor Surat",
                    sortable: true,
                    selector: (row) => row.nomor_surat,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Ditujukan Kepada",
                    sortable: true,
                    selector: (row) => row.ditujukan_kepada,
                    width: "180px",
                    wrap: true,
                },
            ],
            buku_lembaran_desa_dan_berita_desa: [
                {
                    name: "No",
                    selector: (row, index) => index + 1,
                    width: "60px",
                    style: {
                        borderLeft: "1px solid #EDEDED"
                    }
                },
                {
                    name: "Kecamatan",
                    sortable: true,
                    selector: (row) => row.nama_kecamatan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Desa",
                    sortable: true,
                    selector: (row) => row.nama_deskel,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Input",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_input),
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Jenis Peraturan",
                    sortable: true,
                    selector: (row) => row.jenis_peraturan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Nomor Peraturan",
                    sortable: true,
                    selector: (row) => row.nomor_peraturan,
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tanggal Peraturan",
                    sortable: true,
                    selector: (row) => tgl_indo(row.tanggal_peraturan),
                    width: "180px",
                    wrap: true,
                },
                {
                    name: "Tentang",
                    sortable: true,
                    selector: (row) => row.tentang,
                    width: "300px",
                    wrap: true,
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
            <div className="filter-primary">
                <button type="button" className="btn btn-primary" onClick={() => window.open(`https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/export/${selectedType}`)}>Export Report</button>
            </div>
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
