import DashboardShell from "../layout/dashboard"
import Setting from "../layout/setting";
import BantuanSosial from "../screens/bantuanSosial";
import BeritaPage from "../screens/berita";
import AdministrasiUmum from "../screens/administrasiUmum";
import Kependudukan from "../screens/kependudukan";
import Keuangan from "../screens/keuangan";
import Umkm from "../screens/umkm";
import ProfilDesa from "../screens/profilDesa";
import Wisata from "../screens/wisata";
import LogIn from "../component/Login/LogIn";
import { Routes, Route, Navigate } from "react-router-dom";
import useAuth from "../context/Auth/hooks/useAuth";

const DashboardRoute = () => {
    const auth = useAuth()
    
    if (!auth.isLogged) {
        return <Navigate to={"/login"} />
    }

    return (
        <DashboardShell>
            <Routes> 
                <Route index element={<AdministrasiUmum />} />
                <Route path="pengaturan" element={<Setting />} />
                <Route path="kependudukan" element={<Kependudukan />} />
                <Route path="bantuan-sosial" element={<BantuanSosial />} />
                <Route path="berita" element={<BeritaPage />} />
                <Route path="pembangunan" element={<Keuangan />} />
                <Route path="umkm" element={<Umkm />} />
                <Route path="profil-desa" element={<ProfilDesa />} />
                <Route path="wisata" element={<Wisata />} />
            </Routes>
        </DashboardShell>
    )
}

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Navigate to="/dashboard" />} />
            <Route path="/login" exact element={<LogIn />} />
            <Route path="/dashboard/*" element={<DashboardRoute />} />
        </Routes>
    )
}

export default AppRoute;