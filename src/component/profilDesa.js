import React, { Fragment, useEffect } from 'react'
import profil from '../assets/img/profil.png'

const ProfilDesa = () => {
    useEffect(() => {
        document.title = "Profil Desa | PENDEKAR";
    }, [])
    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>PROFIL DESA/KELURAHAN</h1>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row g-1 mb-4">
                                <div className="col-5">
                                    <div className="search-produk">
                                        <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                            <input type="text" name="query" placeholder="Cari Desa/Kelurahan..." title="Enter search keyword" />
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
                            </div>

                            <div className="row">

                                <div className="col-12">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <img src={profil} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-10 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Desa Patondon Salu</h6>
                                                    <p className="fw-bold smaller">Kabupaten Enrekang - Provinsi Sulawesi Selatan</p>
                                                    <a href="/" className="smaller"><i className="fa-solid fa-earth-asia"></i>
                                                        &nbsp; Kunjungi Website
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <img src={profil} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-10 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Desa Ranga</h6>
                                                    <p className="fw-bold smaller">Kabupaten Enrekang - Provinsi Sulawesi Selatan</p>
                                                    <a href="/" className="smaller"><i className="fa-solid fa-earth-asia"></i>
                                                        &nbsp; Kunjungi Website
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <img src={profil} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-10 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Desa Banti</h6>
                                                    <p className="fw-bold smaller">Kabupaten Enrekang - Provinsi Sulawesi Selatan</p>
                                                    <a href="/" className="smaller"><i className="fa-solid fa-earth-asia"></i>
                                                        &nbsp; Kunjungi Website
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <img src={profil} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-10 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Desa Bamba Puang</h6>
                                                    <p className="fw-bold smaller">Kabupaten Enrekang - Provinsi Sulawesi Selatan</p>
                                                    <a href="/" className="smaller"><i className="fa-solid fa-earth-asia"></i>
                                                        &nbsp; Kunjungi Website
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <img src={profil} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-10 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Desa Mata Allo</h6>
                                                    <p className="fw-bold smaller">Kabupaten Enrekang - Provinsi Sulawesi Selatan</p>
                                                    <a href="/" className="smaller"><i className="fa-solid fa-earth-asia"></i>
                                                        &nbsp; Kunjungi Website
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="card p-2 mb-3">
                                        <div className="row g-0 align-items-center">
                                            <div className="col-2">
                                                <img src={profil} className="img-fluid rounded-start" alt="..." />
                                            </div>
                                            <div className="col-10 direction">
                                                <div className="card-body-produk">
                                                    <h6 className="fw-bold m-0">Desa Cendana</h6>
                                                    <p className="fw-bold smaller">Kabupaten Enrekang - Provinsi Sulawesi Selatan</p>
                                                    <a href="/" className="smaller"><i className="fa-solid fa-earth-asia"></i>
                                                        &nbsp; Kunjungi Website
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

export default ProfilDesa