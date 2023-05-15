import React, { useEffect, useState, Fragment, useMemo } from "react";
// import ReactPaginate from "react-paginate";

export default function BeritaPagination(props) {

    const { list_kecamatan, list_desa, list_berita } = props.resultData

    const [news, setNews] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCompleted, setFilterCompleted] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [totalNews, setTotalNews] = useState(0);
    const newsPerPage = 10;

    useEffect(() => {
        setNews(list_berita)
    }, []);

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumbers.push(i);
    }

    const newsData = useMemo(() => {
        const deskel = list_berita.filter(desa => {
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




        let computedNews = news;

        if (searchTerm) {
            computedNews = computedNews.filter(
                item =>
                    item.judul.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (filterCompleted === "true") {
            computedNews = computedNews.filter(
                item =>
                    filterCompleted === "true" && item.completed === true
            )
        }

        if (filterCompleted === "false") {
            computedNews = computedNews.filter(
                item =>
                    filterCompleted === "false" && item.completed === false
            )
        }

        setTotalNews(computedNews.length);

        //Current Page slice
        return computedNews.slice(
            (currentPage - 1) * newsPerPage,
            (currentPage - 1) * newsPerPage + newsPerPage
        );
    }, [news, currentPage, searchTerm, filterCompleted]);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const resetFilter = () => {
        setSearchTerm("");
        setFilterCompleted("");
        setCurrentPage(1);
    };

    return (
        <Fragment>
            <div className="row mb-4">
                <div className="col">
                    <div className="search-produk">
                        <form className="search-form-produk d-flex align-items-center">
                            <input value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }} type="text" name="query" placeholder="Cari Berita..." title="Enter search keyword" />
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

            </div>
            {currentItems.map((item, key) => {
                return (
                    <div key={key} className="post-item clearfix">
                        <img src={`https://profil.digitaldesa.id/uploads/${item.kode_wilayah}/berita/thumbs/${item.foto}`} alt="News" />
                        <h4><a href={`https://profil.digitaldesa.id/${item.slug_desa}/berita/${item.slug}`} rel='noreferrer' target={'_blank'}>{item.judul}</a></h4>
                        <p>{item.isi}</p>
                    </div>
                )
            })
            }
            <nav>
                <ul className="pagination">
                    {pageNumbers.map((number) => (
                        <li key={number} className="page-item">
                            <button onClick={() => paginate(number)} className="page-link">
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* <ReactPaginate
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
            /> */}
        </Fragment>
    );
}