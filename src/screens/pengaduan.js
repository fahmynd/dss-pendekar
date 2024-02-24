import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import LoadingSpinner from "../utils/LoadingSpinner";
// import ProfilDesaPagination from '../component/pagination/profilDesaPagination';
import { BASE_API_URL, KODE_SLUG } from "../utils/api";
import { format_tgl } from "../utils/helper.min";
import { STRINGS } from "../config/strings";
import PengaduanTable from "../component/datatable/PengaduanDataTable";

const Pengaduan = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState();
  const [update, setUpdate] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_API_URL}profil?k3=&k4=&search=`)
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

    document.title = `Profil Desa | ${STRINGS[KODE_SLUG].title}`;
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <Fragment>
      <main id="main" className="main">
        <div className="pagetitle mt-3 mb-5">
          <h1>DAFTAR PENGADUAN</h1>
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
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  {resultData && <PengaduanTable resultData={resultData} />}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Pengaduan;
