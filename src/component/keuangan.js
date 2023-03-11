import { React, Fragment } from 'react'

function Keuangan() {
    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Keuangan</h1>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">

                            <ul className="container nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="about-tab" data-bs-toggle="tab" data-bs-target="#bordered-about"
                                        type="button" role="tab" aria-controls="about" aria-selected="true">APBDes</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="boat-tab" data-bs-toggle="tab" data-bs-target="#bordered-boat" type="button"
                                        role="tab" aria-controls="boat" aria-selected="false">PROPOSAL</button>
                                </li>
                            </ul>
                            <div className="tab-content pt-2" id="borderedTabContent">
                                <div className="tab-pane fade show active" id="bordered-about" role="tabpanel" aria-labelledby="about-tab">
                                    <div className="row g-1 my-3">
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Pilih Tahun</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Pilih Kecamatan</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row g-md-0 mb-5">

                                        <div className="col-md-3">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan pb-0">
                                                    <h6>JUMLAH DESA</h6>
                                                    <div className="d-flex">
                                                        <div className="card-icon1 rounded-circle d-flex justify-content-center">
                                                            <i className="bx bxs-building-house"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="fw-bold">54</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan pb-0">
                                                    <h6>TOTAL DANA DESA</h6>
                                                    <div className="d-flex">
                                                        <div className="card-icon1 rounded-circle d-flex justify-content-center">
                                                            <i className="bx bx-money"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="fw-bold">Rp312.300.003</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan pb-0">
                                                    <h6>TOTAL PENDAPATAN</h6>
                                                    <div className="d-flex">
                                                        <div className="card-icon1 rounded-circle d-flex justify-content-center">
                                                            <i className="bx bxs-archive-in"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="fw-bold">Rp312.300.003</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan pb-0">
                                                    <h6>TOTAL BELANJA</h6>
                                                    <div className="d-flex">
                                                        <div className="card-icon1 rounded-circle d-flex justify-content-center">
                                                            <i className="bx bx-cart"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="fw-bold">Rp312.300.003</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan pb-1">
                                                    <h6>ANGGARAN</h6>
                                                    <h5 className="fw-bold">Rp150,232,431,100</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan pb-1">
                                                    <h6>REALISASI</h6>
                                                    <h5 className="fw-bold">Rp10,232,431,100</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan">
                                                    <h6>% PENYERAPAN</h6>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75"
                                                            aria-valuemin="0" aria-valuemax="100">75%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-12 mb-5">
                                        <div className="card">
                                            <div className="card-body pb-0">
                                                <h5 className="card-title-potensi pb-0">GRAFIK VS REALISASI</h5>
                                                <p>Menampilkan potensi Kecamatan, Desa/Kelurahan</p>
                                                <div className="filter-primary">
                                                    <button type="button" className="btn btn-primary">Export Report</button>
                                                </div>

                                                <div className="row g-4">
                                                    <div className="col-md-6">
                                                        <div className="stunting-card">
                                                            <div className="box-featured">
                                                                <h5 className="card-title">BALITA STUNTING DARI TAHUN KE TAHUN</h5>
                                                            </div>
                                                            <div className="card-body">

                                                                <div id="stuntingChart" style={{ minHeight: '400px' }}></div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">

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
                                                                    <td>2016-05-25</td>
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
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-body pb-0">
                                                <h5 className="card-title-potensi pb-0">RINCIAN KEUANGAN DESA</h5>

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
                                                            <td>2016-05-25</td>
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

                                <div className="tab-pane fade" id="bordered-boat" role="tabpanel" aria-labelledby="boat-tab">

                                    <div className="col-lg-12 mt-3 mb-5">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title-potensi">PROGRES PROPOSAL APBDes</h5>

                                                <div className="row g-md-2">

                                                    <div className="col-md-4">
                                                        <div className="proposal_pengajuan-card">
                                                            <div className="card-body-keuangan pb-1">
                                                                <h6>PENGAJUAN</h6>
                                                                <h5 className="fw-bold">13 Desa/Kelurahan</h5>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="proposal_revisi-card">
                                                            <div className="card-body-keuangan pb-1">
                                                                <h6>REVISI</h6>
                                                                <h5 className="fw-bold">13 Desa/Kelurahan</h5>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="proposal_rkd-card">
                                                            <div className="card-body-keuangan">
                                                                <h6>MASUK RKD</h6>
                                                                <h5 className="fw-bold">13 Desa/Kelurahan</h5>
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
                                                <h5 className="card-title-potensi">PROPOSAL DANA TRANSFER</h5>
                                                <div className="row g-1 mb-4">
                                                    <div className="col-3">
                                                        <div className="search-produk">
                                                            <form className="search-form-produk d-flex align-items-center" method="POST" action="#">
                                                                <input type="text" name="query" placeholder="Nama Desa..." title="Enter search keyword" />
                                                                <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                                                            </form>
                                                        </div>
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
                                                            <td>2016-05-25</td>
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
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </Fragment>
    )
}

export default Keuangan