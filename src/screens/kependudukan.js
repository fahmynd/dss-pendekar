import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BASE_API_URL, KODE_SLUG } from '../utils/api';
// import PendudukJumlah from '../component/chart/pendudukJumlah';
// import PendudukTable from '../component/datatable/PdkDataTable';
import RekapPendudukTable from '../component/datatable/RekapPdkDataTable';
import LoadingSpinner from '../utils/LoadingSpinner';
import MiskinPendudukTable from '../component/datatable/MiskinPdkDataTable';
import { format_tgl } from '../utils/helper.min';
import ChartKependudukan from '../component/administrasi/chart-kependudukan';
import { STRINGS } from '../config/strings';

const Kependudukan = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resultData, setResultData] = useState();
    const [kec, setKec] = useState([]);
    const [desa, setDesa] = useState([]);
    const [update, setUpdate] = useState();

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${BASE_API_URL}kependudukan?k3=&k4=`)
            .then((result) => {
                // console.log(result.data.data)
                const data = result.data.data;
                setResultData(data);
                setKec(data.list_kecamatan)
                setDesa(data.list_desa)
                setUpdate(data.last_updated)
            })
            .catch(error => {
                alert(error.message);
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail

        document.title = `Kependudukan | ${STRINGS[KODE_SLUG].title}`;

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
                        <span className="badge bg-update py-3">Last Update : {format_tgl(update)}</span>
                    </h5>
                </div>

                <section className="section dashboard">
                    <div className="row g-2">

                        {/* <div className="col-md-6 d-none">
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
                        </div> */}

                        <div className="col-lg-12">
                            {resultData && <ChartKependudukan data={resultData} />}
                        </div>

                        <div className="d-none col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title-potensi">Kemiskinan Ekstrim</h5>
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary">Export Report</button>
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
                                        <button type="button" className="btn btn-primary" onClick={() => window.open(`${BASE_API_URL}export/rekap_kependudukan`)}>Export Report</button>
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

export default Kependudukan
