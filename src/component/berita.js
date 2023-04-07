import axios from 'axios'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { BASE_API_URL } from '../utils/api'
import Map from './mapPopup'
import NewsTicker from "react-advanced-news-ticker";
import LoadingSpinner from './LoadingSpinner';
import { Link } from 'react-router-dom';

const BeritaPage = () => {
    const ref = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [resultData, setResultData] = useState();
    const [news, setNews] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // axios.get(BASE_API_URL + 'home?k3=&k4=&limit=')
        axios.get(`https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/home?k3=&k4=&limit=`)
            .then((result) => {
                // console.log(result.data.data.list_berita)
                setResultData(result.data);
                setNews(result.data.data.list_berita);

                // postscribe('#mydiv', '<script language="javascript" src="assets/js/jquery-3.3.1.min.js"></script>')
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

                        <div className="col-lg-12">

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
                                                    {news.map((news) => {
                                                        return (
                                                            <Berita
                                                                key={news.id}
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
                                    <h5 className="card-title-potensi">ARTIKEL DIGIDES</h5>
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary">Lihat Semua</button>
                                    </div>

                                    <div className="news overflow-auto">
                                        <div className="post-item clearfix">
                                            <img src="assets/img/news-1.jpg" alt="News" />
                                            <h4><Link to={'/'}>Nihil blanditiis at in nihil autem</Link></h4>
                                            <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                                        </div>

                                        <div className="post-item clearfix">
                                            <img src="assets/img/news-2.jpg" alt="News" />
                                            <h4><Link to={'/'}>Quidem autem et impedit</Link></h4>
                                            <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                                        </div>

                                        <div className="post-item clearfix">
                                            <img src="assets/img/news-3.jpg" alt="News" />
                                            <h4><Link to={'/'}>Id quia et et ut maxime similique occaecati ut</Link></h4>
                                            <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                                        </div>

                                        <div className="post-item clearfix">
                                            <img src="assets/img/news-4.jpg" alt="News" />
                                            <h4><Link to={'/'}>Laborum corporis quo dara net para</Link></h4>
                                            <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                                        </div>

                                        <div className="post-item clearfix">
                                            <img src="assets/img/news-5.jpg" alt="News" />
                                            <h4><Link to={'/'}>Et dolores corrupti quae illo quod dolor</Link></h4>
                                            <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                                        </div>
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
