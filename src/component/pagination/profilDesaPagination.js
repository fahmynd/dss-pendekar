import React, { useEffect, useState, Fragment } from "react";
import ReactPaginate from "react-paginate";
import profil from "../../assets/img/profil.png";

export default function ProfilDesaPagination(props) {
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
      <div className="row">
        {currentItems.map((item, index) => {
          return (
            <ListProfil
              key={index + 1}
              kecamatan={item.nama_kecamatan}
              deskel={item.nama_deskel}
              link={item.link}
            />
          );
        })}
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

function ListProfil(props) {
  return (
    <div className="col-12">
      <div className="card p-2 mb-3">
        <div className="row g-0 align-items-center">
          <div className="col-2">
            <img src={profil} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-10 direction">
            <div className="card-body-produk">
              <h6 className="fw-bold m-0">Desa {props.deskel}</h6>
              <p className="fw-bold smaller">Kecamatan {props.kecamatan}</p>
              <a
                href={props.link}
                target={"_blank"}
                rel="noreferrer"
                className="smaller"
              >
                <i className="fa-solid fa-earth-asia"></i>
                &nbsp; Kunjungi Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
