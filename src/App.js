import React, { Component } from "react";
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/simple-datatables/style.css'
import './assets/css/news-ticker.min.css'
import './assets/css/style.css'

import './config/axios'
import AppRoute from "./route/route";
import AuthProvider from "./context/Auth/AuthProvider";

export default class App extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {

    return (
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    );
  }
}
