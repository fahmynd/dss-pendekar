import React, { useEffect, useState, Fragment, useMemo } from "react";
import ReactPaginate from "react-paginate";
import produk from '../../assets/img/produk.png'
import { BASE_API_URL } from "../../utils/api";

export default function UmkmPagination(props) {

    const { list_kecamatan, list_desa } = props.resultData
    let { list_umkm } = props.resultData

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;

    const [selectedKec, setSelectedKec] = useState("")
    const [selectedDesa, setSelectedDesa] = useState("")
    const [query, setQuery] = useState("")

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

    const data = useMemo(() => {
        const deskel = list_umkm.filter(desa => {
            if (query !== "") {
                if (desa.nama_usaha.toLowerCase().indexOf(query.toLowerCase()) > -1) {
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

        const endoffset = itemOffset + itemsPerPage;
        setCurrentItems(deskel.slice(itemOffset, endoffset));
        setPageCount(Math.ceil(deskel.length / itemsPerPage));
        list_umkm = deskel;

        return deskel;

    }, [selectedKec, selectedDesa, query, listDeskel])

    useEffect(() => {
        const endoffset = itemOffset + itemsPerPage;
        setCurrentItems(list_umkm.slice(itemOffset, endoffset));
        setPageCount(Math.ceil(list_umkm.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, list_umkm]);

    let handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % list_umkm.length;
        setItemOffset(newOffset);
    };
    return (
        <Fragment>
            <div className="filter-primary">
                <button type="button" className="btn btn-primary" onClick={() => window.open(`${BASE_API_URL}export/umkm`)}>Export Report</button>
            </div>
            <div className="row g-1 mb-4">
                <div className="col">
                    <div className="search-produk">
                        <form className="search-form-produk d-flex align-items-center">
                            <input value={query} onChange={e => setQuery(e.target.value)} type="text" name="query" placeholder="Cari Produk..." title="Enter search keyword" />
                            <button type="submit" title="Search" disabled><i className="bi bi-search"></i></button>
                        </form>
                    </div>
                </div>
                <div className="col">
                    <select onChange={e => setSelectedKec(e.target.value)} className="form-select" aria-label="Default select example">
                        <option value={''}>Semua Kecamatan</option>
                        {listKec.map((item) => {
                            return (
                                <option key={item.kode_wilayah} value={item.kode_wilayah} selected={selectedKec === item.kode_wilayah}>{item.nama_kecamatan}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="col">
                    <select onChange={e => setSelectedDesa(e.target.value)} className="form-select" aria-label="Default select example">
                        <option value={''}>Semua Desa</option>
                        {listDeskel.map((item) => {
                            return (
                                <option key={item.kode_wilayah} value={item.kode_wilayah} selected={selectedDesa === item.kode_wilayah}>{item.nama_deskel}</option>
                            )
                        })}
                    </select>
                </div>
                {/* <div className="col">
                    <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                        <option value={'DEFAULT'}>Jenis Usaha</option>

                    </select>
                </div> */}

            </div>
            <div className="row">
                {currentItems.map((item, key) => {
                    return (
                        <div key={key} className="col-md-4">
                            <div className="card p-2 mb-3">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5 item">
                                        <span className="notify-badge">{item.tipe_usaha}</span>
                                        <img src={`https://api.digitaldesa.id/uploads/belanja/${item.foto}`} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-7 direction">
                                        <div className="card-body-produk">
                                            <h6 className="fw-bold m-0">{item.nama_usaha}</h6>
                                            <p className="fw-bold smaller m-0">Desa {item.nama_deskel}, Kec. {item.nama_kecamatan}</p>
                                            <div className="smaller">
                                                <p className="m-0">Order via:</p>
                                                <ul className="m-0">
                                                    <li>DIGIDES</li>
                                                    <li>Tokopedia</li>
                                                    <li>Grab/Gojek</li>
                                                </ul>
                                            </div>
                                            <a href={item.map} target={'_blank'} rel='noreferrer' className="small"><i className="fa-sharp fa-solid fa-diamond-turn-right"></i>
                                                &nbsp; Petunjuk Arah
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <ReactPaginate
                className="pagination justify-content-center"
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="< Previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </Fragment>
    );
}
