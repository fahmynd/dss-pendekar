import { React, Fragment, useEffect } from 'react'
import JenisUsaha from './chart/jenisUsaha'
import UsahaDiWilayah from './chart/usahaDiWilayah'
import produk from '../assets/img/produk.png'
// import '../assets/vendor/boxicons/css/boxicons.min.css'

const Umkm = () => {
    useEffect(() => {
        document.title = "UMKM | PENDEKAR";
    }, [])
    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>UMKM</h1>
                </div>

                <section className="section dashboard">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <h2 className="card-title-potensi pb-0">USAHA DI WILAYAH</h2>

                                    {/* <div id="usahaChart" style={{ minHeight: '400px' }} className="echart"></div> */}
                                    <UsahaDiWilayah />

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <h2 className="card-title-potensi pb-0">JENIS USAHA</h2>

                                    {/* <div id="jenisChart" style={{ minHeight: '400px' }} className="echart"></div> */}
                                    <JenisUsaha />

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <h5 className="card-title-potensi pb-0">PRODUK UMKM DESA/KELURAHAN</h5>
                            <div className="row g-1 mb-4">
                                <div className="col-3">
                                    <div className="search-produk">
                                        <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                            <input type="text" name="query" placeholder="Cari produk..." title="Enter search keyword" />
                                            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                        <option value={'DEFAULT'}>Kecamatan</option>
                                        {/* <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option> */}
                                    </select>
                                </div>
                                <div className="col-3">
                                    <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                        <option value={'DEFAULT'}>Desa</option>
                                        {/* <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option> */}
                                    </select>
                                </div>
                                <div className="col-3">
                                    <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                        <option value={'DEFAULT'}>Jenis Usaha</option>
                                        {/* <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option> */}
                                    </select>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-md-4">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-5 item">
                                                <span className="notify-badge">Kuliner</span>
                                                <img src={produk} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Usaha 1</h6>
                                                    <p className="fw-bold smaller m-0">Desa Patondon Salu, Kec. Maiwa</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="https://www.google.com/maps/place/Lasinrang+Park/data=!4m7!3m6!1s0x2d944cfe16d87bd1:0x2e999a38d17e271d!8m2!3d-3.7914168!4d119.6505235!16s%2Fg%2F11b6bq1lpg!19sChIJ0XvYFv5MlC0RHSd-0TiamS4?authuser=0&hl=en&rclk=1" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        &nbsp; Petunjuk Arah
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-5 item">
                                                <span className="notify-badge">Tourism</span>
                                                <img src={produk} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Usaha 2</h6>
                                                    <p className="fw-bold smaller m-0">Desa Labuku, Kec. Maiwa</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="https://www.google.com/maps/place/Puncak+Bila/data=!4m7!3m6!1s0x2d95d3471705487d:0x3c2263cf09a5de2a!8m2!3d-3.8213197!4d120.0465144!16s%2Fg%2F11bv30jgz6!19sChIJfUgFF0fTlS0RKt6lCc9jIjw?authuser=0&hl=en&rclk=1" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        &nbsp; Petunjuk Arah
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-5 item">
                                                <span className="notify-badge">Market</span>
                                                <img src={produk} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Usaha 3</h6>
                                                    <p className="fw-bold smaller m-0">Desa Labuku, Kec. Maiwa</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="https://www.google.com/maps/place/Dante+Pine/data=!4m7!3m6!1s0x2d94134a50c82633:0x274d4480cf59d2fb!8m2!3d-3.4461625!4d119.7922182!16s%2Fg%2F11f046zhw8!19sChIJMybIUEoTlC0R-9JZz4BETSc?authuser=0&hl=en&rclk=1" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        &nbsp; Petunjuk Arah
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-5 item">
                                                <span className="notify-badge">Kuliner</span>
                                                <img src={produk} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Usaha 4</h6>
                                                    <p className="fw-bold smaller m-0">Desa Tallu Bamba, Kec. Enrekang</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        &nbsp; Petunjuk Arah
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-5 item">
                                                <span className="notify-badge">Tourism</span>
                                                <img src={produk} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Usaha 5</h6>
                                                    <p className="fw-bold smaller m-0">Desa Kadingeh, Kec. Baraka</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        &nbsp; Petunjuk Arah
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-5 item">
                                                <span className="notify-badge">Market</span>
                                                <img src={produk} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Usaha 6</h6>
                                                    <p className="fw-bold smaller m-0">Desa Kadingeh, Kec. Baraka</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        &nbsp; Petunjuk Arah
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-5 item">
                                                <span className="notify-badge">Kuliner</span>
                                                <img src={produk} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Usaha 7</h6>
                                                    <p className="fw-bold smaller m-0">Desa Kadingeh, Kec. Baraka</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        &nbsp; Petunjuk Arah
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-5 item">
                                                <span className="notify-badge">Tourism</span>
                                                <img src={produk} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Usaha 8</h6>
                                                    <p className="fw-bold smaller m-0">Desa Tallu Bamba, Kec. Enrekang</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        &nbsp; Petunjuk Arah
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-5 item">
                                                <span className="notify-badge">Kuliner</span>
                                                <img src={produk} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Usaha 9</h6>
                                                    <p className="fw-bold smaller m-0">Desa Labuku, Kec. Maiwa</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        &nbsp; Petunjuk Arah
                                                    </a>
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

export default Umkm