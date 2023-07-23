import ScrollToTop from "../utils/scroll-to-top";
import Header from "./header"
import Sidebar from "./sidebar";
import Footer from "./footer";
// import { useEffect } from "react";
// import { STRINGS } from "../config/strings";
// import { KODE_SLUG } from "../utils/api";

const DashboardShell = (props) => {
    // useEffect(() => {
    //     document.getElementById("sidebar").style.backgroundColor = `${STRINGS[KODE_SLUG].background_color}`;

    //     const sidebarNav = document.querySelectorAll(".sidebar-nav .nav-link");
    //     sidebarNav.forEach((el) => {
    //         el.style.backgroundColor = `${STRINGS[KODE_SLUG].background_color}`;
    //         el.style.color = `${STRINGS[KODE_SLUG].bg_color_jumbotron}`;
    //     })

    //     const sidebarNavActive = document.querySelectorAll(".sidebar-nav .nav-link.active");
    //     sidebarNavActive.forEach((el) => {
    //         el.style.backgroundColor = `${STRINGS[KODE_SLUG].bg_color_jumbotron}`;
    //     })

    //     const sidebarMenu = document.querySelectorAll(".sidebar-nav .nav-heading");
    //     sidebarMenu.forEach((el) => {
    //         el.style.color = `${STRINGS[KODE_SLUG].bg_color_jumbotron}`;
    //     })

    // }, [])
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