import { React, Fragment, useEffect } from 'react'
import IdmChart from './chart/idm'
import { PetaPerkembangan } from './chart/petaPerkembanganDesa'

const PerkembanganDesa = () => {
    useEffect(() => {
        document.title = "Perkembangan Desa | PENDEKAR";
    }, [])
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
                                                        <IdmChart />
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

                                    {/* <canvas id="bubbleChart" style={{ maxHeight: '400px' }}></canvas> */}
                                    <PetaPerkembangan />

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
                                                <option value={'DEFAULT'}>Pilih Tahun</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
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

                                    <table className="table table-bordered">
                                        <thead>
                                            <tr style={{ background: '#EDF8F6' }}>
                                                <th scope="col">Nama Kecamatan</th>
                                                <th scope="col">Nama Desa</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Skor IDM</th>
                                                <th scope="col">Skor SDGS</th>
                                                <th scope="col">Rekomendasi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Manggala</td>
                                                <td>Bojong Gede</td>
                                                <td>
                                                    <h5>
                                                        <span className="badge bg-prioritas">Prioritas</span>
                                                    </h5>
                                                </td>
                                                <td>0.8308</td>
                                                <td>26.73</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                        data-bs-target="#disablebackdrop">
                                                        Lihat Rekomendasi
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Manggala</td>
                                                <td>Bojong Gede</td>
                                                <td>
                                                    <h5>
                                                        <span className="badge bg-prioritas">Prioritas</span>
                                                    </h5>
                                                </td>
                                                <td>0.8308</td>
                                                <td>26.73</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                        data-bs-target="#disablebackdrop">
                                                        Lihat Rekomendasi
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Manggala</td>
                                                <td>Bojong Gede</td>
                                                <td>
                                                    <h5>
                                                        <span className="badge bg-prioritas">Prioritas</span>
                                                    </h5>
                                                </td>
                                                <td>0.8308</td>
                                                <td>26.73</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                        data-bs-target="#disablebackdrop">
                                                        Lihat Rekomendasi
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Manggala</td>
                                                <td>Bojong Gede</td>
                                                <td>
                                                    <h5>
                                                        <span className="badge bg-prioritas">Prioritas</span>
                                                    </h5>
                                                </td>
                                                <td>0.8308</td>
                                                <td>26.73</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                        data-bs-target="#disablebackdrop">
                                                        Lihat Rekomendasi
                                                    </button>
                                                </td>
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
                            <table className="table table-bordered">
                                <thead>
                                    <tr style={{ background: '#EDEDED' }}>
                                        <th scope="col">Item</th>
                                        <th scope="col">Kategori</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                        <td>Kesehatan</td>
                                    </tr>
                                    <tr>
                                        <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                        <td>Kesehatan</td>
                                    </tr>
                                    <tr>
                                        <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                        <td>Kesehatan</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h5><span className="badge bg-prioritas">Prioritas</span></h5>
                            <table className="table table-bordered">
                                <thead>
                                    <tr style={{ background: '#EDEDED' }}>
                                        <th scope="col">Item</th>
                                        <th scope="col">Kategori</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                        <td>Kesehatan</td>
                                    </tr>
                                    <tr>
                                        <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                        <td>Kesehatan</td>
                                    </tr>
                                    <tr>
                                        <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                        <td>Kesehatan</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PerkembanganDesa