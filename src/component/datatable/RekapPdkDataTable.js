import React from "react";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
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
        "laki": 238,
        "perempuan": 426,
        "total": 664,
        "kk": 664,
        "ktp": 664,
    },
    {
        "id": "2",
        "kecamatan": "Maiwa",
        "desa": "Tuncung",
        "laki": 238,
        "perempuan": 426,
        "total": 664,
        "kk": 664,
        "ktp": 664,
    },
    {
        "id": "3",
        "kecamatan": "Maiwa",
        "desa": "Pasang",
        "laki": 238,
        "perempuan": 426,
        "total": 664,
        "kk": 664,
        "ktp": 664,
    },
    {
        "id": "4",
        "kecamatan": "Enrekang",
        "desa": "Ranga",
        "laki": 238,
        "perempuan": 426,
        "total": 664,
        "kk": 664,
        "ktp": 664,
    },
    {
        "id": "5",
        "kecamatan": "Enrekang",
        "desa": "Buttu Batu",
        "laki": 238,
        "perempuan": 426,
        "total": 664,
        "kk": 664,
        "ktp": 664,
    },
    {
        "id": "6",
        "kecamatan": "Enrekang",
        "desa": "Tokkonan",
        "laki": 238,
        "perempuan": 426,
        "total": 664,
        "kk": 664,
        "ktp": 664,
    },
    {
        "id": "7",
        "kecamatan": "Baraka",
        "desa": "Banti",
        "laki": 238,
        "perempuan": 426,
        "total": 664,
        "kk": 664,
        "ktp": 664,
    },
    {
        "id": "8",
        "kecamatan": "Baraka",
        "desa": "Bontongan",
        "laki": 238,
        "perempuan": 426,
        "total": 664,
        "kk": 664,
        "ktp": 664,
    },
    {
        "id": "9",
        "kecamatan": "Baraka",
        "desa": "Salukanan",
        "laki": 238,
        "perempuan": 426,
        "total": 664,
        "kk": 664,
        "ktp": 664,
    },
    {
        "id": "10",
        "kecamatan": "Anggeraja",
        "desa": "Mampu",
        "laki": 238,
        "perempuan": 426,
        "total": 664,
        "kk": 664,
        "ktp": 664,
    },
    {
        "id": "11",
        "kecamatan": "Anggeraja",
        "desa": "Bamba Puang",
        "laki": 238,
        "perempuan": 426,
        "total": 664,
        "kk": 664,
        "ktp": 664,
    },
    {
        "id": "12",
        "kecamatan": "Anggeraja",
        "desa": "Siambo",
        "laki": 238,
        "perempuan": 426,
        "total": 664,
        "kk": 664,
        "ktp": 664,
    }
]


class RekapPendudukTable extends React.Component {

    componentDidMount() {
        if (!$.fn.DataTable.isDataTable("#myTable")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#rekap").DataTable({
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
                    <Penduduk
                        key={item.id}
                        no={index + 1}
                        kec={item.kecamatan}
                        desa={item.desa}
                        laki={item.laki}
                        perempuan={item.perempuan}
                        total={item.total}
                        kk={item.kk}
                        ktp={item.ktp}
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
                <table id="rekap" className="table table-bordered">
                    <thead>
                        <tr style={{ background: '#F1ECFF' }}>
                            <th>No</th>
                            <th>Kecamatan</th>
                            <th>Desa</th>
                            <th>Laki-Laki</th>
                            <th>Perempuan</th>
                            <th>Jumlah Penduduk</th>
                            <th>Jumlah KK</th>
                            <th>Wajib KTP</th>
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

function Penduduk(props) {
    return (
        <tr>
            <td>{props.no}</td>
            <td>{props.kec}</td>
            <td>{props.desa}</td>
            <td>{props.laki}</td>
            <td>{props.perempuan}</td>
            <td>{props.total}</td>
            <td>{props.kk}</td>
            <td>{props.ktp}</td>
        </tr>
    )
}

export default RekapPendudukTable;