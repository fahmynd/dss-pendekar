import ScrollToTop from "../utils/scroll-to-top";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

const DashboardShell = (props) => {
  return (
    <>
      <Header />
      <Sidebar />
      <ScrollToTop />
      {props.children}
      <Footer />
    </>
  );
};

export default DashboardShell;
