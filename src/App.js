import React, { Fragment, Component } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from "./ProtectedRoute";
import Page404 from "./component/Page404/Page404";
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/simple-datatables/style.css'
import './assets/css/news-ticker.min.css'
import './assets/css/style.css'

import Header from "./layout/header";
import Sidebar from "./layout/sidebar";
import Footer from "./layout/footer";
import Setting from "./layout/setting";
import ScrollToTop from "./utils/scroll-to-top";
import BantuanSosial from "./screens/bantuanSosial";
import BeritaPage from "./screens/berita";
import AdministrasiUmum from "./screens/administrasiUmum";
import Kependudukan from "./screens/kependudukan";
import Dashboard from "./screens/dashboard";
import Keuangan from "./screens/keuangan";
import Umkm from "./screens/umkm";
import ProfilDesa from "./screens/profilDesa";
import Wisata from "./screens/wisata";
import LogIn from "./component/Login/LogIn";
import Register from "./component/Register/Register";

export default class App extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {

    return (
      <Fragment>
        <Header />
        <Sidebar />
        <ScrollToTop />
        <Routes>
          <Route path="/login" exact element={<LogIn />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route exact path="/" element={<ProtectedRoute />} > */}
          <Route exact path="/" element={<Dashboard />} />
          {/* </Route> */}
          <Route path="/administrasi-umum" element={<AdministrasiUmum />} />
          <Route path="/pengaturan" element={<Setting />} />
          <Route path="/kependudukan" element={<Kependudukan />} />
          <Route path="/bantuan-sosial" element={<BantuanSosial />} />
          <Route path="/berita" element={<BeritaPage />} />
          <Route path="/pembangunan" element={<Keuangan />} />
          <Route path="/umkm" element={<Umkm />} />
          <Route path="/profil-desa" element={<ProfilDesa />} />
          <Route path="/wisata" element={<Wisata />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Fragment>
    );
  }
}
