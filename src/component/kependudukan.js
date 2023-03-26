import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BASE_API_URL } from '../utils/api';
import BalitaStuntingJumlah from './chart/balitaStuntingJumlah';

const Kependudukan = () => {
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
        document.title = "Kependudukan | PENDEKAR";
    }, [])
    // console.log(summary[dss.k1 + '.' + dss.k2 + '.' + dss.k3 + '.' + dss.k4])
    // console.log(dss)
    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Kependudukan</h1>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <h5 className="card-title-potensi pb-0">Grafik Kependudukan</h5>
                                    <div className="row g-1 mb-4">
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Jenis Kependudukan</option>
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

                                    <div className="row g-md-0">

                                        <div className="col-12">
                                            <div className="stunting-card">
                                                <div className="card-body my-4">
                                                    <BalitaStuntingJumlah />
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
                                    <h5 className="card-title-potensi">Tabel Kependudukan</h5>
                                    <div className="row g-1 mb-4">
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Jenis Kependudukan</option>
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
                                                <th scope="col">Total Penduduk</th>
                                                <th scope="col">Laki-Laki</th>
                                                <th scope="col">Perempuan</th>
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

export default Kependudukan