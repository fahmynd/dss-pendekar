import React, { Fragment, useEffect } from "react";
import { STRINGS } from "../config/strings";
import { KODE_SLUG } from "../utils/api";
import { Link } from "react-router-dom";

const NotificationDetail = () => {
  useEffect(() => {
    document.title = `Notifikasi | ${STRINGS[KODE_SLUG].title}`;
  }, []);

  return (
    <Fragment>
      <main id="main" className="main">
        <div className="pagetitle mb-3">
          <h1>Notifikasi</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/dashboard/notifikasi">Notifikasi</Link>
              </li>
              <li className="breadcrumb-item active">Performance Recap</li>
            </ol>
          </nav>
        </div>

        <div className="card">
          <div className="card-body pt-3">
            <h5 className="card-title">
              Rekapitulasi performance PENDEKAR bulan Oktober -{" "}
              <strong>
                <em>30 min. ago</em>
              </strong>
            </h5>
            <ul>
              <li>Update jumlah data penduduk</li>
              <li>Update jumlah administrasi</li>
              <li>Update jumlah penerima Bansos</li>
              <li>Update jumlah produk UMKM </li>
            </ul>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default NotificationDetail;
