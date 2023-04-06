import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <Fragment>
            <aside id="sidebar" className="sidebar">
                <Link to={'/'} id='pendekar'>
                    <div className='text-center mb-5'>
                        <h2 className='text-white fw-bold'>PENDEKAR</h2>
                        <p className='small' style={{ color: '#DCCD7C' }}>Pemantauan Desa dan Kelurahan Terintegrasi</p>
                    </div>
                </Link>

                {/* <a href='/' className='toggle-sidebar-btn'>
                    <div className='text-center mb-5'>
                        <h2 className='text-white fw-bold'>PENDEKAR</h2>
                        <p className='small' style={{ color: '#DCCD7C' }}>Pemantauan Desa dan Kelurahan Terintegrasi</p>
                    </div>
                </a> */}
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-heading mb-3">Menu</li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" end>
                            <i className="ri-funds-box-line"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" data-bs-target="#administrasi-nav" data-bs-toggle="collapse" to="/*">
                            <i className="ri-file-copy-2-line"></i>
                            <span>Administrasi</span><i className="bi bi-chevron-right ms-auto"></i>
                        </NavLink>
                        <ul id="administrasi-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink to="/administrasi-umum">
                                    <i className="bi bi-circle"></i><span>Umum</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/kependudukan">
                                    <i className="bi bi-circle"></i><span>Kependudukan</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item d-none">
                        <NavLink className="nav-link" to="/kependudukan">
                            <i className="ri-team-line"></i>
                            <span>Kependudukan</span>
                        </NavLink>
                    </li>

                    <li className="nav-item d-none">
                        <NavLink className="nav-link" to="/pembangunan">
                            <i className="ri-building-4-line"></i>
                            <span>Pembangunan</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/pembangunan">
                            <i className="ri-bank-line"></i>
                            <span>Pembangunan</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" data-bs-target="#potensi-nav" data-bs-toggle="collapse" to="/*">
                            <i className="ri-store-2-line"></i>
                            <span>Potensi</span><i className="bi bi-chevron-right ms-auto"></i>
                        </NavLink>
                        <ul id="potensi-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink to="/umkm">
                                    <i className="bi bi-circle"></i><span>UMKM</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/*">
                                    <i className="bi bi-circle"></i><span>Wisata</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/*">
                                    <i className="bi bi-circle"></i><span>Berita</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profil-desa">
                            <i className="ri-profile-line"></i>
                            <span>Profil Desa</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/bantuan-sosial">
                            <i className="ri-building-4-line"></i>
                            <span>Bansos</span>
                        </NavLink>
                    </li>

                </ul>

            </aside>
        </Fragment>
    )
}

export default Sidebar