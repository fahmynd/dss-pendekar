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
import { Fragment } from "react";

class RekomendasiTable extends React.Component {

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
            return resultData.data.list_desa.map((item, index) => {
                return (
                    <Rekomendasi
                        key={index + 1}
                        no={index + 1}
                        kec={item.nama_kecamatan}
                        desa={item.nama_deskel}
                        status={item.current_status}
                        skoridm={item.capaian.idm}
                        skorsdgs={item.capaian.sdgs}
                        rekomendasi={item.rekomendasi}
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
                            <th>Status</th>
                            <th>Skor IDM</th>
                            <th>Skor SDGS</th>
                            <th>Rekomendasi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.showTable()}
                    </tbody>
                </table>

                <div className="modal fade" id="disablebackdrop" tabIndex="-1" data-bs-backdrop="false">
                    <div className="modal-dialog modal-lg shadow-lg rounded">
                        <div id="item-rekomendasi" className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Rekomendasi</h5>
                                <div data-bs-dismiss="modal" aria-label="Close" style={{ cursor: 'pointer' }}>
                                    <span>Tutup</span>
                                </div>
                            </div>
                            <div className="modal-body">
                                <h5><span className="badge bg-super-prioritas">Super Prioritas</span></h5>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr style={{ background: '#EDEDED' }}>
                                            <th scope="col">Item</th>
                                            <th scope="col">Kategori</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                            <td>Kesehatan</td>
                                        </tr>
                                        <tr>
                                            <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                            <td>Kesehatan</td>
                                        </tr>
                                        <tr>
                                            <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                            <td>Kesehatan</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h5><span className="badge bg-prioritas">Prioritas</span></h5>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr style={{ background: '#EDEDED' }}>
                                            <th scope="col">Item</th>
                                            <th scope="col">Kategori</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                            <td>Kesehatan</td>
                                        </tr>
                                        <tr>
                                            <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                            <td>Kesehatan</td>
                                        </tr>
                                        <tr>
                                            <td>Tersedianya Lembaga Pebankan Umum dan BPR</td>
                                            <td>Kesehatan</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

function Rekomendasi(props) {
    let statusIDM = {
        '': { 'class': '' },
        'SANGAT TERTINGGAL': { 'class': 'bg-super-prioritas' },
        'TERTINGGAL': { 'class': 'bg-prioritas' },
        'BERKEMBANG': { 'class': 'bg-rkd' },
        'MAJU': { 'class': 'bg-pengajuan' },
        'MANDIRI': { 'class': 'bg-verifikasi' },
    };

    return (
        <Fragment>
            <tr>
                <td className="text-center">{props.no}</td>
                <td>{props.kec}</td>
                <td>{props.desa}</td>
                <td>
                    <h5>
                        <span className={`badge ${statusIDM[props.status].class}`}>{props.status}</span>
                    </h5>
                </td>
                <td>{props.skoridm}</td>
                <td>{props.skorsdgs}</td>
                <td>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#disablebackdrop">
                        Lihat Rekomendasi
                    </button>
                </td>
            </tr>
        </Fragment>
    )
}

export default RekomendasiTable;
