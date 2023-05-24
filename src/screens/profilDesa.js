import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import LoadingSpinner from '../utils/LoadingSpinner';
// import ProfilDesaPagination from '../component/pagination/profilDesaPagination';
import { BASE_API_URL } from '../utils/api';
import ProfilTable from '../component/datatable/ProfilDesaDataTable';
import { format_tgl } from '../utils/helper.min';

const ProfilDesa = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resultData, setResultData] = useState();
    const [update, setUpdate] = useState();

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${BASE_API_URL}profil?k3=&k4=&search=`)
            .then((result) => {
                // console.log(result.data.data.list_berita)
                const data = result.data.data;
                setResultData(data);
                setUpdate(data.last_updated)
            })
            .catch(error => {
                alert(error.message);
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail

        document.title = "Profil Desa | PENDEKAR";

    }, [])

    if (isLoading) return <LoadingSpinner />;

    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>PROFIL DESA/KELURAHAN</h1>
                </div>

                <div className="filter-update">
                    <h5>
                        <span className="badge bg-update py-3">Last Update : {format_tgl(update)}</span>
                    </h5>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        {/* <div className="col-lg-12 d-none">
                            <div className="row g-1 mb-4">
                                <div className="col-5">
                                    <div className="search-produk">
                                        <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                            <input type="text" name="query" placeholder="Cari Desa/Kelurahan..." title="Enter search keyword" />
                                            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                        <option value={'DEFAULT'}>Kecamatan</option>
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
                            </div>
                            {resultData && <ProfilDesaPagination resultData={resultData} />}
                        </div> */}

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">

                                    {resultData && <ProfilTable resultData={resultData} />}

                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </Fragment>
    )
}

export default ProfilDesa
