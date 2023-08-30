import React, { useMemo, useState, Fragment, useEffect } from "react";
import DataTable from 'react-data-table-component';
import axios from 'axios';
import "./RekomendasiDataTable.css";
import { BASE_API_URL } from "../../utils/api";

const RekomendasiTable = (props) => {
    const { list_kecamatan, list_desa } = props.resultData.data;

    const [loadingModal, setLoadingModal] = useState(false);
    const [selectedKec, setSelectedKec] = useState("")
    const [selectedDesa, setSelectedDesa] = useState("")
    const [query, setQuery] = useState("")
    const [modalIdmData, setModalIdmData] = useState(null);
    const [iks, setIks] = useState();
    const [ike, setIke] = useState();
    const [ikl, setIkl] = useState();
    const [skor_idm, setSkor_idm] = useState();
    const [status, setStatus] = useState();
    const [tahun_idm, setTahun_idm] = useState();
    const [desa, setDesa] = useState();
    const [modalSdgsData, setModalSdgsData] = useState(null);
    const [skor_sdgs, setSkor_sdgs] = useState();
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const fetchRekomendasiData = async (kodeWilayah, tahun) => {
        try {
            setLoadingModal(true); // Set loading to true when fetching data
            const response = await axios.get(`${BASE_API_URL}pembangunan/rekomendasi/${kodeWilayah}/${tahun}`);
            const idm = response.data.data.idm;
            const sdgs = response.data.data.sdgs;

            if (idm && idm.mapData) {
                const mapData = idm.mapData;
                setModalIdmData(mapData.ROW || []);
                setIks(mapData.ROW ? mapData.ROW[35] : null);
                setIke(mapData.ROW ? mapData.ROW[48] : null);
                setIkl(mapData.ROW ? mapData.ROW[52] : null);
                setSkor_idm(mapData.SUMMARIES ? mapData.SUMMARIES.SKOR_SAAT_INI : null);
                setStatus(mapData.SUMMARIES ? mapData.SUMMARIES.STATUS : null);
                setTahun_idm(mapData.SUMMARIES ? mapData.SUMMARIES.TAHUN : null);
                setDesa(mapData.IDENTITAS ? mapData.IDENTITAS[0].nama_desa : null);
            } else {
                console.error("Invalid data format IDM:", idm);
            }

            if (sdgs && sdgs.data) {
                const data = sdgs.data;
                setModalSdgsData(data || []);
                setSkor_sdgs(sdgs.average);
            } else {
                console.error("Invalid data format SDGs:", sdgs);
            }

        } catch (error) {
            console.error("Error fetching rekomendasi data:", error);
        } finally {
            // Regardless of success or error, set loading back to false
            setLoadingModal(false);
        }
    };

    useEffect(() => {
        // console.log("modalIdmData has changed:", modalIdmData);
        if (modalIdmData !== null) {
            setLoadingModal(false);
        }

        if (modalSdgsData !== null) {
            setLoadingModal(false);
        }

        // fetchRekomendasiData();

    }, [modalIdmData, modalSdgsData]);


    const listDeskel = useMemo(() => {
        setSelectedDesa("");
        return list_desa.filter(desa => {
            let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`
            return kode_kec === selectedKec
        })
    }, [list_desa, selectedKec])

    const listKec = useMemo(() => {
        return list_kecamatan
    }, [list_kecamatan])

    const rows = useMemo(() => {
        const deskel = list_desa.filter(desa => {
            if (query !== "") {
                if (desa.nama_deskel.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                    return true;
                } else {
                    return false;
                }
            }
            if (selectedKec && selectedDesa) {
                return desa.kode_wilayah === selectedDesa
            } else if (selectedKec) {
                let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`
                return kode_kec === selectedKec
            } else {
                return true
            }
        })

        return deskel;

    }, [selectedKec, selectedDesa, query, listDeskel])

    const customStyles = {
        headCells: {
            style: {
                fontSize: '15px',
                fontWeight: 'bold',
                backgroundColor: '#F1ECFF',
                borderRight: '1px solid #EDEDED',
                borderTop: '1px solid #EDEDED',
            },
        },
        cells: {
            style: {
                fontSize: '15px',
                borderRight: '1px solid #EDEDED',
            },
        },
    };

    let statusIDM = {
        '': { 'class': '' },
        'SANGAT TERTINGGAL': { 'class': 'bg-super-prioritas' },
        'TERTINGGAL': { 'class': 'bg-prioritas' },
        'BERKEMBANG': { 'class': 'bg-rkd' },
        'MAJU': { 'class': 'bg-pengajuan' },
        'MANDIRI': { 'class': 'bg-verifikasi' },
    };

    const sdgsContent = () => {
        if (selectedImageIndex !== null) {
            const selectedItem = modalSdgsData[selectedImageIndex];
            if (selectedItem.detail && selectedItem.detail.recom && selectedItem.detail.recom.length > 0) {
                return (
                    <div>
                        <img src={selectedItem.image} alt="SDGs" width="75" className="float-left me-2 mb-3" />
                        <h5 className="m-0">{selectedItem.title}</h5>
                        <h1 className="m-0">{selectedItem.score}</h1>
                        <hr />
                        <div>
                            {selectedItem.detail.recom.map((recommendation, index) => (
                                <div key={index}>
                                    <ul>
                                        <li>
                                            <h5>{recommendation.name}</h5>
                                        </li>
                                    </ul>
                                    {recommendation.recommendation && <div dangerouslySetInnerHTML={{ __html: recommendation.recommendation }} />}
                                    <hr />
                                </div>
                            ))}
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-secondary" onClick={() => setSelectedImageIndex(null)}>Kembali</button>
                        </div>
                    </div>
                );
            } else {
                // Handle the case when "detail" value is null or empty
                return (
                    <div>
                        <img src={selectedItem.image} alt="SDGs" width="75" className="float-left me-2 mb-3" />
                        <p className="m-0">{selectedItem.title}</p>
                        <h1 className="m-0">{selectedItem.score}</h1>
                        <hr />
                        <p>No recommendation available for this item.</p>
                        <div className="mt-3">
                            <button className="btn btn-secondary" onClick={() => setSelectedImageIndex(null)}>Kembali</button>
                        </div>
                    </div>
                );
            }
        } else {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h4 className="fw-bold">{skor_sdgs}</h4>
                            <p>Skor SDGs Desa</p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <div className="row g-0 text-center">
                                {modalSdgsData?.map((item, key) => (
                                    <div key={key} className="col-6 col-lg-2 mb-3">
                                        <button className="btn btn-link" style={{ textDecoration: 'none', color: '#202020' }} onClick={() => setSelectedImageIndex(key)}>
                                            <img src={item.image} alt="SDGs" height="100" />
                                            <p>{item.score}</p>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    const resetModalSdgsData = () => {
        setModalSdgsData(null);
        setSelectedImageIndex(null);
    };

    return (
        <Fragment>
            <div className="row g-1 my-4">
                <div className="col-3">
                    <div className="search-produk">
                        <form className="search-form-produk d-flex align-items-center">
                            <input value={query} onChange={e => setQuery(e.target.value)} type="text" name="query" placeholder="Cari Desa/Kelurahan..." title="Enter search keyword" />
                            <button type="submit" title="Search" disabled><i className="bi bi-search"></i></button>
                        </form>
                    </div>
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
                <div className="col-3">
                    <select onChange={e => setSelectedDesa(e.target.value)} className="form-select" aria-label="Default select example">
                        <option value={''}>Semua Desa</option>
                        {listDeskel.map((item) => {
                            return (
                                <option key={item.kode_wilayah} value={item.kode_wilayah} selected={selectedDesa === item.kode_wilayah}>{item.nama_deskel}</option>
                            )
                        })}
                    </select>
                </div>

            </div>
            <DataTable
                columns={
                    [
                        {
                            name: "No",
                            selector: (row, index) => index + 1,
                            width: "70px",
                            style: {
                                borderLeft: "1px solid #EDEDED"
                            }
                        },
                        {
                            name: "Kecamatan",
                            sortable: true,
                            selector: (row) => row.nama_kecamatan,
                        },
                        {
                            name: "Desa",
                            sortable: true,
                            selector: (row) => row.nama_deskel,
                        },
                        {
                            name: "Status",
                            sortable: true,
                            selector: (row) => row.current_status,
                            cell: (row) => {
                                return (
                                    <h5>
                                        <span className={`badge ${statusIDM[row.current_status].class}`}>{row.current_status}</span>
                                    </h5>
                                )
                            },
                            width: "200px"
                        },
                        {
                            name: "Skor IDM",
                            sortable: true,
                            selector: (row) => row.capaian.idm,
                        },
                        {
                            name: "Skor SDGS",
                            sortable: true,
                            selector: (row) => row.capaian.sdgs,
                        },
                        {
                            name: "Rekomendasi",
                            sortable: true,
                            selector: (row) => row.rekomendasi,
                            cell: (row) => (
                                <div className="row g-2 my-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary col-12"
                                        data-bs-toggle="modal"
                                        data-bs-target="#idmModal"
                                        onClick={() => fetchRekomendasiData(row.kode_wilayah, new Date().getFullYear())}
                                    >
                                        Rekomendasi IDM
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary col-12"
                                        data-bs-toggle="modal"
                                        data-bs-target="#sdgsModal"
                                        onClick={() => fetchRekomendasiData(row.kode_wilayah, "2022")}
                                    >
                                        Rekomendasi SDGs
                                    </button>
                                </div>
                            ),
                            width: "220px",
                        },
                    ]
                }
                data={rows}
                customStyles={customStyles}
                pagination
            />

            <div className="modal fade" id="idmModal" tabIndex="-1" data-bs-backdrop="false">
                <div className="modal-dialog modal-fullscreen shadow-lg rounded">
                    <div id="item-rekomendasi" className="modal-content">
                        <div className="modal-header">
                            {loadingModal ? (
                                <h5 className="modal-title">Loading...</h5>
                            ) : modalIdmData !== null && modalIdmData.length > 0 ? (
                                <h5 className="modal-title">[IDM] {desa}</h5>
                            ) : (
                                <h5 className="modal-title">No Data Available</h5>
                            )}
                            <div data-bs-dismiss="modal" aria-label="Close" style={{ cursor: 'pointer' }}>
                                <span>Tutup</span>
                            </div>
                        </div>
                        <div className="modal-body">
                            {loadingModal ? (
                                <p>Loading...</p>
                            ) : modalIdmData !== null && modalIdmData.length > 0 ? (
                                <div>

                                    <table className="tg" style={{ width: '100%' }}>
                                        <thead style={{ backgroundColor: '#317A75', color: 'white' }}>
                                            <tr>
                                                <th className="tg-amwm" rowSpan="2" style={{ borderRadius: '7px 0px 0px 0px' }}>No</th>
                                                <th className="tg-amwm" rowSpan="2">Indikator IDM</th>
                                                <th className="tg-amwm" rowSpan="2" >Skor</th>
                                                <th className="tg-amwm" rowSpan="2">Keterangan</th>
                                                <th className="tg-amwm" rowSpan="2">Kegiatan yang dapat dilakukan</th>
                                                <th className="tg-amwm" rowSpan="2">+Nilai</th>
                                                <th className="tg-amwm" colSpan="6" style={{ borderRadius: '0px 7px 0px 0px' }}>Yang dapat melaksanakan kegiatan</th>
                                            </tr>
                                            <tr>
                                                <th className="tg-amwm">Pusat</th>
                                                <th className="tg-amwm">Provinsi</th>
                                                <th className="tg-amwm">Kabupaten</th>
                                                <th className="tg-amwm">Desa</th>
                                                <th className="tg-amwm">CSR</th>
                                                <th className="tg-amwm">Lainnya</th>
                                            </tr>
                                        </thead>
                                        {modalIdmData ? (
                                            <tbody>
                                                {modalIdmData?.slice(0, 35).map((item, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td className="tg-baqh">{item.NO}</td>
                                                            <td className="tg-baqh">{item.INDIKATOR}</td>
                                                            <td className="tg-baqh">{item.SKOR}</td>
                                                            <td className="tg-baqh">{item.KETERANGAN}</td>
                                                            <td className="tg-baqh">{item.KEGIATAN}</td>
                                                            <td className="tg-baqh">{Number(item.NILAI).toFixed(4)}</td>
                                                            <td className="tg-baqh">{item.PUSAT}</td>
                                                            <td className="tg-baqh">{item.PROV}</td>
                                                            <td className="tg-baqh">{item.KAB}</td>
                                                            <td className="tg-baqh">{item.DESA}</td>
                                                            <td className="tg-baqh">{item.CSR}</td>
                                                            <td className="tg-baqh">{item.LAINNYA}</td>
                                                        </tr>
                                                    );
                                                })}

                                                {iks && (
                                                    <tr>
                                                        <td className="tg-zwfm text-center" colSpan="12">
                                                            SKOR {iks.INDIKATOR} : {Number(iks.SKOR).toFixed(4)}
                                                        </td>
                                                    </tr>
                                                )}

                                                {modalIdmData?.slice(36, 48).map((item, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td className="tg-baqh">{item.NO}</td>
                                                            <td className="tg-baqh">{item.INDIKATOR}</td>
                                                            <td className="tg-baqh">{item.SKOR}</td>
                                                            <td className="tg-baqh">{item.KETERANGAN}</td>
                                                            <td className="tg-baqh">{item.KEGIATAN}</td>
                                                            <td className="tg-baqh">{Number(item.NILAI).toFixed(4)}</td>
                                                            <td className="tg-baqh">{item.PUSAT}</td>
                                                            <td className="tg-baqh">{item.PROV}</td>
                                                            <td className="tg-baqh">{item.KAB}</td>
                                                            <td className="tg-baqh">{item.DESA}</td>
                                                            <td className="tg-baqh">{item.CSR}</td>
                                                            <td className="tg-baqh">{item.LAINNYA}</td>
                                                        </tr>
                                                    );
                                                })}

                                                {ike && (
                                                    <tr>
                                                        <td className="tg-zwfm text-center" colSpan="12">
                                                            SKOR {ike.INDIKATOR} : {Number(ike.SKOR).toFixed(4)}
                                                        </td>
                                                    </tr>
                                                )}

                                                {modalIdmData?.slice(49, 52).map((item, key) => {
                                                    return (
                                                        <tr key={key}>
                                                            <td className="tg-baqh">{item.NO}</td>
                                                            <td className="tg-baqh">{item.INDIKATOR}</td>
                                                            <td className="tg-baqh">{item.SKOR}</td>
                                                            <td className="tg-baqh">{item.KETERANGAN}</td>
                                                            <td className="tg-baqh">{item.KEGIATAN}</td>
                                                            <td className="tg-baqh">{Number(item.NILAI).toFixed(4)}</td>
                                                            <td className="tg-baqh">{item.PUSAT}</td>
                                                            <td className="tg-baqh">{item.PROV}</td>
                                                            <td className="tg-baqh">{item.KAB}</td>
                                                            <td className="tg-baqh">{item.DESA}</td>
                                                            <td className="tg-baqh">{item.CSR}</td>
                                                            <td className="tg-baqh">{item.LAINNYA}</td>
                                                        </tr>
                                                    );
                                                })}

                                                {ikl && (
                                                    <tr>
                                                        <td className="tg-zwfm text-center" colSpan="12">
                                                            SKOR {ikl.INDIKATOR} : {Number(ikl.SKOR).toFixed(4)}
                                                        </td>
                                                    </tr>
                                                )}

                                                <tr>
                                                    <td className="tg-zwfm text-center" colSpan="12">IDM <span id="tahunIDM" name="tahunIDM">{tahun_idm}</span> : {Number(skor_idm).toFixed(4)}</td>
                                                </tr>
                                                <tr>
                                                    <td className="tg-zwfm text-center" colSpan="12">STATUS IDM <span id="tahunIDM" name="tahunIDM">{tahun_idm}</span> : {status}</td>
                                                </tr>
                                            </tbody>
                                        ) : (
                                            <tbody>
                                                <tr>
                                                    <td colSpan="5" className="text-center">Loading...</td>
                                                </tr>
                                            </tbody>
                                        )}
                                    </table>
                                </div>
                            ) : (
                                <p>No Data Available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="sdgsModal" tabIndex="-1" data-bs-backdrop="false">
                <div className="modal-dialog modal-fullscreen shadow-lg rounded">
                    <div id="item-rekomendasi" className="modal-content">
                        <div className="modal-header">
                            {loadingModal ? (
                                <h5 className="modal-title">Loading...</h5>
                            ) : modalSdgsData !== null && modalSdgsData.length > 0 ? (
                                <h5 className="modal-title">[SDGs] {desa}</h5>
                            ) : (
                                <h5 className="modal-title">No Data Available</h5>
                            )}
                            <div data-bs-dismiss="modal" aria-label="Close" style={{ cursor: 'pointer' }} onClick={resetModalSdgsData}>
                                <span>Tutup</span>
                            </div>
                        </div>
                        <div className="modal-body">
                            {loadingModal ? (
                                <p>Loading...</p>
                            ) : modalSdgsData !== null && modalSdgsData.length > 0 ? (
                                <div>
                                    {sdgsContent()}
                                </div>
                            ) : (
                                <p>No Data Available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default RekomendasiTable;
