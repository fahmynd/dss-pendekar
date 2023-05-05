import React, { useEffect, useState, Fragment } from "react";
import ReactPaginate from "react-paginate";

export default function BeritaPagination(props) {
    const { resultData } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const endoffset = itemOffset + itemsPerPage;
        setCurrentItems(resultData.slice(itemOffset, endoffset));
        setPageCount(Math.ceil(resultData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, resultData]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % resultData.length;
        setItemOffset(newOffset);
    };
    return (
        <Fragment>
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