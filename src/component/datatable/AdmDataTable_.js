import React from "react";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";

const names = [
    {
        "id": "1",
        "kecamatan": "Maiwa",
        "desa": "Patondon Salu",
        "peraturan": "Peraturan Desa",
        "nomor": "8 TAHUN 2017",
        "tanggal": "22-02-2022",
        "proposal": "Pengajuan"
    },
    {
        "id": "2",
        "kecamatan": "Maiwa",
        "desa": "Tuncung",
        "peraturan": "Peraturan Desa",
        "nomor": "8 TAHUN 2017",
        "tanggal": "22-02-2022",
        "proposal": "Masuk RKD"
    },
    {
        "id": "3",
        "kecamatan": "Maiwa",
        "desa": "Pasang",
        "peraturan": "Peraturan Bersama",
        "nomor": "8 TAHUN 2017",
        "tanggal": "22-02-2022",
        "proposal": "Pengajuan"
    },
    {
        "id": "4",
        "kecamatan": "Enrekang",
        "desa": "Ranga",
        "peraturan": "Peraturan Desa",
        "nomor": "8 TAHUN 2017",
        "tanggal": "22-02-2022",
        "proposal": "Diverifikasi"
    },
    {
        "id": "5",
        "kecamatan": "Enrekang",
        "desa": "Buttu Batu",
        "peraturan": "Peraturan Desa",
        "nomor": "8 TAHUN 2017",
        "tanggal": "22-02-2022",
        "proposal": "Pengajuan"
    },
    {
        "id": "6",
        "kecamatan": "Enrekang",
        "desa": "Tokkonan",
        "peraturan": "Peraturan Bersama",
        "nomor": "8 TAHUN 2017",
        "tanggal": "22-02-2022",
        "proposal": "Pengajuan"
    },
    {
        "id": "7",
        "kecamatan": "Baraka",
        "desa": "Banti",
        "peraturan": "Peraturan Desa",
        "nomor": "8 TAHUN 2017",
        "tanggal": "22-02-2022",
        "proposal": "Pengajuan"
    },
    {
        "id": "8",
        "kecamatan": "Baraka",
        "desa": "Bontongan",
        "peraturan": "Peraturan Kepala Desa",
        "nomor": "8 TAHUN 2017",
        "tanggal": "22-02-2022",
        "proposal": "Pengajuan"
    },
    {
        "id": "9",
        "kecamatan": "Baraka",
        "desa": "Salukanan",
        "peraturan": "Peraturan Desa",
        "nomor": "8 TAHUN 2017",
        "tanggal": "22-02-2022",
        "proposal": "Revisi dari kecamatan"
    },
    {
        "id": "10",
        "kecamatan": "Anggeraja",
        "desa": "Mampu",
        "peraturan": "Peraturan Desa",
        "nomor": "8 TAHUN 2017",
        "tanggal": "22-02-2022",
        "proposal": "Pengajuan"
    },
    {
        "id": "11",
        "kecamatan": "Anggeraja",
        "desa": "Bamba Puang",
        "peraturan": "Peraturan Desa",
        "nomor": "8 TAHUN 2017",
        "tanggal": "22-02-2022",
        "proposal": "Pengajuan"
    },
    {
        "id": "12",
        "kecamatan": "Anggeraja",
        "desa": "Siambo",
        "peraturan": "Peraturan Desa",
        "nomor": "8 TAHUN 2017",
        "tanggal": "22-02-2022",
        "proposal": "Pengajuan"
    }
]


class AdminTable extends React.Component {

    componentDidMount() {
        if (!$.fn.DataTable.isDataTable("#myTable")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#table").DataTable({
                        // pagingType: "full_numbers",
                        // processing: true,
                        // select: {
                        //     style: "single",
                        // },
                        pageLength: 10,
                        searching: false,
                        dom: "Bfrtip",
                        buttons: [
                            ''
                        ]
                    });
                }, 1000);
            });
        }
    }

    showTable = () => {
        try {
            return names.map((item, index) => {
                return (
                    <Administrasi
                        key={item.id}
                        no={index + 1}
                        kec={item.kecamatan}
                        desa={item.desa}
                        peraturan={item.peraturan}
                        nomor={item.nomor}
                        tanggal={item.tanggal}
                        proposal={item.proposal}
                    />

                );
            });
        } catch (e) {
            alert(e.message);
        }
    };

    render() {
        return (
            <div className="table-responsive">
                <table id="table" className="table table-bordered">
                    <thead>
                        <tr style={{ background: '#F1ECFF' }}>
                            <th>No</th>
                            <th>Kecamatan</th>
                            <th>Desa</th>
                            <th>Jenis Peraturan</th>
                            <th>Nomor Peraturan</th>
                            <th>Tanggal Peraturan</th>
                            <th>Status Proposal</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.showTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

function Administrasi(props) {
    let statusProposal = {
        '': { 'class': '', 'icon': '' },
        'Pengajuan': { 'class': 'bg-pengajuan', 'icon': '' },
        'Masuk RKD': { 'class': 'bg-rkd', 'icon': '' },
        'Revisi dari kecamatan': { 'class': 'bg-prioritas', 'icon': '' },
        'Diverifikasi': { 'class': 'bg-verifikasi', 'icon': 'bx bxs-check-circle' },
    };

    return (
        <tr>
            <td>{props.no}</td>
            <td>{props.kec}</td>
            <td>{props.desa}</td>
            <td>{props.peraturan}</td>
            <td>{props.nomor}</td>
            <td>{props.tanggal}</td>
            <td>
                <h5>
                    <span className={`badge ${statusProposal[props.proposal].class}`}>
                        {props.proposal}
                        <i className={statusProposal[props.proposal].icon}></i>
                    </span>
                </h5>
            </td>
        </tr>
    )
}

export default AdminTable;
