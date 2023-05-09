import { React, Fragment, useEffect, useState } from 'react'
import AnggaranDesa from '../component/chart/APBDes'
import axios from 'axios';
import LoadingSpinner from '../utils/LoadingSpinner';
import { format_tgl, rupiah } from '../utils/helper.min';
import RKPTable from '../component/datatable/RKPDataTable';
import APBDTable from '../component/datatable/APBDesDataTable';
import FilterAPBD from '../component/filterAPBD';

const Keuangan = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [resultData, setResultData] = useState();
    const [update, setUpdate] = useState();
    const [online, setOnline] = useState([]);
    const [anggaran, setAnggaran] = useState([]);
    const [realisasi, setRealisasi] = useState([]);
    const [penyerapan, setPenyerapan] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        // axios.get(BASE_API_URL + 'administrasi-umum?k3=&k4=')
        axios.get(`https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/keuangan?k3=&k4=`)
            .then((result) => {
                // console.log(result.data.data)
                const data = result.data.data;
                setResultData(data);
                setUpdate(data.last_updated)
                setOnline(data.list_kabupaten[0].online)
                setAnggaran(data.list_kabupaten[0].anggaran_2023)
                setRealisasi(data.list_kabupaten[0].realisasi_2023)
                setPenyerapan(data.list_kabupaten[0].penyerapan_2023)
            })
            .catch(error => {
                alert(error.message);
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail

        document.title = "Pembangunan | PENDEKAR";

    }, [])

    if (isLoading) return <LoadingSpinner />;

    return (
        <Fragment>
            <main id="main" className="main">

                <div className="pagetitle mt-3 mb-5">
                    <h1>Pembangunan</h1>
                </div>

                <div className="filter-update">
                    <h5>
                        <span className="badge bg-update py-3">Last Update : {format_tgl(update)}</span>
                    </h5>
                </div>

                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">

                            <ul className="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="apbd-tab" data-bs-toggle="tab" data-bs-target="#bordered-apbd"
                                        type="button" role="tab" aria-controls="apbd" aria-selected="true">APBDes</button>
                                </li>
                                <li className="d-none nav-item" role="presentation">
                                    <button className="nav-link" id="proposal-tab" data-bs-toggle="tab" data-bs-target="#bordered-proposal" type="button"
                                        role="tab" aria-controls="proposal" aria-selected="false">PROPOSAL</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="rkp-tab" data-bs-toggle="tab" data-bs-target="#bordered-rkp" type="button"
                                        role="tab" aria-controls="rkp" aria-selected="false">RKP</button>
                                </li>
                            </ul>
                            <div className="tab-content pt-2" id="borderedTabContent">
                                <div className="tab-pane fade show active" id="bordered-apbd" role="tabpanel" aria-labelledby="apbd-tab">
                                    <div className="row g-1 my-3">
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Pilih Tahun</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                                                <option value={'DEFAULT'}>Pilih Kecamatan</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row g-md-0">

                                        {/* <div className="col-md-3">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan pb-0">
                                                    <h6>JUMLAH DESA</h6>
                                                    <div className="d-flex">
                                                        <div className="card-icon1 rounded-circle d-flex justify-content-center">
                                                            <i className="bx bxs-building-house"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="fw-bold">54</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan pb-0">
                                                    <h6>TOTAL DANA DESA</h6>
                                                    <div className="d-flex">
                                                        <div className="card-icon1 rounded-circle d-flex justify-content-center">
                                                            <i className="bx bx-money"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="fw-bold">Rp312.300.003</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan pb-0">
                                                    <h6>TOTAL PENDAPATAN</h6>
                                                    <div className="d-flex">
                                                        <div className="card-icon1 rounded-circle d-flex justify-content-center">
                                                            <i className="bx bxs-archive-in"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="fw-bold">Rp312.300.003</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan pb-0">
                                                    <h6>TOTAL BELANJA</h6>
                                                    <div className="d-flex">
                                                        <div className="card-icon1 rounded-circle d-flex justify-content-center">
                                                            <i className="bx bx-cart"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="fw-bold">Rp312.300.003</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="col-md-3">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan pb-0">
                                                    <h6>JUMLAH DESA</h6>
                                                    <div className="d-flex">
                                                        <div className="card-icon1 rounded-circle d-flex justify-content-center">
                                                            <i className="bx bxs-building-house"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="fw-bold">{online}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan pb-1">
                                                    <h6>ANGGARAN</h6>
                                                    <h5 className="fw-bold">{rupiah(anggaran)}</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan pb-1">
                                                    <h6>REALISASI</h6>
                                                    <h5 className="fw-bold">{rupiah(realisasi)}</h5>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3">
                                            <div className="keuangan-card">
                                                <div className="card-body-keuangan">
                                                    <h6>% PENYERAPAN</h6>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar" style={{ width: `${penyerapan}%` }} aria-valuenow={penyerapan}
                                                            aria-valuemin="0" aria-valuemax="100">{penyerapan}%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {resultData && <FilterAPBD resultData={resultData} />}

                                    <div className="mb-5">
                                        <div className="card">
                                            <div className="card-body pb-0">
                                                <h5 className="card-title-potensi">GRAFIK VS REALISASI</h5>
                                                {/* <p>Menampilkan potensi Kecamatan, Desa/Kelurahan</p> */}
                                                <div className="filter-primary">
                                                    <button type="button" className="btn btn-primary">Export Report</button>
                                                </div>

                                                <div className="row g-2">
                                                    <div className="col-12">
                                                        <div className="stunting-card">
                                                            <div className="box-featured">
                                                                <h5 className="card-title">APBDes</h5>
                                                            </div>
                                                            <div className="card-body">

                                                                {/* <div id="stuntingChart" style={{ minHeight: '400px' }}></div> */}
                                                                {resultData && <AnggaranDesa resultData={resultData} />}

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        {resultData && <APBDTable resultData={resultData} />}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-none card">
                                        <div className="card-body pb-0">
                                            <h5 className="card-title-potensi pb-0">RINCIAN KEUANGAN DESA</h5>
                                            <div className='table-responsive'>
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr style={{ background: '#EDF8F6' }}>
                                                            <th scope="col">Keterangan</th>
                                                            <th scope="col">Anggaran</th>
                                                            <th scope="col">Realisasi</th>
                                                            <th scope="col">Lebih/Kurang</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ color: '#327A6D', weight: '600' }}>PENDAPATAN ASLI DESA</td>
                                                            <td>Rp0</td>
                                                            <td>Rp0</td>
                                                            <td>Rp0</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p style={{ color: '#327A6D', weight: '600' }}>PENDAPATAN TRANSFER</p>
                                                                <ul>
                                                                    <li>Dana Desa</li>
                                                                    <li>Bagi Hasil Pajak dan Retribusi</li>
                                                                    <li>Alokasi Dana Desa</li>
                                                                    <li>Bantuan Keuangan Provinsi</li>
                                                                    <li>Bantuan Keuangan Kabupaten/Kota</li>
                                                                    <li>Pendapatan Lain</li>
                                                                </ul>
                                                                <p>JUMLAH PENDAPATAN</p>
                                                            </td>
                                                            <td className='anggaranList'>
                                                                <p style={{ weight: '600' }}>Rp0</p>
                                                                <ul className='list-unstyled'>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                </ul>
                                                                <p>Rp0</p>
                                                            </td>
                                                            <td className='anggaranList'>
                                                                <p style={{ weight: '600' }}>Rp0</p>
                                                                <ul className='list-unstyled'>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                </ul>
                                                                <p>Rp0</p>
                                                            </td>
                                                            <td className='anggaranList'>
                                                                <p style={{ weight: '600' }}>Rp0</p>
                                                                <ul className='list-unstyled'>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                </ul>
                                                                <p>Rp0</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p style={{ color: '#327A6D', weight: '600' }}>BELANJA</p>
                                                                <ul>
                                                                    <li>Bidang Penyelenggaraan Pemerintahan Desa</li>
                                                                    <li>Bidang Pelaksanaan Pembangunan Desa</li>
                                                                    <li>Bidang Pembinaan Kemasyarakatan</li>
                                                                    <li>Bidang Pemberdayaan Masyarakat</li>
                                                                    <li>Bidang Penanggulangan Bencana, Darurat dan Mendesak Desa</li>
                                                                </ul>
                                                                <p>JUMLAH BELANJA</p>
                                                            </td>
                                                            <td className='anggaranList'>
                                                                <p style={{ weight: '600' }}>Rp0</p>
                                                                <ul className='list-unstyled'>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                </ul>
                                                                <p>Rp0</p>
                                                            </td>
                                                            <td className='anggaranList'>
                                                                <p style={{ weight: '600' }}>Rp0</p>
                                                                <ul className='list-unstyled'>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                </ul>
                                                                <p>Rp0</p>
                                                            </td>
                                                            <td className='anggaranList'>
                                                                <p style={{ weight: '600' }}>Rp0</p>
                                                                <ul className='list-unstyled'>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                </ul>
                                                                <p>Rp0</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p style={{ color: '#327A6D', weight: '600' }}>PEMBIAYAAN</p>
                                                                <ul>
                                                                    <li>Penerimaan Pembiayaan</li>
                                                                    <li>Pengeluaran Pembiayaan</li>
                                                                </ul>
                                                            </td>
                                                            <td className='anggaranList'>
                                                                <p style={{ weight: '600' }}>Rp0</p>
                                                                <ul className='list-unstyled'>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                </ul>
                                                            </td>
                                                            <td className='anggaranList'>
                                                                <p style={{ weight: '600' }}>Rp0</p>
                                                                <ul className='list-unstyled'>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                </ul>
                                                            </td>
                                                            <td className='anggaranList'>
                                                                <p style={{ weight: '600' }}>Rp0</p>
                                                                <ul className='list-unstyled'>
                                                                    <li>Rp0</li>
                                                                    <li>Rp0</li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th colSpan={4}>Sumber : SISKEUDES 2023</th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div className="tab-pane fade" id="bordered-proposal" role="tabpanel" aria-labelledby="proposal-tab">

                                    <div className="col-lg-12 mt-3 mb-5">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title-potensi">PROGRES PROPOSAL APBDes</h5>

                                                <div className="row g-md-2">

                                                    <div className="col-md-4">
                                                        <div className="proposal_pengajuan-card">
                                                            <div className="card-body-keuangan pb-1">
                                                                <h6>PENGAJUAN</h6>
                                                                <h5 className="fw-bold">13 Desa/Kelurahan</h5>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="proposal_revisi-card">
                                                            <div className="card-body-keuangan pb-1">
                                                                <h6>REVISI</h6>
                                                                <h5 className="fw-bold">13 Desa/Kelurahan</h5>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="proposal_rkd-card">
                                                            <div className="card-body-keuangan">
                                                                <h6>MASUK RKD</h6>
                                                                <h5 className="fw-bold">13 Desa/Kelurahan</h5>
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
                                                <h5 className="card-title-potensi">PROPOSAL DANA TRANSFER</h5>
                                                <div className="row g-1 mb-4">
                                                    <div className="col-3">
                                                        <div className="search-produk">
                                                            <form className="search-form-produk d-flex align-items-center" method="POST" action="#">
                                                                <input type="text" name="query" placeholder="Nama Desa..." title="Enter search keyword" />
                                                                <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='table-responsive'>
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <tr style={{ background: '#EDF8F6' }}>
                                                                <th scope="col">No</th>
                                                                <th scope="col">Kecamatan</th>
                                                                <th scope="col">Desa</th>
                                                                <th scope="col">Jenis Proposal</th>
                                                                <th scope="col">Nominal</th>
                                                                <th scope="col">Status Proposal</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope='row'>1</th>
                                                                <td>Manggala</td>
                                                                <td>Pilanggede</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope='row'>1</th>
                                                                <td>Manggala</td>
                                                                <td>Pilanggede</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope='row'>1</th>
                                                                <td>Manggala</td>
                                                                <td>Pilanggede</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope='row'>1</th>
                                                                <td>Manggala</td>
                                                                <td>Pilanggede</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope='row'>1</th>
                                                                <td>Manggala</td>
                                                                <td>Pilanggede</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="tab-pane fade" id="bordered-rkp" role="tabpanel" aria-labelledby="rkp-tab">
                                    <div className="col-lg-12 mt-3 mb-5">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title-potensi">Rencana Kerja Pembangunan</h5>
                                                <div className="filter-primary">
                                                    <button type="button" className="btn btn-primary">Export Report</button>
                                                </div>
                                                {resultData && <RKPTable resultData={resultData} />}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </Fragment>
    )
}

export default Keuangan