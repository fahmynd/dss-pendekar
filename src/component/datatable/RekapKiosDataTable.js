import React, { Fragment } from "react";
import DataTable from "react-data-table-component";

const KiosTable = () => {
  const customStyles = {
    headCells: {
      style: {
        fontSize: "15px",
        fontWeight: "bold",
        backgroundColor: "#F1ECFF",
        borderRight: "1px solid #EDEDED",
        borderTop: "1px solid #EDEDED",
      },
    },
    cells: {
      style: {
        fontSize: "15px",
        borderRight: "1px solid #EDEDED",
      },
    },
  };

  const data = [
    {
      id: 1,
      kecamatan: "Kecamatan A",
      desa: "Desa A",
      pengguna: "1.000",
      transaksi: "Rp100.000.000,-",
    },
  ];

  return (
    <Fragment>
      <div className="row g-1 mb-4">
        <div className="col-3">
          <select
            defaultValue={"DEFAULT"}
            className="form-select"
            aria-label="Default select example"
          >
            <option value={"DEFAULT"}>Jenis Transaksi</option>
          </select>
        </div>
        <div className="col-3">
          <select
            defaultValue={"DEFAULT"}
            className="form-select"
            aria-label="Default select example"
          >
            <option value={"DEFAULT"}>Semua Kecamatan</option>
          </select>
        </div>
        <div className="col-3">
          <select
            defaultValue={"DEFAULT"}
            className="form-select"
            aria-label="Default select example"
          >
            <option value={"DEFAULT"}>Semua Desa</option>
          </select>
        </div>
        <div className="col-3">
          <div className="search-produk">
            <form
              className="search-form-produk d-flex align-items-center"
              method="POST"
              action="/"
            >
              <input
                value=""
                type="text"
                name="query"
                placeholder="Cari Desa/Kelurahan..."
                title="Enter search keyword"
              />
              <button type="submit" title="Search" disabled>
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <DataTable
        columns={[
          {
            name: "No",
            selector: (row, index) => index + 1,
            width: "70px",
            style: {
              borderLeft: "1px solid #EDEDED",
            },
          },
          {
            name: "Kecamatan",
            sortable: true,
            selector: (row) => row.kecamatan,
          },
          {
            name: "Desa",
            sortable: true,
            selector: (row) => row.desa,
          },
          {
            name: "Jumlah Pengguna",
            sortable: true,
            selector: (row) => row.pengguna,
          },
          {
            name: "Total Transaksi",
            sortable: true,
            selector: (row) => row.transaksi,
          },
        ]}
        data={data}
        customStyles={customStyles}
        pagination
      />
    </Fragment>
  );
};

export default KiosTable;
