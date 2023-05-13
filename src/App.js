import React, { Suspense, lazy, Fragment, Component } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/simple-datatables/style.css'
import './assets/css/news-ticker.min.css'
import './assets/css/style.css'

const Header = lazy(() => import("./layout/header"));
const Sidebar = lazy(() => import("./layout/sidebar"));
const Footer = lazy(() => import("./layout/footer"));
const Setting = lazy(() => import("./layout/setting"));
const ScrollToTop = lazy(() => import("./utils/scroll-to-top"));
const LoadingSpinner = lazy(() => import("./utils/LoadingSpinner"));
const BantuanSosial = lazy(() => import("./screens/bantuanSosial"));
const BeritaPage = lazy(() => import("./screens/berita"));
const AdministrasiUmum = lazy(() => import("./screens/administrasiUmum"));
const Kependudukan = lazy(() => import("./screens/kependudukan"));
const Dashboard = lazy(() => import("./screens/dashboard"));
const Keuangan = lazy(() => import("./screens/keuangan"));
const Umkm = lazy(() => import("./screens/umkm"));
const ProfilDesa = lazy(() => import("./screens/profilDesa"));
const Wisata = lazy(() => import("./screens/wisata"));

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
            <Route exact path="/" element={<Dashboard />} />
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
        </Suspense>
        <Footer />
      </Fragment>
    );
  }
}
