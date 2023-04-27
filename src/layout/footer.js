import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    return (
        <Fragment>
            <footer id="footer" className="footer">
                <div className="copyright">
                    &copy; 2023 Powered by <strong><span>PT Digital Desa Indonesia</span></strong>
                </div>
            </footer>

            <Link onClick={scrollToTop} to={'#'} className="back-to-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></Link>
        </Fragment>
    )
}

export default Footer