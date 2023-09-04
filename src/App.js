import React, { useEffect } from "react";
// import './assets/vendor/bootstrap/css/bootstrap.min.css'
// import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
// import './assets/vendor/boxicons/css/boxicons.min.css'
// import './assets/vendor/remixicon/remixicon.css'
// import './assets/vendor/simple-datatables/style.css'
// import './assets/css/news-ticker.min.css'
// import './assets/css/style.css'
// import alternativeStyle from './assets/css/alternative-style.module.css'

import "./config/axios";
import AppRoute from "./route/route";
import AuthProvider from "./context/Auth/AuthProvider";
import { STRINGS } from "./config/strings";
import { KODE_SLUG } from "./utils/api";

const App = () => {
  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = `${STRINGS[KODE_SLUG].logo_kab_url}`;

    const alternativeStyle = document.getElementById("customCss");
    alternativeStyle.href = `${STRINGS[KODE_SLUG].alternative_style}`;
  }, []);

  return (
    <AuthProvider>
      <AppRoute />
    </AuthProvider>
  );
};

export default App;
