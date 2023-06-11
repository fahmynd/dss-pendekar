import { LoadingOverlay } from "@mantine/core";
import dynamic from "next/dynamic";

const MainDashboard = dynamic(() => import('./layout'),{
    loading: () => <LoadingOverlay visible={true} />,
    ssr: false,
})

const MainDashboardPage = () => {
    return <MainDashboard />
}

export default MainDashboardPage;