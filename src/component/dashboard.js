import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/news-ticker.min.css'
import { PotensiManusia } from './chart/potensiManusia'
import PotensiSDA from './chart/potensiSDA'

function Dashboard() {
    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Dashboard</h1>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12 mb-5">
                            <div className="row g-md-3">
                                <div className="col-md">
                                    <div className="card info-card sales-card">
                                        <div className="card-body-info">
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bx bxs-wallet"></i>
                                                </div>
                                                <div className="ps-2">
                                                    <span className="text-muted smaller pt-2">KEUANGAN DESA</span>
                                                    <h6>Rp312.300.003</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md">
                                    <div className="card info-card sales-card">
                                        <div className="card-body-info">
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="ri-road-map-fill"></i>
                                                </div>
                                                <div className="ps-2">
                                                    <span className="text-muted smaller pt-2">DESA & KELURAHAN</span>
                                                    <h6>300</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md">
                                    <div className="card info-card sales-card">
                                        <div className="card-body-info">
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-cart"></i>
                                                </div>
                                                <div className="ps-2">
                                                    <span className="text-muted smaller pt-2">DESA MANDIRI</span>
                                                    <h6>34</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md">
                                    <div className="card info-card sales-card">
                                        <div className="card-body-info">
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bx bxs-store-alt"></i>
                                                </div>
                                                <div className="ps-2">
                                                    <span className="text-muted smaller pt-2">UMKM DIGITAL</span>
                                                    <h6>342</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md">
                                    <div className="card info-card sales-card">
                                        <div className="card-body-info">
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bx bxs-detail"></i>
                                                </div>
                                                <div className="ps-2">
                                                    <span className="text-muted smaller pt-2">PROGRAM DESA</span>
                                                    <h6>3,421</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-md-3">
                                <div className="col-md">
                                    <div className="card info-card sales-card">
                                        <div className="card-body-info">
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bx bxs-home"></i>
                                                </div>
                                                <div className="ps-2">
                                                    <span className="text-muted smaller pt-2">DUSUN/KAMPUNG/RT</span>
                                                    <h6>3,421</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md">
                                    <div className="card info-card sales-card">
                                        <div className="card-body-info">
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bx bxs-caret-up-circle"></i>
                                                </div>
                                                <div className="ps-2">
                                                    <span className="text-muted smaller pt-2">PENINGKATAN SKOR</span>
                                                    <h6>34.93%</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md">
                                    <div className="card info-card sales-card">
                                        <div className="card-body-info">
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-cart"></i>
                                                </div>
                                                <div className="ps-2">
                                                    <span className="text-muted smaller pt-2">TERSALURKAN RKD</span>
                                                    <h6>342</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md">
                                    <div className="card info-card sales-card">
                                        <div className="card-body-info">
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-cart"></i>
                                                </div>
                                                <div className="ps-2">
                                                    <span className="text-muted smaller pt-2">KEUANGAN DESA</span>
                                                    <h6>Rp312.300</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md">
                                    <div className="card info-card sales-card">
                                        <div className="card-body-info">
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bx bxs-file"></i>
                                                </div>
                                                <div className="ps-2">
                                                    <span className="text-muted smaller pt-2">PENERIMA PROGRAM</span>
                                                    <h6>435</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

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

                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title-potensi">ARTIKEL DIGIDES</h5>
                                            <div className="filter-primary">
                                                <button type="button" className="btn btn-primary">Lihat Semua</button>
                                            </div>

                                            <div className="news overflow-auto">
                                                <div className="post-item clearfix">
                                                    <img src="assets/img/news-1.jpg" alt="News" />
                                                    <h4><Link to={'/'}>Nihil blanditiis at in nihil autem</Link></h4>
                                                    <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                                                </div>

                                                <div className="post-item clearfix">
                                                    <img src="assets/img/news-2.jpg" alt="News" />
                                                    <h4><Link to={'/'}>Quidem autem et impedit</Link></h4>
                                                    <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                                                </div>

                                                <div className="post-item clearfix">
                                                    <img src="assets/img/news-3.jpg" alt="News" />
                                                    <h4><Link to={'/'}>Id quia et et ut maxime similique occaecati ut</Link></h4>
                                                    <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                                                </div>

                                                <div className="post-item clearfix">
                                                    <img src="assets/img/news-4.jpg" alt="News" />
                                                    <h4><Link to={'/'}>Laborum corporis quo dara net para</Link></h4>
                                                    <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                                                </div>

                                                <div className="post-item clearfix">
                                                    <img src="assets/img/news-5.jpg" alt="News" />
                                                    <h4><Link to={'/'}>Et dolores corrupti quae illo quod dolor</Link></h4>
                                                    <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
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
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <button type="button" className="btn btn-cari"><i className="bi bi-search me-1"></i> Temukan</button>
                                        </div>
                                    </div>
                                    <iframe title='CCTV'
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63420.99288538326!2d107.54446639281886!3d-6.545400788011531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6916cc19b3a0e9%3A0xd62b494f4f9c4f7b!2sCimayasari%2C%20Kec.%20Cipeundeuy%2C%20Kabupaten%20Subang%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1677635547756!5m2!1sid!2sid"
                                        width="100%" height="600" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title-potensi">POTENSI</h5>
                                    <p>Menampilkan potensi Kecamatan, Desa/Kelurahan</p>
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary">Export Report</button>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="potensi-card">
                                                <div className="box-featured">
                                                    <h5 className="card-title">KECAMATAN</h5>
                                                </div>
                                                <div className="list-group-potensi mt-3">
                                                    <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                                                        The current button
                                                    </button>
                                                    <button type="button" className="list-group-item list-group-item-action">A second item</button>
                                                    <button type="button" className="list-group-item list-group-item-action">A third button
                                                        item</button>
                                                    <button type="button" className="list-group-item list-group-item-action">A fourth button
                                                        item</button>
                                                    <button type="button" className="list-group-item list-group-item-action">A fourth button
                                                        item</button>
                                                    <button type="button" className="list-group-item list-group-item-action">A fourth button
                                                        item</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="potensi-card">
                                                <div className="box-featured">
                                                    <h5 className="card-title">Potensi Manusia</h5>
                                                </div>
                                                <div className="card-body">
                                                    {/* <canvas id="potensiPieChart" style={{ maxHeight: '400px' }}></canvas> */}

                                                    <PotensiManusia />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-5">
                                            <div className="potensi-card">
                                                <div className="box-featured">
                                                    <h5 className="card-title">Potensi SDA</h5>
                                                </div>
                                                <div className="card-body">
                                                    {/* <div id="potensiBarChart" style={{ minHeight: '400px' }} className="echart"></div> */}
                                                    <PotensiSDA />

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="potensi-card">
                                                <div className="box-featured">
                                                    <h5 className="card-title">KECAMATAN</h5>
                                                </div>
                                                <div className="list-group-potensi mt-3">
                                                    <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                                                        The current button
                                                    </button>
                                                    <button type="button" className="list-group-item list-group-item-action">A second item</button>
                                                    <button type="button" className="list-group-item list-group-item-action">A third button
                                                        item</button>
                                                    <button type="button" className="list-group-item list-group-item-action">A fourth button
                                                        item</button>
                                                    <button type="button" className="list-group-item list-group-item-action">A fourth button
                                                        item</button>
                                                    <button type="button" className="list-group-item list-group-item-action">A fourth button
                                                        item</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="potensi-card">
                                                <div className="box-featured">
                                                    <h5 className="card-title">Potensi Manusia</h5>
                                                </div>
                                                <div className="card-body">
                                                    {/* <canvas id="potensiRadarChart" style={{ maxHeight: '400px' }}></canvas> */}

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-5">
                                            <div className="potensi-card">
                                                <div className="box-featured">
                                                    <h5 className="card-title">Potensi Manusia</h5>
                                                </div>
                                                <div className="card-body">

                                                    {/* <div id="saranaChart" style={{ minHeight: '400px' }} className="echart"></div> */}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <h5 className="card-title-potensi pb-0">KESEHATAN - STUNTING</h5>
                                    <p>Menampilkan potensi Kecamatan, Desa/Kelurahan</p>
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary">Export Report</button>
                                    </div>

                                    <div className="row g-md-0">
                                        <div className="col-md-6">
                                            <div className="stunting-card">
                                                <div className="card-body-kesehatan">
                                                    <div className="ps-2">
                                                        <span className="badge-stunting text-muted smaller pt-2">JUMLAH BALITA STUNTING
                                                            <i className="bi bi-info-circle ms-1" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Tooltip on top"></i>
                                                        </span>
                                                        <h6>276.069</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="stunting-card">
                                                <div className="card-body-stunting">
                                                    <div className="ps-2">
                                                        <span className="badge-stunting text-muted smaller pt-2">PERSENTASE BALITA STUNTING
                                                            <i className="bi bi-info-circle ms-1" data-bs-toggle="tooltip" data-bs-placement="top"
                                                                title="Tooltip on top"></i>
                                                        </span>
                                                        <h6>9.98%</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="stunting-card">
                                                <div className="box-featured">
                                                    <h5 className="card-title">BALITA STUNTING DARI TAHUN KE TAHUN</h5>
                                                </div>
                                                <div className="card-body">

                                                    {/* <div id="stuntingChart" style="min-height: 400px;"></div> */}

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="stunting-card">
                                                <div className="box-featured">
                                                    <h5 className="card-title">JUMLAH BALITA STUNTING DI DESA/KELURAHAN</h5>
                                                </div>
                                                <div className="card-body">

                                                    {/* <div id="verticalBarChart" style={{ minHeight: '400px' }} className="echart mt-4"></div> */}

                                                </div>
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
