import React, { useEffect, useState, Fragment, useMemo } from "react";
import ReactPaginate from "react-paginate";

export default function BeritaPagination(props) {
    const { list_kecamatan, list_desa } = props.resultData;
    let { list_berita } = props.resultData;

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    const [selectedKec, setSelectedKec] = useState("");
    const [selectedDesa, setSelectedDesa] = useState("");
    const [query, setQuery] = useState("");

    const listDeskel = useMemo(() => {
        setSelectedDesa("");
        return list_desa.filter((desa) => {
            let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`;
            return kode_kec === selectedKec;
        });
    }, [list_desa, selectedKec]);

    const listKec = useMemo(() => {
        return list_kecamatan;
    }, [list_kecamatan]);

    const filteredBerita = useMemo(() => {
        const deskel = list_berita.filter((desa) => {
            if (query !== "") {
                return desa.judul.toLowerCase().indexOf(query.toLowerCase()) > -1;
            }
            if (selectedKec && selectedDesa) {
                return desa.kode_wilayah === selectedDesa;
            } else if (selectedKec) {
                let kode_kec = `${desa.k1}.${desa.k2}.${desa.k3}`;
                return kode_kec === selectedKec;
            } else {
                return true;
            }
        });

        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(deskel.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(deskel.length / itemsPerPage));
        list_berita = deskel;

        return deskel;
    }, [selectedKec, selectedDesa, query, itemOffset, list_berita, itemsPerPage]);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(list_berita.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(list_berita.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, list_berita]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage;
        setItemOffset(newOffset);
    };

    return (
        <Fragment>
            <div className="row mb-4">
                <div className="col">
                    <div className="search-produk">
                        <form className="search-form-produk d-flex align-items-center">
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                type="text"
                                name="query"
                                placeholder="Cari Berita..."
                                title="Enter search keyword"
                            />
                            <button type="submit" title="Search" disabled>
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col">
                    <select
                        value={selectedKec}
                        onChange={(e) => setSelectedKec(e.target.value)}
                        className="form-select"
                        aria-label="Default select example"
                    >
                        <option value={""}>Semua Kecamatan</option>
                        {listKec.map((item) => (
                            <option
                                key={item.kode_wilayah}
                                value={item.kode_wilayah}
                                selected={selectedKec === item.kode_wilayah}
                            >
                                {item.nama_kecamatan}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col">
                    <select
                        value={selectedDesa}
                        onChange={(e) => setSelectedDesa(e.target.value)}
                        className="form-select"
                        aria-label="Default select example"
                    >
                        <option value={""}>Semua Desa</option>
                        {listDeskel.map((item) => (
                            <option
                                key={item.kode_wilayah}
                                value={item.kode_wilayah}
                                selected={selectedDesa === item.kode_wilayah}
                            >
                                {item.nama_deskel}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {currentItems.map((item, key) => (
                <div key={key} className="post-item clearfix">
                    <img
                        src={`https://profil.digitaldesa.id/uploads/${item.kode_wilayah}/berita/thumbs/${item.foto}`}
                        alt="News"
                    />
                    <h4>
                        <a
                            href={`https://profil.digitaldesa.id/${item.slug_desa}/berita/${item.slug}`}
                            rel="noreferrer"
                            target={"_blank"}
                        >
                            {item.judul}
                        </a>
                    </h4>
                    <p>{item.isi}</p>
                </div>
            ))}
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
