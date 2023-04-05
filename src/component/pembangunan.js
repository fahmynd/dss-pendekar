import { React, Fragment, useEffect, useState } from 'react'
import IdmChart from './chart/idm'
import { PetaPerkembangan } from './chart/petaPerkembanganDesa'
import BalitaStuntingJumlah from './chart/balitaStuntingJumlah'
import BalitaYoY from './chart/balitaStuntingYoY_'
import { LembagaKemasyarakatan } from './chart/lembagaKemasyarakatan'
import { PotensiManusia } from './chart/potensiManusia'
import PotensiSDA from './chart/potensiSDA'
import axios from 'axios'
import { BASE_API_URL } from '../utils/api'
import Map from './mapPopup'
import LoadingSpinner from './LoadingSpinner'
import RekomendasiTable from './datatable/RekomendasiDataTable'

const Pembangunan = () => {
    const [resultData, setResultData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [kec, setKec] = useState([]);
    const [desa, setDesa] = useState([]);
    const [tahun_now, setTahun_now] = useState([]);
    const [skor_idm_now, setSkor_idm_now] = useState([]);
    const [skor_min_now, setSkor_min_now] = useState([]);
    const [skor_up_now, setSkor_up_now] = useState([]);
    const [current_status, setCurrent_status] = useState([]);
    const [target_status, setTarget_status] = useState([]);
    const [skor_iks_now, setSkor_iks_now] = useState([]);
    const [skor_ike_now, setSkor_ike_now] = useState([]);
    const [skor_ikl_now, setSkor_ikl_now] = useState([]);
    const [jml_stunting_now, setJml_stunting_now] = useState([]);
    const [persen_stunting_now, setPersen_stunting_now] = useState([]);
    const [prevalensi_now, setPrevalensi_now] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // axios.get(BASE_API_URL + 'pembangunan?k3=&k4=')
        axios.get('https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/pembangunan?k3=&k4=')
            .then((result) => {
                // console.log(result.data.data.list_berita)
                const data = result.data.data;
                setResultData(result.data);
                setKec(data.list_kecamatan)
                setDesa(data.list_desa)

                const idm = result.data.data.idm;
                setTahun_now(idm[2].tahun)
                setSkor_idm_now(idm[2].skor_idm)
                setSkor_min_now(idm[2].skor_min)
                setSkor_up_now(idm[2].skor_up)
                setCurrent_status(idm[2].current_status)
                setTarget_status(idm[2].target_status)
                setSkor_iks_now(idm[2].skor_iks)
                setSkor_ike_now(idm[2].skor_ike)
                setSkor_ikl_now(idm[2].skor_ikl)

                const stunting = result.data.data.stunting;
                setJml_stunting_now(stunting[7].jml_stunting)
                setPersen_stunting_now(stunting[7].persen_stunting)
                setPrevalensi_now(stunting[7].prevalensi)

            })
            .catch(error => {
                alert(error.message);
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail

        document.title = "Perkembangan Desa | PENDEKAR";

    }, [])

    if (isLoading) return <LoadingSpinner />;

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

                                    {resultData && <Map resultData={resultData} />}

                                    <br />
                                    <div className="row g-0">
                                        <div className="col-md-2 fw-bold">Keterangan:</div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#A3FFC2' }}></i> &lt; 100</p>
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#518F6B' }}></i> 1.001 - 5.000</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#73C897' }}></i> 101 - 500</p>
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#223D2D' }}></i> 5.001 - 10.000</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="row">
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#2EA256' }}></i> 501 - 1.000</p>
                                                <p className="col-12"><i className="bi bi-square-fill" style={{ color: '#E84C30' }}></i> &gt; 10.000</p>
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
                                                        <h4 className="fw-bold mt-4 text-center">Skor IDM Tahun {tahun_now}</h4>
                                                        <div className="row mt-4">
                                                            <div className="col-md-12 mb-4">
                                                                <div className="idm-card card-idm__skor">
                                                                    <div className="card-body-info">
                                                                        <div className="row">
                                                                            <div className="col-md-6">
                                                                                <p className="card-idm__text">
                                                                                    Skor IDM <br />
                                                                                    Tahun <span>{tahun_now}</span>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-md-6 text-center center-v">
                                                                                <p className="card-idm__jumlah">{skor_idm_now}</p>
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
                                                                                    Tahun <span>{tahun_now}</span>
                                                                                </p>
                                                                            </div>
                                                                            <div className="col-md-6 text-center center-v">
                                                                                <p className="card-idm__infoStatus">{current_status}</p>
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
                                                                        <p className="fs-5">{target_status}</p>
                                                                    </div>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Skor Minimal</p>
                                                                        <p className="fs-5">{skor_min_now}</p>
                                                                    </div>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Penambahan</p>
                                                                        <p className="fs-5">{skor_up_now}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-12'>
                                                                <div className='row'>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Skor IKS</p>
                                                                        <p className="fs-5">{skor_iks_now}</p>
                                                                    </div>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Skor IKE</p>
                                                                        <p className="fs-5">{skor_ike_now}</p>
                                                                    </div>
                                                                    <div className="col-6 col-md-4 mb-3">
                                                                        <p className="fw-bold">Skor IKL</p>
                                                                        <p className="fs-5">{skor_ikl_now}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <h4 className="fw-bold mt-4 text-center">Skor IDM Tahun Ke Tahun</h4>
                                                        <div id="idmChart" style={{ minHeight: '500px' }}></div>
                                                        {resultData && <IdmChart resultData={resultData} />}
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
                                    {resultData && <PetaPerkembangan resultData={resultData} />}

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
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
                                                {kec.map((item) => {
                                                    return (
                                                        <SelectOptions
                                                            key={item.kode_wilayah}
                                                            value={item.kode_wilayah}
                                                            title={item.nama_kecamatan}
                                                        />
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Desa</option>
                                                {desa.map((item) => {
                                                    return (
                                                        <SelectOptions
                                                            key={item.kode_wilayah}
                                                            value={item.kode_wilayah}
                                                            title={item.nama_deskel}
                                                        />
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>

                                    {/* <table className="table table-bordered d-none">
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
                                    </table> */}

                                    {resultData && <RekomendasiTable resultData={resultData} />}

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title-potensi">POTENSI</h5>
                                    <p>Menampilkan Potensi Kecamatan, Desa/Kelurahan</p>
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
                                                    {kec.map((kec) => {
                                                        return (
                                                            <KecamatanPotensi
                                                                key={kec.kode_wilayah}
                                                                listkec={kec.nama_kecamatan}
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
                                                    <h5 className="card-title">Potensi Manusia</h5>
                                                </div>
                                                <div className="card-body-chart">
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
                                                            <DesaPotensi
                                                                key={deskel.kode_wilayah}
                                                                listdesa={deskel.nama_deskel}
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
                                    <p>Menampilkan Stunting Kecamatan, Desa/Kelurahan</p>
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
                                                                title={prevalensi_now}></i>
                                                        </span>
                                                        <h6>{jml_stunting_now}</h6>
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
                                                                title={prevalensi_now}></i>
                                                        </span>
                                                        <h6>{persen_stunting_now}%</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="stunting-card">
                                                <div className="box-featured">
                                                    <h5 className="card-title">BALITA STUNTING DARI TAHUN KE TAHUN</h5>
                                                </div>
                                                <div className="card-body-chart mt-4 overflow-auto">
                                                    {resultData && <BalitaYoY resultData={resultData} />}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="stunting-card">
                                                <div className="box-featured">
                                                    <h5 className="card-title">JUMLAH BALITA STUNTING DI DESA/KELURAHAN</h5>
                                                </div>
                                                <div className="card-body-chart my-4 overflow-auto">
                                                    {resultData && <BalitaStuntingJumlah resultData={resultData} />}
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

function SelectOptions(props) {
    return (
        <option value={props.value}>{props.title}</option>
    )
}

function KecamatanPotensi(props) {
    return (
        // <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
        //     {props.listkec}
        // </button>
        <button type="button" className="list-group-item list-group-item-action">{props.listkec}</button>
    )
}

function DesaPotensi(props) {
    return (
        // <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
        //     {props.listkec}
        // </button>
        <button type="button" className="list-group-item list-group-item-action">{props.listdesa}</button>
    )
}

export default Pembangunan
