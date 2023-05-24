import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { rupiah } from '../utils/helper.min'
import { BASE_API_URL } from '../utils/api'
import BalitaStuntingJumlah from './chart/balitaStuntingJumlah'
import BalitaYoY from './chart/balitaStuntingYoY'
import { LembagaKemasyarakatan } from './chart/lembagaKemasyarakatan'
import { PotensiManusia } from './chart/potensiManusia'
import PotensiSDA from './chart/potensiSDA'

const Dashboard = () => {
    const [dss, setDss] = useState();
    const [summary, setSummary] = useState([]);
    const [jml_desa, setJml_desa] = useState();
    const [jml_dusun, setJml_dusun] = useState();
    const [jml_umkm, setJml_umkm] = useState();
    const [jml_program, setJml_program] = useState();
    const [kecamatan, setKecamatan] = useState([]);
    const [desa, setDesa] = useState([]);

    useEffect(() => {
        axios.get(BASE_API_URL)
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
                                                    {/* <h6>{rupiah(summary[dss.k1 + '.' + dss.k2 + '.' + dss.k3 + '.' + dss.k4].dana.pagu)}</h6> */}
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
                                                    <h6>{jml_desa}</h6>
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
                                                    <h6>{jml_umkm}</h6>
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
                                                    <h6>{jml_program}</h6>
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
                                                    <h6>{jml_dusun}</h6>
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
                                                    {/* <h6>{summary[dss.k1 + '.' + dss.k2 + '.' + dss.k3 + '.' + dss.k4].idm.up}%</h6> */}
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
                                                    {/* <h6>{summary[dss.k1 + '.' + dss.k2 + '.' + dss.k3 + '.' + dss.k4].dana.total_rkd}</h6> */}
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

                                    <div className='card shadow position-absolute map-box2'>
                                        <div className='card-body'>
                                            <h5 className="card-title-potensi" style={{ color: '#327A6D' }}>Desa Cimayasari</h5>
                                            <p>Kec. Cipeundeuy, Kab. Subang, Prov. Jawa Barat</p>
                                            <div className="filter-primary">
                                                <button type="button" className="btn btn-primary"><i className='bx bx-cctv'></i> CCTV</button>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <h5 className='fw-bold'>Capaian</h5>
                                                    <div className='row g-2'>
                                                        <div className='col-6'>KD</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>IDM</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>SDGS</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>AR</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>Program</div>
                                                        <div className='col-6'>:-</div>
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <h5 className='fw-bold'>Potensi</h5>
                                                    <div className='row g-2'>
                                                        <div className='col-6'>SDA</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>IDM</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>SDM</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>LK</div>
                                                        <div className='col-6'>:-</div>
                                                        <div className='col-6'>Sarana Prasarana</div>
                                                        <div className='col-6'>:-</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="embed-responsive embed-responsive-16by9" style={{ height: '300px !important' }}>
                                        <iframe title='CCTV' id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                    </div>
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
                                                    {kecamatan.map((kec) => {
                                                        return (
                                                            <Kecamatan
                                                                key={kec.kode}
                                                                listkec={kec.kecamatan}
                                                            />
                                                        )
                                                    })
                                                    }
                                                    {/* <button type="button" className="list-group-item list-group-item-action">A second item</button> */}
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
                                                    {desa.map((deskel) => {
                                                        return (
                                                            <Desa
                                                                key={deskel.kode}
                                                                listdesa={deskel.deskel}
                                                            />
                                                        )
                                                    })
                                                    }
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
                                                <div className="card-body">

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

export default Dashboard
