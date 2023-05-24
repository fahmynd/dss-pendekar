import React, { useEffect, useState, Fragment, useMemo } from "react";
import ReactPaginate from "react-paginate";
import { BASE_API_URL } from "../../utils/api";

export default function WisataPagination(props) {

    const { list_kecamatan, list_desa } = props.resultData
    let { list_wisata } = props.resultData

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

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
        const deskel = list_wisata.filter(desa => {
            if (query !== "") {
                if (desa.judul.toLowerCase().indexOf(query.toLowerCase()) > -1) {
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
        list_wisata = deskel;

        return deskel;

    }, [selectedKec, selectedDesa, query, listDeskel])

    useEffect(() => {
        const endoffset = itemOffset + itemsPerPage;
        setCurrentItems(list_wisata.slice(itemOffset, endoffset));
        setPageCount(Math.ceil(list_wisata.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, list_wisata]);

    let handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % list_wisata.length;
        setItemOffset(newOffset);
    };

    return (
        <Fragment>
            <div className="row mb-4">
                <div className="col">
                    <div className="search-produk">
                        <form className="search-form-produk d-flex align-items-center">
                            <input value={query} onChange={e => setQuery(e.target.value)} type="text" name="query" placeholder="Cari Wisata..." title="Enter search keyword" />
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
                <div className="col-2 text-end">
                    <button type="button" className="btn btn-primary" onClick={() => window.open(`${BASE_API_URL}export/wisata`)}>Export Report</button>
                </div>
            </div>
            <div className="row">
                {currentItems.map((item, key) => {
                    return (
                        <div key={key} className="col-md-4">
                            <div className="card">
                                <img src={`https://profil.digitaldesa.id/uploads/${item.kode_wilayah}/wisata/${item.foto}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.judul}</h5>
                                    <p className="card-text">{item.subjudul}</p>
                                    <a href={`https://profil.digitaldesa.id/${item.slug_desa}/wisata/${item.slug}`} rel='noreferrer' target={'_blank'} className="stretched-link"> </a>
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
