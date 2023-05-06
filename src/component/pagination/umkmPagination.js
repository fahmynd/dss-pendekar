import React, { useEffect, useState, Fragment } from "react";
import ReactPaginate from "react-paginate";
import produk from '../../assets/img/produk.png'

export default function UmkmPagination(props) {
    const { resultData } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;

    useEffect(() => {
        const endoffset = itemOffset + itemsPerPage;
        setCurrentItems(resultData.list_umkm.slice(itemOffset, endoffset));
        setPageCount(Math.ceil(resultData.list_umkm.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, resultData]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % resultData.list_umkm.length;
        setItemOffset(newOffset);
    };
    return (
        <Fragment>
            <div className="row">
                {currentItems.map((item, key) => {
                    return (
                        <div key={key} className="col-md-4">
                            <div className="card p-2 mb-3">
                                <div className="row g-0 align-items-center">
                                    <div className="col-5 item">
                                        <span className="notify-badge">{item.tipe_usaha}</span>
                                        <img src={produk} className="img-fluid rounded-start" alt="..." />
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
