import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <Fragment>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-heading">Menu</li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" end>
                            <i className="ri-funds-box-line"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/perkembangan-desa">
                            <i className="ri-bar-chart-box-line"></i>
                            <span>Perkembangan Desa</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/keuangan">
                            <i className="bx bx-wallet"></i>
                            <span>Keuangan</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/umkm">
                            <i className="ri-store-2-line"></i>
                            <span>UMKM</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profil-desa">
                            <i className="ri-profile-line"></i>
                            <span>Profil Desa</span>
                        </NavLink>
                    </li>

                </ul>

            </aside>
        </Fragment>
    )
}

export default Sidebar