import { React, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../context/Auth/hooks/useAuth";
import { STRINGS } from "../config/strings";
import { KODE_SLUG } from "../utils/api";

const Header = () => {
  const auth = useAuth();
  const [logout, setLogout] = useState(false);
  const onLogout = () => {
    setLogout({
      logout: !logout,
    });
    auth.doLogout();
  };

  useEffect(() => {
    // document.getElementById("logo_").style.fontSize = `${STRINGS[KODE_SLUG].font_color_jumbotron}`;
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);

    const desaEmas = `${STRINGS[KODE_SLUG].logo_second_size}`;
    if (desaEmas === "enrekang") {
      document.getElementById("logo_").style.fontSize = "23px";
    }
  }, []);

  return (
    <Fragment>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <span id="logo_" className="d-none d-lg-block">
              {STRINGS[KODE_SLUG].title}
            </span>
          </Link>
          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>

        <div className="button-bar d-none">
          <button type="button" className="btn btn-outline-secondary">
            Peta Interaktif
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Statistik Potensi
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Stunting
          </button>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="d-none nav-item dropdown">
              <Link
                className="nav-link nav-icon"
                to={"notifikasi"}
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
              </Link>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <Link to={"notifikasi"}>
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <Link
                    to={"notifikasi/notifikasi-detail"}
                    className="text-dark"
                  >
                    <h4>Performance Recap</h4>
                    <p>Rekapitulasi performance PENDEKAR bulan september</p>
                    <p>30 min. ago</p>
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <Link
                    to={"notifikasi/notifikasi-detail"}
                    className="text-dark"
                  >
                    <h4>Performance Recap</h4>
                    <p>Rekapitulasi performance PENDEKAR bulan oktober</p>
                    <p>1 hr. ago</p>
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <Link to={"notifikasi"}>Show all notifications</Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown pe-3">
              <Link
                className="nav-link nav-profile d-flex align-items-center pe-0"
                to={"/"}
                data-bs-toggle="dropdown"
              >
                <img
                  src={STRINGS[KODE_SLUG].foto_profil}
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  {STRINGS[KODE_SLUG].nama_user}
                </span>
              </Link>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>{STRINGS[KODE_SLUG].nama_user}</h6>
                  <span>{STRINGS[KODE_SLUG].jabatan_user}</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                {/* <li>
                                    <Link className="dropdown-item d-flex align-items-center" to={'/'}>
                                        <i className="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li> */}

                <li>
                  <Link
                    className="d-none dropdown-item d-flex align-items-center"
                    to={"pengaturan"}
                  >
                    <i className="bi bi-gear"></i>
                    <span>Pengaturan</span>
                  </Link>
                </li>
                {/* <li>
                                    <hr className="dropdown-divider" />
                                </li> */}

                {/* <li>
                                    <Link className="dropdown-item d-flex align-items-center" to={'/'}>
                                        <i className="bi bi-question-circle"></i>
                                        <span>Need Help?</span>
                                    </Link>
                                </li> */}

                <li>
                  <button
                    className="dropdown-item d-flex align-items-center"
                    onClick={onLogout}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Keluar</span>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
