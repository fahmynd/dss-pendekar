import React, { Fragment, useState, useEffect } from "react";
import { BASE_API_URL, KODE_SLUG } from "../utils/api";
import axios from "axios";
import { format_tgl } from "../utils/helper.min";
import { STRINGS } from "../config/strings";
import LoadingSpinner from "../utils/LoadingSpinner";
import PersuratanTable from "../component/datatable/RekapPersuratanDataTable";

const Persuratan = () => {
  // const [resultData, setResultData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [update, setUpdate] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_API_URL}administrasi-umum?k3=&k4=`)
      .then((result) => {
        // console.log(result.data.data.jumlah)
        // setResultData(result.data);

        const data = result.data.data;
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
              <div className="card">
                <div className="card-body">
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
                  <div className="row g-1 my-4">
                    <div className="col-3">
                      <select
                        defaultValue={"DEFAULT"}
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value={"DEFAULT"}>Semua Kecamatan</option>
                      </select>
                    </div>

                    <div className="col-3">
                      <select
                        defaultValue={"DEFAULT"}
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value={"DEFAULT"}>Semua Kecamatan</option>
                      </select>
                    </div>
                  </div>

                  <div className="row g-md-0">
                    <div className="col-md-3">
                      <div className="keuangan-card">
                        <div className="card-body-persuratan">
                          <h6>Hari ini</h6>
                          <h5 className="fw-bold">0 Surat</h5>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              100%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="keuangan-card">
                        <div className="card-body-persuratan">
                          <h6>Minggu ini</h6>
                          <h5 className="fw-bold">0 Surat</h5>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              100%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="keuangan-card">
                        <div className="card-body-persuratan">
                          <h6>Bulan ini</h6>
                          <h5 className="fw-bold">0 Surat</h5>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              100%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="keuangan-card">
                        <div className="card-body-persuratan">
                          <h6>Tahun ini</h6>
                          <h5 className="fw-bold">0 Surat</h5>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              100%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                  <PersuratanTable />
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
