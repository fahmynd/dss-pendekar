import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BASE_API_URL } from '../utils/api'
import { postscribe } from 'postscribe'
import MarkerPeta from './map'
import MapPopup from './mapPopup'
import Map from './mapPopup'

const Dashboard = () => {
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();

    const position = [-3.4590744, 119.8815203]

    useEffect(() => {
        // axios.get(BASE_API_URL)
        axios.get('https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/')
            .then((result) => {
                // console.log(result)
                const data = result.data.dss;
                setLat(data.lat)
                setLng(data.lng)

                // postscribe('#mydiv', '<script language="javascript" src="assets/js/jquery-3.3.1.min.js"></script>')
            })
        document.title = "Dashboard | PENDEKAR";
    }, [])
    // console.log(summary[dss.k1 + '.' + dss.k2 + '.' + dss.k3 + '.' + dss.k4])
    // console.log(dss)

    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Dashboard Utama</h1>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">

                                        <div className="card-body">
                                            <h5 className="card-title-potensi">KABAR DESA TERBARU</h5>

                                            <div className="bn-breaking-news" id="newsTicker9">
                                                <div className="bn-label">Flash News</div>
                                                <div className="bn-news">
                                                    <ul>
                                                        <li><span className="bn-prefix">Braveheart, 1995 :</span>"They may take our lives, but they'll never
                                                            take our freedom!"</li>
                                                        <li><span className="bn-prefix">Star Wars Episode VII: The Force Awakens, 2015 :</span>"Chewie,
                                                            we're home."</li>
                                                        <li><span className="bn-prefix">Pulp Fiction, 1994 :</span>"They call it a Royale with cheese."</li>
                                                        <li><span className="bn-prefix">Jerry Maguire, 1996 :</span>"You complete me."</li>
                                                        <li><span className="bn-prefix">Jerry Maguire I, 1996 :</span>"You complete me."</li>
                                                    </ul>
                                                </div>
                                                <div className="bn-controls">
                                                    <button><span className="bn-arrow bn-prev"></span></button>
                                                    <button><span className="bn-arrow bn-next"></span></button>
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
                                    <h5 className="card-title-potensi">CAPAIAN & POTENSI DESA</h5>
                                    <p>Menampilkan potensi Kecamatan, Desa/Kelurahan</p>
                                    <div className="row g-1 mb-4">
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Capaian & Potensi</option>
                                                <option value="1">KD</option>
                                                <option value="2">SDGS</option>
                                                <option value="3">AR</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <button type="button" className="btn btn-cari"><i className="bi bi-search me-1"></i> Temukan</button>
                                        </div>
                                    </div>

                                    {/* <div className='card shadow position-absolute map-box2'>
                                        <div className='card-body'>
                                            <h5 className="card-title-potensi pb-0" style={{ color: '#3B2D64' }}>Desa Cimayasari</h5>
                                            <p>Kec. Cipeundeuy, Kab. Subang, Prov. Jawa Barat</p>
                                            <div className="filter-primary">
                                                <h5>
                                                    <span className="badge bg-verifikasi"><i className='bx bx-cctv'></i> CCTV</span>
                                                </h5>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <h5 className='fw-bold'>Capaian</h5>
                                                    <div className='row g-2'>
                                                        <div className='col-6'>KD</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>IDM</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>SDGS</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>AR</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>Program</div>
                                                        <div className='col-6'>:-</div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <h5 className='fw-bold'>Potensi</h5>
                                                    <div className='row g-2'>
                                                        <div className='col-6'>SDA</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>IDM</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>SDM</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>LK</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>Sarana Prasarana</div>
                                                        <div className='col-6'>:-</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="embed-responsive embed-responsive-16by9" style={{ height: '300px !important' }}>
                                        <iframe title='CCTV' id="gmap_canvas" src="https://maps.google.com/maps?q=-3.4590744,119.8815203&hl=es;z=14&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                    </div> */}

                                    <Map />

                                    <br />
                                    <div className="row g-0">
                                        <div className="col-md-2 fw-bold">Keterangan:</div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#A3FFC2' }}></i> 0</p>
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#518F6B' }}></i> 1.890.063 - 2.515.973</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#2EA256' }}></i> 0</p>
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#223D2D' }}></i> 1.890.063 - 2.515.973</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#73C897' }}></i> 1.890.063 - 2.515.973</p>
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#E84C30' }}></i> 1.890.063 - 2.515.973</p>
                                            </div>
                                        </div>

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

export default Dashboard