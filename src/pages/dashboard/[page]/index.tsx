import DashboardHeader from "@/components/header/dashboard-header";
import SideBar from "@/components/sidebar/sidebar";
import { AppShell } from "@mantine/core";
import { useParams } from "next/navigation";
import { useEffect } from "react";


const Dashboard = () => {
    const params = useParams()

    useEffect(() => {
        console.log(params)
    }, [])
    
    return (
        <AppShell
            layout="alt"
            header={<DashboardHeader />}
            navbar={<SideBar active={"index"} />}
        >
            
        </AppShell>
    )
}

export default Dashboard;