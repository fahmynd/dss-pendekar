import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { BASE_API_URL } from '../utils/api';
import AdminTable from './datatable/AdmDataTable';

const AdministrasiUmum = () => {
    const [resultData, setResultData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [peraturan_desa, setPeraturan_desa] = useState();
    const [peraturan_desa_add, setPeraturan_desa_add] = useState();
    const [keputusan_kades, setKeputusan_kades] = useState();
    const [keputusan_kades_add, setKeputusan_kades_add] = useState();
    const [inventaris_desa, setInventaris_desa] = useState();
    const [inventaris_desa_add, setInventaris_desa_add] = useState();
    const [aparat_desa, setAparat_desa] = useState();
    const [aparat_desa_add, setAparat_desa_add] = useState();
    const [buku_agenda, setBuku_agenda] = useState();
    const [buku_agenda_add, setBuku_agenda_add] = useState();
    const [buku_ekspedisi, setBuku_ekspedisi] = useState();
    const [buku_ekspedisi_add, setBuku_ekspedisi_add] = useState();
    const [lembaran_desa, setLembaran_desa] = useState();
    const [lembaran_desa_add, setLembaran_desa_add] = useState();
    const [tanah_kas_desa, setTanah_kas_desa] = useState();
    const [tanah_kas_desa_add, setTanah_kas_desa_add] = useState();
    const [luas_tanah_desa, setLuas_tanah_desa] = useState();
    const [luas_tanah_desa_add, setLuas_tanah_desa_add] = useState();
    const [kec, setKec] = useState([]);
    const [desa, setDesa] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // axios.get(BASE_API_URL + 'administrasi-umum?k3=&k4=')
        axios.get(`https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/administrasi-umum?k3=&k4=`)
            .then((result) => {
                // console.log(result.data.data.jumlah)
                setResultData(result.data);
                const data = result.data.data.jumlah;
                setPeraturan_desa(data.buku_peraturan_di_desa)
                setPeraturan_desa_add(data.buku_peraturan_di_desa_add)
                setKeputusan_kades(data.buku_keputusan_kepala_desa)
                setKeputusan_kades_add(data.buku_keputusan_kepala_desa_add)
                setInventaris_desa(data.buku_inventaris_dan_kekayaan_desa)
                setInventaris_desa_add(data.buku_inventaris_dan_kekayaan_desa_add)
                setAparat_desa(data.buku_aparat_pemerintah_desa)
                setAparat_desa_add(data.buku_aparat_pemerintah_desa_add)
                setBuku_agenda(data.buku_agenda)
                setBuku_agenda_add(data.buku_agenda_add)
                setBuku_ekspedisi(data.buku_ekspedisi)
                setBuku_ekspedisi_add(data.buku_ekspedisi_add)
                setLembaran_desa(data.buku_lembaran_desa_dan_berita_desa)
                setLembaran_desa_add(data.buku_lembaran_desa_dan_berita_desa_add)
                setTanah_kas_desa(data.buku_tanah_kas_desa)
                setTanah_kas_desa_add(data.buku_tanah_kas_desa_add)
                setLuas_tanah_desa(data.buku_tanah_di_desa)
                setLuas_tanah_desa_add(data.buku_tanah_di_desa_add)

                const kode = result.data.data;
                setKec(kode.list_kecamatan)
                setDesa(kode.list_desa)

            })
            .catch(error => {
                // handle any errors/rejected Promises
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail
        document.title = "Administrasi Umum | PENDEKAR";
    }, [])
    if (isLoading) return;
    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Administrasi Umum</h1>
                </div>

                <div className="filter-update">
                    <h5>
                        <span className="badge bg-update py-3">Last Update : 3 September 2022, 12:00 PM</span>
                    </h5>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row g-1 my-4">
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Kecamatan</option>
                                                {kec.map((kec) => {
                                                    return (
                                                        <Kecamatan
                                                            key={kec.kode_wilayah}
                                                            listkec={kec.nama_kecamatan}
                                                        />
                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Desa</option>
                                                {desa.map((deskel) => {
                                                    return (
                                                        <Desa
                                                            key={deskel.kode_wilayah}
                                                            listdesa={deskel.nama_deskel}
                                                        />
                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card info-card sales-card">
                                                <div className="card-body-info">
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="ri-file-text-fill"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted pt-2">Peraturan Desa</span>
                                                            <h6>{isLoading ? <ClipLoader /> : peraturan_desa}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +{peraturan_desa_add}/Minggu
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card info-card sales-card">
                                                <div className="card-body-info">
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="ri-user-2-fill"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted pt-2">Keputusan Kepala Desa</span>
                                                            <h6>{keputusan_kades}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +{keputusan_kades_add}/Minggu
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card info-card sales-card">
                                                <div className="card-body-info">
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="ri-folders-fill"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted pt-2">Inventaris Desa</span>
                                                            <h6>{inventaris_desa}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +{inventaris_desa_add}/Minggu
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card info-card sales-card">
                                                <div className="card-body-info">
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="bx bxs-home"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted pt-2">Aparat Pemerintah Desa</span>
                                                            <h6>{aparat_desa}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +{aparat_desa_add}/Minggu
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card info-card sales-card">
                                                <div className="card-body-info">
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="ri-file-text-fill"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted pt-2">Buku Agenda</span>
                                                            <h6>{buku_agenda}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +{buku_agenda_add}/Minggu
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card info-card sales-card">
                                                <div className="card-body-info">
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="ri-file-list-3-fill"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted pt-2">Surat Ekspedisi</span>
                                                            <h6>{buku_ekspedisi}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +{buku_ekspedisi_add}/Minggu
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card info-card sales-card">
                                                <div className="card-body-info">
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="ri-file-paper-2-fill"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted pt-2">Lembaran & Berita Desa</span>
                                                            <h6>{lembaran_desa}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +{lembaran_desa_add}/Minggu
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card info-card sales-card">
                                                <div className="card-body-info">
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="ri-map-2-fill"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted pt-2">Tanah Kas Desa</span>
                                                            <h6>{tanah_kas_desa}m<sup>2</sup></h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +{tanah_kas_desa_add}/Minggu
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card info-card sales-card">
                                                <div className="card-body-info">
                                                    <div className="d-flex align-items-center">
                                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                            <i className="ri-road-map-fill"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted pt-2">Luas Tanah Desa</span>
                                                            <h6>{luas_tanah_desa}m<sup>2</sup></h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +{luas_tanah_desa_add}/Minggu
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title-potensi">Tampilkan Berdasarkan</h5>
                                    <div className="row g-1 mb-4">
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Jenis Administrasi</option>
                                                <option value="1">Peraturan Desa</option>
                                                <option value="2">Keputusan Kepala Desa</option>
                                                <option value="3">Inventaris Desa</option>
                                                <option value="4">Aparat Pemerintah Desa</option>
                                                <option value="5">Buku Agenda</option>
                                                <option value="6">Surat Ekspedisi</option>
                                                <option value="7">Lembaran & Berita Desa</option>
                                                <option value="8">Tanah Kas Desa</option>
                                                <option value="9">Luas Tanah Desa</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Kecamatan</option>
                                                {kec.map((kec) => {
                                                    return (
                                                        <Kecamatan
                                                            key={kec.kode_wilayah}
                                                            listkec={kec.nama_kecamatan}
                                                        />
                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Desa</option>
                                                {desa.map((deskel) => {
                                                    return (
                                                        <Desa
                                                            key={deskel.kode_wilayah}
                                                            listdesa={deskel.nama_deskel}
                                                        />
                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className='table-responsive d-none'>
                                        <table id='example' className="table table-bordered">
                                            <thead>
                                                <tr style={{ background: '#F1ECFF' }}>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Kecamatan</th>
                                                    <th scope="col">Desa</th>
                                                    <th scope="col">Jenis Peraturan</th>
                                                    <th scope="col">Nominal</th>
                                                    <th scope="col">Status Proposal</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope='row'>1</th>
                                                    <td>Maiwa</td>
                                                    <td>Pilanggede</td>
                                                    <td>DD Tahap 1</td>
                                                    <td>Rp357,478,384</td>
                                                    <td>
                                                        <h5>
                                                            <span className="badge bg-prioritas">Revisi dari kecamatan</span>
                                                        </h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope='row'>2</th>
                                                    <td>Maiwa</td>
                                                    <td>Pilanggede</td>
                                                    <td>DD Tahap 1</td>
                                                    <td>Rp357,478,384</td>
                                                    <td>
                                                        <h5>
                                                            <span className="badge bg-pengajuan">Pengajuan</span>
                                                        </h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope='row'>3</th>
                                                    <td>Maiwa</td>
                                                    <td>Pilanggede</td>
                                                    <td>DD Tahap 1</td>
                                                    <td>Rp357,478,384</td>
                                                    <td>
                                                        <h5>
                                                            <span className="badge bg-rkd">Masuk RKD</span>
                                                        </h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope='row'>4</th>
                                                    <td>Maiwa</td>
                                                    <td>Pilanggede</td>
                                                    <td>DD Tahap 1</td>
                                                    <td>Rp357,478,384</td>
                                                    <td>
                                                        <h5>
                                                            <span className="badge bg-verifikasi">Diverifikasi <i className="bx bxs-check-circle"></i></span>
                                                        </h5>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope='row'>5</th>
                                                    <td>Maiwa</td>
                                                    <td>Pilanggede</td>
                                                    <td>DD Tahap 1</td>
                                                    <td>Rp357,478,384</td>
                                                    <td>
                                                        <h5>
                                                            <span className="badge bg-verifikasi">Diverifikasi <i className="bx bxs-check-circle"></i></span>
                                                        </h5>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {resultData && <AdminTable resultData={resultData} />}

                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </Fragment>
    )
}

function Kecamatan(props) {
    return (
        <option value="1">{props.listkec}</option>
    )
}

function Desa(props) {
    return (
        <option value="1">{props.listdesa}</option>
    )
}

export default AdministrasiUmum