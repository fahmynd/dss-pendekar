import { React, Fragment, useEffect, useState } from 'react'
import JenisUsaha from './chart/jenisUsaha'
import UsahaDiWilayah from './chart/usahaDiWilayah'
import produk from '../assets/img/produk.png'
import axios from 'axios'
import LoadingSpinner from './LoadingSpinner'
// import '../assets/vendor/boxicons/css/boxicons.min.css'

const Umkm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resultData, setResultData] = useState();
    const [kec, setKec] = useState([]);
    const [desa, setDesa] = useState([]);
    const [list_umkm, setList_umkm] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // axios.get(BASE_API_URL+'umkm?k3=&k4=&search=&type=&limit=')
        axios.get(`https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/umkm?k3=&k4=&search=&type=&limit=`)
            .then((result) => {
                // console.log(result.data.data.list_berita)
                const data = result.data.data;
                setResultData(data);
                setKec(data.list_kecamatan)
                setDesa(data.list_desa)
                setList_umkm(data.list_umkm)
            })
            .catch(error => {
                alert(error.message);
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail

        document.title = "UMKM | PENDEKAR";

    }, [])

    if (isLoading) return <LoadingSpinner />;

    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>UMKM</h1>
                </div>

                <section className="section dashboard">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <h2 className="card-title-potensi pb-0">USAHA DI WILAYAH</h2>

                                    <UsahaDiWilayah />

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body pb-0">
                                    <h2 className="card-title-potensi pb-0">JENIS USAHA</h2>

                                    <JenisUsaha />

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <h5 className="card-title-potensi pb-0">PRODUK UMKM DESA/KELURAHAN</h5>
                            <div className="row g-1 mb-4">
                                <div className="col-3">
                                    <div className="search-produk">
                                        <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                            <input type="text" name="query" placeholder="Cari produk..." title="Enter search keyword" />
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
                                <div className="col-3">
                                    <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                        <option value={'DEFAULT'}>Desa</option>
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
                                <div className="col-3">
                                    <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                        <option value={'DEFAULT'}>Jenis Usaha</option>

                                    </select>
                                </div>
                            </div>

                            <div className="row">

                                {list_umkm.map((item, index) => {
                                    return (
                                        <ListUmkm
                                            key={index + 1}
                                            kecamatan={item.nama_kecamatan}
                                            deskel={item.nama_deskel}
                                            nama={item.nama_usaha}
                                            tipe={item.tipe_usaha}
                                            alamat={item.alamat}
                                            map={item.map}
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

function Desa(props) {
    return (
        <option value="1">{props.listdesa}</option>
    )
}

function ListUmkm(props) {
    return (
        <div className="col-md-4">
            <div className="card p-2 mb-3">
                <div className="row g-0 align-items-center">
                    <div className="col-5 item">
                        <span className="notify-badge">{props.tipe}</span>
                        <img src={produk} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-7 direction">
                        <div className="card-body-produk">
                            <h6 className="fw-bold m-0">{props.nama}</h6>
                            <p className="fw-bold smaller m-0">Desa {props.deskel}, Kec. {props.kecamatan}</p>
                            <div className="smaller">
                                <p className="m-0">Order via:</p>
                                <ul className="m-0">
                                    <li>DIGIDES</li>
                                    <li>Tokopedia</li>
                                    <li>Grab/Goek</li>
                                </ul>
                            </div>
                            <a href={props.map} target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                &nbsp; Petunjuk Arah
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Umkm