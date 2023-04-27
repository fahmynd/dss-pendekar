import { React, Fragment, useEffect, useState } from 'react'
import JenisUsaha from '../component/chart/jenisUsaha'
import UsahaDiWilayah from '../component/chart/usahaDiWilayah'
import axios from 'axios'
import LoadingSpinner from '../utils/LoadingSpinner'
import UmkmPagination from '../component/pagination/umkmPagination'
import { BASE_API_URL } from '../utils/api'

const Umkm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resultData, setResultData] = useState();
    const [kec, setKec] = useState([]);
    const [desa, setDesa] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // axios.get(BASE_API_URL + 'umkm?k3=&k4=&search=&type=&limit=')
        axios.get(`https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/umkm?k3=&k4=&search=&type=&limit=`)
            .then((result) => {
                // console.log(result.data.data.list_berita)
                const data = result.data.data;
                setResultData(data);
                setKec(data.list_kecamatan)
                setDesa(data.list_desa)
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
                                <div className="card-body">
                                    <h2 className="card-title-potensi">USAHA DI WILAYAH</h2>
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary">Export Report</button>
                                    </div>
                                    <div className="row g-1 mb-0 pb-0">
                                        <div className="col">
                                            <div className="search-produk">
                                                <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                                    <input type="text" name="query" placeholder="Cari Desa/Kelurahan..." title="Enter search keyword" />
                                                    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col">
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
                                        <div className="col">
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
                                    <div style={{ height: '400px' }}>
                                        {resultData && <UsahaDiWilayah resultData={resultData} />}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title-potensi">JENIS USAHA</h2>
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary">Export Report</button>
                                    </div>
                                    <div className="row g-1 mb-0 pb-0">
                                        <div className="col">
                                            <div className="search-produk">
                                                <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                                    <input type="text" name="query" placeholder="Cari Desa/Kelurahan..." title="Enter search keyword" />
                                                    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col">
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
                                        <div className="col">
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
                                    <div style={{ height: '400px' }}>
                                        {resultData && <JenisUsaha resultData={resultData} />}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <h5 className="card-title-potensi pb-0">PRODUK UMKM DESA/KELURAHAN</h5>
                            <div className="row g-1 mb-4">
                                <div className="col">
                                    <div className="search-produk">
                                        <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                            <input type="text" name="query" placeholder="Cari produk..." title="Enter search keyword" />
                                            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col">
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
                                <div className="col">
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

                            {resultData && <UmkmPagination resultData={resultData} />}

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

export default Umkm