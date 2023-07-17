import ScrollToTop from "../utils/scroll-to-top";
import Header from "./header"
import Sidebar from "./sidebar";
import Footer from "./footer";
import { useEffect } from "react";
import { STRINGS } from "../config/strings";
import { KODE_SLUG } from "../utils/api";

const DashboardShell = (props) => {
    useEffect(() => {
        document.getElementById("sidebar").style.backgroundColor = `${STRINGS[KODE_SLUG].background_color}`;

        const sidebarNav = document.querySelectorAll(".sidebar-nav .nav-link");
        sidebarNav.forEach((sidebar1) => {
            sidebar1.style.backgroundColor = `${STRINGS[KODE_SLUG].background_color}`;
        })

        const sidebarNavActive = document.querySelectorAll(".sidebar-nav .nav-link.active");
        sidebarNavActive.forEach((sidebar2) => {
            sidebar2.style.backgroundColor = `${STRINGS[KODE_SLUG].bg_color_jumbotron}`;
        })

    }, [])
    return (
        <>
            <Header />
            <Sidebar />
            <ScrollToTop />
            {props.children}
            <Footer />
        </>
    )
}

export default DashboardShell;