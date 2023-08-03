import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BASE_API_URL, KODE_SLUG } from '../utils/api';
import LoadingSpinner from '../utils/LoadingSpinner';
import { format_tgl } from '../utils/helper.min';
import { STRINGS } from '../config/strings';
import KiosTable from '../component/datatable/RekapKiosDataTable';

const Kios = () => {
    // const [resultData, setResultData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [update, setUpdate] = useState();

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${BASE_API_URL}bansos`)
            .then((result) => {
                // console.log(result.data.data.jumlah)
                // setResultData(result.data);

                const data = result.data.data;
                setUpdate(data.last_updated)
            })
            .catch(error => {
                alert(error.message);
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail

        document.title = `KIOS DIGIDES | ${STRINGS[KODE_SLUG].title}`;

    }, [])

    if (isLoading) return <LoadingSpinner />;

    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>KIOS DIGIDES</h1>
                </div>

                <div className="filter-update">
                    <h5>
                        <span className="badge bg-update py-3">Last Update : {format_tgl(update)}</span>
                    </h5>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary" onClick={() => window.open(`${BASE_API_URL}export/bansos`)}>Export Report</button>
                                    </div>
                                    <div className="row g-1 my-4">
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Kecamatan</option>
                                            </select>
                                        </div>

                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Kecamatan</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-body rounded-2 bg-primary">
                                                    <div className="row px-4 py-2">
                                                        <div className="col">
                                                            <span className="jum-bantuan timer count-title count-number">1.000</span> <br />
                                                            <span className="judul-card-bansos">Jumlah Pengguna</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-body rounded-2 bg-secondary">
                                                    <div className="row px-4 py-2">
                                                        <div className="col">
                                                            <span className="jum-bantuan timer count-title count-number">Rp100.000.000,-</span> <br />
                                                            <span className="judul-card-bansos">Total Transaksi</span>
                                                        </div>
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
                                <div className="card-body">
                                    <h5 className="card-title-potensi">Transaksi KIOS DIGIDES</h5>
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary" onClick={() => window.open(`${BASE_API_URL}export/rekap_bansos`)}>Export Report</button>
                                    </div>
                                    <KiosTable />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </Fragment>
    )
}

export default Kios
