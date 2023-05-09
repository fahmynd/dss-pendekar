import React, { useMemo, useState, Fragment } from "react";
import { rupiah } from "../utils/helper.min";

const FilterAPBD = (props) => {
    const { list_kecamatan } = props.resultData;

    const [selectedTahun, setSelectedTahun] = useState("")
    const [selectedKec, setSelectedKec] = useState("")

    const listKec = useMemo(() => {
        setSelectedKec("")
        if (selectedTahun) {
            return list_kecamatan.filter(d => {
                return d.kode_wilayah.startsWith(selectedTahun)
            })
        }
        return []
    }, [list_kecamatan, selectedTahun])


    const APBD = useMemo(() => {
        let desa = 0;
        let anggaran = 0;
        let realisasi = 0;
        let penyerapan = 0;

        if (selectedTahun && selectedKec) {
            const kec = listKec.find(d => d.kode_wilayah === selectedKec)
            if (kec) {
                desa = parseInt(kec.online)
                anggaran = parseInt(kec.anggaran_2023)
                realisasi = parseInt(kec.realisasi_2023)
                penyerapan = parseInt(kec.penyerapan_2023)
            }
        } else {
            if (selectedTahun) {
                listKec.forEach(item => {
                    desa += parseInt(item.online);
                    anggaran += parseInt(item.anggaran_2023);
                    realisasi += parseInt(item.realisasi_2023);
                    penyerapan += parseInt(item.penyerapan_2023);
                })
            } else {
                list_kecamatan.forEach(d => {
                    desa += parseInt(d.online);
                    anggaran += parseInt(d.anggaran_2023);
                    realisasi += parseInt(d.realisasi_2023);
                    penyerapan += parseInt(d.penyerapan_2023);
                })
            }
        }

        return {
            desa,
            anggaran,
            realisasi,
            penyerapan
        }
    }, [listKec, selectedKec])

    return (
        <Fragment>
            <div className="row g-1 my-4">
                <div className="col-3">
                    <select onChange={e => setSelectedTahun(e.target.value)} className="form-select" aria-label="Default select example">
                        <option value={''}>Pilih Tahun</option>
                        {list_kecamatan.map((item) => {
                            return (
                                <option key={item.kode_wilayah} value={item.kode_wilayah} selected={selectedTahun === item.kode_wilayah}>{item.tahun}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="col-3">
                    <select onChange={e => setSelectedKec(e.target.value)} className="form-select" aria-label="Default select example">
                        <option value={''}>Semua Kecamatan</option>
                        {listKec.map((item) => {
                            return (
                                <option key={item.kode_wilayah} value={item.kode_wilayah} selected={selectedKec === item.kode_wilayah}>{item.nama_kecamatan}</option>
                            )
                        })}
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
                                    <h5 className="fw-bold">{APBD.desa}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="keuangan-card">
                        <div className="card-body-keuangan pb-1">
                            <h6>ANGGARAN</h6>
                            <h5 className="fw-bold">{rupiah(APBD.anggaran)}</h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="keuangan-card">
                        <div className="card-body-keuangan pb-1">
                            <h6>REALISASI</h6>
                            <h5 className="fw-bold">{rupiah(APBD.realisasi)}</h5>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="keuangan-card">
                        <div className="card-body-keuangan">
                            <h6>% PENYERAPAN</h6>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${APBD.penyerapan}%` }} aria-valuenow={APBD.penyerapan}
                                    aria-valuemin="0" aria-valuemax="100">{APBD.penyerapan}%</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default FilterAPBD;