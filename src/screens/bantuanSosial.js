import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { BASE_API_URL, KODE_SLUG } from "../utils/api";
import LoadingSpinner from "../utils/LoadingSpinner";
import BansosTable from "../component/datatable/RekapBansosDataTable";
import { format_tgl } from "../utils/helper.min";
import FilterBansos from "../component/filterBansos";
import { STRINGS } from "../config/strings";

const BantuanSosial = () => {
  const [resultData, setResultData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [update, setUpdate] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_API_URL}bansos`)
      .then((result) => {
        // console.log(result.data.data.jumlah)
        setResultData(result.data);

        const data = result.data.data;
        setUpdate(data.last_updated);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => setIsLoading(false)); // complete loading success/fail

    document.title = `Bantuan Sosial | ${STRINGS[KODE_SLUG].title}`;
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <Fragment>
      <main id="main" className="main">
        <div className="pagetitle mt-3 mb-5">
          <h1>Bantuan Sosial</h1>
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
            {resultData && <FilterBansos resultData={resultData} />}

            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title-potensi">
                    Rekap Penerima Bantuan Sosial
                  </h5>
                  <div className="filter-primary">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        window.open(`${BASE_API_URL}export/rekap_bansos`)
                      }
                    >
                      Export Report
                    </button>
                  </div>
                  {resultData && <BansosTable resultData={resultData} />}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default BantuanSosial;
