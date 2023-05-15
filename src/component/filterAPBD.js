import React, { useMemo, useState, Fragment } from "react";
import { rupiah } from "../utils/helper.min";

const FilterAPBD = (props) => {
    const { tahun, list_kecamatan } = props.resultData;
    const [selectedTahun, setSelectedTahun] = useState(tahun)
    const [selectedKec, setSelectedKec] = useState("")

    const list_tahun = [];
    for (let year = parseInt(tahun); year > tahun - 3; year--) {
        list_tahun.push(year);
    }

    const APBD = useMemo(() => {
        let desa = 0;
        let anggaran = 0;
        let realisasi = 0;
        let penyerapan = 0;

        if (selectedTahun) {
            if (selectedKec) {
                const kec = list_kecamatan.find(d => d.kode_wilayah === selectedKec)
                if (kec) {
                    if (!kec[`anggaran_${selectedTahun}`]) kec[`anggaran_${selectedTahun}`] = 0;
                    if (!kec[`realisasi_${selectedTahun}`]) kec[`realisasi_${selectedTahun}`] = 0;
                    if (!kec[`penyerapan_${selectedTahun}`]) kec[`penyerapan_${selectedTahun}`] = 0;
                    desa = parseInt(kec.online)
                    anggaran = parseInt(kec[`anggaran_${selectedTahun}`])
                    realisasi = parseInt(kec[`realisasi_${selectedTahun}`])
                    penyerapan = parseFloat(kec[`penyerapan_${selectedTahun}`]).toFixed(2)
                }
            } else {
                list_kecamatan.forEach(d => {
                    if (!d[`anggaran_${selectedTahun}`]) d[`anggaran_${selectedTahun}`] = 0;
                    if (!d[`realisasi_${selectedTahun}`]) d[`realisasi_${selectedTahun}`] = 0;
                    desa += parseInt(d.online);
                    anggaran += parseInt(d[`anggaran_${selectedTahun}`]);
                    realisasi += parseInt(d[`realisasi_${selectedTahun}`]);
                    penyerapan = parseFloat(realisasi / anggaran * 100).toFixed(2);
                })
            }
        }

        return {
            desa,
            anggaran,
            realisasi,
            penyerapan
        }
    }, [list_tahun, selectedKec])

    return (
        <Fragment>
            <div className="row g-1 my-4">
                <div className="col-3">
                    <select defaultValue={tahun} onChange={e => setSelectedTahun(e.target.value)} className="form-select" aria-label="Default select example">
                        {list_tahun.map((item) => {
                            return (
                                <option key={item} value={item} selected={selectedTahun === item}>{item}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="col-3">
                    <select onChange={e => setSelectedKec(e.target.value)} className="form-select" aria-label="Default select example">
                        <option value={''}>Semua Kecamatan</option>
                        {list_kecamatan.map((item) => {
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
