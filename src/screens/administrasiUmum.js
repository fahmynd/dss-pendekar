import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BASE_API_URL, KODE_SLUG } from '../utils/api';
import AdminTable from '../component/datatable/AdmDataTable';
import LoadingSpinner from '../utils/LoadingSpinner';
import { format_tgl } from '../utils/helper.min';
import FilterAdministrasi from '../component/filterAdministrasi';
import { STRINGS } from '../config/strings';

const AdministrasiUmum = () => {
    const [resultData, setResultData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [jenis_administrasi, setJenisAdministrasi] = useState([]);
    const [update, setUpdate] = useState();

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${BASE_API_URL}administrasi-umum?k3=&k4=`)
            .then((result) => {
                // console.log(result.data.data.jumlah)
                setResultData(result.data);

                const data = result.data.data;
                setJenisAdministrasi(data.jenis_administrasi)
                setUpdate(data.last_updated)
            })
            .catch(error => {
                alert(error.message);
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail

        document.title = `Administrasi Umum | ${STRINGS[KODE_SLUG].title}`;

    }, [])

    if (isLoading) return <LoadingSpinner />;

    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Administrasi Umum</h1>
                </div>

                <div className="filter-update">
                    <h5>
                        <span className="badge bg-update py-3">Last Update : {format_tgl(update)}</span>
                    </h5>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">
                            {resultData && <FilterAdministrasi resultData={resultData} />}
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title-potensi">Tabel Data Administrasi</h5>

                                    {resultData && <AdminTable resultData={resultData} jenis={jenis_administrasi[0].key} />}

                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </Fragment>
    )
}

export default AdministrasiUmum
