import axios from 'axios'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { BASE_API_URL } from '../utils/api'
import NewsTicker from "react-advanced-news-ticker";
import LoadingSpinner from '../utils/LoadingSpinner';
import BeritaPagination from '../component/pagination/beritaPagination';

const BeritaPage = () => {
    const ref = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [resultData, setResultData] = useState();
    const [news, setNews] = useState([]);
    // const [kec, setKec] = useState([]);
    const [desa, setDesa] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // axios.get(BASE_API_URL + 'home?k3=&k4=&limit=')
        axios.get(`https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/home?k3=&k4=&limit=`)
            .then((result) => {
                // console.log(result.data.data.list_berita)
                setResultData(result.data.data.list_berita);
                setNews(result.data.data.list_berita);

                const data = result.data.data;
                // setKec(data.list_kecamatan)
                setDesa(data.list_desa)
            })
            .catch(error => {
                alert(error.message);
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail

        document.title = "Berita | PENDEKAR";

    }, [])

    if (isLoading) return <LoadingSpinner />;

    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Berita</h1>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="d-none col-lg-12">

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">

                                        <div className="card-body">
                                            <h5 className="card-title-potensi">KABAR DESA TERBARU</h5>

                                            <div className="bn-breaking-news" id="newsTicker9">
                                                <div className="bn-label">Flash News</div>
                                                <div className="bn-news d-none">
                                                    <ul>
                                                        <li><span className="bn-prefix">Braveheart, 1995 :</span>"They may take our lives, but they'll never
                                                            take our freedom!"</li>
                                                        <li><span className="bn-prefix">Star Wars Episode VII: The Force Awakens, 2015 :</span>"Chewie,
                                                            we're home."</li>
                                                        <li><span className="bn-prefix">Pulp Fiction, 1994 :</span>"They call it a Royale with cheese."</li>
                                                        <li><span className="bn-prefix">Jerry Maguire, 1996 :</span>"You complete me."</li>
                                                        <li><span className="bn-prefix">Jerry Maguire I, 1996 :</span>"You complete me."</li>
                                                    </ul>
                                                </div>

                                                {resultData && <NewsTicker
                                                    ref={ref}
                                                    maxRows={1}
                                                    rowHeight={60}
                                                    style={{ listStyleType: 'none', marginLeft: '200px', width: '75%' }}
                                                >
                                                    {news.map((news, key) => {
                                                        return (
                                                            <Berita
                                                                key={key}
                                                                kode={news.kode_wilayah}
                                                                judul={news.judul}
                                                                slug={news.slug}
                                                                slug_desa={news.slug_desa}
                                                                foto={news.foto}
                                                            />
                                                        )
                                                    })
                                                    }

                                                </NewsTicker>}

                                                <div className="bn-controls">
                                                    <button onClick={() => { ref.current.movePrev(); ref.current.resetInterval(); }}><span className="bn-arrow bn-prev"></span></button>
                                                    <button onClick={() => { ref.current.moveNext(); ref.current.resetInterval(); }}><span className="bn-arrow bn-next"></span></button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title-potensi">BERITA DESA TERBARU</h5>
                                    <div className="d-none filter-primary">
                                        <button type="button" className="btn btn-primary">Lihat Semua</button>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-4">
                                            <div className="search-produk">
                                                <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                                    <input type="text" name="query" placeholder="Cari Berita..." title="Enter search keyword" />
                                                    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Semua Kecamatan</option>
                                                {desa.map((item, key) => {
                                                    return (
                                                        <option key={key}>{item.nama_deskel}</option>
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
                                    <div className="news overflow-auto">

                                        {resultData && <BeritaPagination resultData={resultData} />}

                                        {/* {news.map((item, key) => {
                                            return (
                                                <div key={key} className="post-item clearfix">
                                                    <img src={`https://profil.digitaldesa.id/uploads/${item.kode_wilayah}/berita/thumbs/${item.foto}`} alt="News" />
                                                    <h4><a href={`https://profil.digitaldesa.id/${item.slug_desa}/berita/${item.slug}`} rel='noreferrer' target={'_blank'}>{item.judul}</a></h4>
                                                    <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                                                </div>
                                            )
                                        })
                                        } */}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </Fragment>
    )
}

function Berita(props) {
    return (
        <div className="berita-card">
            <div className="row g-1">
                <div className="col-md-2 align-items-center justify-content-center">
                    <img src={`https://profil.digitaldesa.id/uploads/${props.kode}/berita/thumbs/${props.foto}`} className="w-100 mb-2 ms-2 rounded" alt="..." style={{ height: '50px' }} />
                </div>
                <div className="col-md-10">
                    <div className="berita-card-body">
                        <h6 className='ms-1 fw-bold text-capitalize'>{props.judul}</h6>
                        <a href={`https://profil.digitaldesa.id/${props.slug_desa}/berita/${props.slug}`} rel='noreferrer' target={'_blank'} className="stretched-link"> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeritaPage
