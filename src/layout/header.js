import { React, Fragment, useEffect, useState } from 'react'
// import SweetAlert from 'react-bootstrap-sweetalert';
import { Link, Navigate } from 'react-router-dom'
import useAuth from '../context/Auth/hooks/useAuth';

const Header = (props) => {
    const auth = useAuth()
    const [username, setUsername] = useState(props.name);
    const [board, setBoard] = useState([]);
    const [boardItem, setBoardItem] = useState("");
    const [toggle, setToggle] = useState(false);
    const [submit, setSubmit] = useState(true);
    const [logout, setLogout] = useState(false);
    const [loggedInUserObj, setLoggedInUserObj] = useState({});

    const _ = require("lodash");

    const onLogoutYes = () => {
        setSubmit({ submit: false });
        setToggle({ toggle: true });
        const userObj = JSON.parse(
            localStorage.getItem(_.get(loggedInUserObj, "userName", ""))
        );
        userObj.isUserLoggedIn = false;
        localStorage.setItem(
            _.get(loggedInUserObj, "userName", ""),
            JSON.stringify(userObj)
        );
    };

    const onLogout = () => {
        setLogout({
            logout: !logout,
        });
        auth.doLogout()
    };

    useEffect(() => {
        const loggedInUserName = _.get(props.location, "userName", {});
        setLoggedInUserObj({
            loggedInUserObj: JSON.parse(localStorage.getItem(loggedInUserName)),
        });
    }, [])

    const localUname = `${_.get(
        loggedInUserObj,
        "firstName",
        ""
    )} ${_.get(loggedInUserObj, "lastName", "")}`;

    return (
        <Fragment>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center">
                        <span className="d-none d-lg-block">PENDEKAR</span>
                    </Link>
                    <i className="bi bi-list toggle-sidebar-btn"></i>
                </div>

                <div className="button-bar d-none">
                    <button type="button" className="btn btn-outline-secondary">Peta Interaktif</button>
                    <button type="button" className="btn btn-outline-secondary">Statistik Potensi</button>
                    <button type="button" className="btn btn-outline-secondary">Stunting</button>
                </div>

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        <li className="d-none nav-item dropdown">

                            <Link className="nav-link nav-icon" to={'/'} data-bs-toggle="dropdown">
                                <i className="bi bi-bell"></i>
                                <span className="badge bg-primary badge-number">4</span>
                            </Link>

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li className="dropdown-header">
                                    You have 4 new notifications
                                    <Link to={'/'}><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-exclamation-circle text-warning"></i>
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>30 min. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-x-circle text-danger"></i>
                                    <div>
                                        <h4>Atque rerum nesciunt</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>1 hr. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-check-circle text-success"></i>
                                    <div>
                                        <h4>Sit rerum fuga</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>2 hrs. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item">
                                    <i className="bi bi-info-circle text-primary"></i>
                                    <div>
                                        <h4>Dicta reprehenderit</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="dropdown-footer">
                                    <Link to={'/'}>Show all notifications</Link>
                                </li>

                            </ul>

                        </li>

                        <li className="nav-item dropdown pe-3">

                            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to={'/'} data-bs-toggle="dropdown">
                                <img src="https://mitrasulawesi.id/wp-content/uploads/2022/10/IMG_20221014_232402.jpg" alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">Muslimin Bando</span>
                            </Link>

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>Muslimin Bando</h6>
                                    <span>Bupati Enrekang</span>
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
                                    <Link className="dropdown-item d-flex align-items-center" to={'/pengaturan'}>
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
                                    <button className="dropdown-item d-flex align-items-center"
                                        onClick={onLogout}>
                                        <i className="bi bi-box-arrow-right"></i>
                                        <span>Keluar</span>
                                    </button>
                                </li>

                            </ul>
                        </li>

                    </ul>
                </nav>

            </header>
            {/* {!submit ? <Navigate to={`/`} /> : null}
            {logout ? (
                <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={onLogoutYes}
                    onCancel={onLogout}
                    focusCancelBtn
                ></SweetAlert>
            ) : (
                ""
            )} */}
        </Fragment>
    )
}

export default Header