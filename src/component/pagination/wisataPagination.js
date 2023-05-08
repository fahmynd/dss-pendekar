import React, { useEffect, useState, Fragment } from "react";
import ReactPaginate from "react-paginate";

export default function WisataPagination(props) {
    const { resultData } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const endoffset = itemOffset + itemsPerPage;
        setCurrentItems(resultData.list_wisata.slice(itemOffset, endoffset));
        setPageCount(Math.ceil(resultData.list_wisata.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, resultData]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % resultData.list_wisata.length;
        setItemOffset(newOffset);
    };
    return (
        <Fragment>
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
