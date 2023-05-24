import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BASE_API_URL } from '../utils/api'
import LoadingSpinner from '../utils/LoadingSpinner';
import { format_tgl } from '../utils/helper.min';
import WisataPagination from '../component/pagination/wisataPagination';

const Wisata = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resultData, setResultData] = useState();
    const [update, setUpdate] = useState();

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${BASE_API_URL}wisata?k3=&k4=&search=&limit=`)
            .then((result) => {
                const data = result.data.data;
                setResultData(data);
                setUpdate(data.last_updated)
            })
            .catch(error => {
                alert(error.message);
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail

        document.title = "Wisata Desa | PENDEKAR";

    }, [])

    if (isLoading) return <LoadingSpinner />;

    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Wisata Desa</h1>
                </div>

                <div className="filter-update">
                    <h5>
                        <span className="badge bg-update py-3">Last Update : {format_tgl(update)}</span>
                    </h5>
                </div>

                <section className="section dashboard">

                    {resultData && <WisataPagination resultData={resultData} />}

                </section>

            </main>
        </Fragment>
    )
}

export default Wisata
