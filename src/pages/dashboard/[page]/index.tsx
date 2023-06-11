import DashboardHeader from "@/components/header/dashboard-header";
import SideBar from "@/components/sidebar/sidebar";
import AdministrasiUmumPage from "@/features/dashboard/administrasi-umum";
import MainDashboardPage from "@/features/dashboard/main";
import { AppShell } from "@mantine/core";
import { useRouter } from "next/router";

type Page = {
    path: string;
    component: React.ReactNode
}

const PAGES: Page[] = [
    {
        path: "index",
        component: <MainDashboardPage />
    },
    {
        path: "administrasi",
        component: <AdministrasiUmumPage />
    }
]

const Dashboard = () => {

    const { query } = useRouter()
    const currentPage = query?.page || "index"
    
    const getPage = () => {
        const page = PAGES.find((item) => item.path === currentPage)
        if (page) {
            return page.component
        }

        return null
    }

    return (
        <AppShell
            layout="alt"
            header={<DashboardHeader />}
            navbar={<SideBar active={"index"} />}
        >
            {getPage()}
        </AppShell>
    )
}

export default Dashboard;