import ScrollToTop from "../utils/scroll-to-top";
import Header from "./header"
import Sidebar from "./sidebar";

const DashboardShell = (props) => {
    return (
        <>
            <Header />
            <Sidebar />
            <ScrollToTop />
            {props.children}
        </>
    )
}

export default DashboardShell;