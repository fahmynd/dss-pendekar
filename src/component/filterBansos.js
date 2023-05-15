import React, { useMemo, useState, Fragment } from "react";
import Bantuan from '../../src/assets/icon/mendapatBantuan.svg'
import KK from '../../src/assets/icon/kk.svg'

const FilterBansos = (props) => {
    const { list_kecamatan, list_desa } = props.resultData.data;

    const [selectedKec, setSelectedKec] = useState("")
    const [selectedDesa, setSelectedDesa] = useState("")

    const listDesa = useMemo(() => {
        setSelectedDesa("")
        if (selectedKec) {
            return list_desa.filter(d => {
                return d.kode_wilayah.startsWith(selectedKec)
            })
        }
        return []
    }, [list_desa, selectedKec])


    const bansos = useMemo(() => {
        let individu = 0;
        let keluarga = 0;

        if (selectedKec && selectedDesa) {
            const deskel = listDesa.find(d => d.kode_wilayah === selectedDesa)
            if (deskel) {
                individu = parseInt(deskel.jml_penerima)
                keluarga = parseInt(deskel.jml_penerima_kk)
            }
        } else {
            if (selectedKec) {
                listDesa.forEach(desa => {
                    individu += parseInt(desa.jml_penerima);
                    keluarga += parseInt(desa.jml_penerima_kk);
                })
            } else {
                list_desa.forEach(d => {
                    individu += parseInt(d.jml_penerima);
                    keluarga += parseInt(d.jml_penerima_kk);
                })
            }
        }

        return {
            individu,
            keluarga
        }
    }, [listDesa, selectedDesa])

    // console.log(bansos.individu);

    return (
        <Fragment>
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <div className="filter-primary">
                            <button type="button" className="btn btn-primary" onClick={() => window.open('https://sulselprov-enrekangkab.pendekar.digitaldesa.id/api/export/bansos')}>Export Report</button>
                        </div>
                        <div className="row g-1 my-4">
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
                            <div className="col-3">
                                <select onChange={e => setSelectedDesa(e.target.value)} className="form-select" aria-label="Default select example">
                                    <option value={''}>Semua Desa</option>
                                    {listDesa.map((item) => {
                                        return (
                                            <option key={item.kode_wilayah} value={item.kode_wilayah} selected={selectedDesa === item.kode_wilayah}>{item.nama_deskel}</option>
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
                                                <span className="jum-bantuan timer count-title count-number">{bansos.individu}</span> <br />
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
                                                <span className="jum-bantuan timer count-title count-number">{bansos.keluarga}</span> <br />
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
        </Fragment>
    )
}

export default FilterBansos;