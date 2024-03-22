import React, { useEffect, useState, Fragment, useMemo } from "react";
import ReactPaginate from "react-paginate";
import { BASE_API_URL, CDN_URL } from "../../utils/api";

export default function WisataPagination(props) {
  const { list_kecamatan, list_desa } = props.resultData;
  let { list_wisata } = props.resultData;

  const [loading, setLoading] = useState(true);
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
      let kode_kec = `${desa.k1}.${desa.k2
        .toString()
        .padStart(2, "0")}.${desa.k3.toString().padStart(2, "0")}`;
      return kode_kec === selectedKec;
    });
  }, [list_desa, selectedKec]);

  const listKec = useMemo(() => {
    return list_kecamatan;
  }, [list_kecamatan]);

  const filteredWisata = useMemo(() => {
    const filtered = list_wisata.filter((wisata) => {
      if (query !== "") {
        return wisata.judul.toLowerCase().indexOf(query.toLowerCase()) > -1;
      }
      if (selectedKec && selectedDesa) {
        return wisata.kode_wilayah === selectedDesa;
      } else if (selectedKec) {
        let kode_kec = `${wisata.k1}.${wisata.k2
          .toString()
          .padStart(2, "0")}.${wisata.k3.toString().padStart(2, "0")}`;
        return kode_kec === selectedKec;
      } else {
        return true;
      }
    });

    setPageCount(Math.ceil(filtered.length / itemsPerPage));
    return filtered;
  }, [selectedKec, selectedDesa, query, list_wisata, itemsPerPage]);

  useEffect(() => {
    setItemOffset(0);
  }, [selectedKec, selectedDesa, query, filteredWisata]);

  useEffect(() => {
    setLoading(true);
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredWisata.slice(itemOffset, endOffset));

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [itemOffset, itemsPerPage, filteredWisata]);

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
                placeholder="Cari Wisata..."
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
              <option key={item.kode_wilayah} value={item.kode_wilayah}>
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
              <option key={item.kode_wilayah} value={item.kode_wilayah}>
                {item.nama_deskel}
              </option>
            ))}
          </select>
        </div>
        <div className="col-2 text-end">
          <button
            type="button"
            className="btn btn-primary bg-white"
            onClick={() => window.open(`${BASE_API_URL}export/wisata`)}
          >
            Export Report
          </button>
        </div>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : filteredWisata.length === 0 ? (
        <div className="d-flex justify-content-center">
          <p>Tidak ada data ditemukan</p>
        </div>
      ) : (
        <div>
          <div className="row">
            {currentItems.map((item, key) => {
              return (
                <div key={key} className="col-md-4">
                  <div className="card">
                    <img
                      src={`${CDN_URL}uploads/profil/${item.kode_wilayah}/berita/${item.foto}`}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.judul}</h5>
                      <p className="card-text">{item.subjudul}</p>
                      <a
                        href={`https://${item.slug_desa}.digitaldesa.id/wisata/${item.slug}`}
                        rel="noreferrer"
                        target={"_blank"}
                        className="stretched-link"
                      >
                        {" "}
                      </a>
                    </div>
                  </div>
                </div>
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
            forcePage={itemOffset / itemsPerPage}
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </Fragment>
  );
}
