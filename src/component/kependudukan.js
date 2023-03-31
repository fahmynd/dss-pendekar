import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BASE_API_URL } from '../utils/api';
import BalitaStuntingJumlah from './chart/balitaStuntingJumlah';

const Kependudukan = () => {
    const [kec, setKec] = useState([]);
    const [desa, setDesa] = useState([]);

    useEffect(() => {
        // axios.get(BASE_API_URL+'kependudukan')
        axios.get('https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/administrasi-umum')
            .then((result) => {
                console.log(result.data.data)
                const data = result.data.data;
                setKec(data.list_kecamatan)
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

                <div className="filter-update">
                    <h5>
                        <span className="badge bg-update py-3">Last Update : 3 September 2022, 12:00 PM</span>
                    </h5>
                </div>

                <section className="section dashboard">
                    <div className="row g-2">

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body-demografi pb-0">
                                    <h5 className="card-title-potensi pb-0">Tampilkan Berdasarkan</h5>
                                    <div className="row g-1 mb-4">
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Demografi Kependudukan</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Kecamatan</option>
                                                {kec.map((kec) => {
                                                    return (
                                                        <Kecamatan
                                                            key={kec.kode}
                                                            listkec={kec.kecamatan}
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
                                                            key={deskel.kode}
                                                            listdesa={deskel.deskel}
                                                        />
                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <table className="table table-bordered table-responsive">
                                        <thead>
                                            <tr style={{ background: '#F1ECFF' }}>
                                                <th scope="col">No</th>
                                                <th scope="col">Kecamatan</th>
                                                <th scope="col">Desa</th>
                                                <th scope="col">Laki-Laki</th>
                                                <th scope="col">Perempuan</th>
                                                <th scope="col">Jumlah Penduduk</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope='row'>1</th>
                                                <td>Manggala</td>
                                                <td>Pilanggede</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>1</th>
                                                <td>Manggala</td>
                                                <td>Pilanggede</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>1</th>
                                                <td>Manggala</td>
                                                <td>Pilanggede</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>1</th>
                                                <td>Manggala</td>
                                                <td>Pilanggede</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>1</th>
                                                <td>Manggala</td>
                                                <td>Pilanggede</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body-demografi pb-0">
                                    <h5 className="card-title-potensi pb-0">Statistik Data</h5>
                                    <div className='mb-4'>
                                        <button type="button" className="btn btn-outline-secondary me-2">Grafik</button>
                                        <button type="button" className="btn btn-outline-secondary">Statistik</button>
                                    </div>

                                    <div className="row g-md-0">

                                        <div className="col-12">
                                            <div className="stunting-card">
                                                <div className="card-body scroll-y my-4">
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
                                    <h5 className="card-title-potensi">Rekap Kependudukan</h5>
                                    <div className="row g-1 mb-4">
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Demografi Kependudukan</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Kecamatan</option>
                                                {kec.map((kec) => {
                                                    return (
                                                        <Kecamatan
                                                            key={kec.kode}
                                                            listkec={kec.kecamatan}
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
                                                            key={deskel.kode}
                                                            listdesa={deskel.deskel}
                                                        />
                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className='table-responsive'>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr style={{ background: '#F1ECFF' }}>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Kecamatan</th>
                                                    <th scope="col">Desa</th>
                                                    <th scope="col">Laki-Laki</th>
                                                    <th scope="col">Perempuan</th>
                                                    <th scope="col">Jumlah Penduduk</th>
                                                    <th scope="col">Jumlah KK</th>
                                                    <th scope="col">Wajib KTP</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope='row'>1</th>
                                                    <td>Manggala</td>
                                                    <td>Pilanggede</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <th scope='row'>1</th>
                                                    <td>Manggala</td>
                                                    <td>Pilanggede</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <th scope='row'>1</th>
                                                    <td>Manggala</td>
                                                    <td>Pilanggede</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <th scope='row'>1</th>
                                                    <td>Manggala</td>
                                                    <td>Pilanggede</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <th scope='row'>1</th>
                                                    <td>Manggala</td>
                                                    <td>Pilanggede</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

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

export default Kependudukan