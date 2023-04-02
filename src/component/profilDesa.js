import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import profil from '../assets/img/profil.png'
import LoadingSpinner from './LoadingSpinner';

const ProfilDesa = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resultData, setResultData] = useState();
    const [kec, setKec] = useState([]);
    const [list_profil, setList_profil] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // axios.get(BASE_API_URL+'profil?k3=&k4=&search=')
        axios.get(`https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/profil?k3=&k4=&search=`)
            .then((result) => {
                // console.log(result.data.data.list_berita)
                const data = result.data.data;
                setResultData(data);
                setKec(data.list_kecamatan)
                setList_profil(data.list_desa)
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

                            <div className="row">

                                {list_profil.map((item, index) => {
                                    return (
                                        <ListProfil
                                            key={index + 1}
                                            kecamatan={item.nama_kecamatan}
                                            deskel={item.nama_deskel}
                                            link={item.link}
                                        />
                                    )
                                })
                                }

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

function ListProfil(props) {
    return (
        <div className="col-12">
            <div className="card p-2 mb-3">
                <div className="row g-0 align-items-center">
                    <div className="col-2">
                        <img src={profil} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-10 direction">
                        <div className="card-body-produk">
                            <h6 className="fw-bold m-0">Desa {props.deskel}</h6>
                            <p className="fw-bold smaller">Kecamatan {props.kecamatan}</p>
                            <a href={props.link} target={'_blank'} rel='noreferrer' className="smaller"><i className="fa-solid fa-earth-asia"></i>
                                &nbsp; Kunjungi Website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilDesa