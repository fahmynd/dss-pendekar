import { LoadingOverlay } from "@mantine/core";
import dynamic from "next/dynamic";

const AdministrasiUmum = dynamic(() => import('./layout'),{
    loading: () => <LoadingOverlay visible={true} />,
    ssr: false,
})

const AdministrasiUmumPage = () => {
    return <AdministrasiUmum />
}

export default AdministrasiUmumPage;