import React, { Fragment, useState, useEffect } from "react";
import { BASE_API_URL, KODE_SLUG } from "../utils/api";
import axios from "axios";
import { format_tgl } from "../utils/helper.min";
import { STRINGS } from "../config/strings";
import LoadingSpinner from "../utils/LoadingSpinner";
import PersuratanTable from "../component/datatable/RekapPersuratanDataTable";
import FilterPersuratan from "../component/filterPersuratan";

const Persuratan = () => {
  const [resultData, setResultData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [jenis_surat, setJenisSurat] = useState([]);
  const [update, setUpdate] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_API_URL}pelayanan`)
      .then((result) => {
        // console.log(result.data);
        setResultData(result.data);

        const data = result.data.data;
        setJenisSurat(data.jenis_surat);
        setUpdate(data.last_updated);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => setIsLoading(false)); // complete loading success/fail

    document.title = `Pelayanan Persuratan | ${STRINGS[KODE_SLUG].title}`;
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <Fragment>
      <main id="main" className="main">
        <div className="pagetitle mt-3 mb-5">
          <h1>Persuratan</h1>
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
              {resultData && <FilterPersuratan resultData={resultData} />}
            </div>

            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title-potensi">Tabel Persuratan</h5>
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
                  {resultData && (
                    <PersuratanTable
                      resultData={resultData}
                      jenis={jenis_surat[0].title}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Persuratan;
