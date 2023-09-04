import { React, Fragment, useEffect, useState } from "react";
import JenisUsaha from "../component/chart/jenisUsaha";
import UsahaDiWilayah from "../component/chart/usahaDiWilayah";
import axios from "axios";
import LoadingSpinner from "../utils/LoadingSpinner";
import UmkmPagination from "../component/pagination/umkmPagination";
import { BASE_API_URL, KODE_SLUG } from "../utils/api";
import { format_tgl } from "../utils/helper.min";
import { STRINGS } from "../config/strings";

const Umkm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState();
  const [update, setUpdate] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_API_URL}umkm?k3=&k4=&search=&type=&limit=`)
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

    document.title = `UMKM | ${STRINGS[KODE_SLUG].title}`;
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <Fragment>
      <main id="main" className="main">
        <div className="pagetitle mt-3 mb-5">
          <h1>UMKM</h1>
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
            <div className="col-md-6">
              {resultData && <UsahaDiWilayah resultData={resultData} />}
            </div>

            <div className="col-md-6">
              {resultData && <JenisUsaha resultData={resultData} />}
            </div>

            <div className="col-lg-12">
              <h5 className="card-title-potensi">PRODUK UMKM DESA/KELURAHAN</h5>

              {resultData && <UmkmPagination resultData={resultData} />}
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Umkm;
