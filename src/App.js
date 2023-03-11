import React, { Suspense, lazy, Fragment, Component } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import './assets/css/style.css'

const Header = lazy(() => import("./component/_header"));
const Sidebar = lazy(() => import("./component/_sidebar"));
const Footer = lazy(() => import("./component/_footer"));
const ScrollToTop = lazy(() => import("./component/scroll-to-top"));
const Dashboard = lazy(() => import("./component/dashboard"));
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
        <Suspense fallback={<div className="lazy-load">Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/perkembangan-desa" element={<PerkembanganDesa />} />
            <Route path="/keuangan" element={<Keuangan />} />
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
