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

class RekapPendudukTable extends React.Component {
    constructor(props) {
        super();
        this.state = {
            resultData: props.resultData
        };
    }

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
        const { resultData } = this.state;
        try {
            return resultData.list_desa.map((item, index) => {
                return (
                    <Penduduk
                        key={item.kode_wilayah}
                        no={index + 1}
                        kec={item.nama_kecamatan}
                        desa={item.nama_deskel}
                        laki={item.pria}
                        perempuan={item.wanita}
                        total={item.jumlah_penduduk}
                        kk={item.jumlah_kk}
                        ktp={item.jml_wktp}
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
            <td className="text-center">{props.no}</td>
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