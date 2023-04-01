import { React, Fragment, useEffect, useState } from 'react'
import IdmChart from './chart/idm'
import { PetaPerkembangan } from './chart/petaPerkembanganDesa'
import BalitaStuntingJumlah from './chart/balitaStuntingJumlah'
import BalitaYoY from './chart/balitaStuntingYoY'
import { LembagaKemasyarakatan } from './chart/lembagaKemasyarakatan'
import { PotensiManusia } from './chart/potensiManusia'
import PotensiSDA from './chart/potensiSDA'
import axios from 'axios'
import { BASE_API_URL } from '../utils/api'
import Map from './mapPopup'

const Pembangunan = () => {

    const [kecamatan, setKecamatan] = useState([]);
    const [desa, setDesa] = useState([]);

    useEffect(() => {
        // axios.get(BASE_API_URL)
        axios.get('https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/administrasi-umum')
            .then((result) => {
                // console.log(result.data.data)
                const data = result.data.data;
                setKecamatan(data.list_desa)
                setDesa(data.list_desa)

            })
        document.title = "Perkembangan Desa | PENDEKAR";
    }, [])
    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Pembangunan Desa</h1>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title-potensi">CAPAIAN & POTENSI DESA</h5>
                                    <p>Menampilkan potensi Kecamatan, Desa/Kelurahan</p>
                                    <div className="row g-1 mb-4">
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Capaian & Potensi</option>
                                                {/* <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option> */}
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <button type="button" className="btn btn-cari"><i className="bi bi-search me-1"></i> Temukan</button>
                                        </div>
                                    </div>

                                    <Map />

                                    <br />
                                    <div className="row g-0">
                                        <div className="col-md-2 fw-bold">Keterangan:</div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#A3FFC2' }}></i> 1.890.063 - 2.515.973</p>
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#518F6B' }}></i> 1.890.063 - 2.515.973</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#2EA256' }}></i> 1.890.063 - 2.515.973</p>
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
                                                                <div className="idm-card card-idm__skor">
                                                                    <div className="card-body-info">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <p className="card-idm__text">
                                                                                    Skor IDM <br />
                                                                                    Tahun <span>2022</span>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-md-6 text-center center-v">
                                                                                <p className="card-idm__jumlah">0.6556</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 mb-4">
                                                                <div className="idm-card card-idm__status">
                                                                    <div className="card-body-info">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <p className="card-idm__text">
                                                                                    Status IDM <br />
                                                                                    Tahun <span>2022</span>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-md-6 text-center center-v">
                                                                                <p className="card-idm__infoStatus">Berkembang</p>
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
                                                                        <p className="fs-5">Maju</p>
                                                                    </div>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Skor Minimal</p>
                                                                        <p className="fs-5">0.7073</p>
                                                                    </div>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Penambahan</p>
                                                                        <p className="fs-5">0.0517</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-12'>
                                                                <div className='row'>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Skor IKS</p>
                                                                        <p className="fs-5">0.7468</p>
                                                                    </div>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Skor IKE</p>
                                                                        <p className="fs-5">0.576</p>
                                                                    </div>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Skor IKL</p>
                                                                        <p className="fs-5">0.6441</p>
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
                                                {/* <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option> */}
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Kecamatan</option>
                                                {/* <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option> */}
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Desa</option>
                                                {/* <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option> */}
                                            </select>
                                        </div>
                                    </div>

                                    <table className="table table-bordered">
                                        <thead>
                                            <tr style={{ background: '#F1ECFF' }}>
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
                                                <td>Maiwa</td>
                                                <td>Patondon Salu</td>
                                                <td>
                                                    <h5>
                                                        <span className="badge bg-verifikasi">Mandiri</span>
                                                    </h5>
                                                </td>
                                                <td>0.7229</td>
                                                <td>31.9</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                        data-bs-target="#disablebackdrop">
                                                        Lihat Rekomendasi
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Anggeraja</td>
                                                <td>Bamba Puang</td>
                                                <td>
                                                    <h5>
                                                        <span className="badge bg-pengajuan">Maju</span>
                                                    </h5>
                                                </td>
                                                <td>0.8057</td>
                                                <td>26.73</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                        data-bs-target="#disablebackdrop">
                                                        Lihat Rekomendasi
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Alla</td>
                                                <td>Mata Allo</td>
                                                <td>
                                                    <h5>
                                                        <span className="badge bg-rkd">Berkembang</span>
                                                    </h5>
                                                </td>
                                                <td>0.6756</td>
                                                <td>26.73</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                        data-bs-target="#disablebackdrop">
                                                        Lihat Rekomendasi
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Bungin</td>
                                                <td>Sawito</td>
                                                <td>
                                                    <h5>
                                                        <span className="badge bg-prioritas">Tertinggal</span>
                                                    </h5>
                                                </td>
                                                <td>0.5425</td>
                                                <td>0</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                                        data-bs-target="#disablebackdrop">
                                                        Lihat Rekomendasi
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Bungin</td>
                                                <td>Bulo</td>
                                                <td>
                                                    <h5>
                                                        <span className="badge bg-super-prioritas">Sangat Tertinggal</span>
                                                    </h5>
                                                </td>
                                                <td>0.5914</td>
                                                <td>0</td>
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
                                                    {/* <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                                                        The current button
                                                    </button> */}
                                                    {/* {kecamatan.map((kec) => {
                                                        return (
                                                            <Kecamatan
                                                                key={kec.kode}
                                                                listkec={kec.kecamatan}
                                                            />
                                                        )
                                                    })
                                                    } */}
                                                    <button type="button" className="list-group-item list-group-item-action">Maiwa</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Enrekang</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Baraka</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Anggeraja</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Bungin</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Cendana</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Curio</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Masalle</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Buntu Batu</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Alla</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="potensi-card">
                                                <div className="box-featured">
                                                    <h5 className="card-title">Potensi Manusia</h5>
                                                </div>
                                                <div className="card-body-chart">
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
                                                <div className="card-body-chart">
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
                                                    <h5 className="card-title">DESA/KELURAHAN</h5>
                                                </div>
                                                <div className="list-group-potensi mt-3">
                                                    {/* {desa.map((deskel) => {
                                                        return (
                                                            <Desa
                                                                key={deskel.kode}
                                                                listdesa={deskel.deskel}
                                                            />
                                                        )
                                                    })
                                                    } */}
                                                    <button type="button" className="list-group-item list-group-item-action">Bamba Puang</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Temban</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Kadingeh</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Cendana</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Ranga</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Palakka</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Pasang</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Rosoan</button>
                                                    <button type="button" className="list-group-item list-group-item-action">Mampu</button>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="potensi-card">
                                                <div className="box-featured">
                                                    <h5 className="card-title">Lembaga Kemasyarakatan</h5>
                                                </div>
                                                <div className="card-body-chart">
                                                    {/* <canvas id="potensiRadarChart" style={{ maxHeight: '400px' }}></canvas> */}
                                                    <LembagaKemasyarakatan />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-5">
                                            <div className="potensi-card">
                                                <div className="box-featured">
                                                    <h5 className="card-title">Sarana & Prasarana</h5>
                                                </div>
                                                <div className="card-body-chart">

                                                    {/* <div id="saranaChart" style={{ minHeight: '400px' }} className="echart"></div> */}
                                                    <PotensiSDA />
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
                                                    <BalitaYoY />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="stunting-card">
                                                <div className="box-featured">
                                                    <h5 className="card-title">JUMLAH BALITA STUNTING DI DESA/KELURAHAN</h5>
                                                </div>
                                                <div className="card-body mt-4">

                                                    {/* <div id="verticalBarChart" style={{ minHeight: '400px' }} className="echart mt-4"></div> */}
                                                    <BalitaStuntingJumlah />

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

function Kecamatan(props) {
    return (
        // <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
        //     {props.listkec}
        // </button>
        <button type="button" className="list-group-item list-group-item-action">{props.listkec}</button>
    )
}

function Desa(props) {
    return (
        // <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
        //     {props.listkec}
        // </button>
        <button type="button" className="list-group-item list-group-item-action">{props.listdesa}</button>
    )
}

export default Pembangunan