import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BASE_API_URL } from '../utils/api'
import Map from './mapPopup'
import NewsTicker from "react-advanced-news-ticker";

const Dashboard = () => {
    const [resultData, setResultData] = useState();
    const [news, setNews] = useState([]);

    useEffect(() => {
        // axios.get(BASE_API_URL)
        axios.get('https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/')
            .then((result) => {
                // console.log(result.data.data.list_berita)
                setResultData(result.data);
                setNews(result.data.data.list_berita);

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
                                                {/* <div className="bn-news">
                                                    <ul>
                                                        <li><span className="bn-prefix">Braveheart, 1995 :</span>"They may take our lives, but they'll never
                                                            take our freedom!"</li>
                                                        <li><span className="bn-prefix">Star Wars Episode VII: The Force Awakens, 2015 :</span>"Chewie,
                                                            we're home."</li>
                                                        <li><span className="bn-prefix">Pulp Fiction, 1994 :</span>"They call it a Royale with cheese."</li>
                                                        <li><span className="bn-prefix">Jerry Maguire, 1996 :</span>"You complete me."</li>
                                                        <li><span className="bn-prefix">Jerry Maguire I, 1996 :</span>"You complete me."</li>
                                                    </ul>
                                                </div> */}

                                                {resultData && <NewsTicker
                                                    maxRows={1}
                                                    rowHeight={60}
                                                    style={{ listStyleType: 'none', marginLeft: '200px', width: '50%' }}
                                                >
                                                    {news.map((news) => {
                                                        return (
                                                            <Berita
                                                                key={news.id}
                                                                kode={news.kode_wilayah}
                                                                judul={news.judul}
                                                                slug={news.slug}
                                                                slug_desa={news.slug_desa}
                                                                foto={news.foto}
                                                            />
                                                        )
                                                    })
                                                    }

                                                </NewsTicker>}

                                                {/* <div className="bn-controls">
                                                    <button><span className="bn-arrow bn-prev"></span></button>
                                                    <button><span className="bn-arrow bn-next"></span></button>
                                                </div> */}

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

                                    {resultData && <Map resultData={resultData} />}

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

function Berita(props) {
    return (
        <div className="berita-card">
            <div className="row g-0">
                <div className="col-md-2">
                    <img src={`https://profil.digitaldesa.id/uploads/${props.kode}/berita/thumbs/${props.foto}`} className="w-100 h-75 ms-2 rounded" alt="..." />
                </div>
                <div className="col-md-10">
                    <div className="berita-card-body">
                        <h6 className='ms-1 fw-bold text-capitalize'>{props.judul}</h6>
                        <a href={`https://profil.digitaldesa.id/${props.slug_desa}/berita/${props.slug}`} rel='noreferrer' target={'_blank'} className="stretched-link"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
