import React, { Suspense, lazy, Fragment, Component } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/simple-datatables/style.css'
import './assets/css/news-ticker.min.css'
import './assets/css/style.css'

const Header = lazy(() => import("./component/header"));
const Sidebar = lazy(() => import("./component/sidebar"));
const Footer = lazy(() => import("./component/footer"));
const ScrollToTop = lazy(() => import("./component/scroll-to-top"));
const LoadingSpinner = lazy(() => import("./component/LoadingSpinner"));
const BantuanSosial = lazy(() => import("./component/bantuanSosial"));
const BeritaPage = lazy(() => import("./component/berita"));
const AdministrasiUmum = lazy(() => import("./component/administrasiUmum"));
const Kependudukan = lazy(() => import("./component/kependudukan"));
const Pembangunan = lazy(() => import("./component/pembangunan"));
const PerkembanganDesa = lazy(() => import("./component/perkembanganDesa"));
const Keuangan = lazy(() => import("./component/keuangan"));
const Umkm = lazy(() => import("./component/umkm"));
const ProfilDesa = lazy(() => import("./component/profilDesa"));

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
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route exact path="/" element={<Pembangunan />} />
            <Route path="/administrasi-umum" element={<AdministrasiUmum />} />
            <Route path="/perkembangan-desa" element={<PerkembanganDesa />} />
            <Route path="/kependudukan" element={<Kependudukan />} />
            <Route path="/bantuan-sosial" element={<BantuanSosial />} />
            <Route path="/berita" element={<BeritaPage />} />
            <Route path="/pembangunan" element={<Keuangan />} />
            <Route path="/umkm" element={<Umkm />} />
            <Route path="/profil-desa" element={<ProfilDesa />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <Footer />
      </Fragment>
    );
  }
}
