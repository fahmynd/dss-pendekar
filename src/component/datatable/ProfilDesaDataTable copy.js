import React from "react";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
// import 'datatables.net-plugins/pagination/input.js';
import $ from "jquery";

class ProfilTable extends React.Component {
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
                    $("#profil").DataTable({
                        pagingType: 'simple_numbers',
                        pageLength: 10,
                        // language: {
                        //     oPaginate: {
                        //         sNext: '<i class="fa fa-forward"></i>',
                        //         sPrevious: '<i class="fa fa-backward"></i>',
                        //         sFirst: '<i class="fa fa-step-backward"></i>',
                        //         sLast: '<i class="fa fa-step-forward"></i>'
                        //     }
                        // },
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
            return resultData.map((item, index) => {
                return (
                    <Profil
                        key={item.kode_wilayah}
                        no={index + 1}
                        kode={item.kode_wilayah}
                        kec={item.nama_kecamatan}
                        desa={item.nama_deskel}
                        link={item.link}
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
                <table id="profil" className="table table-bordered">
                    <thead>
                        <tr style={{ background: '#F1ECFF' }}>
                            <th>No</th>
                            <th>Kode Wilayah</th>
                            <th>Kecamatan</th>
                            <th>Desa</th>
                            <th>Website</th>
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

function Profil(props) {
    return (
        <tr>
            <td className="text-center">{props.no}</td>
            <td>{props.kode}</td>
            <td>{props.kec}</td>
            <td>{props.desa}</td>
            <td>
                <a href={props.link} target={'_blank'} rel='noreferrer' style={{ color: '#3B2D64' }}><i className="fa-solid fa-earth-asia"></i>
                    &nbsp; Website Desa {props.desa}
                </a>
            </td>
        </tr>
    )
}

export default ProfilTable;