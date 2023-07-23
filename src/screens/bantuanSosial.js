import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BASE_API_URL, KODE_SLUG } from '../utils/api';
import LoadingSpinner from '../utils/LoadingSpinner';
import Bantuan from '../../src/assets/icon/mendapatBantuan.svg'
import KK from '../../src/assets/icon/kk.svg'
import BansosTable from '../component/datatable/RekapBansosDataTable';
import { formatAngka, format_tgl } from '../utils/helper.min';
import FilterBansos from '../component/filterBansos'
import { STRINGS } from '../config/strings';

const BantuanSosial = () => {
    const [resultData, setResultData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [kec, setKec] = useState([]);
    const [desa, setDesa] = useState([]);
    const [update, setUpdate] = useState();
    const [individu, setIndividu] = useState([]);
    const [keluarga, setKeluarga] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${BASE_API_URL}bansos`)
            .then((result) => {
                // console.log(result.data.data.jumlah)
                setResultData(result.data);

                const data = result.data.data;
                setKec(data.list_kecamatan)
                setDesa(data.list_desa)
                setUpdate(data.last_updated)
                setIndividu(data.list_kabupaten[0].jml_penerima)
                setKeluarga(data.list_kabupaten[0].jml_penerima_kk)
            })
            .catch(error => {
                alert(error.message);
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail

        document.title = `Bantuan Sosial | ${STRINGS[KODE_SLUG].title}`;

    }, [])

    if (isLoading) return <LoadingSpinner />;

    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Bantuan Sosial</h1>
                </div>

                <div className="filter-update">
                    <h5>
                        <span className="badge bg-update py-3">Last Update : {format_tgl(update)}</span>
                    </h5>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        {resultData && <FilterBansos resultData={resultData} />}

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title-potensi">Rekap Penerima Bantuan Sosial</h5>
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary" onClick={() => window.open(`${BASE_API_URL}export/rekap_bansos`)}>Export Report</button>
                                    </div>
                                    {resultData && <BansosTable resultData={resultData} />}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </Fragment>
    )
}

export default BantuanSosial
