import { React, Fragment } from 'react'

function PerkembanganDesa() {
    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Perkembangan Desa</h1>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <h5 className="card-title-potensi pb-0">SKOR IDM Se Kabupaten</h5>
                                    <div className="stunting-card">
                                        <div className="card-body pb-0">
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <h4 className="fw-bold mt-4 text-center">Skor IDM Tahun 2022</h4>
                                                        <div className="row mt-4">
                                                            <div className="col-md-12 mb-4">
                                                                <div className="stunting-card card-idm__skor">
                                                                    <div className="card-body-info">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <p className="card-idm__text">
                                                                                    Skor IDM <br />
                                                                                    Tahun <span>2022</span>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-md-6 text-center center-v">
                                                                                <p className="card-idm__jumlah">0</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 mb-4">
                                                                <div className="stunting-card card-idm__status">
                                                                    <div className="card-body-info">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <p className="card-idm__text">
                                                                                    Status IDM <br />
                                                                                    Tahun <span>2022</span>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-md-6 text-center center-v">
                                                                                <p className="card-idm__infoStatus">Mandiri</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row text-center mt-4">
                                                            <div className='col-md-12'>
                                                                <div className='row'>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Target Status</p>
                                                                        <p className="fs-5">0</p>
                                                                    </div>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Skor Minimal</p>
                                                                        <p className="fs-5">0</p>
                                                                    </div>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Penambahan</p>
                                                                        <p className="fs-5">0</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-12'>
                                                                <div className='row'>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Skor IKS</p>
                                                                        <p className="fs-5">0</p>
                                                                    </div>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Skor IKE</p>
                                                                        <p className="fs-5">0</p>
                                                                    </div>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Skor IKL</p>
                                                                        <p className="fs-5">0</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <h4 className="fw-bold mt-4 text-center">Skor IDM Tahun Ke Tahun</h4>
                                                        <div id="idmChart" style={{ minHeight: '500px' }}></div>

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
                                <div className="card-body pb-0">
                                    <h5 className="card-title-potensi pb-0">PETA PERKEMBANGAN DESA (BERDASARKAN SDGS & IDM DESA)</h5>

                                    <canvas id="bubbleChart" style={{ maxHeight: '400px' }}></canvas>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <h5 className="card-title-potensi pb-0">REKOMENDASI PEMBANGUNAN</h5>
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
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Capaian & Potensi</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Capaian & Potensi</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>

                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Position</th>
                                                <th scope="col">Age</th>
                                                <th scope="col">Start Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Brandon Jacob</td>
                                                <td>Designer</td>
                                                <td>28</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                        data-bs-target="#disablebackdrop">Lihat Rekomendasi</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Bridie Kessler</td>
                                                <td>Developer</td>
                                                <td>35</td>
                                                <td>2014-12-05</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Ashleigh Langosh</td>
                                                <td>Finance</td>
                                                <td>45</td>
                                                <td>2011-08-12</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Angus Grady</td>
                                                <td>HR</td>
                                                <td>34</td>
                                                <td>2012-06-11</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Raheem Lehner</td>
                                                <td>Dynamic Division Officer</td>
                                                <td>47</td>
                                                <td>2011-04-19</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>

            <div className="modal fade" id="disablebackdrop" tabIndex="-1" data-bs-backdrop="false">
                <div className="modal-dialog modal-lg shadow-lg rounded">
                    <div id="item-rekomendasi" className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Rekomendasi</h5>
                            <div data-bs-dismiss="modal" aria-label="Close" style={{ cursor: 'pointer' }}>
                                <span>Tutup</span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <h5><span className="badge bg-super-prioritas">Super Prioritas</span></h5>
                            <h5><span className="badge bg-prioritas">Prioritas</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PerkembanganDesa