import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { BASE_API_URL } from '../utils/api';
import LoadingSpinner from '../utils/LoadingSpinner';
import Bantuan from '../../src/assets/icon/mendapatBantuan.svg'
import KK from '../../src/assets/icon/kk.svg'
import BansosTable from '../component/datatable/RekapBansosDataTable';
import { formatAngka, format_tgl } from '../utils/helper.min';

const BantuanSosial = () => {
    const [resultData, setResultData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [kec, setKec] = useState([]);
    const [desa, setDesa] = useState([]);
    const [update, setUpdate] = useState();
    const [individu, setIndividu] = useState([]);
    const [keluarga, setKeluarga] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // axios.get(BASE_API_URL + 'administrasi-umum?k3=&k4=')
        axios.get(`https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/bansos`)
            .then((result) => {
                // console.log(result.data.data.jumlah)
                setResultData(result.data);

                const data = result.data.data;
                setKec(data.list_kecamatan)
                setDesa(data.list_desa)
                setUpdate(data.last_updated)
                setIndividu(data.list_kabupaten[0].jml_penerima)
                setKeluarga(data.list_kabupaten[0].jml_penerima_kk)
            })
            .catch(error => {
                alert(error.message);
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail

        document.title = "Bantuan Sosial | PENDEKAR";

    }, [])

    if (isLoading) return <LoadingSpinner />;

    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Bantuan Sosial</h1>
                </div>

                <div className="filter-update">
                    <h5>
                        <span className="badge bg-update py-3">Last Update : {format_tgl(update)}</span>
                    </h5>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary">Export Report</button>
                                    </div>
                                    <div className="row g-1 my-4">
                                        <div className="col-3">
                                            <select defaultValue='0' className="form-select" aria-label="Pilih Kecamatan">
                                                <option value='0'>Semua Kecamatan</option>
                                                {kec.map((item) => {
                                                    return (
                                                        <SelectOptions
                                                            key={item.kode_wilayah}
                                                            value={item.kode_wilayah}
                                                            title={item.nama_kecamatan}
                                                        />
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue='0' className="form-select" aria-label="Pilih Desa">
                                                <option value='0'>Semua Desa</option>
                                                {desa.map((item) => {
                                                    return (
                                                        <SelectOptions
                                                            key={item.kode_wilayah}
                                                            value={item.kode_wilayah}
                                                            title={item.nama_deskel}
                                                        />
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-body rounded-2 bg-primary">
                                                    <div className="row px-4 py-2">
                                                        <div className="col-6">
                                                            <span className="jum-bantuan timer count-title count-number">{formatAngka(individu)}</span> <br />
                                                            <span className="judul-card-bansos">Penduduk Mendapat Bantuan</span>
                                                        </div>
                                                        <div className="col-6 text-right center-v">
                                                            <img src={Bantuan} width="60" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-body rounded-2 bg-secondary">
                                                    <div className="row px-4 py-2">
                                                        <div className="col-6">
                                                            <span className="jum-bantuan timer count-title count-number">{formatAngka(keluarga)}</span> <br />
                                                            <span className="judul-card-bansos">Kepala Keluarga Mendapat Bantuan</span>
                                                        </div>
                                                        <div className="col-6 text-right center-v">
                                                            <img src={KK} width="60" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title-potensi">Rekap Penerima Bantuan Sosial</h5>
                                    <div className="filter-primary">
                                        <button type="button" className="btn btn-primary">Export Report</button>
                                    </div>
                                    {resultData && <BansosTable resultData={resultData} />}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </Fragment>
    )
}

function SelectOptions(props) {
    return (
        <option value={props.value}>{props.title}</option>
    )
}

export default BantuanSosial
