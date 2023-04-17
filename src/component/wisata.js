import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BASE_API_URL } from '../utils/api'
import LoadingSpinner from './LoadingSpinner';
import BeritaPagination from './pagination/beritaPagination';
import FotoWisata from '../assets/img/slides-1.jpg'

const Wisata = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [kec, setKec] = useState([]);
    const [desa, setDesa] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // axios.get(BASE_API_URL + 'home?k3=&k4=&limit=')
        axios.get(`https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/umkm?k3=&k4=&search=&type=&limit=`)
            .then((result) => {
                const data = result.data.data;
                setKec(data.list_kecamatan)
                setDesa(data.list_desa)
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

                <section className="section dashboard">

                    <div className="row mb-4">
                        <div className="col-md-4">
                            <div className="search-produk">
                                <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                    <input type="text" name="query" placeholder="Cari Wisata..." title="Enter search keyword" />
                                    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                <option value={'DEFAULT'}>Semua Kecamatan</option>
                                {kec.map((item, key) => {
                                    return (
                                        <option key={key}>{item.nama_kecamatan}</option>
                                    )
                                })
                                }
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                <option value={'DEFAULT'}>Semua Desa</option>
                                {desa.map((item, key) => {
                                    return (
                                        <option key={key}>{item.nama_deskel}</option>
                                    )
                                })
                                }
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src={FotoWisata} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Wisata Di Enrekang</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src={FotoWisata} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Wisata Di Enrekang</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src={FotoWisata} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Wisata Di Enrekang</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card">
                                <img src={FotoWisata} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Wisata Di Enrekang</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </Fragment>
    )
}

export default Wisata