import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BASE_API_URL } from '../utils/api';
import PendudukJumlah from './chart/pendudukJumlah';
import PendudukTable from './datatable/PdkDataTable';
import RekapPendudukTable from './datatable/RekapPdkDataTable';
import LoadingSpinner from './LoadingSpinner';

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
                    <h1>Kependudukan</h1>
                </div>

                <div className="filter-update">
                    <h5>
                        <span className="badge bg-update py-3">Last Update : 3 September 2022, 12:00 PM</span>
                    </h5>
                </div>

                <section className="section dashboard">
                    <div className="row g-2">

                        <div className="col-md-6">
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

                        <div className="col-md-6">
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
                                    <h5 className="card-title-potensi">Rekap Kependudukan</h5>
                                    <div className="row g-1 mb-4">
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