import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { BASE_API_URL, KODE_SLUG } from "../utils/api";
import LoadingSpinner from "../utils/LoadingSpinner";
import BeritaPagination from "../component/pagination/beritaPagination";
import { format_tgl } from "../utils/helper.min";
import { STRINGS } from "../config/strings";

const BeritaPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState();
  const [update, setUpdate] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_API_URL}berita`)
      .then((result) => {
        // console.log(result.data.data.list_berita)
        const data = result.data.data;
        setResultData(data);
        setUpdate(data.last_updated);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => setIsLoading(false)); // complete loading success/fail

    document.title = `Berita | ${STRINGS[KODE_SLUG].title}`;
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <Fragment>
      <main id="main" className="main">
        <div className="pagetitle mt-3 mb-5">
          <h1>Berita</h1>
        </div>

        <div className="filter-update">
          <h5>
            <span className="badge bg-update py-3">
              Last Update : {format_tgl(update)}
            </span>
          </h5>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title-potensi">BERITA DESA TERBARU</h5>
                  <div className="d-none filter-primary">
                    <button type="button" className="btn btn-primary">
                      Lihat Semua
                    </button>
                  </div>
                  <div className="news">
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
  );
};

export default BeritaPage;
