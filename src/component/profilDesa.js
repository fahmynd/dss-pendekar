import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner';
import ProfilDesaPagination from './pagination/profilDesaPagination';

const ProfilDesa = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resultData, setResultData] = useState();
    const [kec, setKec] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // axios.get(BASE_API_URL+'profil?k3=&k4=&search=')
        axios.get(`https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/profil?k3=&k4=&search=`)
            .then((result) => {
                // console.log(result.data.data.list_berita)
                const data = result.data.data;
                setResultData(data.list_desa);
                setKec(data.list_kecamatan)
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

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">
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

export default ProfilDesa