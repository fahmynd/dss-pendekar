import { React, Fragment } from 'react'

function Umkm() {
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

                                    <div id="usahaChart" style={{ minHeight: '400px' }} className="echart"></div>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <h2 className="card-title-potensi pb-0">JENIS USAHA</h2>

                                    <div id="jenisChart" style={{ minHeight: '400px' }} className="echart"></div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <h5 className="card-title-potensi pb-0">PRODUK UMKM DESA/KELURAHAN</h5>
                            <div className="row g-1 mb-4">
                                <div className="col-3">
                                    <div className="search-produk">
                                        <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                                            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                        <option value={'DEFAULT'}>Kecamatan</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col-3">
                                    <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                        <option value={'DEFAULT'}>Desa</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="col-3">
                                    <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                        <option value={'DEFAULT'}>Jenis Usaha</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-md-4">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-5 item">
                                                <span className="notify-badge">Kuliner Online</span>
                                                <img src="assets/img/produk.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Sayur Mba Atun</h6>
                                                    <p className="fw-bold smaller m-0">Desa Riburane, Kec. Cendana</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        Petunjuk Arah
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
                                                <span className="notify-badge">Kuliner Online</span>
                                                <img src="assets/img/produk.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Sayur Mba Atun</h6>
                                                    <p className="fw-bold smaller m-0">Desa Riburane, Kec. Cendana</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        Petunjuk Arah
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
                                                <span className="notify-badge">Kuliner Online</span>
                                                <img src="assets/img/produk.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Sayur Mba Atun</h6>
                                                    <p className="fw-bold smaller m-0">Desa Riburane, Kec. Cendana</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        Petunjuk Arah
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
                                                <span className="notify-badge">Kuliner Online</span>
                                                <img src="assets/img/produk.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Sayur Mba Atun</h6>
                                                    <p className="fw-bold smaller m-0">Desa Riburane, Kec. Cendana</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        Petunjuk Arah
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
                                                <span className="notify-badge">Kuliner Online</span>
                                                <img src="assets/img/produk.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Sayur Mba Atun</h6>
                                                    <p className="fw-bold smaller m-0">Desa Riburane, Kec. Cendana</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        Petunjuk Arah
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
                                                <span className="notify-badge">Kuliner Online</span>
                                                <img src="assets/img/produk.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Sayur Mba Atun</h6>
                                                    <p className="fw-bold smaller m-0">Desa Riburane, Kec. Cendana</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        Petunjuk Arah
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
                                                <span className="notify-badge">Kuliner Online</span>
                                                <img src="assets/img/produk.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Sayur Mba Atun</h6>
                                                    <p className="fw-bold smaller m-0">Desa Riburane, Kec. Cendana</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        Petunjuk Arah
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
                                                <span className="notify-badge">Kuliner Online</span>
                                                <img src="assets/img/produk.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Sayur Mba Atun</h6>
                                                    <p className="fw-bold smaller m-0">Desa Riburane, Kec. Cendana</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        Petunjuk Arah
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
                                                <span className="notify-badge">Kuliner Online</span>
                                                <img src="assets/img/produk.png" className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-7 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Sayur Mba Atun</h6>
                                                    <p className="fw-bold smaller m-0">Desa Riburane, Kec. Cendana</p>
                                                    <div className="smaller">
                                                        <p className="m-0">Order via:</p>
                                                        <ul className="m-0">
                                                            <li>DIGIDES</li>
                                                            <li>Tokopedia</li>
                                                            <li>Grab/Goek</li>
                                                        </ul>
                                                    </div>
                                                    <a href="/" target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                        Petunjuk Arah
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