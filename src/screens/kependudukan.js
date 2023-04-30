import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BASE_API_URL } from '../utils/api';
import PendudukJumlah from '../component/chart/pendudukJumlah';
import PendudukTable from '../component/datatable/PdkDataTable';
import RekapPendudukTable from '../component/datatable/RekapPdkDataTable';
import LoadingSpinner from '../utils/LoadingSpinner';
import MiskinPendudukTable from '../component/datatable/MiskinPdkDataTable';
import AdmUmur from '../component/chart/AdmUmur';
import AdmDusun from '../component/chart/AdmDusun';
import AdmPendidikan from '../component/chart/AdmPendidikan';
import AdmPekerjaan from '../component/chart/AdmPekerjaan';
import AdmPerkawinan from '../component/chart/AdmPerkawinan';
import AdmKeluarga from '../component/chart/AdmKeluarga';
import AdmAgama from '../component/chart/AdmAgama';

const Kependudukan = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resultData, setResultData] = useState();
    const [kec, setKec] = useState([]);
    const [desa, setDesa] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // axios.get(BASE_API_URL + 'kependudukan?k3=&k4=')
        axios.get(`https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/kependudukan?k3=&k4=`)
            .then((result) => {
                // console.log(result.data.data)
                const data = result.data.data;
                setResultData(data);
                setKec(data.list_kecamatan)
                setDesa(data.list_desa)
            })
            .catch(error => {
                alert(error.message);
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail

        document.title = "Kependudukan | PENDEKAR";

    }, [])

    if (isLoading) return <LoadingSpinner />;

    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Administrasi Kependudukan</h1>
                </div>

                <div className="filter-update">
                    <h5>
                        <span className="badge bg-update py-3">Last Update : 3 September 2022, 12:00 PM</span>
                    </h5>
                </div>

                <section className="section dashboard">
                    <div className="row g-2">

                        <div className="col-md-6 d-none">
                            <div className="card">
                                <div className="card-body-demografi pb-0">
                                    <h5 className="card-title-potensi pb-0">Tampilkan Berdasarkan</h5>
                                    <div className="row g-1 mb-4">
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Demografi Kependudukan</option>
                                                <option value="1">Jenis Kelamin</option>
                                                <option value="2">Pendidikan</option>
                                                <option value="3">Pekerjaan</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Kecamatan</option>
                                                {kec.map((kec) => {
                                                    return (
                                                        <Kecamatan
                                                            key={kec.kode_wilayah}
                                                            listkec={kec.nama_kecamatan}
                                                        />
                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Desa</option>
                                                {desa.map((deskel) => {
                                                    return (
                                                        <Desa
                                                            key={deskel.kode_wilayah}
                                                            listdesa={deskel.nama_deskel}
                                                        />
                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    {resultData && <PendudukTable resultData={resultData} />}

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 d-none">
                            <div className="card">
                                <div className="card-body-demografi pb-0">
                                    <h5 className="card-title-potensi pb-0">Statistik Data</h5>
                                    <div className='mb-4'>
                                        <button type="button" className="btn btn-outline-secondary me-2">Grafik</button>
                                        <button type="button" className="btn btn-outline-secondary">Statistik</button>
                                    </div>

                                    <div className="row g-md-0">

                                        <div className="col-12">
                                            <div className="stunting-card">
                                                <div className="card-body-chart mt-4 overflow-auto">
                                                    {resultData && <PendudukJumlah resultData={resultData} />}
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
                                    <h5 className="card-title-potensi">Statistik Data Penduduk</h5>
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary">Export Report</button>
                                    </div>
                                    <div className="row g-1 mb-4">
                                        <div className="col-3">
                                            <div className="search-produk">
                                                <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                                    <input type="text" name="query" placeholder="Cari Desa/Kelurahan..." title="Enter search keyword" />
                                                    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Kecamatan</option>
                                                {kec.map((kec) => {
                                                    return (
                                                        <Kecamatan
                                                            key={kec.kode_wilayah}
                                                            listkec={kec.nama_kecamatan}
                                                        />
                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Desa</option>
                                                {desa.map((deskel) => {
                                                    return (
                                                        <Desa
                                                            key={deskel.kode_wilayah}
                                                            listdesa={deskel.nama_deskel}
                                                        />
                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <ul className="nav nav-tabs nav-tabs-bordered d-flex" id="borderedTabJustified" role="tablist">
                                        <li className="nav-item flex-fill" role="presentation">
                                            <button className="nav-link w-100 active" id="umur-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-umur" type="button" role="tab" aria-controls="umur" aria-selected="true">Umur</button>
                                        </li>
                                        <li className="nav-item flex-fill" role="presentation">
                                            <button className="nav-link w-100" id="dusun-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-dusun" type="button" role="tab" aria-controls="dusun" aria-selected="false">Dusun</button>
                                        </li>
                                        <li className="nav-item flex-fill" role="presentation">
                                            <button className="nav-link w-100" id="pendidikan-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-pendidikan" type="button" role="tab" aria-controls="pendidikan" aria-selected="false">Pendidikan</button>
                                        </li>
                                        <li className="nav-item flex-fill" role="presentation">
                                            <button className="nav-link w-100" id="pekerjaan-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-pekerjaan" type="button" role="tab" aria-controls="pekerjaan" aria-selected="false">Pekerjaan</button>
                                        </li>
                                        <li className="nav-item flex-fill" role="presentation">
                                            <button className="nav-link w-100" id="perkawinan-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-perkawinan" type="button" role="tab" aria-controls="perkawinan" aria-selected="false">Perkawinan</button>
                                        </li>
                                        <li className="nav-item flex-fill" role="presentation">
                                            <button className="nav-link w-100" id="keluarga-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-keluarga" type="button" role="tab" aria-controls="keluarga" aria-selected="false">Keluarga</button>
                                        </li>
                                        <li className="nav-item flex-fill" role="presentation">
                                            <button className="nav-link w-100" id="agama-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-agama" type="button" role="tab" aria-controls="agama" aria-selected="false">Agama</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content pt-5" id="borderedTabJustifiedContent">
                                        <div className="tab-pane fade show active" id="bordered-justified-umur" role="tabpanel" aria-labelledby="umur-tab">
                                            <AdmUmur />
                                        </div>
                                        <div className="tab-pane fade" id="bordered-justified-dusun" role="tabpanel" aria-labelledby="dusun-tab">
                                            <AdmDusun />
                                        </div>
                                        <div className="tab-pane fade" id="bordered-justified-pendidikan" role="tabpanel" aria-labelledby="pendidikan-tab">
                                            <AdmPendidikan />
                                        </div>
                                        <div className="tab-pane fade" id="bordered-justified-pekerjaan" role="tabpanel" aria-labelledby="pekerjaan-tab">
                                            <AdmPekerjaan />
                                        </div>
                                        <div className="tab-pane fade" id="bordered-justified-perkawinan" role="tabpanel" aria-labelledby="perkawinan-tab">
                                            <AdmPerkawinan />
                                        </div>
                                        <div className="tab-pane fade" id="bordered-justified-keluarga" role="tabpanel" aria-labelledby="keluarga-tab">
                                            <AdmKeluarga />
                                        </div>
                                        <div className="tab-pane fade" id="bordered-justified-agama" role="tabpanel" aria-labelledby="agama-tab">
                                            <AdmAgama />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title-potensi">Kemiskinan Ekstrim</h5>
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary">Export Report</button>
                                    </div>
                                    <div className="row g-1 mb-4">
                                        <div className="col-3">
                                            <div className="search-produk">
                                                <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                                    <input type="text" name="query" placeholder="Cari Desa/Kelurahan..." title="Enter search keyword" />
                                                    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Kecamatan</option>
                                                {kec.map((kec) => {
                                                    return (
                                                        <Kecamatan
                                                            key={kec.kode_wilayah}
                                                            listkec={kec.nama_kecamatan}
                                                        />
                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Desa</option>
                                                {desa.map((deskel) => {
                                                    return (
                                                        <Desa
                                                            key={deskel.kode_wilayah}
                                                            listdesa={deskel.nama_deskel}
                                                        />
                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    {resultData && <MiskinPendudukTable resultData={resultData} />}

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title-potensi">Rekap Kependudukan</h5>
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary">Export Report</button>
                                    </div>
                                    <div className="d-none row g-1 mb-4">
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Demografi Kependudukan</option>
                                                {/* <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option> */}
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Kecamatan</option>
                                                {kec.map((kec) => {
                                                    return (
                                                        <Kecamatan
                                                            key={kec.kode_wilayah}
                                                            listkec={kec.nama_kecamatan}
                                                        />
                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Desa</option>
                                                {desa.map((deskel) => {
                                                    return (
                                                        <Desa
                                                            key={deskel.kode_wilayah}
                                                            listdesa={deskel.nama_deskel}
                                                        />
                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    {resultData && <RekapPendudukTable resultData={resultData} />}

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
        <option value="1">{props.listkec}</option>
    )
}

function Desa(props) {
    return (
        <option value="1">{props.listdesa}</option>
    )
}

export default Kependudukan