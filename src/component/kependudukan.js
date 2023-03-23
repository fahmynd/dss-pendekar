import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

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
        // axios.get(BASE_API_URL)
        axios.get('https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/')
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

                        <div className="col-lg-12 mt-3 mb-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title-potensi">Demografi Penduduk</h5>
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary">Lihat Semua Data</button>
                                    </div>
                                    <div className="row g-1 mb-4">
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
                                                            <i className="bi bi-cart"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted smaller pt-2">TOTAL PENDUDUK</span>
                                                            <h6>34</h6>
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
                                                            <i className="bi bi-cart"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted smaller pt-2">LAKI-LAKI</span>
                                                            <h6>34</h6>
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
                                                            <i className="bi bi-cart"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted smaller pt-2">PEREMPUAN</span>
                                                            <h6>34</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 mt-3 mb-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title-potensi">Pendidikan</h5>
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary">Lihat Semua Data</button>
                                    </div>
                                    <div className="row g-1 mb-4">
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
                                                            <i className="bi bi-cart"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted smaller pt-2">TAMAT SD/SEDERAJAT</span>
                                                            <h6>34</h6>
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
                                                            <i className="bi bi-cart"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted smaller pt-2">LAKI-LAKI</span>
                                                            <h6>34</h6>
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
                                                            <i className="bi bi-cart"></i>
                                                        </div>
                                                        <div className="ps-2">
                                                            <span className="text-muted smaller pt-2">PEREMPUAN</span>
                                                            <h6>34</h6>
                                                        </div>
                                                    </div>
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

export default Kependudukan