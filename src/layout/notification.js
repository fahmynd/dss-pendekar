import React, { Fragment, useEffect } from "react";
import { STRINGS } from "../config/strings";
import { KODE_SLUG } from "../utils/api";
import { Link } from "react-router-dom";

const Notification = () => {
  useEffect(() => {
    document.title = `Notifikasi | ${STRINGS[KODE_SLUG].title}`;
  }, []);

  return (
    <Fragment>
      <main id="main" className="main">
        <div className="pagetitle mb-3">
          <h1>Notifikasi</h1>
        </div>

        <div className="card">
          <div className="card-body pt-3">
            <div
              className="alert alert-info alert-dismissible fade show"
              role="alert"
            >
              <Link to={"notifikasi-detail"} className="text-dark">
                <i className="bi bi-info-circle me-1 float-start"></i>
                <h4 className="alert-heading">Performance Recap</h4>
                <div>
                  Rekapitulasi performance PENDEKAR bulan September -{" "}
                  <strong>
                    <em>30 min. ago</em>
                  </strong>
                </div>
              </Link>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="alert alert-info alert-dismissible fade show"
              role="alert"
            >
              <Link to={"notifikasi-detail"} className="text-dark">
                <i className="bi bi-info-circle me-1 float-start"></i>
                <h4 className="alert-heading">Performance Recap</h4>
                <div>
                  Rekapitulasi performance PENDEKAR bulan Oktober -{" "}
                  <strong>
                    <em>1 hr. ago</em>
                  </strong>
                </div>
              </Link>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="alert alert-info alert-dismissible fade show"
              role="alert"
            >
              <Link to={"notifikasi-detail"} className="text-dark">
                <i className="bi bi-info-circle me-1 float-start"></i>
                <h4 className="alert-heading">Performance Recap</h4>
                <div>
                  Rekapitulasi performance PENDEKAR bulan Oktober -{" "}
                  <strong>
                    <em>1 hr. ago</em>
                  </strong>
                </div>
              </Link>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="alert alert-info alert-dismissible fade show"
              role="alert"
            >
              <Link to={"notifikasi-detail"} className="text-dark">
                <i className="bi bi-info-circle me-1 float-start"></i>
                <h4 className="alert-heading">Performance Recap</h4>
                <div>
                  Rekapitulasi performance PENDEKAR bulan Oktober -{" "}
                  <strong>
                    <em>1 hr. ago</em>
                  </strong>
                </div>
              </Link>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Notification;
