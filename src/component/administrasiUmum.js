import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BASE_API_URL } from '../utils/api';

const AdministrasiUmum = () => {
    const [dss, setDss] = useState();
    const [summary, setSummary] = useState([]);
    const [jml_desa, setJml_desa] = useState();
    const [jml_dusun, setJml_dusun] = useState();
    const [jml_umkm, setJml_umkm] = useState();
    const [jml_program, setJml_program] = useState();
    const [kecamatan, setKecamatan] = useState([]);
    const [desa, setDesa] = useState([]);

    useEffect(() => {
        axios.get(BASE_API_URL)
            // axios.get('https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/')
            .then((result) => {
                // console.log(result.data.data)
                const data = result.data.data;
                setDss(result.data.dss)
                setSummary(data.summary)
                setJml_desa(data.jml_desa)
                setJml_dusun(data.jml_dusun)
                setJml_umkm(data.jml_umkm)
                setJml_program(data.jml_program)
                setKecamatan(data.list_desa)
                setDesa(data.list_desa)

            })
        document.title = "Administrasi Umum | PENDEKAR";
    }, [])
    // console.log(summary[dss.k1 + '.' + dss.k2 + '.' + dss.k3 + '.' + dss.k4])
    // console.log(dss)
    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Administrasi Umum</h1>
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
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Desa</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
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
                                                            <h6>{jml_desa}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +2/Minggu
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
                                                            <h6>{jml_desa}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +2/Minggu
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
                                                            <h6>{jml_desa}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +2/Minggu
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
                                                            <h6>{jml_umkm}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +2/Minggu
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
                                                            <h6>{jml_program}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +2/Minggu
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
                                                            <h6>{jml_program}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +2/Minggu
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
                                                            <h6>{jml_program}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +2/Minggu
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
                                                            <h6>{jml_program}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +2/Minggu
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
                                                            <h6>{jml_program}</h6>
                                                        </div>
                                                        <div className="adm-umum small">
                                                            +2/Minggu
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
                                    <h5 className="card-title-potensi">Peraturan Desa</h5>
                                    <div className="row g-1 mb-4">
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Jenis Administrasi</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Kecamatan</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Desa</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>

                                    <table className="table table-bordered">
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
                                                <td>Manggala</td>
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
                                                <th scope='row'>1</th>
                                                <td>Manggala</td>
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
                                                <th scope='row'>1</th>
                                                <td>Manggala</td>
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
                                                <th scope='row'>1</th>
                                                <td>Manggala</td>
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
                                                <th scope='row'>1</th>
                                                <td>Manggala</td>
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
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </Fragment>
    )
}

export default AdministrasiUmum