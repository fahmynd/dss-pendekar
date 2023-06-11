import { RiBankLine, RiBuilding4Line, RiFileCopy2Line, RiFundsBoxLine, RiProfileLine, RiStore2Line } from "react-icons/ri";

export type MenuItem = {
    title: string;
    path: string;
    icon?: React.ReactNode;
    childs?: MenuItem[];
}

const MENU_LIST: MenuItem[] = [
    {
        title: "Dashboard",
        path: "index",
        icon: <RiFundsBoxLine />
    },
    {
        title: "Administrasi",
        path: "",
        icon: <RiFileCopy2Line />,
        childs: [
            {
                title: "Umum",
                path: "administrasi",
            },
            {
                title: "Kependudukan",
                path: "kependudukan",
            }
        ]
    },
    {
        title: "Pembangunan",
        path: "pembangunan",
        icon: <RiBankLine />
    },
    {
        title: "Potensi",
        path: "",
        icon: <RiStore2Line />,
        childs: [
            {
                title: "UMKM",
                path: "umkm"
            },
            {
                title: "Berita",
                path: "berita"
            },
            {
                title: "Wisata",
                path: 'wisata'
            }
        ]
    },
    {
        title: "Profil Desa",
        path: "profil-desa",
        icon: <RiProfileLine />
    },
    {
        title: "Bansos",
        path: "bantuan-sosial",
        icon: <RiBuilding4Line />
    }
]

export default MENU_LIST;