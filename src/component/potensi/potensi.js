import { PotensiManusia } from '../chart/potensiManusia'
import PotensiSDA from '../chart/potensiSDA'
import PotensiSarana from '../chart/potensiSarana'
import { LembagaKemasyarakatan } from '../chart/lembagaKemasyarakatan'
import { useEffect, useMemo, useState } from 'react'

export const Potensi = ({ kec, desa, resultData }) => {
    const [selectedKec,setSelectedKec] = useState()
    const [selectedDeskel,setSelectedDeskel] = useState()
    
    
    useEffect(() => {
        if (kec.length > 0) {
            setSelectedKec(kec[0].kode_wilayah)
        }
    },[kec,desa])


    const listDesa = useMemo(() => {
        setSelectedDeskel("")
        if (selectedKec) {
            return desa.filter(d => {
                return d.kode_wilayah.startsWith(selectedKec)
            })
        }
        return []
    },[desa, selectedKec])


    const potensiManusia = useMemo(() => {
        let maleCount = 0;
        let femaleCount = 0;

        if (selectedKec && selectedDeskel) {
            const deskel = listDesa.find(d => d.kode_wilayah === selectedDeskel)
            if (deskel) {
                maleCount = parseInt(deskel.pria)
                femaleCount = parseInt(deskel.wanita)
            }
        }else{
            listDesa.forEach(desa => {
                maleCount += parseInt(desa.pria);
                femaleCount += parseInt(desa.wanita);
            })
        }

        return {
            maleCount,
            femaleCount
        }
    },[listDesa, selectedDeskel])


    const potensiSDA = useMemo(() => {
        let perikanan = 0;
        let perkebunan = 0;
        let pertanian = 0;

        if (selectedKec && selectedDeskel) {
            const deskel = listDesa.find(d => d.kode_wilayah === selectedDeskel)
            if (deskel) {
                perikanan = deskel.sda_perikanan
                perkebunan = deskel.sda_perkebunan
                pertanian = deskel.sda_pertanian
            }
        }else{
            listDesa.forEach(desa => {
                perikanan += parseInt(desa.sda_perikanan)
                perkebunan += parseInt(desa.sda_perkebunan)
                pertanian += parseInt(desa.sda_pertanian)
            })
        }

        return {
            perikanan,
            perkebunan,
            pertanian,
        }
    },[listDesa, selectedDeskel])

    const potensiSarpas = useMemo(() => {
        let ibadah = 0;
        let sekolah = 0;
        let umum = 0;

        if (selectedKec && selectedDeskel) {
            const deskel = listDesa.find(d => d.kode_wilayah === selectedDeskel)
            if (deskel) {
                ibadah = deskel.sarpas_ibadah
                sekolah = deskel.sarpas_sekolah
                umum = deskel.sarpas_umum
            }
        }else{
            listDesa.forEach(desa => {
                ibadah += parseInt(desa.sarpas_ibadah)
                sekolah += parseInt(desa.sarpas_sekolah)
                umum += parseInt(desa.sarpas_umum)
            })
        }

        return {
            ibadah,
            sekolah,
            umum,
        }
    },[listDesa, selectedDeskel])

    const lembaga = useMemo(() => {
        let bpd = 0;
        let karang_taruna = 0;
        let lpmd = 0;
        let pkk = 0;
        let posyandu = 0;

        if (selectedKec && selectedDeskel) {
            const deskel = listDesa.find(d => d.kode_wilayah === selectedDeskel)
            if (deskel) {
                bpd = deskel.lk_bpd
                karang_taruna = deskel.lk_karang_taruna
                lpmd = deskel.lk_lpmd
                pkk = deskel.lk_pkk
                posyandu = deskel.lk_posyandu
            }
        }else{
            listDesa.forEach(desa => {
                bpd += parseInt(desa.lk_bpd) 
                karang_taruna += parseInt(desa.lk_karang_taruna) 
                lpmd += parseInt(desa.lk_lpmd) 
                pkk += parseInt(desa.lk_pkk) 
                posyandu += parseInt(desa.lk_posyandu) 
            })
        }

        return {
            bpd,
            karang_taruna,
            lpmd,
            pkk,
            posyandu,
        }
    },[listDesa, selectedDeskel])

    return (
        <div className="col-lg-12">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title-potensi">POTENSI</h5>
                    <p>Menampilkan Potensi Kecamatan, Desa/Kelurahan</p>
                    <div className="filter-primary">
                        <button type="button" className="btn btn-primary">Export Report</button>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="potensi-card">
                                <div className="box-featured">
                                    <h5 className="card-title">KECAMATAN</h5>
                                </div>
                                <div className="list-group-potensi mt-3">
                                    {kec.map((kec) => {
                                        return (
                                            <button onClick={() => setSelectedKec(kec.kode_wilayah)} key={kec.kode_wilayah} type="button" className={`list-group-item list-group-item-action ${(selectedKec === kec.kode_wilayah) && "active"}`}>{kec.nama_kecamatan}</button>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="potensi-card">
                                <div className="box-featured">
                                    <h5 className="card-title">Potensi Manusia</h5>
                                </div>
                                <div className="card-body-chart m-auto mt-4" style={{ position: 'relative', height: '300px', width: '300px' }}>
                                    {resultData && <PotensiManusia data={potensiManusia} />}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="potensi-card">
                                <div className="box-featured">
                                    <h5 className="card-title">Potensi SDA</h5>
                                </div>
                                <div className="card-body-chart mt-4">
                                    {resultData && <PotensiSDA data={potensiSDA} />}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="potensi-card">
                                <div className="box-featured">
                                    <h5 className="card-title">DESA/KELURAHAN</h5>
                                </div>
                                <div className="list-group-potensi mt-3">
                                    {listDesa.map((deskel) => {
                                        return (
                                            <button onClick={() => setSelectedDeskel(deskel.kode_wilayah)} key={deskel.kode_wilayah} type="button" className={`list-group-item list-group-item-action ${(selectedDeskel === deskel.kode_wilayah) && "active"}`}>{deskel.nama_deskel}</button>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="potensi-card">
                                <div className="box-featured">
                                    <h5 className="card-title">Lembaga Kemasyarakatan</h5>
                                </div>
                                <div className="card-body-chart m-auto mt-4" style={{ position: 'relative', height: '300px', width: '300px' }}>
                                    <LembagaKemasyarakatan data={lembaga} />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="potensi-card">
                                <div className="box-featured">
                                    <h5 className="card-title">Sarana & Prasarana</h5>
                                </div>
                                <div className="card-body-chart mt-4">
                                    {resultData && <PotensiSarana data={potensiSarpas} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}