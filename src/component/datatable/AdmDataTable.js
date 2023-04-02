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

class AdminTable extends React.Component {

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
        const { resultData } = this.state;
        try {
            return resultData.data.list_administrasi.buku_peraturan_di_desa.map((item, index) => {
                return (
                    <Administrasi
                        key={item.lampiran}
                        no={index + 1}
                        kec={item.nama_kecamatan}
                        desa={item.nama_deskel}
                        peraturan={item.jenis_peraturan}
                        nomor={item.nomor_peraturan}
                        tanggal={item.tanggal_peraturan}
                        tentang={item.tentang}
                        lampiran={item.lampiran}
                        kode={item.kode_wilayah}
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
                        <tr className="align-items-center justify-content-center" style={{ background: '#F1ECFF' }}>
                            <th>No</th>
                            <th>Kecamatan</th>
                            <th>Desa</th>
                            <th>Jenis Peraturan</th>
                            <th>Nomor Peraturan</th>
                            <th>Tanggal Peraturan</th>
                            <th>Tentang</th>
                            <th>Lampiran</th>
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
    return (
        <tr>
            <td className="text-center">{props.no}</td>
            <td>{props.kec}</td>
            <td>{props.desa}</td>
            <td>{props.peraturan}</td>
            <td>{props.nomor}</td>
            <td>{props.tanggal}</td>
            <td>{props.tentang}</td>
            <td>
                <a href={`https://online.digitaldesa.id/uploads/${props.kode}/buku-peraturan-di-desa/${props.lampiran}`} target={"_blank"} className="btn btn-primary">
                    Download
                </a>
            </td>
        </tr>
    )
}

export default AdminTable;
