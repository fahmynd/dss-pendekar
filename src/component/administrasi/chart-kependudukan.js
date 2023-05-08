import { useState, useMemo } from "react";
import AdmUmur from '../chart/AdmUmur';
import AdmPendidikan from '../chart/AdmPendidikan';
import AdmPekerjaan from '../chart/AdmPekerjaan';
import AdmPerkawinan from '../chart/AdmPerkawinan';
import AdmKeluarga from '../chart/AdmKeluarga';
import AdmAgama from '../chart/AdmAgama';


const ChartKependudukan = (props) => {
    const [selectedKec, setSelectedKec] = useState("");
    const [selectedDeskel, setSelectedDeskel] = useState("");

    const { data } = props

    console.log(data);

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
                return desa.kode_wilayah = selectedDeskel;
            }else if(selectedKec){
                let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`
                return kode_kec === selectedKec
            }else{
                return true;
            }
        })

        return result;
    },[data, selectedDeskel, selectedKec])


    const umur = useMemo(() => {
        let result = {
            u0: {laki: 0, perempuan: 0},
            u5: {laki: 0, perempuan: 0},
            u10: {laki: 0, perempuan: 0},
            u15: {laki: 0, perempuan: 0},
            u20: {laki: 0, perempuan: 0},
            u25: {laki: 0, perempuan: 0},
            u30: {laki: 0, perempuan: 0},
            u35: {laki: 0, perempuan: 0},
            u40: {laki: 0, perempuan: 0},
            u45: {laki: 0, perempuan: 0},
            u50: {laki: 0, perempuan: 0},
            u55: {laki: 0, perempuan: 0},
            u60: {laki: 0, perempuan: 0},
            u65: {laki: 0, perempuan: 0},
            u70: {laki: 0, perempuan: 0},
            u75: {laki: 0, perempuan: 0},
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
    },[filtered_desa])

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title-potensi">Statistik Data Penduduk</h5>
                <div className="filter-primary">
                    <button type="button" className="btn btn-primary">Export Report</button>
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
                    <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100" id="keluarga-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-keluarga" type="button" role="tab" aria-controls="keluarga" aria-selected="false">Keluarga</button>
                    </li>
                    <li className="nav-item flex-fill" role="presentation">
                        <button className="nav-link w-100" id="agama-tab" data-bs-toggle="tab" data-bs-target="#bordered-justified-agama" type="button" role="tab" aria-controls="agama" aria-selected="false">Agama</button>
                    </li>
                </ul>
                <div className="tab-content pt-5" id="borderedTabJustifiedContent">
                    <div className="tab-pane fade show active" id="bordered-justified-umur" role="tabpanel" aria-labelledby="umur-tab">
                        <AdmUmur data={umur} />
                    </div>
                    <div className="tab-pane fade" id="bordered-justified-pendidikan" role="tabpanel" aria-labelledby="pendidikan-tab">
                        <AdmPendidikan />
                    </div>
                    <div className="tab-pane fade" id="bordered-justified-pekerjaan" role="tabpanel" aria-labelledby="pekerjaan-tab">
                        <AdmPekerjaan />
                    </div>
                    <div className="tab-pane fade" id="bordered-justified-perkawinan" role="tabpanel" aria-labelledby="perkawinan-tab">
                        <AdmPerkawinan />
                    </div>
                    <div className="tab-pane fade" id="bordered-justified-keluarga" role="tabpanel" aria-labelledby="keluarga-tab">
                        <AdmKeluarga />
                    </div>
                    <div className="tab-pane fade" id="bordered-justified-agama" role="tabpanel" aria-labelledby="agama-tab">
                        <AdmAgama />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChartKependudukan;