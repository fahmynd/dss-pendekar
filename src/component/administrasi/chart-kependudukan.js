import { useState, useMemo } from "react";
import AdmUmur from '../chart/AdmUmur';
import AdmPendidikan from '../chart/AdmPendidikan';
import AdmPekerjaan from '../chart/AdmPekerjaan';
import AdmPerkawinan from '../chart/AdmPerkawinan';
import AdmKeluarga from '../chart/AdmKeluarga';
import AdmAgama from '../chart/AdmAgama';
import { BASE_API_URL } from "../../utils/api";


const ChartKependudukan = (props) => {
    const [selectedKec, setSelectedKec] = useState("");
    const [selectedDeskel, setSelectedDeskel] = useState("");

    const { data } = props

    // console.log(data);

    const listDeskel = useMemo(() => {
        setSelectedDeskel("");
        return data.list_desa.filter(desa => {
            let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`
            return kode_kec === selectedKec
        })
    }, [data, selectedKec])

    const listKec = useMemo(() => {
        return data.list_kecamatan
    }, [data])


    const filtered_desa = useMemo(() => {
        const result = data.list_desa.filter(desa => {
            if (selectedKec && selectedDeskel) {
                return desa.kode_wilayah === selectedDeskel;
            } else if (selectedKec) {
                let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`
                return kode_kec === selectedKec
            } else {
                return true;
            }
        })

        return result;
    }, [data, selectedDeskel, selectedKec])


    const umur = useMemo(() => {
        let result = {
            u0: { laki: 0, perempuan: 0 },
            u5: { laki: 0, perempuan: 0 },
            u10: { laki: 0, perempuan: 0 },
            u15: { laki: 0, perempuan: 0 },
            u20: { laki: 0, perempuan: 0 },
            u25: { laki: 0, perempuan: 0 },
            u30: { laki: 0, perempuan: 0 },
            u35: { laki: 0, perempuan: 0 },
            u40: { laki: 0, perempuan: 0 },
            u45: { laki: 0, perempuan: 0 },
            u50: { laki: 0, perempuan: 0 },
            u55: { laki: 0, perempuan: 0 },
            u60: { laki: 0, perempuan: 0 },
            u65: { laki: 0, perempuan: 0 },
            u70: { laki: 0, perempuan: 0 },
            u75: { laki: 0, perempuan: 0 },
        };

        filtered_desa.forEach(desa => {
            result.u0.perempuan += parseInt(desa.u0)
            result.u5.perempuan += parseInt(desa.u5)
            result.u10.perempuan += parseInt(desa.u10)
            result.u15.perempuan += parseInt(desa.u15)
            result.u20.perempuan += parseInt(desa.u20)
            result.u25.perempuan += parseInt(desa.u25)
            result.u30.perempuan += parseInt(desa.u30)
            result.u35.perempuan += parseInt(desa.u35)
            result.u40.perempuan += parseInt(desa.u40)
            result.u45.perempuan += parseInt(desa.u45)
            result.u50.perempuan += parseInt(desa.u50)
            result.u55.perempuan += parseInt(desa.u55)
            result.u60.perempuan += parseInt(desa.u60)
            result.u65.perempuan += parseInt(desa.u65)
            result.u70.perempuan += parseInt(desa.u70)
            result.u75.perempuan += parseInt(desa.u75)
        })

        return result;
    }, [filtered_desa])

    const pendidikan = useMemo(() => {
        let result = {
            tidak_blm_sekolah: { laki: 0, perempuan: 0 },
            belum_tamat_sd: { laki: 0, perempuan: 0 },
            tamat_sd: { laki: 0, perempuan: 0 },
            sltp: { laki: 0, perempuan: 0 },
            slta: { laki: 0, perempuan: 0 },
            d1_dan_d2: { laki: 0, perempuan: 0 },
            d3: { laki: 0, perempuan: 0 },
            s1: { laki: 0, perempuan: 0 },
            s2: { laki: 0, perempuan: 0 },
            s3: { laki: 0, perempuan: 0 },
        };

        filtered_desa.forEach(desa => {
            result.tidak_blm_sekolah.perempuan += parseInt(desa.tidak_blm_sekolah)
            result.belum_tamat_sd.perempuan += parseInt(desa.belum_tamat_sd)
            result.tamat_sd.perempuan += parseInt(desa.tamat_sd)
            result.sltp.perempuan += parseInt(desa.sltp)
            result.slta.perempuan += parseInt(desa.slta)
            result.d1_dan_d2.perempuan += parseInt(desa.d1_dan_d2)
            result.d3.perempuan += parseInt(desa.d3)
            result.s1.perempuan += parseInt(desa.s1)
            result.s2.perempuan += parseInt(desa.s2)
            result.s3.perempuan += parseInt(desa.s3)
        })

        return result;
    }, [filtered_desa])

    const pekerjaan = useMemo(() => {
        let result = {
            belum_tidak_bekerja: { laki: 0, perempuan: 0 },
            mengurus_rumah_tangga: { laki: 0, perempuan: 0 },
            pelajar_mahasiswa: { laki: 0, perempuan: 0 },
            pensiunan: { laki: 0, perempuan: 0 },
            perdagangan: { laki: 0, perempuan: 0 },
            perawat: { laki: 0, perempuan: 0 },
            nelayan: { laki: 0, perempuan: 0 },
            guru: { laki: 0, perempuan: 0 },
            wiraswasta: { laki: 0, perempuan: 0 },
            pengacara: { laki: 0, perempuan: 0 },
            lainnya: { laki: 0, perempuan: 0 },
        };

        filtered_desa.forEach(desa => {
            result.belum_tidak_bekerja.perempuan += parseInt(desa.belum_tidak_bekerja)
            result.mengurus_rumah_tangga.perempuan += parseInt(desa.mengurus_rumah_tangga)
            result.pelajar_mahasiswa.perempuan += parseInt(desa.pelajar_mahasiswa)
            result.pensiunan.perempuan += parseInt(desa.pensiunan)
            result.perdagangan.perempuan += parseInt(desa.perdagangan)
            result.perawat.perempuan += parseInt(desa.perawat)
            result.nelayan.perempuan += parseInt(desa.nelayan)
            result.guru.perempuan += parseInt(desa.guru)
            result.wiraswasta.perempuan += parseInt(desa.wiraswasta)
            result.pengacara.perempuan += parseInt(desa.pengacara)
            result.lainnya.perempuan += parseInt(desa.lainnya)
        })

        return result;
    }, [filtered_desa])

    const perkawinan = useMemo(() => {
        let result = {
            belum_kawin: { laki: 0, perempuan: 0 },
            kawin: { laki: 0, perempuan: 0 },
            cerai_hidup: { laki: 0, perempuan: 0 },
            cerai_mati: { laki: 0, perempuan: 0 },
        };

        filtered_desa.forEach(desa => {
            result.belum_kawin.perempuan += parseInt(desa.belum_kawin)
            result.kawin.perempuan += parseInt(desa.kawin)
            result.cerai_hidup.perempuan += parseInt(desa.cerai_hidup)
            result.cerai_mati.perempuan += parseInt(desa.cerai_mati)
        })

        return result;
    }, [filtered_desa])

    const agama = useMemo(() => {
        let result = {
            islam: { laki: 0, perempuan: 0 },
            kristen: { laki: 0, perempuan: 0 },
            katholik: { laki: 0, perempuan: 0 },
            hindu: { laki: 0, perempuan: 0 },
            budha: { laki: 0, perempuan: 0 },
            konghucu: { laki: 0, perempuan: 0 },
            kepercayaan: { laki: 0, perempuan: 0 },
        };

        filtered_desa.forEach(desa => {
            result.islam.perempuan += parseInt(desa.islam)
            result.kristen.perempuan += parseInt(desa.kristen)
            result.katholik.perempuan += parseInt(desa.katholik)
            result.hindu.perempuan += parseInt(desa.hindu)
            result.budha.perempuan += parseInt(desa.budha)
            result.konghucu.perempuan += parseInt(desa.konghucu)
            result.kepercayaan.perempuan += parseInt(desa.kepercayaan)
        })

        return result;
    }, [filtered_desa])

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title-potensi">Statistik Data Penduduk</h5>
                <div className="filter-primary">
                    <button type="button" className="btn btn-primary" onClick={() => window.open(`${BASE_API_URL}export/kependudukan`)}>Export Report</button>
                </div>
                <div className="row g-1 mb-4">
                    {/* <div className="col-3">
                        <div className="search-produk">
                            <form className="search-form-produk d-flex align-items-center" method="POST" action="/">
                                <input type="text" name="query" placeholder="Cari Desa/Kelurahan..." title="Enter search keyword" />
                                <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                            </form>
                        </div>
                    </div> */}
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
                    <div className="col-3">
                        <select onChange={e => setSelectedDeskel(e.target.value)} className="form-select" aria-label="Default select example">
                            <option value={''}>Semua Desa</option>
                            {listDeskel.map((item) => {
                                return (
                                    <option key={item.kode_wilayah} value={item.kode_wilayah} selected={selectedDeskel === item.kode_wilayah}>{item.nama_deskel}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <ul className="nav nav-tabs nav-tabs-bordered d-flex" id="borderedTabJustified" role="tablist">
                    <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100 active" id="umur-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-umur" type="button" role="tab" aria-controls="umur" aria-selected="true">Umur</button>
                    </li>
                    <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100" id="pendidikan-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-pendidikan" type="button" role="tab" aria-controls="pendidikan" aria-selected="false">Pendidikan</button>
                    </li>
                    <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100" id="pekerjaan-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-pekerjaan" type="button" role="tab" aria-controls="pekerjaan" aria-selected="false">Pekerjaan</button>
                    </li>
                    <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100" id="perkawinan-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-perkawinan" type="button" role="tab" aria-controls="perkawinan" aria-selected="false">Perkawinan</button>
                    </li>
                    <li className="d-none nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100" id="keluarga-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-keluarga" type="button" role="tab" aria-controls="keluarga" aria-selected="false">Keluarga</button>
                    </li>
                    <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100" id="agama-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-agama" type="button" role="tab" aria-controls="agama" aria-selected="false">Agama</button>
                    </li>
                </ul>
                <div className="tab-content pt-4" id="borderedTabJustifiedContent">
                    <div className="tab-pane fade show active" id="bordered-justified-umur" role="tabpanel" aria-labelledby="umur-tab">
                        <AdmUmur data={umur} />
                    </div>
                    <div className="tab-pane fade" id="bordered-justified-pendidikan" role="tabpanel" aria-labelledby="pendidikan-tab">
                        <AdmPendidikan data={pendidikan} />
                    </div>
                    <div className="tab-pane fade" id="bordered-justified-pekerjaan" role="tabpanel" aria-labelledby="pekerjaan-tab">
                        <AdmPekerjaan data={pekerjaan} />
                    </div>
                    <div className="tab-pane fade" id="bordered-justified-perkawinan" role="tabpanel" aria-labelledby="perkawinan-tab">
                        <AdmPerkawinan data={perkawinan} />
                    </div>
                    <div className="tab-pane fade" id="bordered-justified-keluarga" role="tabpanel" aria-labelledby="keluarga-tab">
                        <AdmKeluarga />
                    </div>
                    <div className="tab-pane fade" id="bordered-justified-agama" role="tabpanel" aria-labelledby="agama-tab">
                        <AdmAgama data={agama} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChartKependudukan;
